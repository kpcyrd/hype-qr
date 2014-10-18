var canvas = document.getElementById('qr');
qrcode = new qrcodelib.qrcodedraw()
qrcode.draw(canvas, 'ohai', function() {});
