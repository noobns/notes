var mongodb     = require ('mongodb');
var url         = "mongodb://localhost:27017/notes";
var log         = require ('./log');

function connect (url) {
	mongodb.MongoClient.connect(url, function(err, db) {
		if (err){ 
			log.info ({err : err});
			return;
		}
		console.log("Database created!");

		db.close();
	});
}

function collection (db) { 
	var database = db.db ("notes");

	database.createCollection ("new-note", function(err, res) {
		if (err) {
			log.info ({err : err}, "Error while creating the collection in database notes");
		}
		console.log("Collection created!");

		db.close();
	});
}

function save_notes () {
	if(!db)
		return null;
	return db.collection("new-note");
}

module.exports = connect;
module.exports = collection;
module.exports = save_notes;
