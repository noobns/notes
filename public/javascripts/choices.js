define (function (require) {
	var $ = require ('jquery');

	$(document).ready (function () {
		$('#upload-image').click (function () {
			window.location.href = '/upload_images';	
		});
	});

	$(document).ready (function () {
		$('#write-blog').click (function () {
			window.location.href = '/diary';	
		});
	});
});
