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

/* mask functions */

var QR__MaskPattern = [
	function(i,j) { return (i + j) % 2 == 0; },
	function(i,j) { return i % 2 == 0; },
	function(i,j) { return j % 3 == 0; },
	function(i,j) { return (i + j) % 3 == 0; },
	function(i,j) { return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0; },
	function(i,j) { return (i * j) % 2 + (i * j) % 3 == 0; },
	function(i,j) { return ((i * j) % 2 + (i * j) % 3) % 2 == 0; },
	function(i,j) { return ((i + j) % 2 + (i * j) % 3) % 2 == 0; } 
];

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

/* Table of Galois Field 256. */
var QR__GF256 = [
	  1,   2,   4,   8,  16,  32,  64, 128,  29,  58, 116, 232, 205, 135,  19,
	 38,  76, 152,  45,  90, 180, 117, 234, 201, 143,   3,   6,  12,  24,  48,
	 96, 192, 157,  39,  78, 156,  37,  74, 148,  53, 106, 212, 181, 119, 238,
	193, 159,  35,  70, 140,   5,  10,  20,  40,  80, 160,  93, 186, 105, 210,
	185, 111, 222, 161,  95, 190,  97, 194, 153,  47,  94, 188, 101, 202, 137,
	 15,  30,  60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225,
	223, 163,  91, 182, 113, 226, 217, 175,  67, 134,  17,  34,  68, 136,  13,
	 26,  52, 104, 208, 189, 103, 206, 129,  31,  62, 124, 248, 237, 199, 147,
	 59, 118, 236, 197, 151,  51, 102, 204, 133,  23,  46,  92, 184, 109, 218,
	169,  79, 158,  33,  66, 132,  21,  42,  84, 168,  77, 154,  41,  82, 164,
	 85, 170,  73, 146,  57, 114, 228, 213, 183, 115, 230, 209, 191,  99, 198,
	145,  63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171,  75,
	150,  49,  98, 196, 149,  55, 110, 220, 165,  87, 174,  65, 130,  25,  50,
	100, 200, 141,   7,  14,  28,  56, 112, 224, 221, 167,  83, 166,  81, 162,
	 89, 178, 121, 242, 249, 239, 195, 155,  43,  86, 172,  69, 138,   9,  18,
	 36,  72, 144,  61, 122, 244, 245, 247, 243, 251, 235, 203, 139,  11,  22,
	 44,  88, 176, 125, 250, 233, 207, 131,  27,  54, 108, 216, 173,  71, 142,
	  1
];

/* Table of generator polynomials in alpha notation. See etc/gpoly.pl for more
   information on how these are generated. */
