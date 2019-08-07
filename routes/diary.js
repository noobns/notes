var express = require ('express');
var router  = express.Router ();
var log     = require ('../common/log');

var new_note = require ('../controllers/new-note');

router.get ('/', function (req, res/*, next*/){
	res.render ('../views/diary/diary');
});

router.get ('/new-note', function (req, res/*, next*/){
	res.render ('../views/diary/new-note');
});

router.post ('/new-note', new_note);

router.post ('/ping', function (req, res/*, next*/){
	log.info("Ping route hit ok");
	res.status (200).send ('Hello\n');
});

module.exports = router;
