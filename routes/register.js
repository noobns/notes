var express = require ('express');
var router  = express.Router ();

/*var form_open = require ('../controllers/form');
router.get ('/form',form_open);
*/
router.get ('/', function (req, res, next){
	res.render("../views/register");
});

module.exports = router;
