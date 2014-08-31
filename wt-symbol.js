/*
 *  SYMBOL FUNCTIONS
 */

/* QR__coordOK
 * Checks to see if a coordinate is out-of-bounds.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - coordinate value to check. QR codes are always square, so it makes
 * no difference if this coordinate is along the x or y axis.
 * @return - false if coordinate is out-of-bounds, true otherwise.
 */
function QR__coordOK(x) {
	return (x >= 0 && x < this.dim);
}

/* QR__c2i
 * Converts x, y coordinates to an index to be used with this.symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-coordinate
 * @arg y - y-coordinate
 * @return - value of equivalent index in array this.symbol
 */
function QR__c2i(x, y) {
	return (y * this.dim + x);
}

/* QR__setReserveBit
 * Gets the value of a bit in the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-coordinate to get
 * @arg y - y-coordinate to get
 * @arg return - true if value is successfully reserved, are out-of-bounds
 */
function QR__setReserveBit(x, y) {
	if (!this.coordOK(x) || !this.coordOK(y)) {
		return false;	
	}
	
	/* if the value is already reserved, we're fine */
	if (QR__indexOf(this.reserved, this.c2i(x,y)) != -1) {
		return true;
	}
	
	this.reserved[this.reserved.length] = this.c2i(x,y);
	return true;
}

/* QR__getReserveBit
 * Gets the value of a bit in the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-coordinate to get
 * @arg y - y-coordinate to get
 * @arg return - true if value is reserved, false otherwise
 */
function QR__getReserveBit(x, y) {
	if (!this.coordOK(x) || !this.coordOK(y)
		|| QR__indexOf(this.reserved, this.c2i(x,y)) == -1) {
		return false;	
	}
	
	return true;
}

/* QR__getBit
 * Gets the value of a bit in the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-coordinate to get
 * @arg y - y-coordinate to get
 * @return - value of bit at given coordinate, null if value is uninitialized or
 *           out-of-bounds
 */
function QR__getBit(x, y) {
	/* ignore out-of-bounds coords */
	if (this.coordOK(x) && this.coordOK(y)) {
		return this.symbol[this.c2i(x,y)];
	} else {
		return null;
	}
}

/* QR__setBit
 * Sets a bit in the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-coordinate to set
 * @arg y - y-coordinate to set
 * @arg val - value to assign (true, false)
 * @arg reserve - OPTIONAL true to add coordinate to reserve list (default: false)
 */
function QR__setBit(x, y, val, reserve) {
	if (reserve !== true) {
		reserve = false;
	}
	
	/* ignore out-of-bounds coords */
	if (this.coordOK(x) && this.coordOK(y)) {
		this.symbol[this.c2i(x,y)] = val;
	}
	
	/* reserve the bit if requested */
	if (reserve) {
		this.setReserveBit(x,y);	
	}
}

/* QR__checkRect
 * checks to see if a rectangle overlaps any reserved locations. Out-of-bounds
 * segments will be ignored -- negative coords and rectangles that extend
 * outside the symbol are acceptable.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-position of top-left of the rectangle.
 * @arg y - y-position of top-left of the rectangle.
 * @arg w - width of the rectangle.
 * @arg h - height of the rectangle.
 * @return - false if the rectangle overlaps a reserved area, true otherwise.
 */
function QR__checkRect(x, y, w, h) {
	for (var i = 0; i < w; i++) {
		for (var j = 0; j < h; j++) {
			if (this.getReserveBit(x+i, y+j)) {
				return false;
			}
		}
	}
	
	return true;
}

/* QR__drawRect
 * draws a rectangle on the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-position of top-left of the rectangle.
 * @arg y - y-position of top-left of the rectangle.
 * @arg w - width of the rectangle.
 * @arg h - height of the rectangle.
 * @arg val - value to draw - true for 1/dark, false for 0/light
 * @arg reserve - OPTIONAL true to reserve area. default: false
 */
function QR__drawRect(x, y, w, h, val, reserve) {
	for (var i = 0; i < w; i++) {
		for (var j = 0; j < h; j++) {
			this.setBit(i+x, j+y, val, reserve);
		}
	}
}

/* QR__drawPDP
 * Draws a 9x9 Position Detection Pattern and spacer in a non-reserved area.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-position of center of PDP.
 * @arg y - y-position of center of PDP.
 * @return - true if PDP was successfully drawn, false otherwise.
 */
function QR__drawPDP(x, y) {
	if (!this.checkRect(x-4, y-4, 9, 9)) {
		return false;
	}
	
	 this.drawRect(x-4, y-4, 9, 9, false, true);
	 this.drawRect(x-3, y-3, 7, 7, true, true);
	 this.drawRect(x-2, y-2, 5, 5, false, true);
	 this.drawRect(x-1, y-1, 3, 3, true, true);
	 return true;
}

