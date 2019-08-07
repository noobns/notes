var express        = require ('express');
var path           = require ('path');
var app            = express ();

var log            = require ('./common/log');
var config         = require ('./config');


/*
 * Not used as of now
var login          = require ('./routes/login');
var register       = require ('./routes/register');
var upload_images  = require ('./routes/upload_images');
var choices        = require ('./routes/choices');
*/
var diary          = require ('./routes/diary');



app.set ('view engine','jade');
app.use (express.static (path.join(__dirname, 'public')));

/*
 * Middleware for processing POST request data */
app.use (express.json());     
app.use (express.urlencoded());

//app.use ('/login', login); 
//app.use ('/register', register);
//app.use ('/choices', choices);
//app.use ('/upload_images', upload_images);
app.use ('/diary', diary);

app.listen (config.port, function () {
	log.info ("NOTES server is running on port : " + config.port);
});

module.exports = app;
