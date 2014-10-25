(function() {
	var preview = document.getElementById('preview');
	var host = document.getElementById('host');
	var pk = document.getElementById('pk');
	var pw = document.getElementById('pw');

    function update() {
        var txt = 'cjdns://' + host.value + '?pk=' + escape(pk.value) + '&pw=' + escape(pw.value);
        preview.textContent = txt;

		var canvas = document.getElementById('qr');
		qrcode = new qrcodelib.qrcodedraw()
		qrcode.draw(canvas, txt, function() {});
    }

	host.addEventListener('keyup', update);
	pk.addEventListener('keyup', update);
	pw.addEventListener('keyup', update);

    update();
})();
