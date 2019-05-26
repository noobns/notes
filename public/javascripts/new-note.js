define (function (require) {
	var $   = require ('jquery'); 

	$(document).ready (function () { 
		$('#save-note').click (function () {
			$.ajax ({
				url      : "/diary/ping",
				type     : "GET",
				success  : success,
				error    : error,
			});
		});
	});

function success (data, status, xhr) {
	console.log (data, "----------------");
}

function error (jqxhr, textStatus, errorMessage) {
	console.log (errorMessage, "///////////////////");
}

});
