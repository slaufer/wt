/*
 *  SYMBOL FUNCTIONS
 */

function QR__coordOK(x) {
	return (x >= 0 && x < this.dim);
}

function QR__c2i(x, y) {
	return (y * this.dim + x);
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
		return this.data[this.c2i(x,y)];
	} else {
		return null;
	}
}

function QR__setBit(x, y, val, reserve) {
	if (typeof reserve === 'undefined') {
		reserve = false;
	}
	
	/* ignore out-of-bounds coords */
	if (this.coordOK(x) && this.coordOK(y)) {
		this.data[this.c2i(x,y)] = val;
	}
	
	/* reserve the bit if requested */
	if (reserve) {
		this.setReserveBit(x,y);	
	}
}

function QR__checkRect(x, y, w, h) {
	for (var i = 0; i < w; i++) {
		for (var j = 0; j < h; j++) {
			if (this.getBit(x+i, y+j) != null
				|| this.getReserveBit(x+i, y+j)) {
				return false;
			}
		}
	}
	
	return true;
}

function QR__drawRect(x, y, w, h, val, reserve) {
	for (var i = 0; i < w; i++) {
		for (var j = 0; j < h; j++) {
			this.setBit(i+x, j+y, val, reserve);
		}
	}
}

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
	this.drawPDP(3,3);
	this.drawPDP(3, this.dim - 4);
	this.drawPDP(this.dim - 4, 3);
	
	for (var i = 0; i < QR__Ver[this.ver].align.length; i++) {
		for (var j = 0; j < QR__Ver[this.ver].align.length; j++) {
			this.drawAlign(QR__Ver[this.ver].align[i],
				QR__Ver[this.ver].align[j]);
		}
	}
	
	this.drawTiming();
}

function QR__setEC(ec) {
	if (ec != QR__EC.L && ec != QR__EC.M && ec != QR__EC.Q && ec != QR__EC.H) {
		throw "Bad error correction level";
	}

	this.ec = ec;
}

function QR__setVersion(ver) {
	if (typeof ver !== 'number' || ver == 0 || ver > QR__Ver.length) {
		throw "Invalid QR Version";
	}
	this.ver = ver;
	this.dim = QR__Ver[ver].dim;
	this.data = new Array();
	this.reserved = new Array();
	
	for (var i = 0; i < this.dim * this.dim; i++) {
		this.data[i] = null;
	}
	
	this.drawPatterns();
}
