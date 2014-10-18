(function() {
	var elem = document.getElementById('connectstr');

	elem.addEventListener('keyup', function() {
		var canvas = document.getElementById('qr');
		qrcode = new qrcodelib.qrcodedraw()
		qrcode.draw(canvas, elem.value, function() {});
	});
})();
