/*eslint no-console : off*/
define (function (require) {
	var $    = require ('jquery'); 


	$(document).ready (function () { 
		$('#save-note').click (save_note);
	});

	function save_note () {
		var page = $('#diary-page').val ();

		var data = {
			"page" : page
		};

		console.log ({data : data}, 'diary entry data');

		$.ajax ({
			url      : "/diary/new-note",
			type     : "POST",
			headers  : {
				"Content-type" : "application/json; charset=utf-8"
			},
			data     : JSON.stringify (data),
			success  : success,
			error    : error,
		});
	}

	function success (data/*, status, xhr*/) {
		console.log (data, 'data send ok');
	}

	function error (jqxhr, textStatus, errorMessage) {
		console.log (jqxhr, textStatus, errorMessage, "data send error");
	}
});
