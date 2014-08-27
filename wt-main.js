/*
 *  MAIN CLASS
 */

var QRCode = function() {
	/* Symbol manipulation functions */
	this.coordOK = QR__coordOK;
	this.c2i = QR__c2i;
	this.setReserveBit = QR__setReserveBit;
	this.getReserveBit = QR__getReserveBit;
	this.getBit = QR__getBit;
	this.setBit = QR__setBit;
	this.checkRect = QR__checkRect;
	this.drawRect = QR__drawRect;
	this.drawPDP = QR__drawPDP;
	this.drawAlign = QR__drawAlign;
	this.drawTiming = QR__drawTiming;
	this.drawPatterns = QR__drawPatterns;
	this.drawBitstream = QR__drawBitstream;
	this.drawSymbol = QR__drawSymbol;
	this.drawMask = QR__drawMask;
	this.drawFormat = QR__drawFormat;
	this.reserveFormat = QR__reserveFormat;
	this.setVersion = QR__setVersion;
	this.setData = QR__setData;
	
	/* encoding functions */
	this.generateMessage = QR__generateMessage;
	this.generateECC = QR__generateECC;
	this.generateBitstream = QR__generateBitstream;
	
	/* class vars */
	this.ver = null;
	this.autover = null;
	this.dim = null;
	this.mode = null;
	this.ec = null;

	this.reserved = null;
	this.mask = null;
	this.symbol = null;
	this.maskBalance = null;
};

