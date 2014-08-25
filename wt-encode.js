/*
 *  ENCODING FUNCTIONS
 */


/* QR__encNum - Encodes a string in numeric mode.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - numeric string to encode
 * @return - binary array containing encoded numeric segment with headers
 */
function QR__encNum(output, data) {
	/* start with mode identifier and char count indicator */
	QR__pi2ba(output, QR__Mode.num, 4);
	QR__pi2ba(output, data.length, QR__Ver[this.ver].cci.num);
	
	/* make sure the data is okay. */
	for (var i = 0; i < data.length; i++) {
		if (data.charCodeAt(i) < 48 || data.charCodeAt(i) > 57) {
			throw new Error("Bad data for numeric encoding");
		}
	}
	
	/* encode and append data */
	for (var i = 0; i < data.length; i += 3) {
		var chunk = data.slice(i, i+3);
		var size = + chunk.length * 3 + 1;
		QR__pi2ba(output, parseInt(chunk), size);
	}
}
 
/* QR__encAlNum - Encodes a string in alphanumeric mode.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - alphanumeric string to encode
 * @return - binary array containing encoded alphanumeric segment with headers
 */
function QR__encAlNum(output, data) {
	/* start with mode identifier and char count indicator */
	QR__pi2ba(output, QR__Mode.alNum, 4);
	QR__pi2ba(output, data.length, QR__Ver[this.ver].cci.alNum);
	
	/* encode and append data */
	for (var i = 0; i < data.length; i += 2) {
		var chunk = data.slice(i, i+2);
		var size = chunk.length * 5 + 1;
		
		var c1 = QR__EncAlNumVals.indexOf(chunk.charAt(0));
		var c2 = QR__EncAlNumVals.indexOf(chunk.charAt(1));
		
		if (c1 == -1 || (chunk.length == 2 && c2 == -1)) {
			throw new Error("Bad data for alphanumeric encoding");
		}
		
		var chunkVal = (chunk.length == 2) ? c1 * 45 + c2 : c1;
		QR__pi2ba(output, chunkVal, size);
	}
}

/* QR__encNum - Encodes a string in 8-bit mode.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - 8-bit string to encode
 * @return - binary array containing encoded 8-bit segment with headers
 */
function QR__encEightBit(output, data) {
	/* start with mode identifier and char count indicator */
	QR__pi2ba(output, QR__Mode.eightBit, 4);
	QR__pi2ba(output, data.length, QR__Ver[this.ver].cci.eightBit);
	
	/* encode and append data */
	for (var i = 0; i < data.length; i++) {
		QR__pi2ba(output, data.charCodeAt(i), 8);
	}
}

/* QR__encNum - Encodes a string in numeric mode.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - ECI value to encode (Unsigned integer 0-999999)
 * @return - binary array containing encoded ECI segment with headers
 * TODO: optimize this function
 */
function QR__encECI(output, data) {
	/* start with mode identifier */
	QR__pi2ba(output, QR__Mode.ECI, 4);
	
	/* make sure input is good */
	if (data < 0 || data > 999999) {
		throw new Error("ECI Assignment Number out of range");
	}
	
	/* encode and append ECI value */
	if (data < 128) {
		QR__apush(output, [ false ]);
		QR__pi2ba(output, data, 7);
	} else if (data < 16384) {
		QR__apush(output, [ true, false ]);
		QR__pi2ba(output, data, 14);
	} else {
		QR__apush(output, [ true, true, false ]);
		QR__pi2ba(output, data, 21);	
	}
}

/* QR__generateMessage - generates the message segment of the bitstream
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - array of objects containing data to be encoded. see QR__setData
 * for more details.
 * @return - binary array containing encoded data
 */
function QR__generateMessage(data) {
	var encoded = [];
	
	/* first encode all data segments, and append them to the message */
	for (var i = 0; i < data.length; i++) {
		switch (data[i].mode) {
		case QR__Mode.alNum:
			this.encAlNum(encoded, data[i].data);
			break;
		case QR__Mode.eightBit:
			this.encEightBit(encoded, data[i].data);
			break;
		case QR__Mode.num:
			this.encNum(encoded, data[i].data);
			break;
		case QR__Mode.ECI:
			this.encECI(encoded, data[i].data);
			break;
		case QR__Mode.kanji:
			throw new Error("Kanji mode not implemented");
		case QR__Mode.FNC11:
			throw new Error("FNC1 First Position mode not implemented");
		case QR__Mode.FNC12:
			throw new Error("FNC1 Second Position mode not implemented");
		case QR__Mode.append:
			throw new Error("Structured Append mode not implemented");
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
		encoded.push(false);
	}
	
	for (var i=0; encoded.length < databits; i=(i+1)%QR__PadCodewords.length) {
		QR__apush(encoded, QR__PadCodewords[i]);
	}
	
	return encoded;
}

/* QR__generateECC - generates error correction codewords for a given message
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - data to be encoded
 * @arg count - number of EC codewords to generate
 * @return - binary array containing error correction segment for given data
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
	for (var i = msgPoly.length-1; i >= count;) {
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
		
		/* discard all leading zero terms. */
		while (msgPoly[msgPoly.length-1] == 0) {
			msgPoly.pop();
			i--;
		}
	}
	
	/* now, return the remainder as a binary array */
	var output = [];
	for (var i = msgPoly.length-1; i > -1; i--) {
		QR__pi2ba(output, msgPoly[i], 8);
	}
	return output;
}

/* QR__generateBitstream - generates the full bitstream for given data
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - array of objects containing data to be encoded. see QR__setData
 * for more details.
 * @return - binary array containing bitstream data
 *
 * TODO: optimize this function
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
				QR__apush(bitstream, datablocks[j].slice(blockPos, blockPos+8));
			}
		}
		
		blockPos += 8;
	}
	
	/* interleave the EC codewords */
	var blockPos = 0;
	for (var i = 0; i < maxECBlock; i++) {
		for (var j = 0; j < ecblocks.length; j++) {
			if (blockPos < ecblocks[j].length) {
				QR__apush(bitstream, ecblocks[j].slice(blockPos, blockPos+8));
			}
		}
	
		blockPos += 8;
	}
	
	/* add on the remainder bits */
	for (var i = 0; i < QR__Ver[this.ver].rem; i++) {
		bitstream.push(false);
	}
	
	return bitstream;
}
