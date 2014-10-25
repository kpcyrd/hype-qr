(function() {
	var elem = document.getElementById('connectstr');

    function update() {
		var canvas = document.getElementById('qr');
		qrcode = new qrcodelib.qrcodedraw()
		qrcode.draw(canvas, elem.value, function() {});
    }

	elem.addEventListener('keyup', update);
})();