/* QR__drawAlign
 * Draws an alignment pattern on the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg x - x-position of center of alignment pattern.
 * @arg y - y-position of center of alignment pattern.
 */
function QR__drawAlign(x, y) {
	if (!this.checkRect(x-2, y-2, 5, 5)) {
		return false;	
	}
	
	this.drawRect(x-2, y-2, 5, 5, true, true);
	this.drawRect(x-1, y-1, 3, 3, false, true);
	this.drawRect(x  , y  , 1, 1, true, true);
	
	return true;
}

/* QR__drawFormat
 * Applies a mask pattern to the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 */
function QR__drawTiming() {
	for (var i = 0; i < this.dim - 16; i++) {
		if (this.getBit(6, i+8) == null) {
			this.setBit(6, i+8, (i % 2 == 0) ? true : false, true);
		}
		
		if (this.getBit(i+8, 6) == null) {
			this.setBit(i+8, 6, (i % 2 == 0) ? true : false, true);
		}
	}
}

/* QR__drawPatterns
 * Draws static patterns (Position Detection, Alignment, Timing) onto symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 */
function QR__drawPatterns() {
	/* position detection patterns */
	this.drawPDP(3,3);
	this.drawPDP(3, this.dim - 4);
	this.drawPDP(this.dim - 4, 3);
	
	/* alignment patterns */
	for (var i = 0; i < QR__Ver[this.ver].align.length; i++) {
		for (var j = 0; j < QR__Ver[this.ver].align.length; j++) {
			this.drawAlign(QR__Ver[this.ver].align[i],
				QR__Ver[this.ver].align[j]);
		}
	}
	
	/* dark module */
	this.setBit(8, this.dim - 8, true, true);
	
	/* timing patterns */
	this.drawTiming();
}

/* QR__reserveFormat
 * Adds locations of format and version blocks to the reserve module list.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 */
function QR__reserveFormat() {
	for (var i = 0; i < 8; i++) {
		this.setReserveBit(8, i);
		this.setReserveBit(i, 8);
		this.setReserveBit(8, this.dim - i - 1);
		this.setReserveBit(this.dim - i - 1, 8);
	}
	
	this.setReserveBit(8, 8);
	
	/* versions 7 and above include version info blocks */
	if (this.ver >= 7) { 
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 3; j++) {
				this.setReserveBit(i, this.dim - 9 - j);
				this.setReserveBit(this.dim - 9 - j, i);	
			}
		}
	}
}

/* QR__drawBitstream
 * Draws a given bitstream onto the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 */
function QR__drawBitstream() {
	var bitstream = this.generateBitstream(this.data);
	var y = this.dim - 1;
	var x = this.dim - 1;
	var offset = 0;
	var direction = -1;
	
	/* place bits into the symbol */
	for (var i = 0; 1; i++) {
		/* put the next bit into the symbol */
		this.setBit(x - offset, y, bitstream[i]);
		
		/* keep track of which mask has the closest balance of 1 and 0 bits. 
		   this is part of the mask selection algorithm. it doesn't comply with
		   the standard, but it is a _LOT_ cheaper. */
		for (var j = 0; j < QR__MaskPattern.length; j++) {
			this.maskBalance[j] +=
				(QR__MaskPattern[j](y, x) ? !bitstream[i] : bitstream[i]) ? 1 : -1;
		}
		
		if (i == bitstream.length) {
			break;
		}

		/* find the next unreserved module. */
		do {
			if (offset == 1) {
				offset = 0;
				
				y += direction;
				if (y == -1 || y == this.dim) {
					direction = -direction;
					y = (direction == 1) ? 0 : this.dim - 1;
					x = x - ((x == 8) ? 3 : 2);
				}
			} else {
				offset = 1;
			}
		} while (this.getReserveBit(x-offset,y));
	}
}

/* QR__drawMask
 * Selects and applies a mask pattern to the symbol.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 */
function QR__drawMask() {
	/* let me begin by saying that i'm really, really sorry about this. the
	   algorithm to select a mask per the ISO standard is very slow and very
	   difficult to write, so I'm selecting a mask based on which one has the 
	   closest balance of 1 and 0 bits. */
	var minBalance = Math.abs(this.maskBalance[0]);
	this.mask = 0;
	for (var i = 1; i < QR__MaskPattern.length; i++) {
		if (Math.abs(this.maskBalance[i]) < minBalance) {
			this.mask = i;
			minBalance = Math.abs(this.maskBalance[i]);
		}
	}
	
	/* once the mask pattern is selected, apply it to the symbol */
	for (var x = 0; x < this.dim; x++) {
		for (var y = 0; y < this.dim; y++) {
			if (!this.getReserveBit(x, y) && QR__MaskPattern[this.mask](y,x)) {
				this.setBit(x, y, !this.getBit(x, y));
			}
			
		}
	}
	
}

