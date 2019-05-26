var express        = require ('express');
var app            = express ();
var form           = require ('./routes/form');
var first          = require ('./routes/first');
var phela_darwaza  = require ('./routes/phela-darwaza');
var path           = require ('path');

app.listen (3000, function () {
	console.log ("server is running on port 3000");
});

app.set ('view engine','jade');
app.use (express.static (path.join(__dirname, 'public')));

app.use ('/form', form); 
app.use ('/first', first);
app.use ('/phela-darwaza', phela_darwaza);

module.exports = app;




