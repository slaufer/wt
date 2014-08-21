/*
 *  ENCODING FUNCTIONS
 */
 
function QR__encAlNum(data) {
	/* start with mode identifier */
	var output = QR__i2ba(QR__Mode.alNum, 4);
	
	/* append character count indicator */
	output = output.concat(
		QR__i2ba(data.length, QR__Ver[this.ver].cci.alNum));
	
	/* encode and append data stream */
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

/* completes a message, adding the terminator and padding if necessary.
   message length is in bits */
/* TODO: this function needs optimization */
/* TODO: this entire library needs optimization */
function QR__completeMessage(data, msglen) {
	var msgbitlen = msglen * 8; 
	if (data.length > msgbitlen) {
		throw new Error("Message too large");
	}
	
	/* append the terminator, or as much of it as we can fit */
	for (var i = 0; i < 4 && data.length < msgbitlen; i++) {
		data = data.concat(QR__b2ba("0"));
	}
	
	/* pad out the last codeword, if there's any space left */ 
	while (data.length % 8 != 0 && data.length < msgbitlen) {
		data = data.concat(QR__b2ba("0"));
	}
	
	/* fill the remaining space with pad codewords */
	for (var i = 0; data.length < msgbitlen; i = (i + 1) % QR__PadCodewords.length) {
		data = data.concat(QR__PadCodewords[i]);
	}
	
	return data;
}



/* main encoding function */
function QR__encode(data, mode) {
	var message;
	
	switch (mode) {
	case QR__Mode.alNum:
		message = this.encAlNum(data);
		break;
	default:
		return false;
	}
	
	return QR__completeMessage(message, this.ec.datawords);
}
