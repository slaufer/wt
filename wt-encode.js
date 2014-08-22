/*
 *  ENCODING FUNCTIONS
 */

/* Encodes a string in alphanumeric mode.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - string to encode
 * @return - binary array containing encoded alphanumeric segment with headers
 */
 
function QR__encAlNum(data) {
	/* start with mode identifier */
	var output = QR__i2ba(QR__Mode.alNum, 4);
	
	/* append character count indicator */
	output = output.concat(
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
		default:
			return false;
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
 * arrays
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
	var message = this.generateMessage(data);
	
	console.log("message: ",  QR__ba2b_s(message));
	
	for (var i = 0; i < QR__Ver[this.ver].ec[this.ec].groups.length; i++) {
		for (var j = 0; j < QR__Ver[this.ver].ec[this.ec].groups[i].blocks; j++) {
			console.log("x");
		}
	}
	
	return [];
}
