var express = require ('express');
var router  = express.Router ();
var log     = require ('../common/log');

router.get ('/', function (req, res, next){
	res.render ('../views/diary/diary');
});

router.get ('/new-note', function (req, res, next){
	res.render ('../views/diary/new-note');
});

router.post ('/ping', function (req, res, next){
	log.info("I am being called");
	res.send ("hello");
});

module.exports = router;