var QR__GenPoly = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	[21,102,238,149,146,229,87,0],
	false,
	false,
	[45,32,94,64,70,118,61,46,67,251,0],
	false,
	false,
	[78,140,206,218,130,104,106,100,86,100,176,152,74,0],
	false,
	[105,99,5,124,140,237,58,58,51,37,202,91,61,183,8,0],
	[120,225,194,182,169,147,191,91,3,76,161,102,109,107,104,120,0],
	[136,163,243,39,150,99,24,147,214,206,123,239,43,78,206,139,43,0],
	[153,96,98,5,179,252,148,152,187,79,170,118,97,184,94,158,234,215,0],
	false,
	[190,188,212,212,164,156,239,83,225,221,180,202,187,26,163,61,50,79,60,17,0],
	false,
	[231,165,105,160,134,219,80,98,172,8,74,200,53,221,109,14,230,93,242,247,171,210,0],
	false,
	[21,227,96,87,232,117,0,111,218,228,226,192,152,169,180,159,126,251,117,211,48,135,121,229,0],
	false,
	[70,218,145,153,227,48,102,13,142,245,21,161,53,165,28,111,201,145,17,118,182,103,2,158,125,173,0],
	false,
	[123,9,37,242,119,212,195,42,87,245,43,21,201,232,27,205,147,195,190,110,180,108,234,224,104,200,223,168,0],
	false,
	[180,192,40,238,216,251,37,156,130,224,193,226,173,42,125,222,96,239,86,110,48,50,182,179,31,216,152,145,173,41,0],
	false,
	[241,220,185,254,52,80,222,28,60,171,69,38,156,80,185,120,27,89,123,242,32,138,138,209,67,4,167,249,190,106,6,10,0],
	false,
	[51,129,62,98,13,167,129,183,61,114,70,56,103,218,239,229,158,58,125,163,140,86,193,113,94,105,19,108,21,26,94,146,77,111,0],
	false,
	[120,30,233,113,251,117,196,121,74,120,177,105,210,87,37,218,63,18,107,238,248,113,152,167,0,115,152,60,234,246,31,172,16,98,183,200,0],
	false,
	[193,60,153,120,18,238,30,177,247,164,41,217,168,242,250,193,222,113,118,49,81,39,111,45,65,20,164,176,218,49,95,243,59,230,228,38,34,159,0],
	false,
	[15,35,53,232,20,72,134,125,163,47,41,88,114,181,35,175,7,170,104,226,174,187,26,53,106,235,56,163,57,247,161,128,205,128,98,252,161,79,116,59,0],
	false,
	[96,50,117,194,162,171,123,201,254,237,199,213,101,39,223,101,34,139,131,15,147,96,106,188,8,230,84,110,191,221,242,58,3,0,231,137,18,25,230,221,103,250,0],
	false,
	[181,73,102,113,130,37,169,204,147,217,194,52,163,68,114,118,126,224,62,143,78,44,238,1,247,14,145,9,123,72,25,191,243,89,188,168,55,69,246,71,121,61,7,190,0],
	false,
	[15,82,19,223,202,43,224,157,25,52,174,119,245,249,8,234,104,73,241,60,96,4,1,36,211,169,216,135,16,58,44,129,113,54,5,89,99,187,115,202,224,253,112,88,94,112,0],
	false,
	[108,34,39,163,50,84,227,94,11,191,238,140,156,247,21,91,184,120,150,95,206,107,205,182,160,135,111,221,18,115,123,46,63,178,61,240,102,39,90,251,24,60,146,211,130,196,25,228,0],
	false,
	[205,133,232,215,170,124,175,235,114,228,69,124,65,113,32,189,42,77,75,242,215,242,160,130,209,126,160,32,13,46,225,203,242,195,111,209,3,35,193,203,99,209,46,118,9,164,161,157,125,232,0],
	false,
	[51,116,254,239,33,101,220,200,242,39,97,86,76,22,121,235,233,100,113,124,65,59,94,190,89,254,134,203,242,37,145,59,14,22,215,151,233,184,19,124,127,86,46,192,89,251,220,50,186,86,50,116,0],
	false,
	[156,31,76,198,31,101,59,153,8,235,201,128,80,215,108,120,43,122,25,123,79,172,175,238,254,35,245,52,192,184,95,26,165,109,218,209,58,102,225,249,184,238,50,45,65,46,21,113,221,210,87,201,26,183,0],
	false,
	[10,61,20,207,202,154,151,247,196,27,61,163,23,96,206,152,124,101,184,239,85,10,28,190,174,177,249,182,142,127,139,12,209,170,208,135,155,254,144,6,229,202,201,36,163,248,91,2,116,112,216,164,157,107,120,106,0],
	false,
	[123,148,125,233,142,159,63,41,29,117,245,206,134,127,145,29,218,129,6,214,240,122,30,24,23,125,165,65,142,253,85,206,249,152,248,192,141,176,237,154,144,210,242,251,55,235,185,200,182,252,107,62,27,66,247,26,116,82,0],
	false,
	[240,33,7,89,16,209,27,70,220,190,102,65,87,194,25,84,181,30,124,11,86,121,209,160,49,238,38,37,82,160,109,101,219,115,57,198,205,2,247,100,6,127,181,28,120,219,101,211,45,219,197,226,197,243,141,9,12,26,140,107,0],
	false,
	[106,110,186,36,215,127,218,182,246,26,100,200,6,115,40,213,123,147,149,229,11,235,117,221,35,181,126,212,17,194,111,70,50,72,89,223,76,70,118,243,78,135,105,7,121,58,228,2,23,37,122,0,94,214,118,248,223,71,98,113,202,65,0],
	false,
	[231,213,156,217,243,178,11,204,31,242,230,140,108,99,63,238,242,125,195,195,140,47,146,184,47,91,216,4,209,218,150,208,156,145,24,29,212,199,93,160,53,127,26,119,149,141,78,200,254,187,204,177,123,92,119,68,49,159,158,7,9,175,51,45,0],
	false,
	[105,45,93,132,25,171,106,67,146,76,82,168,50,106,232,34,77,217,126,240,253,80,87,63,143,121,40,236,111,77,154,44,7,95,197,169,214,72,41,101,95,111,68,178,137,65,173,95,171,197,247,139,17,81,215,13,117,46,51,162,136,136,180,222,118,5,0],
	false,
	[238,163,8,5,3,127,184,101,27,235,238,43,198,175,215,82,32,54,2,118,225,166,241,137,125,41,177,52,231,95,97,199,52,227,89,160,173,253,84,15,84,93,151,203,220,165,202,60,52,133,205,190,101,84,150,43,254,32,160,90,70,77,93,224,33,223,159,247,0]
];

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