/* QR__drawFormat
 * Draws format and version blocks on QR code.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 */
function QR__drawFormat() {
	/* draw the upper left format blocks */
	
	for (var i = 0; i < 6; i++) {
		this.setBit(8, i, QR__FormatString[this.ec][this.mask][14-i]);
		this.setBit(i, 8, QR__FormatString[this.ec][this.mask][i]);
	}
	
	this.setBit(8, 7, QR__FormatString[this.ec][this.mask][8]);
	this.setBit(8, 8, QR__FormatString[this.ec][this.mask][7]);
	this.setBit(7, 8, QR__FormatString[this.ec][this.mask][6]);
	
	/* draw the right format block */
	for (var i = 0; i < 8; i++) {
		this.setBit(this.dim - 8 + i, 8, QR__FormatString[this.ec][this.mask][i+7]);
	}
	
	/* draw the bottom format block */
	for (var i = 0; i < 7; i++) {
		this.setBit(8,  this.dim - 1 - i, QR__FormatString[this.ec][this.mask][i]);
	}
	
	/* draw the version blocks, if necessary */
	if (this.ver >= 7) {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 6; j++) {
				this.setBit(j, this.dim - 11 + i, QR__Ver[this.ver].vi[17 - (j*3+i)]);
				this.setBit(this.dim - 11 + i, j, QR__Ver[this.ver].vi[17 - (j*3+i)]);
			}
		}
	}
}

/* QR_drawSymbol
 * Generates a QR code based on data entered with QR__setVersion and QR__setData
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 */
function QR__drawSymbol() {
	/* make sure our inputs are okay */
	if (this.ver == null && !this.autover) {
		throw new Error("QR version not set");
	}
	
	if (this.data == null) {
		throw new Error("Data not set");
	}
	
	/* (re)initialize the symbol */
	this.reserved = [];
	this.symbol = [];
	this.maskBalance = [];
	
	for (var i = 0; i < QR__MaskPattern.length; i++) {
		this.maskBalance[i] = null;
	}
	
	for (var i = 0; i < this.dim * this.dim; i++) {
		this.symbol[i] = null;
	}
	
	/* figure out the optimal version */
	if (this.autover) {
		this.ver = null;
		for (var i = 1; i < QR__Ver.length; i++) {
			var len = 0;
			var databits = (QR__Ver[i].codewords - QR__Ver[i].ec[this.ec].ecwords) * 8;
			
			/* figure out the total encoding length at this version */
			for (var j = 0; j < this.data.length; j++) {
				len += QR__EncodeLen[this.data[j].mode](this.data[j].data,i);
			}
			
			/* if our data can fit in this version, stop */
			if (len <= databits) {
				this.ver = i;
				this.dim = QR__Ver[i].dim;
				break;
			}
		}
		
		if (this.ver == null) {
			throw new Error("Data too large");
		}
	}
	
	/* draw the symbol */
	this.drawPatterns();
	this.reserveFormat();
	this.drawBitstream();
	this.drawMask();
	this.drawFormat();
}

/* QR__setVersion
 * set the version and error correction level of the QR code
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg ver - QR code version -- 1 to 40, or 0 to select automatically
 * @arg ec - Error Correction level:
 *           QR__EC.L - L mode, 7% error correction
 *           QR__EC.M - M mode, 15% error correction
 *           QR__EC.Q - Q mode, 25% error correction
 *           QR__EC.H - H mode, 30% error correction
 */
function QR__setVersion(ver, ec) {
	if (typeof ver !== 'number' || ver < 0 || ver > 40) {
		throw new Error("Invalid QR Version");
	}
	
	if (ec != QR__EC.L && ec != QR__EC.M && ec != QR__EC.Q && ec != QR__EC.H) {
		throw new Error("Bad error correction level");
	}
	
	if (ver == 0) {
		this.ver = null;
		this.autover = true;
	} else {
		this.ver = ver;
		this.autover = false;
	}

	this.dim = QR__Ver[ver].dim;
	this.ec = ec;
}

/* QR__setData
 * set the data to be encoded.
 * ONLY TO BE CALLED AS A MEMBER OF THE QRCODE CLASS
 *
 * @arg data - one or more data segments to encode, in the following format:
 * data = [ { data: "abc!@#", mode: QR__Mode.eightBit },
 *          { data: "123", mode: QR__Mode.num },
 *          { data: "ABC123", mode: QR__Mode.alNum },
 *          { data: 9, mode: QR__Mode.ECI },
 *          ... ];
 *
 * The following encoding modes are currently available:
 * - Numeric (QR__Mode.num)
 * - Alphanumeric (QR__Mode.alNum)
 * - 8-bit (QR__Mode.eightBit)
 * - ECI (QR__Mode.ECI)
 */
function QR__setData(data) {
	this.data = data;
}
