define (function (require) {
	var $     = require ('jquery');

	$(document).ready(function (){
		$('#lets-start').click (function (event){
			window.location.href = '/first';
		});
	});
});
