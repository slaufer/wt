/*
 *  UTILITY FUNCTIONS
 */

/* converts a binary array into a binary string */
function QR__ba2b(arr) {
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		str = str + (arr[i] ? '1' : '0');
	}	
	return str;
}

/* converts a binary string to an array */
function QR__b2ba(str) {
	var arr = new Array();
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '1') {
			arr.push(true);
		} else if (str.charAt(i) == '0') {
			arr.push(false);
		} else {
			return null 
		}
	}
	return arr;
}

/* converts an integer to a binary array of a given size */
function QR__i2ba(val, size) {
	var output = new Array();
	
	var mask = 1;
	for (var i = size-1; i >= 0; i--) {
		output[i] = val & mask ? true : false;
		mask = mask << 1;
	}
	
	return output;
}

/* converts a binary array to an integer. be aware that integer sizes are not
   consistent across all javascript implementations -- do not expect this to
   function consistently with large (> 32 bit) or negative numbers. */
function QR__ba2i(arr) {
	var output = 0;
	
	for (var i = 0; i < arr.length; i++) {
		output = output << 1;
		if (arr[i]) {
			output = output | 1;
		}
	}
	
	return output;
}
