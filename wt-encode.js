/*
 *  ENCODING FUNCTIONS
 */

/* QR__encAlNum - Encodes a string in alphanumeric mode.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - string to encode
 * @return - binary array containing encoded alphanumeric segment with headers
 * TODO: optimize this function
 */
 
function QR__encAlNum(data) {
	/* start with mode identifier and char count indicator */
	var output = QR__i2ba(QR__Mode.alNum, 4).concat(
		QR__i2ba(data.length, QR__Ver[this.ver].cci.alNum));
	
	/* encode and append data */
	for (var i = 0; i < data.length;) {
		var c1 = QR__EncAlNumVals.indexOf(data.charAt(i));
		i++;
		if (c1 == -1) {
			throw new Error("Bad data for alphanumeric encoding");
		}
		if (i < data.length) {
			var c2 = QR__EncAlNumVals.indexOf(data.charAt(i));
			i++;
			if (c2 == -1) {
				throw new Error("Bad data for alphanumeric encoding");
			}
			
			output = output.concat(QR__i2ba(c1 * 45 + c2, 11));
		} else {
			output = output.concat(QR__i2ba(c1, 6)); 
		}
	}
	return output;
}

function QR__encEightBit(data) {
	/* start with mode identifier and char count indicator */
	var output = QR__i2ba(QR__Mode.eightBit, 4).concat(
		QR__i2ba(data.length, QR__Ver[this.ver].cci.eightBit));
	
	/* encode and append data */
	for (var i = 0; i < data.length; i++) {
		output = output.concat(QR__i2ba(data.charCodeAt(i), 8));
	}
	
	return output;
}

/* QR__generateMessage - generates the message segment of the bitstream
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - array of objects containing data to be encoded, in the form:
 * [{ data: 'BLAH BLAH BLAH', mode: QR__Mode.alNum}, ...]
 * @return - binary array containing encoded data
 */
function QR__generateMessage(data) {
	var encoded = [];
	
	/* first encode all data segments, and append them to the message */
	for (var i = 0; i < data.length; i++) {
		switch (data[i].mode) {
		case QR__Mode.alNum:
			encoded = encoded.concat(this.encAlNum(data[i].data));
			break;
		case QR__Mode.eightBit:
			encoded = encoded.concat(this.encEightBit(data[i].data));
			break;
		default:
			throw new Error("Bad encoding type");
		}
	}
	
	/* make sure we didn't end up with a message that's too long */
	var databits = (QR__Ver[this.ver].codewords
		- QR__Ver[this.ver].ec[this.ec].ecwords) * 8;
	if (encoded.length > databits) {
		throw new Error("Message too long");
	}
	
	/* if there's room:
	   - add the terminator (0000)
	   - pad out the codeword the terminator is in, if it's not full
	   - pad out any additional remaining codewords with pad codewords */
	for (var i=0;(i<4||encoded.length%8!=0) && encoded.length < databits; i++) {
		encoded = encoded.concat(QR__b2ba("0"));
	}
	
	for (var i=0; encoded.length < databits; i=(i+1)%QR__PadCodewords.length) {
		encoded = encoded.concat(QR__PadCodewords[i]);
	}
	
	return encoded;
}

/* QR__generateECC - generates error correction codewords for a given message
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - data to be encoded
 * @arg count - number of EC codewords to generate
 * @return - binary array containing error correction segment for given data
 *
 * TODO: optimize this function so it doesn't create and discard a million new
 * arrays.
 */ 
