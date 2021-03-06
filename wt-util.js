/*
 *  UTILITY FUNCTIONS
 */

/* QR__apush
 * concatenates two arrays using push() -- much faster than using concat()
 *
 * @arg dest - destination array
 * @arg src - source array
 */ 
function QR__apush(dest, src) {
	for (var i = 0; i < src.length; i++) {
		dest[dest.length] = src[i];
	}
}

/* QR__apushr
 * concatenates two arrays using push() -- much faster than using concat()
 *
 * @arg dest - destination array
 * @arg src - source array
 * @arg off - start offset
 * @arg len - data length
 */
function QR__apushr(dest, src, off, len) {
	for (var i = off; i < off+len; i++) {
		dest[dest.length] = src[i];
	}
}
 
/* QR__ba2b
 * turns a binary array into a binary string
 *
 * @arg arr - array to convert
 * @return - string of 1s and 0s representing array
 */
function QR__ba2b(arr) {
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		str = str + (arr[i] ? '1' : '0');
	}	
	return str;
}

/* QR__ba2b_s
 * turns a binary array into a binary string, with a space every 8 characters. 
 *
 * @arg arr - array to convert
 * @return - string of 1s and 0s representing array
 */
function QR__ba2b_s(arr) {
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		str += (arr[i] ? '1' : '0');
		if (i % 8 == 7) {
			str += ' ';
		}
	}	
	return str;
}
/* QR__b2ba 
 * Converts a binary string to an array
 *
 * @arg str - string to convert
 * @return - new binary array representing input string
 */
function QR__b2ba(str) {
	var output = [];
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '1') {
			output[output.length] = true;
		} else if (str.charAt(i) == '0') {
			output[output.length] = false;
		}
	}
	return output;
}

/* QR__i2ba
 * converts an integer to a binary array
 *
 * @arg val - integer value to convert
 * @arg size - size of output array
 * @return - binary array of given size representing given value
 */
function QR__i2ba(val, size) {
	var output = [];
	
	var mask = 1;
	for (var i = size-1; i >= 0; i--) {
		output[i] = val & mask ? true : false;
		mask = mask << 1;
	}
	
	return output;
}

/* QR__pi2ba
 * same as QR__i2ba, except resulting array is appended to a given array. in
 * most cases, it is a good idea to use this instead of QR__i2ba if possible --
 * this avoids creating throwaway arrays.
 *
 * @arg val - integer value to convert
 * @arg size - size of output array
 * @arg output - array to append to
 */
function QR__pi2ba(output, val, size) {
	var mask = 1;
	var end = output.length;
	for (var i = output.length + size - 1; i >= end; i--) {
		output[i] = val & mask ? true : false;
		mask = mask << 1;
	}
}

/* QR_ba2i
 * converts a slice of a binary array to an integer. may or may not work on
 * negative numbers. bear in mind that most javascript implementations limit
 * integer size.
 * @arg arr - array to convert
 * @arg off - array start offset
 * @arg len - array length
 * @return - integer value of array 
 */
function QR__ba2i(arr, off, len) {
	var output = 0;
	
	for (var i = off; i < off+len; i++) {
		output = output << 1;
		if (arr[i]) {
			output = output | 1;
		}
	}
	
	return output;
}

/* QR__indexOf
 * Finds the index of the first occurence of an item in an array
 * For browsers that don't support Array.indexOf INTERNET EXPLORER
 * @arg arr - array to search
 * @arg val - value to search for
 */
function QR__indexOf(arr, val) {
	if (typeof arr.indexOf === 'undefined') {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === val) {
				return i;	
			}
		}
		
		return -1;
	}
	
	return arr.indexOf(val);
}

/* QR__randomInt
 * returns a pseudo-random integer in a given range. note that this works
 * because Math.random() can never return 1
 *
 * @arg min - minimum value
 * @arg max - maximum value
 * @return - an integer value between min and max, inclusive
 */
function QR__randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
