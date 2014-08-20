/*
 *  ASSORTED CONSTANT TABLES
 */
 
var QR__Ver = new Array(
        { ver: null, dim: null, align: null },
        { ver: 1, dim: 21, align: new Array(), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 2, dim: 25, align: new Array(6,18), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 3, dim: 29, align: new Array(6,22), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 4, dim: 33, align: new Array(6,26), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 5, dim: 37, align: new Array(6,30), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 6, dim: 41, align: new Array(6,34), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 7, dim: 45, align: new Array(6,22,38), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 8, dim: 49, align: new Array(6,24,42), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 9, dim: 53, align: new Array(6,26,46), cciNum: 10, cciAlNum: 9, cci8: 8, cciKanji: 8 },
        { ver: 10, dim: 57, align: new Array(6,28,50), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 11, dim: 61, align: new Array(6,30,54), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 12, dim: 65, align: new Array(6,32,58), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 13, dim: 69, align: new Array(6,34,62), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 14, dim: 73, align: new Array(6,26,46,66), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 15, dim: 77, align: new Array(6,26,48,70), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 16, dim: 81, align: new Array(6,26,50,74), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 17, dim: 85, align: new Array(6,30,54,78), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 18, dim: 89, align: new Array(6,30,56,82), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 19, dim: 93, align: new Array(6,30,58,86), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 20, dim: 97, align: new Array(6,34,62,90), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 21, dim: 101, align: new Array(6,28,50,72,94), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 22, dim: 105, align: new Array(6,26,50,74,98), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 23, dim: 109, align: new Array(6,30,54,78,102), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 24, dim: 113, align: new Array(6,28,54,80,106), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 25, dim: 117, align: new Array(6,32,58,84,110), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 26, dim: 121, align: new Array(6,30,58,86,114), cciNum: 12, cciAlNum: 11, cci8: 16, cciKanji: 10 },
        { ver: 27, dim: 125, align: new Array(6,34,62,90,118), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 28, dim: 129, align: new Array(6,26,50,74,98,122), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 29, dim: 133, align: new Array(6,30,54,78,102,126), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 30, dim: 137, align: new Array(6,26,52,78,104,130), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 31, dim: 141, align: new Array(6,30,56,82,108,134), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 32, dim: 145, align: new Array(6,34,60,86,112,138), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 33, dim: 149, align: new Array(6,30,58,86,114,142), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 34, dim: 153, align: new Array(6,34,62,90,118,146), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 35, dim: 157, align: new Array(6,30,54,78,102,126,150), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 36, dim: 161, align: new Array(6,24,50,76,102,128,154), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 37, dim: 165, align: new Array(6,28,54,80,106,132,158), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 38, dim: 169, align: new Array(6,32,58,84,110,136,162), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 39, dim: 173, align: new Array(6,26,54,82,110,138,166), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 },
        { ver: 40, dim: 177, align: new Array(6,30,58,86,114,142,170), cciNum: 14, cciAlNum: 13, cci8: 16, cciKanji: 12 }
);

var QR__Mode = {
	term: 0,
	num: 1,
	alNum: 2,
	append: 3,
	eightBit: 4,
	fnc11: 5,
	eci: 7,
	kanji: 8,
	fnc12: 9
}

var QR__EC = {
	L: 1,
	M: 2,
	Q: 3,
	H: 4
};

var QR__EncAlNumVals = new Array(
	/* Chars 0-9, Vals 0-9 */
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	/* Chars A-Z, Vals 10-35 */
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
	'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
	/* Other symbols, Vals 36-44 */
	' ', '$', '%', '*', '+', '-', '.', '/', ':' 	
);

/* table of GF(256) (Galois Field 2^8) */
/* I'm not going to lie to you and tell you that I completely understand Galois
   Fields. I absolutely do not. If there's a better or more orthogonal way to
   generate EC codewords, please let me know (or better yet, submit a patch) */
var QR__GF256 = new Array(
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
);

var QR__PadCodewords = new Array(
	QR__b2ba("11101100"),
	QR__b2ba("00010001")
);
