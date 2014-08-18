# Intro to Nodejs #

*My own personal notes :)*


----------

**Asynchronous vs Synchronous (IO)**
---

    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
		if (err) throw err;

		// find one document
		db.collection.('coll').findOne({}, function(err, doc) {
			// Print result
			console.dir(doc);

			// close the db connection
			db.close();
					
		});

		// Declare success
		console.dir("Called findOne!!!");
    });

- npm install express@3.x
- npm install swig
- npm install consolidate
- npm install mongodb

JSON

- Arrays - list of things [.....]
- Dictionaries - associative maps { "keyword" : "value" }

>     Array = {"fruit": ["apple", "pear", "peach"]}
>     Subdocuments = {"address": {"street_address": "23 Elm Drive", "city": "Palo Alto", "state": "California", "zipcode": "94305"} }


    



