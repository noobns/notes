var express        = require ('express');
var app            = express ();
var login          = require ('./routes/login');
var register       = require ('./routes/register');
var upload_images  = require ('./routes/upload_images');
var diary          = require ('./routes/diary');
var path           = require ('path');
var choices        = require ('./routes/choices');

app.listen (3000, function () {
	console.log ("server is running on port 3000");
});

app.set ('view engine','jade');
app.use (express.static (path.join(__dirname, 'public')));

//app.use ('/login', login); 
//app.use ('/register', register);
app.use ('/choices', choices);
app.use ('/upload_images', upload_images);
app.use ('/diary', diary);

module.exports = app;




