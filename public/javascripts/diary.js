define (function (require) {
	var $ = require ('jquery');

	$(document).ready (function () {
		$('#new-note').click (create_note); 
		$('#save-note').click (function (){
			data =	$('#diary-page').value ();
		});
	});

	function create_note () {
		window.location.href = '/diary/new-note';
	}

	function save_note () {
		$.ajax({
			type     : "POST",
			url      : '/new-note',
			data     : data,
			success  : success,
		});
	}

});
