var QRVersions = new Array(
        { ver: null, dim: null, align: null },
        { ver: 1, dim: 21, align: new Array() },
        { ver: 2, dim: 25, align: new Array(6,18) },
        { ver: 3, dim: 29, align: new Array(6,22) },
        { ver: 4, dim: 33, align: new Array(6,26) },
        { ver: 5, dim: 37, align: new Array(6,30) },
        { ver: 6, dim: 41, align: new Array(6,34) },
        { ver: 7, dim: 45, align: new Array(6,22,38) },
        { ver: 8, dim: 49, align: new Array(6,24,42) },
        { ver: 9, dim: 53, align: new Array(6,26,46) },
        { ver: 10, dim: 57, align: new Array(6,28,50) },
        { ver: 11, dim: 61, align: new Array(6,30,54) },
        { ver: 12, dim: 65, align: new Array(6,32,58) },
        { ver: 13, dim: 69, align: new Array(6,34,62) },
        { ver: 14, dim: 73, align: new Array(6,26,46,66) },
        { ver: 15, dim: 77, align: new Array(6,26,48,70) },
        { ver: 16, dim: 81, align: new Array(6,26,50,74) },
        { ver: 17, dim: 85, align: new Array(6,30,54,78) },
        { ver: 18, dim: 89, align: new Array(6,30,56,82) },
        { ver: 19, dim: 93, align: new Array(6,30,58,86) },
        { ver: 20, dim: 97, align: new Array(6,34,62,90) },
        { ver: 21, dim: 101, align: new Array(6,28,50,72,94) },
        { ver: 22, dim: 105, align: new Array(6,26,50,74,98) },
        { ver: 23, dim: 109, align: new Array(6,30,54,78,102) },
        { ver: 24, dim: 113, align: new Array(6,28,54,80,106) },
        { ver: 25, dim: 117, align: new Array(6,32,58,84,110) },
        { ver: 26, dim: 121, align: new Array(6,30,58,86,114) },
        { ver: 27, dim: 125, align: new Array(6,34,62,90,118) },
        { ver: 28, dim: 129, align: new Array(6,26,50,74,98,122) },
        { ver: 29, dim: 133, align: new Array(6,30,54,78,102,126) },
        { ver: 30, dim: 137, align: new Array(6,26,52,78,104,130) },
        { ver: 31, dim: 141, align: new Array(6,30,56,82,108,134) },
        { ver: 32, dim: 145, align: new Array(6,34,60,86,112,138) },
        { ver: 33, dim: 149, align: new Array(6,30,58,86,114,142) },
        { ver: 34, dim: 153, align: new Array(6,34,62,90,118,146) },
        { ver: 35, dim: 157, align: new Array(6,30,54,78,102,126,150) },
        { ver: 36, dim: 161, align: new Array(6,24,50,76,102,128,154) },
        { ver: 37, dim: 165, align: new Array(6,28,54,80,106,132,158) },
        { ver: 38, dim: 169, align: new Array(6,32,58,84,110,136,162) },
        { ver: 39, dim: 173, align: new Array(6,26,54,82,110,138,166) },
        { ver: 40, dim: 177, align: new Array(6,30,58,86,114,142,170) }
);

var QRCode = function() {
	this.coordOK = QR__coordOK;
	this.c2i = QR__c2i;
	this.setReserveBit = QR__setReserveBit;
	this.getReserveBit = QR__getReserveBit;
	this.getBit = QR__getBit;
	this.setBit = QR__setBit;
	this.checkRect = QR__checkRect;
	this.drawRect = QR__drawRect;
	this.drawPDP = QR__drawPDP
	this.drawAlign = QR__drawAlign;
	this.drawTiming = QR__drawTiming;
	this.drawPatterns = QR__drawPatterns;
	this.setVersion = QR__setVersion;
	this.setText = QR__setText;
	
	this.ver = null;
	this.dim = null;
	this.data = null;
	this.reserved = null;
	
	/* initializing data array */
};

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
	
	for (var i = 0; i < QRVersions[this.ver].align.length; i++) {
		for (var j = 0; j < QRVersions[this.ver].align.length; j++) {
			this.drawAlign(QRVersions[this.ver].align[i],
				QRVersions[this.ver].align[j]);
		}
	}
	
	this.drawTiming();
}

function QR__setText(text) {
	
}

function QR__setVersion(ver) {
	if (typeof ver !== 'number' || ver == 0 || ver > QRVersions.length) {
		throw "Invalid QR Version";
	}
	this.ver = ver;
	this.dim = QRVersions[ver].dim;
	this.data = new Array();
	this.reserved = new Array();
	
	for (var i = 0; i < this.dim * this.dim; i++) {
		this.data[i] = null;
	}
	
	this.drawPatterns();
}
