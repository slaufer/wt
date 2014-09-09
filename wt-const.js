/*
 *  ASSORTED CONSTANT TABLES
 */

/* encoding modes -- these match up with the 4-bit mode flags that go into the
   bitstream, so you can use QR__i2ba to convert them and then concat them
   directly into the stream (with the exception of smart/10, that's for internal
   use only). */
var QR__Mode = {
	term: 0,
	num: 1,
	alNum: 2,
	append: 3,
	eightBit: 4,
	FNC11: 5,
	ECI: 7,
	kanji: 8,
	FNC12: 9,
	smart: 10
}

/* EC Mode constants. */
var QR__EC = {
	L: 'L',
	M: 'M',
	Q: 'Q',
	H: 'H'
};

/* Table of alphanumeric encoding values. */
var QR__EncAlNumVals = [
	/* Chars 0-9, Vals 0-9 */
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	/* Chars A-Z, Vals 10-35 */
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
	'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
	/* Other symbols, Vals 36-44 */
	' ', '$', '%', '*', '+', '-', '.', '/', ':' 	
];

QR__EncAlNumKeys = {};

for (var i = 0; i < QR__EncAlNumVals.length; i++) {
	QR__EncAlNumKeys[QR__EncAlNumVals[i]] = i;	
}

/* Generate table of Galois Field 256 (alpha exponent => integer value) */
var QR__GF256 = [ 1 ];
for (var i = 1; i < 256; i++) {
	QR__GF256[i] = QR__GF256[i-1] * 2;
	if (QR__GF256[i] > 255) {
		QR__GF256[i] ^= 285;
	}
}

/* Generate reverse lookup table of GF(256) (integer value => alpha exponent) */
var QR__GF256R = [ null ];
for (var i = QR__GF256.length - 1; i >= 0; i--) {
	QR__GF256R[QR__GF256[i]] = i;
}

/* Generate table of generator polynomials in alpha notation. See etc/gpoly.pl
   for more information on how these are generated. */
var QR__GenPoly = [ [], [0,0] ];

for (var i = 2; i <= 68; i++) {
	var mul = [ i-1, 0 ];
	var output = [];
	
	for (var j = 0; j < mul.length; j++) {
		for (var k = 0; k < QR__GenPoly[i-1].length; k++) {
			var alpha = mul[j] + QR__GenPoly[i-1][k];
			
			if (alpha > 255) {
				alpha %= 255;	
			}
			
			if (output.length < j + k) {
				output[length-1] = alpha;
			} else {
				output[j+k] = QR__GF256R[QR__GF256[output[j+k]] ^ QR__GF256[alpha]];
			}
		}
	}
	
	QR__GenPoly[i] = output;
}

/* Format strings. */
var QR__FormatString = {
	L: [
		QR__b2ba("111011111000100"),
		QR__b2ba("111001011110011"),
		QR__b2ba("111110110101010"),
		QR__b2ba("111100010011101"),
		QR__b2ba("110011000101111"),
		QR__b2ba("110001100011000"),
		QR__b2ba("110110001000001"),
		QR__b2ba("110100101110110")
	],
	M: [
		QR__b2ba("101010000010010"),
		QR__b2ba("101000100100101"),
		QR__b2ba("101111001111100"),
		QR__b2ba("101101101001011"),
		QR__b2ba("100010111111001"),
		QR__b2ba("100000011001110"),
		QR__b2ba("100111110010111"),
		QR__b2ba("100101010100000")
	],
	Q: [
		QR__b2ba("011010101011111"),
		QR__b2ba("011000001101000"),
		QR__b2ba("011111100110001"),
		QR__b2ba("011101000000110"),
		QR__b2ba("010010010110100"),
		QR__b2ba("010000110000011"),
		QR__b2ba("010111011011010"),
		QR__b2ba("010101111101101")
	],
	H: [
		QR__b2ba("001011010001001"),
		QR__b2ba("001001110111110"),
		QR__b2ba("001110011100111"),
		QR__b2ba("001100111010000"),
		QR__b2ba("000011101100010"),
		QR__b2ba("000001001010101"),
		QR__b2ba("000110100001100"),
		QR__b2ba("000100000111011")
	]
}

/* Pad codewords for message stream underrun. */
var QR__PadCodewords = [
	QR__b2ba("11101100"),
	QR__b2ba("00010001")
];
