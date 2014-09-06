/*
 *  OUTPUT DRAWING FUNCTIONS
 */

/* drawQRToCanvas
 * draws a QR code to a canvas
 * @arg qr - qr code object that is ready to be drawn (i.e. has had drawSymbol
 * called)
 * @arg canvas - canvas object to draw to. this object will be resized based on scale.
 * @arg scale - OPTIONAL drawing scale. each module will be scale x scale pixels
 * in size. (default: 1)
 */
function drawQRToCanvas(qr, canvas, scale) {
	if (typeof canvas.getContext === 'undefined') {
		return;
	}
	
	if (typeof scale === 'undefined') {
		scale = 1;
	}
	
	/* set canvas size, border */
	var canvasSize = qr.dim * scale + 8 * scale 
	canvas.style.width = canvas.style.height = canvasSize.toString() + 'px';
	canvas.setAttribute('width', canvasSize.toString() + 'px');
	canvas.setAttribute('height', canvasSize.toString() + 'px');
	
	/* create canvas context, clear canvas */
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 0, canvasSize, canvasSize);
	ctx.fillStyle = '#000000';
	
	ctx.beginPath();
	/* iterate over data and fill into canvas */
	for (var y = 0; y < qr.dim; y++) {
		for (var x = 0; x < qr.dim; x++) {
			var k = qr.getBit(x,y);
			if (k === true) {
				ctx.rect((x + 4) * scale, (y + 4) * scale, scale, scale);
			}
		}
	}
	ctx.fill();
}

/* drawQRToDiv
 * draws a QR code to a  div
 * @arg qr - qr code object that is ready to be drawn (i.e. has had drawSymbol
 * called)
 * @arg div - div object to draw to. this object may have its container
 * properties altered. all contents will be destroyed.
 * @arg scale - OPTIONAL drawing scale. each module will be scale x scale pixels
 * in size. (default: 1)
 */
function drawQRToDiv(qr, div, scale) {
	/* remove all child objects */
	while (div.firstChild) {
		div.removeChild(div.firstChild);	
	}
	
	/* set up container */
	div.style.padding = '0px';
	div.style.width = div.style.height = ((qr.dim + 8) * scale).toString() + 'px';
	div.style.backgroundColor = '#fff';
	
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
		mod.style.backgroundColor = (qr.symbol[i] === true) ? '#000' : '#fff';
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
