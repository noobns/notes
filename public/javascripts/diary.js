define (function (require) {
	var $ = require ('jquery');

	$(document).ready (function () {
		$('#new-note').click (create_note); 
	});

	function create_note (ev) {
		window.location.href = '/diary/new-note';
	}

});
