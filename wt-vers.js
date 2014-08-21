/*
 * QR Version Constant Table
 */

var QR__Ver = [
	false,
	{
		ver: 1,
		dim: 21,
		cwcount: 26,
		align: [],
		ec: {
			H: {
				ecwords: 17,
				groups: [
					{
						blocks: 1,
						codewords: 26,
						datawords: 9,
						ecwords: 17,
						eccap: 8
					}
				]
			},
			Q: {
				ecwords: 13,
				groups: [
					{
						blocks: 1,
						codewords: 26,
						datawords: 13,
						ecwords: 13,
						eccap: 6
					}
				]
			},
			M: {
				ecwords: 10,
				groups: [
					{
						blocks: 1,
						codewords: 26,
						datawords: 16,
						ecwords: 10,
						eccap: 4
					}
				]
			},
			L: {
				ecwords: 7,
				groups: [
					{
						blocks: 1,
						codewords: 26,
						datawords: 19,
						ecwords: 7,
						eccap: 2
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
		ver: 2,
		dim: 25,
		cwcount: 44,
		align: [6,18],
		ec: {
			H: {
				ecwords: 28,
				groups: [
					{
						blocks: 1,
						codewords: 44,
						datawords: 16,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			Q: {
				ecwords: 22,
				groups: [
					{
						blocks: 1,
						codewords: 44,
						datawords: 22,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			M: {
				ecwords: 16,
				groups: [
					{
						blocks: 1,
						codewords: 44,
						datawords: 28,
						ecwords: 16,
						eccap: 8
					}
				]
			},
			L: {
				ecwords: 10,
				groups: [
					{
						blocks: 1,
						codewords: 44,
						datawords: 34,
						ecwords: 10,
						eccap: 4
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
		ver: 3,
		dim: 29,
		cwcount: 70,
		align: [6,22],
		ec: {
			H: {
				ecwords: 44,
				groups: [
					{
						blocks: 2,
						codewords: 35,
						datawords: 13,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			Q: {
				ecwords: 36,
				groups: [
					{
						blocks: 2,
						codewords: 35,
						datawords: 17,
						ecwords: 18,
						eccap: 9
					}
				]
			},
			M: {
				ecwords: 26,
				groups: [
					{
						blocks: 1,
						codewords: 70,
						datawords: 44,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			L: {
				ecwords: 15,
				groups: [
					{
						blocks: 1,
						codewords: 70,
						datawords: 55,
						ecwords: 15,
						eccap: 7
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
		ver: 4,
		dim: 33,
		cwcount: 100,
		align: [6,26],
		ec: {
			H: {
				ecwords: 64,
				groups: [
					{
						blocks: 4,
						codewords: 25,
						datawords: 9,
						ecwords: 16,
						eccap: 8
					}
				]
			},
			Q: {
				ecwords: 52,
				groups: [
					{
						blocks: 2,
						codewords: 50,
						datawords: 24,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			M: {
				ecwords: 36,
				groups: [
					{
						blocks: 2,
						codewords: 50,
						datawords: 32,
						ecwords: 18,
						eccap: 9
					}
				]
			},
			L: {
				ecwords: 20,
				groups: [
					{
						blocks: 1,
						codewords: 100,
						datawords: 80,
						ecwords: 20,
						eccap: 10
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
		ver: 5,
		dim: 37,
		cwcount: 134,
		align: [6,30],
		ec: {
			H: {
				ecwords: 88,
				groups: [
					{
						blocks: 2,
						codewords: 33,
						datawords: 11,
						ecwords: 22,
						eccap: 11
					},
					{
						blocks: 2,
						codewords: 34,
						datawords: 12,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			Q: {
				ecwords: 72,
				groups: [
					{
						blocks: 2,
						codewords: 33,
						datawords: 15,
						ecwords: 18,
						eccap: 9
					},
					{
						blocks: 2,
						codewords: 34,
						datawords: 16,
						ecwords: 18,
						eccap: 9
					}
				]
			},
			M: {
				ecwords: 48,
				groups: [
					{
						blocks: 2,
						codewords: 67,
						datawords: 43,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			L: {
				ecwords: 26,
				groups: [
					{
						blocks: 1,
						codewords: 134,
						datawords: 108,
						ecwords: 26,
						eccap: 13
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
		ver: 6,
		dim: 41,
		cwcount: 172,
		align: [6,34],
		ec: {
			H: {
				ecwords: 112,
				groups: [
					{
						blocks: 4,
						codewords: 43,
						datawords: 15,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			Q: {
				ecwords: 96,
				groups: [
					{
						blocks: 4,
						codewords: 43,
						datawords: 19,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			M: {
				ecwords: 64,
				groups: [
					{
						blocks: 4,
						codewords: 43,
						datawords: 27,
						ecwords: 16,
						eccap: 8
					}
				]
			},
			L: {
				ecwords: 36,
				groups: [
					{
						blocks: 2,
						codewords: 86,
						datawords: 68,
						ecwords: 18,
						eccap: 9
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
		ver: 7,
		dim: 45,
		cwcount: 196,
		align: [6,22,38],
		ec: {
			H: {
				ecwords: 130,
				groups: [
					{
						blocks: 4,
						codewords: 39,
						datawords: 13,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 1,
						codewords: 40,
						datawords: 14,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			Q: {
				ecwords: 108,
				groups: [
					{
						blocks: 2,
						codewords: 32,
						datawords: 14,
						ecwords: 18,
						eccap: 9
					},
					{
						blocks: 4,
						codewords: 33,
						datawords: 15,
						ecwords: 18,
						eccap: 9
					}
				]
			},
			M: {
				ecwords: 72,
				groups: [
					{
						blocks: 4,
						codewords: 49,
						datawords: 31,
						ecwords: 18,
						eccap: 9
					}
				]
			},
			L: {
				ecwords: 40,
				groups: [
					{
						blocks: 2,
						codewords: 98,
						datawords: 78,
						ecwords: 20,
						eccap: 10
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
		ver: 8,
		dim: 49,
		cwcount: 242,
		align: [6,24,42],
		ec: {
			H: {
				ecwords: 156,
				groups: [
					{
						blocks: 4,
						codewords: 40,
						datawords: 14,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 2,
						codewords: 41,
						datawords: 15,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			Q: {
				ecwords: 132,
				groups: [
					{
						blocks: 4,
						codewords: 40,
						datawords: 18,
						ecwords: 22,
						eccap: 11
					},
					{
						blocks: 2,
						codewords: 41,
						datawords: 19,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			M: {
				ecwords: 88,
				groups: [
					{
						blocks: 2,
						codewords: 60,
						datawords: 38,
						ecwords: 22,
						eccap: 11
					},
					{
						blocks: 2,
						codewords: 61,
						datawords: 39,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			L: {
				ecwords: 48,
				groups: [
					{
						blocks: 2,
						codewords: 121,
						datawords: 97,
						ecwords: 24,
						eccap: 12
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
		ver: 9,
		dim: 53,
		cwcount: 292,
		align: [6,26,46],
		ec: {
			H: {
				ecwords: 192,
				groups: [
					{
						blocks: 4,
						codewords: 36,
						datawords: 12,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 4,
						codewords: 37,
						datawords: 13,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			Q: {
				ecwords: 160,
				groups: [
					{
						blocks: 4,
						codewords: 36,
						datawords: 16,
						ecwords: 20,
						eccap: 10
					},
					{
						blocks: 4,
						codewords: 37,
						datawords: 17,
						ecwords: 20,
						eccap: 10
					}
				]
			},
			M: {
				ecwords: 110,
				groups: [
					{
						blocks: 3,
						codewords: 58,
						datawords: 36,
						ecwords: 22,
						eccap: 11
					},
					{
						blocks: 2,
						codewords: 59,
						datawords: 37,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			L: {
				ecwords: 60,
				groups: [
					{
						blocks: 2,
						codewords: 146,
						datawords: 116,
						ecwords: 30,
						eccap: 15
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
		ver: 10,
		dim: 57,
		cwcount: 346,
		align: [6,28,50],
		ec: {
			H: {
				ecwords: 224,
				groups: [
					{
						blocks: 6,
						codewords: 43,
						datawords: 15,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 2,
						codewords: 44,
						datawords: 16,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			Q: {
				ecwords: 192,
				groups: [
					{
						blocks: 6,
						codewords: 43,
						datawords: 19,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 2,
						codewords: 44,
						datawords: 20,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			M: {
				ecwords: 130,
				groups: [
					{
						blocks: 4,
						codewords: 69,
						datawords: 43,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 1,
						codewords: 70,
						datawords: 44,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			L: {
				ecwords: 72,
				groups: [
					{
						blocks: 2,
						codewords: 86,
						datawords: 68,
						ecwords: 18,
						eccap: 9
					},
					{
						blocks: 2,
						codewords: 87,
						datawords: 69,
						ecwords: 18,
						eccap: 9
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
		ver: 11,
		dim: 61,
		cwcount: 404,
		align: [6,30,54],
		ec: {
			H: {
				ecwords: 264,
				groups: [
					{
						blocks: 3,
						codewords: 36,
						datawords: 12,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 8,
						codewords: 37,
						datawords: 13,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			Q: {
				ecwords: 224,
				groups: [
					{
						blocks: 4,
						codewords: 50,
						datawords: 22,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 4,
						codewords: 51,
						datawords: 23,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			M: {
				ecwords: 150,
				groups: [
					{
						blocks: 1,
						codewords: 80,
						datawords: 50,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 4,
						codewords: 81,
						datawords: 51,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			L: {
				ecwords: 80,
				groups: [
					{
						blocks: 4,
						codewords: 101,
						datawords: 81,
						ecwords: 20,
						eccap: 10
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
		ver: 12,
		dim: 65,
		cwcount: 466,
		align: [6,32,58],
		ec: {
			H: {
				ecwords: 308,
				groups: [
					{
						blocks: 7,
						codewords: 42,
						datawords: 14,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 4,
						codewords: 43,
						datawords: 15,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			Q: {
				ecwords: 260,
				groups: [
					{
						blocks: 4,
						codewords: 46,
						datawords: 20,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 6,
						codewords: 47,
						datawords: 21,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			M: {
				ecwords: 176,
				groups: [
					{
						blocks: 6,
						codewords: 58,
						datawords: 36,
						ecwords: 22,
						eccap: 11
					},
					{
						blocks: 2,
						codewords: 59,
						datawords: 37,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			L: {
				ecwords: 96,
				groups: [
					{
						blocks: 2,
						codewords: 116,
						datawords: 92,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 2,
						codewords: 117,
						datawords: 93,
						ecwords: 24,
						eccap: 12
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
		ver: 13,
		dim: 69,
		cwcount: 532,
		align: [6,34,62],
		ec: {
			H: {
				ecwords: 352,
				groups: [
					{
						blocks: 12,
						codewords: 33,
						datawords: 11,
						ecwords: 22,
						eccap: 11
					},
					{
						blocks: 4,
						codewords: 34,
						datawords: 12,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			Q: {
				ecwords: 288,
				groups: [
					{
						blocks: 8,
						codewords: 44,
						datawords: 20,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 4,
						codewords: 45,
						datawords: 21,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			M: {
				ecwords: 198,
				groups: [
					{
						blocks: 8,
						codewords: 59,
						datawords: 37,
						ecwords: 22,
						eccap: 11
					},
					{
						blocks: 1,
						codewords: 60,
						datawords: 38,
						ecwords: 22,
						eccap: 11
					}
				]
			},
			L: {
				ecwords: 104,
				groups: [
					{
						blocks: 4,
						codewords: 133,
						datawords: 107,
						ecwords: 26,
						eccap: 13
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
		ver: 14,
		dim: 73,
		cwcount: 581,
		align: [6,26,46,66],
		ec: {
			H: {
				ecwords: 384,
				groups: [
					{
						blocks: 11,
						codewords: 36,
						datawords: 12,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 5,
						codewords: 37,
						datawords: 13,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			Q: {
				ecwords: 320,
				groups: [
					{
						blocks: 11,
						codewords: 36,
						datawords: 16,
						ecwords: 20,
						eccap: 10
					},
					{
						blocks: 5,
						codewords: 37,
						datawords: 17,
						ecwords: 20,
						eccap: 10
					}
				]
			},
			M: {
				ecwords: 216,
				groups: [
					{
						blocks: 4,
						codewords: 64,
						datawords: 40,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 5,
						codewords: 65,
						datawords: 41,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			L: {
				ecwords: 120,
				groups: [
					{
						blocks: 3,
						codewords: 145,
						datawords: 115,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 1,
						codewords: 146,
						datawords: 116,
						ecwords: 30,
						eccap: 15
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
		ver: 15,
		dim: 77,
		cwcount: 655,
		align: [6,26,48,70],
		ec: {
			H: {
				ecwords: 432,
				groups: [
					{
						blocks: 11,
						codewords: 36,
						datawords: 12,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 7,
						codewords: 37,
						datawords: 13,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			Q: {
				ecwords: 360,
				groups: [
					{
						blocks: 5,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 7,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 240,
				groups: [
					{
						blocks: 5,
						codewords: 65,
						datawords: 41,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 5,
						codewords: 66,
						datawords: 42,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			L: {
				ecwords: 132,
				groups: [
					{
						blocks: 5,
						codewords: 109,
						datawords: 87,
						ecwords: 22,
						eccap: 11
					},
					{
						blocks: 1,
						codewords: 110,
						datawords: 88,
						ecwords: 22,
						eccap: 11
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
		ver: 16,
		dim: 81,
		cwcount: 733,
		align: [6,26,50,74],
		ec: {
			H: {
				ecwords: 480,
				groups: [
					{
						blocks: 3,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 13,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 408,
				groups: [
					{
						blocks: 15,
						codewords: 43,
						datawords: 19,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 2,
						codewords: 44,
						datawords: 20,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			M: {
				ecwords: 280,
				groups: [
					{
						blocks: 7,
						codewords: 73,
						datawords: 45,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 3,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 144,
				groups: [
					{
						blocks: 5,
						codewords: 122,
						datawords: 98,
						ecwords: 24,
						eccap: 12
					},
					{
						blocks: 1,
						codewords: 123,
						datawords: 99,
						ecwords: 24,
						eccap: 12
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
		ver: 17,
		dim: 85,
		cwcount: 815,
		align: [6,30,54,78],
		ec: {
			H: {
				ecwords: 532,
				groups: [
					{
						blocks: 2,
						codewords: 42,
						datawords: 14,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 17,
						codewords: 43,
						datawords: 15,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			Q: {
				ecwords: 448,
				groups: [
					{
						blocks: 1,
						codewords: 50,
						datawords: 22,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 15,
						codewords: 51,
						datawords: 23,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			M: {
				ecwords: 308,
				groups: [
					{
						blocks: 10,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 1,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 168,
				groups: [
					{
						blocks: 1,
						codewords: 135,
						datawords: 107,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 5,
						codewords: 136,
						datawords: 108,
						ecwords: 28,
						eccap: 14
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
		ver: 18,
		dim: 89,
		cwcount: 901,
		align: [6,30,56,82],
		ec: {
			H: {
				ecwords: 588,
				groups: [
					{
						blocks: 2,
						codewords: 42,
						datawords: 14,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 19,
						codewords: 43,
						datawords: 15,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			Q: {
				ecwords: 504,
				groups: [
					{
						blocks: 17,
						codewords: 50,
						datawords: 22,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 1,
						codewords: 51,
						datawords: 23,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			M: {
				ecwords: 338,
				groups: [
					{
						blocks: 9,
						codewords: 69,
						datawords: 43,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 4,
						codewords: 70,
						datawords: 44,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			L: {
				ecwords: 180,
				groups: [
					{
						blocks: 5,
						codewords: 150,
						datawords: 120,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 1,
						codewords: 151,
						datawords: 121,
						ecwords: 30,
						eccap: 15
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
		ver: 19,
		dim: 93,
		cwcount: 991,
		align: [6,30,58,86],
		ec: {
			H: {
				ecwords: 650,
				groups: [
					{
						blocks: 9,
						codewords: 39,
						datawords: 13,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 16,
						codewords: 40,
						datawords: 14,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			Q: {
				ecwords: 546,
				groups: [
					{
						blocks: 17,
						codewords: 47,
						datawords: 21,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 4,
						codewords: 48,
						datawords: 22,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			M: {
				ecwords: 364,
				groups: [
					{
						blocks: 3,
						codewords: 70,
						datawords: 44,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 11,
						codewords: 71,
						datawords: 45,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			L: {
				ecwords: 196,
				groups: [
					{
						blocks: 3,
						codewords: 141,
						datawords: 113,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 4,
						codewords: 142,
						datawords: 114,
						ecwords: 28,
						eccap: 14
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
		ver: 20,
		dim: 97,
		cwcount: 1085,
		align: [6,34,62,90],
		ec: {
			H: {
				ecwords: 700,
				groups: [
					{
						blocks: 15,
						codewords: 43,
						datawords: 15,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 10,
						codewords: 44,
						datawords: 16,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			Q: {
				ecwords: 600,
				groups: [
					{
						blocks: 15,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 5,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 416,
				groups: [
					{
						blocks: 3,
						codewords: 67,
						datawords: 41,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 13,
						codewords: 68,
						datawords: 42,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			L: {
				ecwords: 224,
				groups: [
					{
						blocks: 3,
						codewords: 135,
						datawords: 107,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 5,
						codewords: 136,
						datawords: 108,
						ecwords: 28,
						eccap: 14
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
		ver: 21,
		dim: 101,
		cwcount: 1156,
		align: [6,28,50,72,94],
		ec: {
			H: {
				ecwords: 750,
				groups: [
					{
						blocks: 19,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 6,
						codewords: 47,
						datawords: 17,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 644,
				groups: [
					{
						blocks: 17,
						codewords: 50,
						datawords: 22,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 6,
						codewords: 51,
						datawords: 23,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			M: {
				ecwords: 442,
				groups: [
					{
						blocks: 17,
						codewords: 68,
						datawords: 42,
						ecwords: 26,
						eccap: 13
					}
				]
			},
			L: {
				ecwords: 224,
				groups: [
					{
						blocks: 4,
						codewords: 144,
						datawords: 116,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 4,
						codewords: 145,
						datawords: 117,
						ecwords: 28,
						eccap: 14
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
		ver: 22,
		dim: 105,
		cwcount: 1258,
		align: [6,26,50,74,98],
		ec: {
			H: {
				ecwords: 816,
				groups: [
					{
						blocks: 34,
						codewords: 37,
						datawords: 13,
						ecwords: 24,
						eccap: 12
					}
				]
			},
			Q: {
				ecwords: 690,
				groups: [
					{
						blocks: 7,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 16,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 476,
				groups: [
					{
						blocks: 17,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 252,
				groups: [
					{
						blocks: 2,
						codewords: 139,
						datawords: 111,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 7,
						codewords: 140,
						datawords: 112,
						ecwords: 28,
						eccap: 14
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
		ver: 23,
		dim: 109,
		cwcount: 1364,
		align: [6,30,54,78,102],
		ec: {
			H: {
				ecwords: 900,
				groups: [
					{
						blocks: 16,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 14,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 750,
				groups: [
					{
						blocks: 11,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 14,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 504,
				groups: [
					{
						blocks: 4,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 14,
						codewords: 76,
						datawords: 48,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 270,
				groups: [
					{
						blocks: 4,
						codewords: 151,
						datawords: 121,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 5,
						codewords: 152,
						datawords: 122,
						ecwords: 30,
						eccap: 15
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
		ver: 24,
		dim: 113,
		cwcount: 1474,
		align: [6,28,54,80,106],
		ec: {
			H: {
				ecwords: 960,
				groups: [
					{
						blocks: 30,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 2,
						codewords: 47,
						datawords: 17,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 810,
				groups: [
					{
						blocks: 11,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 16,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 560,
				groups: [
					{
						blocks: 6,
						codewords: 73,
						datawords: 45,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 14,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 300,
				groups: [
					{
						blocks: 6,
						codewords: 147,
						datawords: 117,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 4,
						codewords: 148,
						datawords: 118,
						ecwords: 30,
						eccap: 15
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
		ver: 25,
		dim: 117,
		cwcount: 1588,
		align: [6,32,58,84,110],
		ec: {
			H: {
				ecwords: 1050,
				groups: [
					{
						blocks: 22,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 13,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 870,
				groups: [
					{
						blocks: 7,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 22,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 588,
				groups: [
					{
						blocks: 8,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 13,
						codewords: 76,
						datawords: 48,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 312,
				groups: [
					{
						blocks: 8,
						codewords: 132,
						datawords: 106,
						ecwords: 26,
						eccap: 13
					},
					{
						blocks: 4,
						codewords: 133,
						datawords: 107,
						ecwords: 26,
						eccap: 13
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
		ver: 26,
		dim: 121,
		cwcount: 1706,
		align: [6,30,58,86,114],
		ec: {
			H: {
				ecwords: 1110,
				groups: [
					{
						blocks: 33,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 4,
						codewords: 47,
						datawords: 17,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 952,
				groups: [
					{
						blocks: 28,
						codewords: 50,
						datawords: 22,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 6,
						codewords: 51,
						datawords: 23,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			M: {
				ecwords: 644,
				groups: [
					{
						blocks: 19,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 4,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 336,
				groups: [
					{
						blocks: 10,
						codewords: 142,
						datawords: 114,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 2,
						codewords: 143,
						datawords: 115,
						ecwords: 28,
						eccap: 14
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
		ver: 27,
		dim: 125,
		cwcount: 1828,
		align: [6,34,62,90,118],
		ec: {
			H: {
				ecwords: 1200,
				groups: [
					{
						blocks: 12,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 28,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1020,
				groups: [
					{
						blocks: 8,
						codewords: 53,
						datawords: 23,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 26,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 700,
				groups: [
					{
						blocks: 22,
						codewords: 73,
						datawords: 45,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 3,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 360,
				groups: [
					{
						blocks: 8,
						codewords: 152,
						datawords: 122,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 4,
						codewords: 153,
						datawords: 123,
						ecwords: 30,
						eccap: 15
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
		ver: 28,
		dim: 129,
		cwcount: 1921,
		align: [6,26,50,74,98,122],
		ec: {
			H: {
				ecwords: 1260,
				groups: [
					{
						blocks: 11,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 31,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1050,
				groups: [
					{
						blocks: 4,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 31,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 728,
				groups: [
					{
						blocks: 3,
						codewords: 73,
						datawords: 45,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 23,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 390,
				groups: [
					{
						blocks: 3,
						codewords: 147,
						datawords: 117,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 10,
						codewords: 148,
						datawords: 118,
						ecwords: 30,
						eccap: 15
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
		ver: 29,
		dim: 133,
		cwcount: 2051,
		align: [6,30,54,78,102,126],
		ec: {
			H: {
				ecwords: 1350,
				groups: [
					{
						blocks: 19,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 26,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1140,
				groups: [
					{
						blocks: 1,
						codewords: 53,
						datawords: 23,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 37,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 784,
				groups: [
					{
						blocks: 21,
						codewords: 73,
						datawords: 45,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 7,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 420,
				groups: [
					{
						blocks: 7,
						codewords: 146,
						datawords: 116,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 7,
						codewords: 147,
						datawords: 117,
						ecwords: 30,
						eccap: 15
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
		ver: 30,
		dim: 137,
		cwcount: 2185,
		align: [6,26,52,78,104,130],
		ec: {
			H: {
				ecwords: 1440,
				groups: [
					{
						blocks: 23,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 25,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1200,
				groups: [
					{
						blocks: 15,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 25,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 812,
				groups: [
					{
						blocks: 19,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 10,
						codewords: 76,
						datawords: 48,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 450,
				groups: [
					{
						blocks: 5,
						codewords: 145,
						datawords: 115,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 10,
						codewords: 146,
						datawords: 116,
						ecwords: 30,
						eccap: 15
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
		ver: 31,
		dim: 141,
		cwcount: 2323,
		align: [6,30,56,82,108,134],
		ec: {
			H: {
				ecwords: 1530,
				groups: [
					{
						blocks: 23,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 28,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1290,
				groups: [
					{
						blocks: 42,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 1,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 868,
				groups: [
					{
						blocks: 2,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 29,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 480,
				groups: [
					{
						blocks: 13,
						codewords: 145,
						datawords: 115,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 3,
						codewords: 146,
						datawords: 116,
						ecwords: 30,
						eccap: 15
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
		ver: 32,
		dim: 145,
		cwcount: 2465,
		align: [6,34,60,86,112,138],
		ec: {
			H: {
				ecwords: 1620,
				groups: [
					{
						blocks: 19,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 35,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1350,
				groups: [
					{
						blocks: 10,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 35,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 924,
				groups: [
					{
						blocks: 10,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 23,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 510,
				groups: [
					{
						blocks: 17,
						codewords: 145,
						datawords: 115,
						ecwords: 30,
						eccap: 15
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
		ver: 33,
		dim: 149,
		cwcount: 2611,
		align: [6,30,58,86,114,142],
		ec: {
			H: {
				ecwords: 1710,
				groups: [
					{
						blocks: 11,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 46,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1440,
				groups: [
					{
						blocks: 29,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 19,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 980,
				groups: [
					{
						blocks: 14,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 21,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 540,
				groups: [
					{
						blocks: 17,
						codewords: 145,
						datawords: 115,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 1,
						codewords: 146,
						datawords: 116,
						ecwords: 30,
						eccap: 15
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
		ver: 34,
		dim: 153,
		cwcount: 2761,
		align: [6,34,62,90,118,146],
		ec: {
			H: {
				ecwords: 1800,
				groups: [
					{
						blocks: 59,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 1,
						codewords: 47,
						datawords: 17,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1530,
				groups: [
					{
						blocks: 44,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 7,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 1036,
				groups: [
					{
						blocks: 14,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 23,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 570,
				groups: [
					{
						blocks: 13,
						codewords: 145,
						datawords: 115,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 6,
						codewords: 146,
						datawords: 116,
						ecwords: 30,
						eccap: 15
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
		ver: 35,
		dim: 157,
		cwcount: 2876,
		align: [6,30,54,78,102,126,150],
		ec: {
			H: {
				ecwords: 1890,
				groups: [
					{
						blocks: 22,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 41,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1590,
				groups: [
					{
						blocks: 39,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 14,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 1064,
				groups: [
					{
						blocks: 12,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 26,
						codewords: 76,
						datawords: 48,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 570,
				groups: [
					{
						blocks: 12,
						codewords: 151,
						datawords: 121,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 7,
						codewords: 152,
						datawords: 122,
						ecwords: 30,
						eccap: 15
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
		ver: 36,
		dim: 161,
		cwcount: 3034,
		align: [6,24,50,76,102,128,154],
		ec: {
			H: {
				ecwords: 1980,
				groups: [
					{
						blocks: 2,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 64,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1680,
				groups: [
					{
						blocks: 46,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 10,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 1120,
				groups: [
					{
						blocks: 6,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 34,
						codewords: 76,
						datawords: 48,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 600,
				groups: [
					{
						blocks: 6,
						codewords: 151,
						datawords: 121,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 14,
						codewords: 152,
						datawords: 122,
						ecwords: 30,
						eccap: 15
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
		ver: 37,
		dim: 165,
		cwcount: 3196,
		align: [6,28,54,80,106,132,158],
		ec: {
			H: {
				ecwords: 2100,
				groups: [
					{
						blocks: 24,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 46,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1770,
				groups: [
					{
						blocks: 49,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 10,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 1204,
				groups: [
					{
						blocks: 29,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 14,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 630,
				groups: [
					{
						blocks: 17,
						codewords: 152,
						datawords: 122,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 4,
						codewords: 153,
						datawords: 123,
						ecwords: 30,
						eccap: 15
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
		ver: 38,
		dim: 169,
		cwcount: 3362,
		align: [6,32,58,84,110,136,162],
		ec: {
			H: {
				ecwords: 2220,
				groups: [
					{
						blocks: 42,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 32,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1860,
				groups: [
					{
						blocks: 48,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 14,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 1260,
				groups: [
					{
						blocks: 13,
						codewords: 74,
						datawords: 46,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 32,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 660,
				groups: [
					{
						blocks: 4,
						codewords: 152,
						datawords: 122,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 18,
						codewords: 153,
						datawords: 123,
						ecwords: 30,
						eccap: 15
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
		ver: 39,
		dim: 173,
		cwcount: 3532,
		align: [6,26,54,82,110,138,166],
		ec: {
			H: {
				ecwords: 2310,
				groups: [
					{
						blocks: 10,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 67,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 1950,
				groups: [
					{
						blocks: 43,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 22,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 1316,
				groups: [
					{
						blocks: 40,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 7,
						codewords: 76,
						datawords: 48,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 720,
				groups: [
					{
						blocks: 20,
						codewords: 147,
						datawords: 117,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 4,
						codewords: 148,
						datawords: 118,
						ecwords: 30,
						eccap: 15
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
		ver: 40,
		dim: 177,
		cwcount: 3706,
		align: [6,30,58,86,114,142,170],
		ec: {
			H: {
				ecwords: 2430,
				groups: [
					{
						blocks: 20,
						codewords: 45,
						datawords: 15,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 61,
						codewords: 46,
						datawords: 16,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			Q: {
				ecwords: 2040,
				groups: [
					{
						blocks: 34,
						codewords: 54,
						datawords: 24,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 34,
						codewords: 55,
						datawords: 25,
						ecwords: 30,
						eccap: 15
					}
				]
			},
			M: {
				ecwords: 1372,
				groups: [
					{
						blocks: 18,
						codewords: 75,
						datawords: 47,
						ecwords: 28,
						eccap: 14
					},
					{
						blocks: 31,
						codewords: 76,
						datawords: 48,
						ecwords: 28,
						eccap: 14
					}
				]
			},
			L: {
				ecwords: 750,
				groups: [
					{
						blocks: 19,
						codewords: 148,
						datawords: 118,
						ecwords: 30,
						eccap: 15
					},
					{
						blocks: 6,
						codewords: 149,
						datawords: 119,
						ecwords: 30,
						eccap: 15
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
