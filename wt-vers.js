/*
 * QR Version Constant Table
 */

var QR__Ver = [
	false,
	{
		dim: 21,
		codewords: 26,
		rem: 0,
		align: [],
		ec: {
			H: {
				ecwords: 17,
				groups: [
					{
						blocks: 1,
						codewords: 26,
						ecwords: 17,
					}
				]
			},
			Q: {
				ecwords: 13,
				groups: [
					{
						blocks: 1,
						codewords: 26,
						ecwords: 13,
					}
				]
			},
			M: {
				ecwords: 10,
				groups: [
					{
						blocks: 1,
						codewords: 26,
						ecwords: 10,
					}
				]
			},
			L: {
				ecwords: 7,
				groups: [
					{
						blocks: 1,
						codewords: 26,
						ecwords: 7,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 25,
		codewords: 44,
		rem: 7,
		align: [6,18],
		ec: {
			H: {
				ecwords: 28,
				groups: [
					{
						blocks: 1,
						codewords: 44,
						ecwords: 28,
					}
				]
			},
			Q: {
				ecwords: 22,
				groups: [
					{
						blocks: 1,
						codewords: 44,
						ecwords: 22,
					}
				]
			},
			M: {
				ecwords: 16,
				groups: [
					{
						blocks: 1,
						codewords: 44,
						ecwords: 16,
					}
				]
			},
			L: {
				ecwords: 10,
				groups: [
					{
						blocks: 1,
						codewords: 44,
						ecwords: 10,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 29,
		codewords: 70,
		rem: 7,
		align: [6,22],
		ec: {
			H: {
				ecwords: 44,
				groups: [
					{
						blocks: 2,
						codewords: 35,
						ecwords: 22,
					}
				]
			},
			Q: {
				ecwords: 36,
				groups: [
					{
						blocks: 2,
						codewords: 35,
						ecwords: 18,
					}
				]
			},
			M: {
				ecwords: 26,
				groups: [
					{
						blocks: 1,
						codewords: 70,
						ecwords: 26,
					}
				]
			},
			L: {
				ecwords: 15,
				groups: [
					{
						blocks: 1,
						codewords: 70,
						ecwords: 15,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 33,
		codewords: 100,
		rem: 7,
		align: [6,26],
		ec: {
			H: {
				ecwords: 64,
				groups: [
					{
						blocks: 4,
						codewords: 25,
						ecwords: 16,
					}
				]
			},
			Q: {
				ecwords: 52,
				groups: [
					{
						blocks: 2,
						codewords: 50,
						ecwords: 26,
					}
				]
			},
			M: {
				ecwords: 36,
				groups: [
					{
						blocks: 2,
						codewords: 50,
						ecwords: 18,
					}
				]
			},
			L: {
				ecwords: 20,
				groups: [
					{
						blocks: 1,
						codewords: 100,
						ecwords: 20,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 37,
		codewords: 134,
		rem: 7,
		align: [6,30],
		ec: {
			H: {
				ecwords: 88,
				groups: [
					{
						blocks: 2,
						codewords: 33,
						ecwords: 22,
					},
					{
						blocks: 2,
						codewords: 34,
						ecwords: 22,
					}
				]
			},
			Q: {
				ecwords: 72,
				groups: [
					{
						blocks: 2,
						codewords: 33,
						ecwords: 18,
					},
					{
						blocks: 2,
						codewords: 34,
						ecwords: 18,
					}
				]
			},
			M: {
				ecwords: 48,
				groups: [
					{
						blocks: 2,
						codewords: 67,
						ecwords: 24,
					}
				]
			},
			L: {
				ecwords: 26,
				groups: [
					{
						blocks: 1,
						codewords: 134,
						ecwords: 26,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 41,
		codewords: 172,
		rem: 7,
		align: [6,34],
		ec: {
			H: {
				ecwords: 112,
				groups: [
					{
						blocks: 4,
						codewords: 43,
						ecwords: 28,
					}
				]
			},
			Q: {
				ecwords: 96,
				groups: [
					{
						blocks: 4,
						codewords: 43,
						ecwords: 24,
					}
				]
			},
			M: {
				ecwords: 64,
				groups: [
					{
						blocks: 4,
						codewords: 43,
						ecwords: 16,
					}
				]
			},
			L: {
				ecwords: 36,
				groups: [
					{
						blocks: 2,
						codewords: 86,
						ecwords: 18,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 45,
		codewords: 196,
		rem: 0,
		align: [6,22,38],
		vi: QR__b2ba("000111110010010100"),
		ec: {
			H: {
				ecwords: 130,
				groups: [
					{
						blocks: 4,
						codewords: 39,
						ecwords: 26,
					},
					{
						blocks: 1,
						codewords: 40,
						ecwords: 26,
					}
				]
			},
			Q: {
				ecwords: 108,
				groups: [
					{
						blocks: 2,
						codewords: 32,
						ecwords: 18,
					},
					{
						blocks: 4,
						codewords: 33,
						ecwords: 18,
					}
				]
			},
			M: {
				ecwords: 72,
				groups: [
					{
						blocks: 4,
						codewords: 49,
						ecwords: 18,
					}
				]
			},
			L: {
				ecwords: 40,
				groups: [
					{
						blocks: 2,
						codewords: 98,
						ecwords: 20,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 49,
		codewords: 242,
		rem: 0,
		align: [6,24,42],
		vi: QR__b2ba("001000010110111100"),
		ec: {
			H: {
				ecwords: 156,
				groups: [
					{
						blocks: 4,
						codewords: 40,
						ecwords: 26,
					},
					{
						blocks: 2,
						codewords: 41,
						ecwords: 26,
					}
				]
			},
			Q: {
				ecwords: 132,
				groups: [
					{
						blocks: 4,
						codewords: 40,
						ecwords: 22,
					},
					{
						blocks: 2,
						codewords: 41,
						ecwords: 22,
					}
				]
			},
			M: {
				ecwords: 88,
				groups: [
					{
						blocks: 2,
						codewords: 60,
						ecwords: 22,
					},
					{
						blocks: 2,
						codewords: 61,
						ecwords: 22,
					}
				]
			},
			L: {
				ecwords: 48,
				groups: [
					{
						blocks: 2,
						codewords: 121,
						ecwords: 24,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 53,
		codewords: 292,
		rem: 0,
		align: [6,26,46],
		vi: QR__b2ba("001001101010011001"),
		ec: {
			H: {
				ecwords: 192,
				groups: [
					{
						blocks: 4,
						codewords: 36,
						ecwords: 24,
					},
					{
						blocks: 4,
						codewords: 37,
						ecwords: 24,
					}
				]
			},
			Q: {
				ecwords: 160,
				groups: [
					{
						blocks: 4,
						codewords: 36,
						ecwords: 20,
					},
					{
						blocks: 4,
						codewords: 37,
						ecwords: 20,
					}
				]
			},
			M: {
				ecwords: 110,
				groups: [
					{
						blocks: 3,
						codewords: 58,
						ecwords: 22,
					},
					{
						blocks: 2,
						codewords: 59,
						ecwords: 22,
					}
				]
			},
			L: {
				ecwords: 60,
				groups: [
					{
						blocks: 2,
						codewords: 146,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 10,
			alNum: 9,
			eightBit: 8,
			kanji: 8,
		}
	},
	{
		dim: 57,
		codewords: 346,
		rem: 0,
		align: [6,28,50],
		vi: QR__b2ba("001010010011010011"),
		ec: {
			H: {
				ecwords: 224,
				groups: [
					{
						blocks: 6,
						codewords: 43,
						ecwords: 28,
					},
					{
						blocks: 2,
						codewords: 44,
						ecwords: 28,
					}
				]
			},
			Q: {
				ecwords: 192,
				groups: [
					{
						blocks: 6,
						codewords: 43,
						ecwords: 24,
					},
					{
						blocks: 2,
						codewords: 44,
						ecwords: 24,
					}
				]
			},
			M: {
				ecwords: 130,
				groups: [
					{
						blocks: 4,
						codewords: 69,
						ecwords: 26,
					},
					{
						blocks: 1,
						codewords: 70,
						ecwords: 26,
					}
				]
			},
			L: {
				ecwords: 72,
				groups: [
					{
						blocks: 2,
						codewords: 86,
						ecwords: 18,
					},
					{
						blocks: 2,
						codewords: 87,
						ecwords: 18,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 61,
		codewords: 404,
		rem: 0,
		align: [6,30,54],
		vi: QR__b2ba("001011101111110110"),
		ec: {
			H: {
				ecwords: 264,
				groups: [
					{
						blocks: 3,
						codewords: 36,
						ecwords: 24,
					},
					{
						blocks: 8,
						codewords: 37,
						ecwords: 24,
					}
				]
			},
			Q: {
				ecwords: 224,
				groups: [
					{
						blocks: 4,
						codewords: 50,
						ecwords: 28,
					},
					{
						blocks: 4,
						codewords: 51,
						ecwords: 28,
					}
				]
			},
			M: {
				ecwords: 150,
				groups: [
					{
						blocks: 1,
						codewords: 80,
						ecwords: 30,
					},
					{
						blocks: 4,
						codewords: 81,
						ecwords: 30,
					}
				]
			},
			L: {
				ecwords: 80,
				groups: [
					{
						blocks: 4,
						codewords: 101,
						ecwords: 20,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 65,
		codewords: 466,
		rem: 0,
		align: [6,32,58],
		vi: QR__b2ba("001100011101100010"),
		ec: {
			H: {
				ecwords: 308,
				groups: [
					{
						blocks: 7,
						codewords: 42,
						ecwords: 28,
					},
					{
						blocks: 4,
						codewords: 43,
						ecwords: 28,
					}
				]
			},
			Q: {
				ecwords: 260,
				groups: [
					{
						blocks: 4,
						codewords: 46,
						ecwords: 26,
					},
					{
						blocks: 6,
						codewords: 47,
						ecwords: 26,
					}
				]
			},
			M: {
				ecwords: 176,
				groups: [
					{
						blocks: 6,
						codewords: 58,
						ecwords: 22,
					},
					{
						blocks: 2,
						codewords: 59,
						ecwords: 22,
					}
				]
			},
			L: {
				ecwords: 96,
				groups: [
					{
						blocks: 2,
						codewords: 116,
						ecwords: 24,
					},
					{
						blocks: 2,
						codewords: 117,
						ecwords: 24,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 69,
		codewords: 532,
		rem: 0,
		align: [6,34,62],
		vi: QR__b2ba("001101100001000111"),
		ec: {
			H: {
				ecwords: 352,
				groups: [
					{
						blocks: 12,
						codewords: 33,
						ecwords: 22,
					},
					{
						blocks: 4,
						codewords: 34,
						ecwords: 22,
					}
				]
			},
			Q: {
				ecwords: 288,
				groups: [
					{
						blocks: 8,
						codewords: 44,
						ecwords: 24,
					},
					{
						blocks: 4,
						codewords: 45,
						ecwords: 24,
					}
				]
			},
			M: {
				ecwords: 198,
				groups: [
					{
						blocks: 8,
						codewords: 59,
						ecwords: 22,
					},
					{
						blocks: 1,
						codewords: 60,
						ecwords: 22,
					}
				]
			},
			L: {
				ecwords: 104,
				groups: [
					{
						blocks: 4,
						codewords: 133,
						ecwords: 26,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 73,
		codewords: 581,
		rem: 3,
		align: [6,26,46,66],
		vi: QR__b2ba("001110011000001101"),
		ec: {
			H: {
				ecwords: 384,
				groups: [
					{
						blocks: 11,
						codewords: 36,
						ecwords: 24,
					},
					{
						blocks: 5,
						codewords: 37,
						ecwords: 24,
					}
				]
			},
			Q: {
				ecwords: 320,
				groups: [
					{
						blocks: 11,
						codewords: 36,
						ecwords: 20,
					},
					{
						blocks: 5,
						codewords: 37,
						ecwords: 20,
					}
				]
			},
			M: {
				ecwords: 216,
				groups: [
					{
						blocks: 4,
						codewords: 64,
						ecwords: 24,
					},
					{
						blocks: 5,
						codewords: 65,
						ecwords: 24,
					}
				]
			},
			L: {
				ecwords: 120,
				groups: [
					{
						blocks: 3,
						codewords: 145,
						ecwords: 30,
					},
					{
						blocks: 1,
						codewords: 146,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 77,
		codewords: 655,
		rem: 3,
		align: [6,26,48,70],
		vi: QR__b2ba("001111100100101000"),
		ec: {
			H: {
				ecwords: 432,
				groups: [
					{
						blocks: 11,
						codewords: 36,
						ecwords: 24,
					},
					{
						blocks: 7,
						codewords: 37,
						ecwords: 24,
					}
				]
			},
			Q: {
				ecwords: 360,
				groups: [
					{
						blocks: 5,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 7,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 240,
				groups: [
					{
						blocks: 5,
						codewords: 65,
						ecwords: 24,
					},
					{
						blocks: 5,
						codewords: 66,
						ecwords: 24,
					}
				]
			},
			L: {
				ecwords: 132,
				groups: [
					{
						blocks: 5,
						codewords: 109,
						ecwords: 22,
					},
					{
						blocks: 1,
						codewords: 110,
						ecwords: 22,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 81,
		codewords: 733,
		rem: 3,
		align: [6,26,50,74],
		vi: QR__b2ba("010000101101111000"),
		ec: {
			H: {
				ecwords: 480,
				groups: [
					{
						blocks: 3,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 13,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 408,
				groups: [
					{
						blocks: 15,
						codewords: 43,
						ecwords: 24,
					},
					{
						blocks: 2,
						codewords: 44,
						ecwords: 24,
					}
				]
			},
			M: {
				ecwords: 280,
				groups: [
					{
						blocks: 7,
						codewords: 73,
						ecwords: 28,
					},
					{
						blocks: 3,
						codewords: 74,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 144,
				groups: [
					{
						blocks: 5,
						codewords: 122,
						ecwords: 24,
					},
					{
						blocks: 1,
						codewords: 123,
						ecwords: 24,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 85,
		codewords: 815,
		rem: 3,
		align: [6,30,54,78],
		vi: QR__b2ba("010001010001011101"),
		ec: {
			H: {
				ecwords: 532,
				groups: [
					{
						blocks: 2,
						codewords: 42,
						ecwords: 28,
					},
					{
						blocks: 17,
						codewords: 43,
						ecwords: 28,
					}
				]
			},
			Q: {
				ecwords: 448,
				groups: [
					{
						blocks: 1,
						codewords: 50,
						ecwords: 28,
					},
					{
						blocks: 15,
						codewords: 51,
						ecwords: 28,
					}
				]
			},
			M: {
				ecwords: 308,
				groups: [
					{
						blocks: 10,
						codewords: 74,
						ecwords: 28,
					},
					{
						blocks: 1,
						codewords: 75,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 168,
				groups: [
					{
						blocks: 1,
						codewords: 135,
						ecwords: 28,
					},
					{
						blocks: 5,
						codewords: 136,
						ecwords: 28,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 89,
		codewords: 901,
		rem: 3,
		align: [6,30,56,82],
		vi: QR__b2ba("010010101000010111"),
		ec: {
			H: {
				ecwords: 588,
				groups: [
					{
						blocks: 2,
						codewords: 42,
						ecwords: 28,
					},
					{
						blocks: 19,
						codewords: 43,
						ecwords: 28,
					}
				]
			},
			Q: {
				ecwords: 504,
				groups: [
					{
						blocks: 17,
						codewords: 50,
						ecwords: 28,
					},
					{
						blocks: 1,
						codewords: 51,
						ecwords: 28,
					}
				]
			},
			M: {
				ecwords: 338,
				groups: [
					{
						blocks: 9,
						codewords: 69,
						ecwords: 26,
					},
					{
						blocks: 4,
						codewords: 70,
						ecwords: 26,
					}
				]
			},
			L: {
				ecwords: 180,
				groups: [
					{
						blocks: 5,
						codewords: 150,
						ecwords: 30,
					},
					{
						blocks: 1,
						codewords: 151,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 93,
		codewords: 991,
		rem: 3,
		align: [6,30,58,86],
		vi: QR__b2ba("010011010100110010"),
		ec: {
			H: {
				ecwords: 650,
				groups: [
					{
						blocks: 9,
						codewords: 39,
						ecwords: 26,
					},
					{
						blocks: 16,
						codewords: 40,
						ecwords: 26,
					}
				]
			},
			Q: {
				ecwords: 546,
				groups: [
					{
						blocks: 17,
						codewords: 47,
						ecwords: 26,
					},
					{
						blocks: 4,
						codewords: 48,
						ecwords: 26,
					}
				]
			},
			M: {
				ecwords: 364,
				groups: [
					{
						blocks: 3,
						codewords: 70,
						ecwords: 26,
					},
					{
						blocks: 11,
						codewords: 71,
						ecwords: 26,
					}
				]
			},
			L: {
				ecwords: 196,
				groups: [
					{
						blocks: 3,
						codewords: 141,
						ecwords: 28,
					},
					{
						blocks: 4,
						codewords: 142,
						ecwords: 28,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 97,
		codewords: 1085,
		rem: 085,
		align: [6,34,62,90],
		vi: QR__b2ba("010100100110100110"),
		ec: {
			H: {
				ecwords: 700,
				groups: [
					{
						blocks: 15,
						codewords: 43,
						ecwords: 28,
					},
					{
						blocks: 10,
						codewords: 44,
						ecwords: 28,
					}
				]
			},
			Q: {
				ecwords: 600,
				groups: [
					{
						blocks: 15,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 5,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 416,
				groups: [
					{
						blocks: 3,
						codewords: 67,
						ecwords: 26,
					},
					{
						blocks: 13,
						codewords: 68,
						ecwords: 26,
					}
				]
			},
			L: {
				ecwords: 224,
				groups: [
					{
						blocks: 3,
						codewords: 135,
						ecwords: 28,
					},
					{
						blocks: 5,
						codewords: 136,
						ecwords: 28,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 101,
		codewords: 1156,
		rem: 156,
		align: [6,28,50,72,94],
		vi: QR__b2ba("010101011010000011"),
		ec: {
			H: {
				ecwords: 750,
				groups: [
					{
						blocks: 19,
						codewords: 46,
						ecwords: 30,
					},
					{
						blocks: 6,
						codewords: 47,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 644,
				groups: [
					{
						blocks: 17,
						codewords: 50,
						ecwords: 28,
					},
					{
						blocks: 6,
						codewords: 51,
						ecwords: 28,
					}
				]
			},
			M: {
				ecwords: 442,
				groups: [
					{
						blocks: 17,
						codewords: 68,
						ecwords: 26,
					}
				]
			},
			L: {
				ecwords: 224,
				groups: [
					{
						blocks: 4,
						codewords: 144,
						ecwords: 28,
					},
					{
						blocks: 4,
						codewords: 145,
						ecwords: 28,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 105,
		codewords: 1258,
		rem: 258,
		align: [6,26,50,74,98],
		vi: QR__b2ba("010110100011001001"),
		ec: {
			H: {
				ecwords: 816,
				groups: [
					{
						blocks: 34,
						codewords: 37,
						ecwords: 24,
					}
				]
			},
			Q: {
				ecwords: 690,
				groups: [
					{
						blocks: 7,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 16,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 476,
				groups: [
					{
						blocks: 17,
						codewords: 74,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 252,
				groups: [
					{
						blocks: 2,
						codewords: 139,
						ecwords: 28,
					},
					{
						blocks: 7,
						codewords: 140,
						ecwords: 28,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 109,
		codewords: 1364,
		rem: 364,
		align: [6,30,54,78,102],
		vi: QR__b2ba("010111011111101100"),
		ec: {
			H: {
				ecwords: 900,
				groups: [
					{
						blocks: 16,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 14,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 750,
				groups: [
					{
						blocks: 11,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 14,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 504,
				groups: [
					{
						blocks: 4,
						codewords: 75,
						ecwords: 28,
					},
					{
						blocks: 14,
						codewords: 76,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 270,
				groups: [
					{
						blocks: 4,
						codewords: 151,
						ecwords: 30,
					},
					{
						blocks: 5,
						codewords: 152,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 113,
		codewords: 1474,
		rem: 474,
		align: [6,28,54,80,106],
		vi: QR__b2ba("011000111011000100"),
		ec: {
			H: {
				ecwords: 960,
				groups: [
					{
						blocks: 30,
						codewords: 46,
						ecwords: 30,
					},
					{
						blocks: 2,
						codewords: 47,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 810,
				groups: [
					{
						blocks: 11,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 16,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 560,
				groups: [
					{
						blocks: 6,
						codewords: 73,
						ecwords: 28,
					},
					{
						blocks: 14,
						codewords: 74,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 300,
				groups: [
					{
						blocks: 6,
						codewords: 147,
						ecwords: 30,
					},
					{
						blocks: 4,
						codewords: 148,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 117,
		codewords: 1588,
		rem: 588,
		align: [6,32,58,84,110],
		vi: QR__b2ba("011001000111100001"),
		ec: {
			H: {
				ecwords: 1050,
				groups: [
					{
						blocks: 22,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 13,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 870,
				groups: [
					{
						blocks: 7,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 22,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 588,
				groups: [
					{
						blocks: 8,
						codewords: 75,
						ecwords: 28,
					},
					{
						blocks: 13,
						codewords: 76,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 312,
				groups: [
					{
						blocks: 8,
						codewords: 132,
						ecwords: 26,
					},
					{
						blocks: 4,
						codewords: 133,
						ecwords: 26,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 121,
		codewords: 1706,
		rem: 706,
		align: [6,30,58,86,114],
		vi: QR__b2ba("011010111110101011"),
		ec: {
			H: {
				ecwords: 1110,
				groups: [
					{
						blocks: 33,
						codewords: 46,
						ecwords: 30,
					},
					{
						blocks: 4,
						codewords: 47,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 952,
				groups: [
					{
						blocks: 28,
						codewords: 50,
						ecwords: 28,
					},
					{
						blocks: 6,
						codewords: 51,
						ecwords: 28,
					}
				]
			},
			M: {
				ecwords: 644,
				groups: [
					{
						blocks: 19,
						codewords: 74,
						ecwords: 28,
					},
					{
						blocks: 4,
						codewords: 75,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 336,
				groups: [
					{
						blocks: 10,
						codewords: 142,
						ecwords: 28,
					},
					{
						blocks: 2,
						codewords: 143,
						ecwords: 28,
					}
				]
			}
		},
		cci: {
			num: 12,
			alNum: 11,
			eightBit: 16,
			kanji: 10,
		}
	},
	{
		dim: 125,
		codewords: 1828,
		rem: 828,
		align: [6,34,62,90,118],
		vi: QR__b2ba("011011000010001110"),
		ec: {
			H: {
				ecwords: 1200,
				groups: [
					{
						blocks: 12,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 28,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1020,
				groups: [
					{
						blocks: 8,
						codewords: 53,
						ecwords: 30,
					},
					{
						blocks: 26,
						codewords: 54,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 700,
				groups: [
					{
						blocks: 22,
						codewords: 73,
						ecwords: 28,
					},
					{
						blocks: 3,
						codewords: 74,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 360,
				groups: [
					{
						blocks: 8,
						codewords: 152,
						ecwords: 30,
					},
					{
						blocks: 4,
						codewords: 153,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 129,
		codewords: 1921,
		rem: 1,
		align: [6,26,50,74,98,122],
		vi: QR__b2ba("011100110000011010"),
		ec: {
			H: {
				ecwords: 1260,
				groups: [
					{
						blocks: 11,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 31,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1050,
				groups: [
					{
						blocks: 4,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 31,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 728,
				groups: [
					{
						blocks: 3,
						codewords: 73,
						ecwords: 28,
					},
					{
						blocks: 23,
						codewords: 74,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 390,
				groups: [
					{
						blocks: 3,
						codewords: 147,
						ecwords: 30,
					},
					{
						blocks: 10,
						codewords: 148,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 133,
		codewords: 2051,
		rem: 2,
		align: [6,30,54,78,102,126],
		vi: QR__b2ba("011101001100111111"),
		ec: {
			H: {
				ecwords: 1350,
				groups: [
					{
						blocks: 19,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 26,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1140,
				groups: [
					{
						blocks: 1,
						codewords: 53,
						ecwords: 30,
					},
					{
						blocks: 37,
						codewords: 54,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 784,
				groups: [
					{
						blocks: 21,
						codewords: 73,
						ecwords: 28,
					},
					{
						blocks: 7,
						codewords: 74,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 420,
				groups: [
					{
						blocks: 7,
						codewords: 146,
						ecwords: 30,
					},
					{
						blocks: 7,
						codewords: 147,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 137,
		codewords: 2185,
		rem: 2,
		align: [6,26,52,78,104,130],
		vi: QR__b2ba("011110110101110101"),
		ec: {
			H: {
				ecwords: 1440,
				groups: [
					{
						blocks: 23,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 25,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1200,
				groups: [
					{
						blocks: 15,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 25,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 812,
				groups: [
					{
						blocks: 19,
						codewords: 75,
						ecwords: 28,
					},
					{
						blocks: 10,
						codewords: 76,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 450,
				groups: [
					{
						blocks: 5,
						codewords: 145,
						ecwords: 30,
					},
					{
						blocks: 10,
						codewords: 146,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 141,
		codewords: 2323,
		rem: 2,
		align: [6,30,56,82,108,134],
		vi: QR__b2ba("011111001001010000"),
		ec: {
			H: {
				ecwords: 1530,
				groups: [
					{
						blocks: 23,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 28,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1290,
				groups: [
					{
						blocks: 42,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 1,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 868,
				groups: [
					{
						blocks: 2,
						codewords: 74,
						ecwords: 28,
					},
					{
						blocks: 29,
						codewords: 75,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 480,
				groups: [
					{
						blocks: 13,
						codewords: 145,
						ecwords: 30,
					},
					{
						blocks: 3,
						codewords: 146,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 145,
		codewords: 2465,
		rem: 2,
		align: [6,34,60,86,112,138],
		vi: QR__b2ba("100000100111010101"),
		ec: {
			H: {
				ecwords: 1620,
				groups: [
					{
						blocks: 19,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 35,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1350,
				groups: [
					{
						blocks: 10,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 35,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 924,
				groups: [
					{
						blocks: 10,
						codewords: 74,
						ecwords: 28,
					},
					{
						blocks: 23,
						codewords: 75,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 510,
				groups: [
					{
						blocks: 17,
						codewords: 145,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 149,
		codewords: 2611,
		rem: 2,
		align: [6,30,58,86,114,142],
		vi: QR__b2ba("100001011011110000"),
		ec: {
			H: {
				ecwords: 1710,
				groups: [
					{
						blocks: 11,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 46,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1440,
				groups: [
					{
						blocks: 29,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 19,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 980,
				groups: [
					{
						blocks: 14,
						codewords: 74,
						ecwords: 28,
					},
					{
						blocks: 21,
						codewords: 75,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 540,
				groups: [
					{
						blocks: 17,
						codewords: 145,
						ecwords: 30,
					},
					{
						blocks: 1,
						codewords: 146,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 153,
		codewords: 2761,
		rem: 2,
		align: [6,34,62,90,118,146],
		vi: QR__b2ba("100010100010111010"),
		ec: {
			H: {
				ecwords: 1800,
				groups: [
					{
						blocks: 59,
						codewords: 46,
						ecwords: 30,
					},
					{
						blocks: 1,
						codewords: 47,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1530,
				groups: [
					{
						blocks: 44,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 7,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 1036,
				groups: [
					{
						blocks: 14,
						codewords: 74,
						ecwords: 28,
					},
					{
						blocks: 23,
						codewords: 75,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 570,
				groups: [
					{
						blocks: 13,
						codewords: 145,
						ecwords: 30,
					},
					{
						blocks: 6,
						codewords: 146,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 157,
		codewords: 2876,
		rem: 2,
		align: [6,30,54,78,102,126,150],
		vi: QR__b2ba("100011011110011111"),
		ec: {
			H: {
				ecwords: 1890,
				groups: [
					{
						blocks: 22,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 41,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1590,
				groups: [
					{
						blocks: 39,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 14,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 1064,
				groups: [
					{
						blocks: 12,
						codewords: 75,
						ecwords: 28,
					},
					{
						blocks: 26,
						codewords: 76,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 570,
				groups: [
					{
						blocks: 12,
						codewords: 151,
						ecwords: 30,
					},
					{
						blocks: 7,
						codewords: 152,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 161,
		codewords: 3034,
		rem: 3,
		align: [6,24,50,76,102,128,154],
		vi: QR__b2ba("100100101100001011"),
		ec: {
			H: {
				ecwords: 1980,
				groups: [
					{
						blocks: 2,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 64,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1680,
				groups: [
					{
						blocks: 46,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 10,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 1120,
				groups: [
					{
						blocks: 6,
						codewords: 75,
						ecwords: 28,
					},
					{
						blocks: 34,
						codewords: 76,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 600,
				groups: [
					{
						blocks: 6,
						codewords: 151,
						ecwords: 30,
					},
					{
						blocks: 14,
						codewords: 152,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 165,
		codewords: 3196,
		rem: 3,
		align: [6,28,54,80,106,132,158],
		vi: QR__b2ba("100101010000101110"),
		ec: {
			H: {
				ecwords: 2100,
				groups: [
					{
						blocks: 24,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 46,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1770,
				groups: [
					{
						blocks: 49,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 10,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 1204,
				groups: [
					{
						blocks: 29,
						codewords: 74,
						ecwords: 28,
					},
					{
						blocks: 14,
						codewords: 75,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 630,
				groups: [
					{
						blocks: 17,
						codewords: 152,
						ecwords: 30,
					},
					{
						blocks: 4,
						codewords: 153,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 169,
		codewords: 3362,
		rem: 3,
		align: [6,32,58,84,110,136,162],
		vi: QR__b2ba("100110101001100100"),
		ec: {
			H: {
				ecwords: 2220,
				groups: [
					{
						blocks: 42,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 32,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1860,
				groups: [
					{
						blocks: 48,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 14,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 1260,
				groups: [
					{
						blocks: 13,
						codewords: 74,
						ecwords: 28,
					},
					{
						blocks: 32,
						codewords: 75,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 660,
				groups: [
					{
						blocks: 4,
						codewords: 152,
						ecwords: 30,
					},
					{
						blocks: 18,
						codewords: 153,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 173,
		codewords: 3532,
		rem: 3,
		align: [6,26,54,82,110,138,166],
		vi: QR__b2ba("100111010101000001"),
		ec: {
			H: {
				ecwords: 2310,
				groups: [
					{
						blocks: 10,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 67,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 1950,
				groups: [
					{
						blocks: 43,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 22,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 1316,
				groups: [
					{
						blocks: 40,
						codewords: 75,
						ecwords: 28,
					},
					{
						blocks: 7,
						codewords: 76,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 720,
				groups: [
					{
						blocks: 20,
						codewords: 147,
						ecwords: 30,
					},
					{
						blocks: 4,
						codewords: 148,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	},
	{
		dim: 177,
		codewords: 3706,
		rem: 3,
		align: [6,30,58,86,114,142,170],
		vi: QR__b2ba("101000110001101001"),
		ec: {
			H: {
				ecwords: 2430,
				groups: [
					{
						blocks: 20,
						codewords: 45,
						ecwords: 30,
					},
					{
						blocks: 61,
						codewords: 46,
						ecwords: 30,
					}
				]
			},
			Q: {
				ecwords: 2040,
				groups: [
					{
						blocks: 34,
						codewords: 54,
						ecwords: 30,
					},
					{
						blocks: 34,
						codewords: 55,
						ecwords: 30,
					}
				]
			},
			M: {
				ecwords: 1372,
				groups: [
					{
						blocks: 18,
						codewords: 75,
						ecwords: 28,
					},
					{
						blocks: 31,
						codewords: 76,
						ecwords: 28,
					}
				]
			},
			L: {
				ecwords: 750,
				groups: [
					{
						blocks: 19,
						codewords: 148,
						ecwords: 30,
					},
					{
						blocks: 6,
						codewords: 149,
						ecwords: 30,
					}
				]
			}
		},
		cci: {
			num: 14,
			alNum: 13,
			eightBit: 16,
			kanji: 12,
		}
	}
];