function QR__generateECC(data, count) {
	if (data.length % 8 != 0) {
		throw new Error("Bad message length");
	}
	
	/* create the message polynomial in integer notation */
	var msgPoly = [];
	for (var i = 0; i < data.length; i += 8) {
		msgPoly.unshift(QR__ba2i(data.slice(i, i+8)));
	}
	
	/* multiply message polynomial by x^n; n is the number of ec codewords. */
	for (var i = 0; i < count; i++) {
		msgPoly.unshift(0);
	}
	
	/* if you alter this, beware: it is deceptively easy to introduce off-by-one
	   errors in this loop. */
	for (var i = msgPoly.length-1; i >= count; i--) {
		/* now perform the XOR multiplication -- the offset makes this behave
		   as though genPoly and msgPoly have the same degree. */
		var leadCoeffAlpha = QR__GF256.indexOf(msgPoly[msgPoly.length-1]);
		var offset = msgPoly.length - QR__GenPoly[count].length;
		for (var j = QR__GenPoly[count].length-1; j > -1; j--) {
			var genPolyCoeff = QR__GenPoly[count][j] + leadCoeffAlpha;
			if (genPolyCoeff > 255) {
				genPolyCoeff %= 255;
			}
			genPolyCoeff = QR__GF256[genPolyCoeff];
			
			msgPoly[j+offset] ^= genPolyCoeff;
		}
		
		/* the lead term of the msg poly should be zero now, discard it */
		msgPoly.pop();
	}
	
	/* now, return the remainder as a binary array */
	var output = [];
	for (var i = msgPoly.length-1; i > -1; i--) {
		output = output.concat(QR__i2ba(msgPoly[i], 8));
	}
	return output;
}

/* QR__generateBitstream - generates the full bitstream for given data
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - array of objects containing data to be encoded, in the form:
 * [{ data: 'BLAH BLAH BLAH', mode: QR__Mode.alNum}, ...]
 * @return - binary array containing bitstream data
 */
function QR__generateBitstream(data) {
	/* generate the message */
	var message = this.generateMessage(data);

	var datablocks = [];
	var ecblocks = [];
	
	/* iterate over the groups */
	var msgPos = 0;
	var maxDataBlock = 0;
	var maxECBlock = 0;
	for (var i = 0; i < QR__Ver[this.ver].ec[this.ec].groups.length; i++) {
		/* figure out how many bits of data and EC codewords in this block  */
		var ecwords = QR__Ver[this.ver].ec[this.ec].groups[i].ecwords;
		var databits = (QR__Ver[this.ver].ec[this.ec].groups[i].codewords - ecwords) * 8;
		
		/* remember the longest data and EC blocks */
		if (databits / 8 > maxDataBlock) {
			maxDataBlock = databits / 8;
		}
		
		if (ecwords > maxECBlock) {
			maxECBlock = ecwords; 
		}
		
		/* iterate over blocks */
		for (var j = 0; j < QR__Ver[this.ver].ec[this.ec].groups[i].blocks; j++) {
			/* copy the blocks into separate arrays, and generate EC blocks */
			datablocks.push(message.slice(msgPos, msgPos + databits));
			msgPos += databits;
			ecblocks.push(this.generateECC(datablocks[datablocks.length-1], ecwords));
		}
	}
	
	/* interleave the data codewords */
	var bitstream = [];
	var blockPos = 0;
	for (var i = 0; i < maxDataBlock; i++) {	
		for (var j = 0; j < datablocks.length; j++) {
			if (blockPos < datablocks[j].length) {
				bitstream = bitstream.concat(datablocks[j].slice(blockPos, blockPos+8));
			}
		}
		
		blockPos += 8;
	}
	
	/* interleave the EC codewords */
	var blockPos = 0;
	for (var i = 0; i < maxECBlock; i++) {
		for (var j = 0; j < ecblocks.length; j++) {
			if (blockPos < ecblocks[j].length) {
				bitstream = bitstream.concat(ecblocks[j].slice(blockPos, blockPos+8));
			}
		}
	
		blockPos += 8;
	}
	
	/* add on the remainder bits */
	for (var i = 0; i < QR__Ver[this.ver].rem; i++) {
		bitstream = bitstream.concat(QR__b2ba("0"));
	}
	
	return bitstream;
}
