function drawQR(qr, c, scale) {
	/* set canvas size, border */
	var cSize = qr.dim * scale + 8 * scale 
	c.style.width = c.style.height = cSize.toString() + 'px';
	c.setAttribute('width', cSize.toString() + 'px');
	c.setAttribute('height', cSize.toString() + 'px');
	c.style.border = 'solid black 1px';
	
	/* create canvas context, clear canvas */
	var ctx = c.getContext("2d");
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 0, cSize, cSize);
	ctx.fillStyle = '#000000';
	
	/* iterate over data and fill into canvas */
	for (var y = 0; y < qr.dim; y++) {
		for (var x = 0; x < qr.dim; x++) {
			var k = qr.getBit(x,y);
			if (k === true) {
				ctx.fillRect((x + 4) * scale, (y + 4) * scale, scale, scale);
			}
		}
	}
}

function startDemo() {
	var qr = new QRCode();
	qr.setVersion(parseInt(document.getElementById("qrver").value), QR__EC[document.getElementById("qrec").value]);
	qr.setData([
		{data: 3, mode: QR__Mode.ECI}, // just to be safe - default incoding is ShiftJIS
		{data: document.getElementById("qrdata").value, mode: QR__Mode.eightBit}
	]);
	/*qr.setVersion(1, QR__EC.M);
	qr.setData([{data: 'HELLO WORLD', mode: QR__Mode.alNum}]);*/
	qr.drawSymbol();
	drawQR(qr, document.getElementById('qrcanvas'), 8);
	
}

window.onload = function() {
	startDemo();
}
