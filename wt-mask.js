/* QR__MaskPattern[]
 * QR Code masking patterns
 *
 * @arg i - column
 * @arg j - row
 * @return - true if this bit should be flipped, false otherwise
 */
var QR__MaskPattern = [
	function(i,j) { return (i + j) % 2 == 0; },
	function(i,j) { return i % 2 == 0; },
	function(i,j) { return j % 3 == 0; },
	function(i,j) { return (i + j) % 3 == 0; },
	function(i,j) { return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0; },
	function(i,j) { return (i * j) % 2 + (i * j) % 3 == 0; },
	function(i,j) { return ((i * j) % 2 + (i * j) % 3) % 2 == 0; },
	function(i,j) { return ((i + j) % 2 + (i * j) % 3) % 2 == 0; } 
];

/* mask selection methods -- goes with QR__MaskEngine in wt-symbol.js */
var QR__MaskMethod = {
	Random: 0,
	BWBalance: 1,
	Canonical: 2
}

/* QR__MaskEngine[]
 * Implementations of mask selection algorithms -- see QR__MaskMethod in
 * wt-const.js.
 * @arg qr - QR Code object to be masked
 */
QR__MaskEngine = [];
QR__MaskEngine[QR__MaskMethod.Random] = function(qr) {
	 /* select a mask pattern by throwing a dart */
	qr.mask = QR__randomInt(0, QR__MaskPattern.length - 1);
	
	/* once the mask pattern is selected, apply it to the symbol */
	for (var x = 0; x < qr.dim; x++) {
		for (var y = 0; y < qr.dim; y++) {
			if (!qr.getReserveBit(x, y) && QR__MaskPattern[qr.mask](y,x)) {
				qr.setBit(x, y, !qr.getBit(x, y));
			}
			
		}
	}
}

QR__MaskEngine[QR__MaskMethod.BWBalance] = function(qr) {
	var maskBalance = [];
	for (var i = 0; i < QR__MaskPattern.length; i++) {
		maskBalance[i] = 0;
	}
	
	/* figure out the balance of black/white maskable bits in the symbol for
	   each pattern */
	for (var x = 0; x < qr.dim; x++) {
		for (var y = 0; y < qr.dim; y++) {
			for (var i = 0; i < QR__MaskPattern.length; i++) {
				if (qr.getReserveBit(x,y)) {
					continue;
				}
				
				maskBalance[i] += (qr.getBit(x,y) ? 1 : -1)
					* (QR__MaskPattern[i](y,x) ? -1 : 1); 
			}
		}
	}
	
	/* figure out which one had the best balance */
	var min = Math.abs(maskBalance[0]);
	qr.mask = 0;
	for (var i = 1; i < maskBalance.length; i++) {
		maskBalance[i] = Math.abs(maskBalance[i]);
		if (maskBalance[i] < min) {
			qr.mask = i;
			min = maskBalance[i];
		}
	}
	
	/* once the mask pattern is selected, apply it to the symbol */
	for (var x = 0; x < qr.dim; x++) {
		for (var y = 0; y < qr.dim; y++) {
			if (!qr.getReserveBit(x, y) && QR__MaskPattern[qr.mask](y,x)) {
				qr.setBit(x, y, !qr.getBit(x, y));
			}
		}
	}
}

/* the canonical engine is very slow */
QR__MaskEngine[QR__MaskMethod.Canonical] = function(qr) {
	var masks = [];
	var score = [];
	
	/* make a copy of the symbol for each mask pattern, and test condition #4
	   (light/dark balance) while we're at it */
	for (var i = 0; i < QR__MaskPattern.length; i++) {
		masks[i] = [];
		score[i] = qr.dim * qr.dim / 2;
		for (var y = 0; y < qr.dim; y++) {
			for (var x = 0; x < qr.dim; x++) {
				if (!qr.getReserveBit(x,y)) {
					masks[i][qr.c2i(x,y)] = QR__MaskPattern[i](y,x) ? !qr.getBit(x,y) : qr.getBit(x,y);
				} else {
					masks[i][qr.c2i(x,y)] = qr.getBit(x,y);
				}
				
				/* start counting black/white ratio */
				if (masks[i][qr.c2i(x,y)]) {
					score[i]--;
				}
			}
		}

		/* this was derived with algebra magic */
		score[i] = Math.floor(Math.abs(score[i]) * 40 / (qr.dim * qr.dim)) * 10;
	}
	
	/* condition #1 (contiguous lines)  */
	for (var i = 0; i < QR__MaskPattern.length; i++) {
		/* horizontal lines */
		for (var y = 0; y < qr.dim; y++) {
			for (var x = 0; x < qr.dim;) {
				var v = masks[i][qr.c2i(x,y)];
				var j;
				
				for (j = 1; j < qr.dim && masks[i][qr.c2i(x+j,y)] == v; j++);

				if (j >= 5) {
					score[i] += j - 2;
				}
				
				x += j;
			}
		}
		
		/* vertical lines */
		for (var x = 0; x < qr.dim; x++) {
			for (var y = 0; y < qr.dim;) {
				var v = masks[i][qr.c2i(x,y)];
				var j;
				
				for (j = 1; j < qr.dim && masks[i][qr.c2i(x,y+j)] == v; j++);
				
				if (j >= 5) {
					score[i] += j - 2;
				}
				
				y += j;
			}
		}
	}
	
	/* condition #2 (contiguous blocks) */
	for (var i = 0; i < QR__MaskPattern.length; i++) {
		for (var y = 0; y < qr.dim - 1; y++) {
			for (var x = 0; x < qr.dim - 1; x++) {
				var v = masks[i][qr.c2i(x,y)];
				if (masks[i][qr.c2i(x+1,y)] == v && masks[i][qr.c2i(x,y+1)] == v && masks[i][qr.c2i(x+1,y+1)] == v) {
					score[i] += 3;
				}
			}
		}
	}
	
	/* condition #3 (false finder patterns) */
	for (var i = 0; i < QR__MaskPattern.length; i++) {
		for (var y = 0; y < qr.dim; y++) {
			for (var x = 0; x < qr.dim; x++) {
				if (!qr.getBit(x,y)) {
					continue;	
				}
				
				if (!qr.getBit(x+1,y) && qr.getBit(x+2,y) && qr.getBit(x+3,y) && qr.getBit(x+4,y) && !qr.getBit(x+5,y) && qr.getBit(x+6,y)) {
					score[i] += 40;
				}
				
				if (!qr.getBit(x,y+1) && qr.getBit(x,y+2) && qr.getBit(x,y+3) && qr.getBit(x,y+4) && !qr.getBit(x,y+5) && qr.getBit(x,y+6)) {
					score[i] += 40;
				}
			}
		}
	}
	
	/* choose whichever pattern has the lowest score */
	var min = score[0];
	qr.mask = 0;
	for (var i = 1; i < score.length; i++) {
		if (score[i] < min) {
			min = score[i];
			qr.mask = i;
		}
	}
	
	/* update symbol ref to point to the new symbol */
	qr.symbol = masks[qr.mask];
}
