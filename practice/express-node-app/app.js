var express = require ('express');
var app     = express ();


app.listen (3000, function () {
	console.log ("server is running on port 3000");
});

app.get ('/ping', function (req, res, next) {
	res.status (200).send ("pong\n");
});

app.post ("/stop", function (req, res, next) {
	res.status (200).send ("process stop ok\n");
	console.log ('process exiting');
	process.exit (0);
});


