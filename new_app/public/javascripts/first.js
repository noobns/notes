define (function (require) {
	var $ =  require ('jquery');

	$(document).ready(function () {
		$('#Phela-Darwaza').click (function () {
			window.location.href = '/phela-darwaza';
		});
	});

});
