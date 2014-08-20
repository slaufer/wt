/*
 *  ENCODING FUNCTIONS
 */
 
 /* main encoding function */
 function QR__encode(data, mode) {
	switch (mode) {
	case QR__Mode.alNum:
		return this.encAlNum(data);
		break;
	default:
		return false;
	}
}
 
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
			throw "Bad data for alphanumeric encoding";
		}
		if (i < data.length) {
			var c2 = QR__EncAlNumVals.indexOf(data.charAt(i));
			i++;
			if (c2 == -1) {
				throw "Bad data for alphanumeric encoding";
			}
			
			output = output.concat(QR__i2ba(c1 * 45 + c2, 11));
		} else {
			output = output.concat(QR__i2ba(c1, 6)); 
		}
	}
	
	return output;
}
