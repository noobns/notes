var get = require ("../impact/models/boss/retro/get");

get.getCurrency ()
	.then (
		function (data) {
			console.log(data);
		},
		function (err) {
			console.log(err);
		}
	);
