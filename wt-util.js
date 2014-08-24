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

/* converts a binary array into a binary string, with a space every 8 bits */
function QR__ba2b_s(arr) {
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		str = str + (arr[i] ? '1' : '0');
		if (i % 8 == 7) {
			str = str + ' ';
		}
	}	
	return str;
}

/* converts a binary string to an array */
/* mostly exists to make certain constant definitions more legible */
/* ignores any character that isn't 1 or 0 */
function QR__b2ba(str) {
	var output = [];
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '1') {
			output.push(true);
		} else if (str.charAt(i) == '0') {
			output.push(false);
		}
	}
	return output;
}

/*converts an integer to a binary array of a given size */
function QR__i2ba(val, size) {
	var output = [];
	
	var mask = 1;
	for (var i = size-1; i >= 0; i--) {
		output[i] = val & mask ? true : false;
		mask = mask << 1;
	}
	
	return output;
}

/* QR_ba2i
 * converts a binary array to an integer. may or may not work on negative
 * numbers. bear in mind that most javascript implementations limit integer
 * size.
 * @arg arr - array to convert
 * @return - integer value of array 
 */
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
