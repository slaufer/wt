function drawQR(qr, c, scale) {
	/* set canvas size, border */
	var cSize = qr.dim * scale + 8 * scale 
	c.style.width = c.style.height = cSize.toString() + 'px';
	c.setAttribute('width', cSize.toString() + 'px');
	c.setAttribute('height', cSize.toString() + 'px');
	c.style.border = 'solid black 1px';
	
	/* create canvas context, clear canvas */
	var ctx = c.getContext("2d");
	ctx.fillStyle = 'rgb(255, 255, 255);';
	ctx.fillRect(0, 0, cSize, cSize);
	ctx.fillStyle = 'rgb(0, 0, 0);';
	
	/* iterate over data and fill into canvas */
	for (var y = 0; y < qr.dim; y++) {
		for (var x = 0; x < qr.dim; x++) {
			var k = qr.getBit(x,y);
			if (k === true) {
				ctx.fillStyle = 'rgb(0, 0, 0);';
				ctx.fillRect((x + 4) * scale, (y + 4) * scale, scale, scale);
			} else if (k === false) {
				ctx.fillStyle = 'rgb(255, 255, 255);';
				ctx.fillRect((x + 4) * scale, (y + 4) * scale, scale, scale);
			} else if (typeof k == 'number') {
				ctx.fillStyle = 'rgb('+k+', '+k+', '+k+');';
				ctx.fillRect((x + 4) * scale, (y + 4) * scale, scale, scale);
			}
		}
	}
}

function drawReserve(qr, c, scale) {
	/* set canvas size, border */
	var cSize = qr.dim * scale + 8 * scale 
	c.style.width = c.style.height = cSize.toString() + 'px';
	c.setAttribute('width', cSize.toString() + 'px');
	c.setAttribute('height', cSize.toString() + 'px');
	c.style.border = 'solid black 1px';
	
	/* create canvas context, clear canvas */
	var ctx = c.getContext("2d");
	ctx.fillStyle = 'rgb(255, 255, 255);';
	ctx.fillRect(0, 0, cSize, cSize);
	ctx.fillStyle = 'rgb(255, 0, 0);';
	
	/* iterate over data and fill into canvas */
	for (var y = 0; y < qr.dim; y++) {
		for (var x = 0; x < qr.dim; x++) {
			if (qr.getReserveBit(x,y)) {
				ctx.fillRect((x + 4) * scale, (y + 4) * scale, scale, scale);
			}
		}
	}
}

function startDemo() {
	var qr = new QRCode();
	qr.setVersion(1, QR__EC.M);
	qr.setData([{data: document.getElementById("qrdata").value, mode: QR__Mode.alNum}]);
	
	drawQR(qr, document.getElementById('qrcanvas'), 8);
	drawReserve(qr, document.getElementById('rescanvas'), 8);
}

window.onload = function() {
	startDemo();
}
