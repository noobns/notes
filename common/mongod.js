var mongodb     = require ('mongodb');
var url         = "mongodb://localhost:27017/notes";
var log         = require ('./log');

var __db = null;

function connect (url) {
	mongodb.MongoClient.connect(url, function(err, db) {
		if (err){ 
			log.error ({err : err}, 'error connecting to mongodb');
			return;
		}
		log.info ("Mongodb connect ok");
		__db = db;
	});
}

module.exports = __db;
