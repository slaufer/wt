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

/* converts an integer to a binary array of a given size */
function QR__i2ba(val, size) {
	var output = [];
	
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

/* this will run forever-ish on interpreters with arbitrary-size integers */
function QR__getIntBits() {
	var i = 1;
	var j = 0;
	
	if (1 >> 1 == 0) {
		/* little endian */
		while (i != 0) {
			i <<= 1;
			j++;
		}
	} else if (1 << 1 == 0) {
		/* big endian */
		while (i != 0) {
			i >>= 1;
			j++;
		}
	} else {
		throw new Error("Cannot determine endianness. Are you running this on a PDP?");
	}
	
	return j;
}
