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
	var databits = this.ec.datawords * 8;
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
 * @return - binary array containing error correction segment for given data
 */ 
function QR__generateECC(data) {
	if (data.length % 8 != 0) {
		throw new Error("Bad message length");
	}
	
	for (var i = 0; i < data.length / 8; i++) {
		
	}
	
	return [];
}

function QR__generateBitstream(data) {
	var message = this.generateMessage(data);
	
	console.log("message: " + QR__ba2b_s(message));
	
	var ecc = this.generateECC(message);
	
	console.log("ecc: " + QR__ba2b_s(ecc));
	
	return [];
}
