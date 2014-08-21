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
		return this.symbol[this.c2i(x,y)];
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
		this.symbol[this.c2i(x,y)] = val;
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

function QR__setVersion(ver, ec) {
	if (typeof ver !== 'number' || ver < 1 || ver > 40) {
		throw new Error("Invalid QR Version");
	}
	
	if (ec != QR__EC.L && ec != QR__EC.M && ec != QR__EC.Q && ec != QR__EC.H) {
		throw new Error("Bad error correction level");
	}
	
	this.ver = ver;
	this.dim = QR__Ver[ver].dim;
	this.symbol = [];
	this.reserved = [];
	
	for (var i = 0; i < this.dim * this.dim; i++) {
		this.symbol[i] = null;
	}
	
	switch (ec) {
	case QR__EC.L:
		this.ec = QR__Ver[this.ver].ec.L;
		break;
	case QR__EC.M:
		this.ec = QR__Ver[this.ver].ec.M;
		break;
	case QR__EC.Q:
		this.ec = QR__Ver[this.ver].ec.Q;
		break;
	case QR__EC.H:
		this.ec = QR__Ver[this.ver].ec.H;
		break;
	}
	
	this.drawPatterns();
}

function QR__setMessageLen() {
	if (this.ver != null && this.ec != null) {
		
	}
}
