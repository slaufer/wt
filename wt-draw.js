/*
 *  OUTPUT DRAWING FUNCTIONS
 */

/* drawQRToCanvas
 * draws a QR code to a canvas
 * @arg qr - qr code object that is ready to be drawn (i.e. has had drawSymbol
 * called)
 * @arg cvs - canvas object to draw to. this object will be resized based on scale.
 * @arg scale - OPTIONAL drawing scale. each module will be scale x scale pixels
 * @arg bgcolor - OPTIONAL background color
 * @arg fgcolor - OPTIONAL foreground color
 * in size. (default: 1)
 */
var QR__TempCanvas;
var QR__TempCanvasContext;
 
function drawQRToCanvas(qr, cvs, scale, bgcolor, fgcolor) {
	/* initialize the temporary canvas, if necessary */
	if (typeof QR__TempCanvas === 'undefined') {
		QR__TempCanvas = document.createElement('canvas');
		QR__TempCanvasContext = QR__TempCanvas.getContext('2d');
	}
	
	if (typeof scale === 'undefined') {
		scale = 1;
	}
	
	if (typeof bgcolor === 'undefined') {
		bgcolor = '#fff';
	}
	
	if (typeof fgcolor === 'undefined') {
		fgcolor = '#000';	
	}
	
	var tcvs = QR__TempCanvas;
	var tctx = QR__TempCanvasContext;
	
	/* set canvas size, border */
	var cvsSize = qr.dim * scale + 8 * scale;
	tcvs.setAttribute('width', cvsSize.toString() + 'px');
	tcvs.setAttribute('height', cvsSize.toString() + 'px');
	
	/* create canvas context, clear canvas */
	tctx.fillStyle = bgcolor;
	tctx.fillRect(0, 0, cvsSize, cvsSize);
	tctx.fillStyle = fgcolor;
	
	tctx.beginPath();
	/* iterate over data and fill into canvas */
	for (var y = 0; y < qr.dim; y++) {
		for (var x = 0; x < qr.dim; x++) {
			var k = qr.getBit(x,y);
			if (k === true) {
				tctx.rect((x + 4) * scale, (y + 4) * scale, scale, scale);
			}
		}
	}
	tctx.fill();
	
	cvs.setAttribute('width', cvsSize.toString() + 'px');
	cvs.setAttribute('height', cvsSize.toString() + 'px');
	var ctx = cvs.getContext("2d");
	ctx.drawImage(tcvs, 0, 0);
}

/* drawQRToDiv
 * draws a QR code to a  div. this will always perform poorly, do not use it
 * unless you absolutely cannot use drawQRToCanvas.
 * @arg qr - qr code object that is ready to be drawn (i.e. has had drawSymbol
 * called)
 * @arg div - div object to draw to. this object may have its container
 * properties altered. all contents will be destroyed.
 * @arg scale - OPTIONAL drawing scale. each module will be scale x scale pixels
 * in size. (default: 1)
 */
function drawQRToDiv(qr, div, scale, bgcolor, fgcolor) {
	/* remove all child objects */
	while (div.firstChild) {
		div.removeChild(div.firstChild);	
	}
	
	if (typeof bgcolor === 'undefined') {
		bgcolor = '#fff';
	}
	
	if (typeof fgcolor === 'undefined') {
		fgcolor = '#000';
	}
	
	/* set up container */
	div.style.padding = '0px';
	div.style.width = div.style.height = ((qr.dim + 8) * scale).toString() + 'px';
	div.style.backgroundColor = bgcolor;
	
	/* top spacer */
	var mod = document.createElement('div');
	mod.style.height = (scale * 4).toString() + 'px';
	div.appendChild(mod);
	
	for (var i = 0; i < qr.symbol.length; i++) {
		/* start-of-line spacer */
		if (i % qr.dim == 0) {
			var mod = document.createElement('div');
			mod.style.width = (4 * scale).toString() + 'px';
			mod.style.height = scale.toString() + 'px';
			mod.style.float = 'left';
			mod.style.fontSize = '1px';
			mod.style.lineHeight = '1px';
			div.appendChild(mod);
		}
		
		/* this module */
		var mod = document.createElement('div');
		mod.style.backgroundColor = (qr.symbol[i] === true) ? fgcolor : bgcolor;
		mod.style.width = mod.style.height = scale.toString() + 'px';
		mod.style.float = 'left';
		mod.style.fontSize = '1px';
		mod.style.lineHeight = '1px';
		div.appendChild(mod);
		
		/* end-of-line spacer */
		if (i % qr.dim == qr.dim - 1) {
			var mod = document.createElement('div');
			mod.style.clear = 'both';
			div.appendChild(mod);		
		}
	}
}
