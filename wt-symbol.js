/*
 *  SYMBOL FUNCTIONS
 */

function QR__coordOK(x) {
	return (x >= 0 && x < this.dim);
}

function QR__c2i(x, y) {
	return (y * this.dim + x);
}

function QR__i2c(index) {
	var x = index % this.dim;
	var y = (index - x) / this.dim;
	
	return { x: x, y: y };
}

function QR__setReserveBit(x, y) {
	if (!this.coordOK(x) || !this.coordOK(y)
		|| this.reserved.indexOf(this.c2i(x,y)) != -1) {
		return false;	
	}
	
	this.reserved.push(this.c2i(x,y));
	return true;
}

function QR__getReserveBit(x, y) {
	if (!this.coordOK(x) || !this.coordOK(y)
		|| this.reserved.indexOf(this.c2i(x,y)) == -1) {
		return false;	
	}
	
	return true;
}

function QR__getBit(x, y, val) {
	/* ignore out-of-bounds coords */
	if (this.coordOK(x) && this.coordOK(y)) {
		return this.symbol[this.c2i(x,y)];
	} else {
		return null;
	}
}

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

function QR__drawAlign(x, y) {
	if (!this.checkRect(x-2, y-2, 5, 5)) {
		return false;	
	}
	
	this.drawRect(x-2, y-2, 5, 5, true, true);
	this.drawRect(x-1, y-1, 3, 3, false, true);
	this.drawRect(x  , y  , 1, 1, true, true);
	
	return true;
}

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
	
	this.drawTiming();
}

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

function QR__drawBitstream() {
	var bitstream = this.generateBitstream(this.data);
	
	var y = this.dim - 1;
	var x = this.dim - 1;
	var offset = 0;
	var direction = -1;
	for (var i = 0; 1; i++) {
		this.setBit(x - offset, y, bitstream[i]);
		/* this.setBit(x - offset, y, i%256); /* for placement tests */
		if (i == bitstream.length) {
			break;
		}

		/* find the next unreserved module */
		while (this.getReserveBit(x-offset,y) || this.getBit(x-offset,y) != null) {
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
		}
	}
}

function QR__drawMask() {
	/* let me begin by saying that i'm really, really sorry about this. the
	   algorithm to select a mask per the ISO standard is very slow and very
	   difficult to write, so I'm selecting a mask at random. */
	this.mask = 0;
	
	for (var x = 0; x < this.dim; x++) {
		for (var y = 0; y < this.dim; y++) {
			if (!this.getReserveBit(x, y) && QR__MaskPattern[this.mask](y,x)) {
				this.setBit(x, y, !this.getBit(x, y));
			}
			
		}
	}
	
}

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
}

function QR__drawSymbol() {
	this.reserved = [];
	this.symbol = [];
	
	for (var i = 0; i < this.dim * this.dim; i++) {
		this.symbol[i] = null;
	}	
	
	this.drawPatterns();
	this.reserveFormat();
	this.drawBitstream();
	this.drawMask();
	this.drawFormat();
}

function QR__setVersion(ver, ec) {
	if (typeof ver !== 'number' || ver < 1 || ver > 40) {
		throw new Error("Invalid QR Version");
	}
	
	if (ec != QR__EC.L && ec != QR__EC.M && ec != QR__EC.Q && ec != QR__EC.H) {
		throw new Error("Bad error correction level");
	}
	
	this.ver = ver;
	this.dim = QR__Ver[ver].dim;
	this.ec = ec;
	
	if (this.data != null) {
		this.drawSymbol();
	}
}

function QR__setData(data) {
	this.data = data;
	
	if (this.ver != null) {
		this.drawSymbol();
	}
}
