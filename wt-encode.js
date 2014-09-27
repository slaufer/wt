/*
 *  ENCODING FUNCTIONS
 *  Encoding functions are held in an array rather than members of the QRCode
 *  class to avoid the need for enormous switch statements when selecting an
 *  encoding mode.
 *
 *  TODO: clean up exception objects
 */

/* encoding length functions, used for ver=auto */
var QR__EncodeLen = [];
var QR__Encode = [];
 
/* QR__encNum
 * Encodes a string in numeric mode.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg output - array to append to
 * @arg data - numeric string to encode
 * @arg sym - QR code object
 */
QR__Encode[QR__Mode.num] = function(output, data, sym) {
	/* start with mode identifier and char count indicator */
	QR__pi2ba(output, QR__Mode.num, 4);
	QR__pi2ba(output, data.length, QR__Ver[sym.ver].cci.num);
	
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

QR__EncodeLen[QR__Mode.num] = function(d,v) {
	return 4 + QR__Ver[v].cci.num + 10 * Math.floor(d.length / 3)
		+ [ 0, 4, 7 ][d.length % 3];
};
 
/* QR__encAlNum
 * Encodes a string in alphanumeric mode.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg output - array to append to
 * @arg data - alphanumeric string to encode
 * @arg sym - QR code object
 */
QR__Encode[QR__Mode.alNum] = function(output, data, sym) {
	/* start with mode identifier and char count indicator */
	QR__pi2ba(output, QR__Mode.alNum, 4);
	QR__pi2ba(output, data.length, QR__Ver[sym.ver].cci.alNum);
	
	var len = 4 + QR__Ver[sym.ver].cci.alNum;
	
	/* encode and append data */
	for (var i = 0; i < data.length; i += 2) {
		var chunk = data.slice(i, i+2);
		var size = chunk.length * 5 + 1;
		
		var c1 = QR__indexOf(QR__EncAlNumVals, chunk.charAt(0));
		var c2 = QR__indexOf(QR__EncAlNumVals, chunk.charAt(1));
		
		if (c1 == -1 || (chunk.length == 2 && c2 == -1)) {
			throw new Error("Bad data for alphanumeric encoding");
		}
		
		var chunkVal = (chunk.length == 2) ? c1 * 45 + c2 : c1;
		QR__pi2ba(output, chunkVal, size);
	}
}

QR__EncodeLen[QR__Mode.alNum] = function(d,v) {
	return 4 + QR__Ver[v].cci.alNum + 11 * Math.floor(d.length / 2) 
		+ 6 * (d.length % 2);
};

/* QR__encEightBit
 * Encodes a string in 8-bit mode. ENCODES ALL STRINGS AS UTF-8 WHERE APPLICABLE
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg output - array to append to
 * @arg data - 8-bit string to encode
 * @arg sym - QR code object
 */
 
/* TODO: Optimize this function (again) */
QR__Encode[QR__Mode.eightBit] = function(output, data, sym) {
	/* start with mode identifier and char count indicator */
	QR__pi2ba(output, QR__Mode.eightBit, 4);
	QR__pi2ba(output, QR__EncodeLen[QR__Mode.eightBit](data, sym.ver) / 8, QR__Ver[sym.ver].cci.eightBit);
	
	/* encode and append data */
	for (var i = 0; i < data.length; i++) {
		var code = data.charCodeAt(i);
		var bp;
		for (bp = 0; bp < QR__UTF8_Breakpoints.length && code > QR__UTF8_Breakpoints[bp]; bp++);

		if (bp) { /* UTF-8 characters */
			var codelen = codelen = 5 * bp + 6; // length of UTF-8 code as binary
			var bcode = QR__i2ba(code, codelen); // UTF-8 code as binary
			var enc = []; // encoded string
			var j;
			
			/* add byte count initializer for multibyte UTF-8 character */
			for (j = 0; j < bp+1; j++) {
				enc[enc.length] = true;
			}
			enc[enc.length] = false;
			
			/* fill out first byte with data */
			QR__apushr(enc, bcode, 0, 6-bp);
			j = (6 - bp);
			
			/* fill out remaining bytes with data */
			for (var k = 0; k < bp; k++) {
				enc[enc.length] = true;
				enc[enc.length] = false;
				QR__apushr(enc, bcode, j, 6);
				j += 6;
			}
			
		} else { /* Lower 127 (ASCII) characters */
			enc = QR__i2ba(code, 8);
		}
		
		//QR__pi2ba(output, data.charCodeAt(i), 8);
		QR__apush(output, enc);
	}
}

QR__EncodeLen[QR__Mode.eightBit] = function(d,v) {
	var len = 0;
	
	for (var i = 0; i < d.length; i++) {
		var code = d.charCodeAt(i);
		var bp;
		for (bp = 0; bp < QR__UTF8_Breakpoints.length && code > QR__UTF8_Breakpoints[bp]; bp++); 
		len += 8 * bp + 8;
	}
	return len;
	
	//return 4 + QR__Ver[v].cci.eightBit + 8 * d.length;
};

/* QR__encECI
 * Encodes an ECI header.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg output - array to append to
 * @arg data - ECI value to encode (Unsigned integer 0-999999)
 * @arg sym - NOT USED
 * TODO: optimize this function
 */
QR__Encode[QR__Mode.ECI] = function(output, data, sym) {
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

QR__EncodeLen[QR__Mode.ECI] = function(d,v) {
	if (d < 128) {
		return 12
	} else if (d < 16384) {
		return 20
	} else {
		return 28
	}
};

/* QR__encFNC11
 * encodes an FNC in first position header. please see the QR code standard
 * (ISO/IEC 18004:2000(E)) for more information on how FNC1 applications are 
 * encoded.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg output - array to append to
 * @arg data - NOT USED
 * @arg sym - NOT USED
 */
QR__Encode[QR__Mode.FNC11] = function(output, data, sym) {
	/* just push on the FNC1 header. the user is responsible for the rest. */
	QR__apush(output, [ false, true, false, true ]);
}

QR__EncodeLen[QR__Mode.FNC11] = function(d,v) {
	return 4;
}

/* QR__encFNC12
 * encodes an FNC in second position header. please see the QR code standard
 * (ISO/IEC 18004:2000(E)) for more information on how FNC1 applications are 
 * encoded.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg output - array to append to
 * @arg app - FNC1 application identifier
 * @arg sym - QR code object
 */
QR__Encode[QR__Mode.FNC12] = function(output, data, sym) {
	QR__apush(output, [ true, false, false, true ]);
	QR__pi2ba(output, data, 8);
}

QR__EncodeLen[QR__Mode.FNC12] = function(d,v) {
	return 12;
}

/* QR__encSmart
 * Encodes a string in the lowest of 3 possible modes: numeric, alphanumeric,
 * and 8-bit. This is much cheaper than the mixed-mode algorithm.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg output - array to append to
 * @arg data - data to encode
 */
QR__Encode[QR__Mode.smart] = function(output, data, sym) {
	var i = 0;
	var encMode = QR__Mode.num;
	
	/* scan for numeric mode */
	while (i < data.length) {
		if (data.charCodeAt(i) < '48' || data.charCodeAt(i) > '57') {
			encMode = QR__Mode.alNum;
			break;
		}
		i++;
	}
	
	/* scan for alphanumeric mode */
	while (i < data.length) {
		if (QR__indexOf(QR__EncAlNumVals, data.charAt(i)) == -1) {
			encMode = QR__Mode.eightBit;
			break;
		}
		i++;
	}
	
	QR__Encode[encMode](output, data, sym);
}

QR__EncodeLen[QR__Mode.smart] = function(d,v) {
	var i = 0;
	var encMode = QR__Mode.num;
	
	while (i < d.length) {
		if (d.charCodeAt(i) < '48' || d.charCodeAt(i) > '57') {
			encMode = QR__Mode.alNum;
			break;
		}
		i++;
	}
	
	while (i < d.length) {
		if (QR__indexOf(QR__EncAlNumVals, d.charAt(i)) == -1) {
			encMode = QR__Mode.eightBit;
			break;
		}
		i++;
	}

	return QR__EncodeLen[encMode](d,v);
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
		QR__Encode[data[i].mode](encoded, data[i].data, this);
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
		encoded[encoded.length] = false;
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
 * @arg offset - start offset within data
 * @arg len - bit length of data
 * @arg output - output binary array ref to which EC codewords are appended
 * @arg count - number of EC codewords to generate
 * @return - binary array containing error correction segment for given data
 */ 
function QR__generateECC(data, offset, len, output, count) {
	if (len % 8 != 0) {
		throw new Error("Bad message length");
	}
	
	/* pad the message polynomial with <count> terms to bring it up to the
	   necessary degree. */
		var msgPoly = [];
	for (var i = 0; i < count; i++) {
		msgPoly[msgPoly.length] = 0;
	}
	
	/* now add the real terms to the msg polynomial */
	for (var i = offset+len-8; i >= offset; i -= 8) {
		msgPoly[msgPoly.length] = QR__ba2i(data, i, 8);
	}
	
	/* if you alter this, beware: it is deceptively easy to introduce off-by-one
	   errors in this loop. */
	for (var i = msgPoly.length-1; i >= count;) {
		/* now perform the XOR multiplication -- the offset makes this behave
		   as though genPoly and msgPoly have the same degree. */
		//var leadCoeffAlpha = QR__indexOf(QR__GF256, msgPoly[msgPoly.length-1]);
		var leadCoeffAlpha = QR__GF256R[msgPoly[msgPoly.length-1]];
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
	var ecc = [];
	
	var dataOffsets = [ 0 ];
	var ecOffsets = [ 0 ];
	var maxDataBlock = 0;
	var maxECBlock = 0;
	
	/* iterate over the groups */
	for (var i = 0, k = 0; i < QR__Ver[this.ver].ec[this.ec].groups.length; i++) {
		/* figure out how many bits of data and EC codewords in this block  */
		var ecbits = QR__Ver[this.ver].ec[this.ec].groups[i].ecwords * 8;
		var databits = QR__Ver[this.ver].ec[this.ec].groups[i].codewords * 8 - ecbits;
		
		if (QR__Ver[this.ver].ec[this.ec].groups[i].ecwords > maxECBlock) {
			maxECBlock = QR__Ver[this.ver].ec[this.ec].groups[i].ecwords;
		}
		
		if (QR__Ver[this.ver].ec[this.ec].groups[i].codewords 
			- QR__Ver[this.ver].ec[this.ec].groups[i].ecwords > maxDataBlock) {
			maxDataBlock = QR__Ver[this.ver].ec[this.ec].groups[i].codewords
				- QR__Ver[this.ver].ec[this.ec].groups[i].ecwords;
		}
		
		/* iterate over blocks */
		for (var j = 0; j < QR__Ver[this.ver].ec[this.ec].groups[i].blocks; j++) {
			/* calculate block offsets and generate EC data */
			dataOffsets[dataOffsets.length] = databits + dataOffsets[k];
			ecOffsets[ecOffsets.length] = ecbits + ecOffsets[k];
			this.generateECC(message, dataOffsets[k], databits, ecc, 
				QR__Ver[this.ver].ec[this.ec].groups[i].ecwords);
			k++;
		}
	}
	
	/* interleave the data codewords */
	var bitstream = [];
	var blockPos = 0;
	for (var i = 0; i < maxDataBlock; i++) {	
		for (var j = 0; j < dataOffsets.length; j++) {
			if (dataOffsets[j+1] > dataOffsets[j] + blockPos) {
				QR__apushr(bitstream, message, dataOffsets[j] + blockPos, 8);
			}
		}
		
		blockPos += 8;
	}
	
	/* interleave the EC codewords */
	var blockPos = 0;
	for (var i = 0; i < maxECBlock; i++) {
		for (var j = 0; j < ecOffsets.length; j++) {
			if (ecOffsets[j+1] > ecOffsets[j] + blockPos) {
				QR__apushr(bitstream, ecc, ecOffsets[j] + blockPos, 8);
			}
		}
	
		blockPos += 8;
	}
	
	/* add on the remainder bits */
	for (var i = 0; i < QR__Ver[this.ver].rem; i++) {
		bitstream[bitstream.length] = false;
	}
	
	return bitstream;
}
