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
	this.setVersion = QR__setVersion;
	
	/* encoding functions */
	this.encAlNum = QR__encAlNum;
	this.generateBitstream = QR__generateBitstream;
	this.generateMessage = QR__generateMessage;
	this.generateECC = QR__generateECC;
	
	
	this.ver = null;
	this.dim = null;
	this.mode = null;
	this.ec = null;
	
	this.message = null;
	this.bitstream = null;
	this.reserved = null;
	this.symbol = null;
};

