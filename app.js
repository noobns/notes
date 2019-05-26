var express        = require ('express');
var path           = require ('path');
var app            = express ();

var login          = require ('./routes/login');
var register       = require ('./routes/register');
var upload_images  = require ('./routes/upload_images');
var diary          = require ('./routes/diary');
var log            = require ('./common/log');
var choices        = require ('./routes/choices');
var config         = require ('./config');


app.set ('view engine','jade');
app.use (express.static (path.join(__dirname, 'public')));

//app.use ('/login', login); 
//app.use ('/register', register);
//app.use ('/choices', choices);
//app.use ('/upload_images', upload_images);
app.use ('/diary', diary);

app.listen (config.port, function () {
	log.info ("NOTES server is running on port : " + config.port);
});

module.exports = app;


