var log     = require ('../common/log');
var mongodb = require ('../common/mongod');

var db = {};

db.save_note = function (data) {
	var collection = mongodb.save_notes ();
	var notes      = data.notes;

	collection.insert(
		{	
			notes : notes
		},
		function (err, results) {
			if (err)
				log.info ({err : err});
			log.info ({results : results});
		});
}


module.exports = db;
