function drawQR(qr, c) {
	var x = 0;
	var y = 0;
	var ctx = c.getContext("2d");
	ctx.fillstyle = "#000000";
	
	while (y < qr.dim) {
		console.log(qr.data[y * qr.dim + x]);
		
		if (qr.data[y * qr.dim + x]) {
			ctx.fillRect(x * 8, y * 8, 8, 8);
		}
		
		x++;
		if (x == qr.dim) {
			x = 0;
			y++;
		}
	}
}

window.onload = function() {
	var qr = new QRCode();
	drawQR(qr, document.getElementById('spew'));
}
