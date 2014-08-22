M101JS
======
------

Non relational stores JSON documents

**J**ava**S**cript**O**bject**N**otation (JSON)

Node
---

Asynchronous vs. Synchronous
---

**Modeling the Blog in Mongo**
---

    posts {
	
		title: "Blah Blah Blah",
		body: ".....",
		comments: [{
					name: "Han Solo",
					email: "hsolo@rebel.com",
					author: "alsdfasdf",
					comment: "........."
					}],

		tags: ["Blah", ".....", "Whatever"]	

	}

	authors {
		_id: "blahs",
		password: "******",
		
	}


**To embed or not embed???**
---

**CRUD & the mongo shell**
--

- Mongodb's CRUD operations exist as methods/functions in programming language API's not as a separate language.
- **npm install consolidate --save | saves to package.json!!!**

>        z = { a : 1, b : 3, c : 9, d : 729 }
>        z.a or z["a"] = whatever is in the first position
>        z.c = is what is in the 3rd position

     obj = { "a" : 1, "b" : "hello", "c" : ["apples", "peaches"] }

- BSON = Binary JSON

**Inserting Documents**
---

     doc = { "Name" : "Luke", "Age" : 45, "Profession" : "Jedi" }

     db.people.insert({ "Name" : "Luke", "Age" : 45, "Profession" : "Jedi" })

     db.people.insert( doc )

     db.people.findOne() = picks one document at random

     db.people.findOne({ "Profession" : "Queen Mother" }) // find one entry with Queen Mother

     db.people.find( { "Profession" : "Queen Mother" } ) // finds all entries with Queen Mother

     db.people.findOne({ "Name" : "Luke" }, { "Name" : true, "_id" : false })  // set which columns come back from the query

**Find commmand**
---

    db.people.find()
    db.people.find().pretty() // makes it look better

    db.people.find({ student : xxx })
    db.people.find({ student : xxx, type : "blah" })

    db.people.find({ student : xxx, type : "blah" }, { "score" : true })
    db.scores.find( { type : "essay", score : 50 }, { student: true, _id: false })

**$gt(e) & $lt(e) commmand**
---

    db.people.find({ age : { $gt : 50 } })
    db.people.find({ age : { $gt : 50 }, { _id : false} })

    db.people.find({ age : { $gte : 50, $lte : 60 } })

**Strings**
---
     db.people.find({ Name :{ $lt : "L" } } );
     (Nope)db.people.find({ Name :{ $lt : "L" } , { _id : false} } );

	 db.people.find( { Name: { $lt : "L", $gt : "B" } } )
	 db.people.find( { Name: { $lte : "L", $gte : "B" } } )

**Regexes, $exists, $type**
---

    db.people.find( { Profession : { $exists : true } } )
    db.people.find( { Profession : { $exists : false } } )

    db.people.find( { name : { $type : 2 } } ) // 1 string 2 numeric

    db.people.find( { Name: { $regex : "e$" } } )
    db.people.find( { Name: { $regex : "^A" } } )

	Write a query that retrieves the docs from a users collection where the name has a "q" in int, and the document has an email field.

    db.users.find({ name : { $regex : "q" }, email : { $exists: true } } );

**$or and $and**
---

    db.people.find( { $or : [ { Name : { $regex : "e$" } }, { age: { $exists: true } } ] } )

    db.scores.find( { $or : [ { score : { $lt : 50 }, { score : {$gt : 90 }}}]}); 

    db.people.find( { $and : [ { Name : { $gt : "A" }}, { Name : { $regex : "n" }} ] } );
		below is more effective
    db.people.find( { Name : { $gt : "C", $regex : "a" } } );

**Querying inside arrays**
---

    db.leagues.insert( { Conference : "ACC", University : ["Boston College", "Clemson", "Duke", "Florida State", "Georgia Tech", "Louisville", "Miami", "North Carolina", "North Carolina State", "Notre Dame", "Pitt", "Syracuse", "Virgina", "Virgina Tech", "Wake Forest"], Sports: ["Skeet Shooting", "Golf", "Men's Basketball", "Football", "Volleyball", "Speech"] } );

    db.leagues.insert( { Conference : "American", University : ["Cincinnati", "East Carolina", "Houston", "Memphis ", "SMU", "Temple", "Tulane", "Tulsa", "UCF", "UCONN", "USF"], Sports: ["Water Polo", "Women's Basketball", "Skeet Shooting", "Football", "Golf", "Hockey"] } );

    db.leagues.insert( { Conference : "Big Ten", University : ["Illinois", "Indiana", "Iowa", "Maryland", "Michigan", "Michigan State", "Minnesota", "Nebraska", "Northwestern", "Ohio State", "Penn State", "Purdue", "Rutgers", "Wisconsin"], Sports: ["Bowling", "Women's Basketball", "Track and Field", "Football", "Volleyball", "Golf"] } );

    db.leagues.insert( { Conference : "Pac 12", University : ["Arizona", "Arizona State", "California", "Colorado", "Oregon", "Oregon State", "Stanforn", "UCLA", "USC", "Utah", "Washington", "Washington State"], Sports: ["Golf", "Women's Basketball", "Skeet Shooting", "Football", "Volleyball", "Water Polo"] } );

    db.leagues.insert( { Conference : "SEC", University : ["Alabama", "Arkanas", "Auburn", "Florida", "Georgia", "Kentucky", "Miami", "LSU", "Mississippi State", "Missour", "Ole Miss", "South Carolina", "Tennessee", "Texas A&M", "Vanderbilt"] , Sports: ["Speech", "Women's Basketball", "Men's Basketball", "Football", "Volleyball", "Water Polo"]} );

    db.leagues.insert( { Conference : "Big 12", University : ["Baylor", "Iowa State", "Kansas", "Kansas State", "Oklahoma", "Oklahoma State", "Texas Christian", "Texas", "Texas Tech", "West Virginia"] , Sports: ["Bowling", "Women's Basketball", "Men's Basketball", "Football", "Volleyball", "Water Polo"]} );

    db.leagues.find( { Sports : "Golf" } );

**$all and $in**
---

    db.leagues.find( { Sports : { $all : ["Skeet Shooting", "Football"] } } );

    db.leagues.find( { Sports : { $in : ["Water Polo", "Bowling"] } } );

**Queries with dot Notation**
---

    db.users.insert( { name : "Whatever", email : { work : "blah@blah.com", personal: "Whatever@blah.com"  } } )
    db.users.insert( { name : "Wherever", email : { work : "blah@Where.com", personal: "Wherever@Where.com"  } } )
    db.users.insert( { name : "Whoever", email : { work : "who@blah.com", personal: "Whoever@Who.com"  } } )
    db.users.insert( { name : "Forever", email : { work : "For@ever.com", personal: "everFor@Where.com"  } } )
    db.users.insert( { name : "However", email : { work : "hever@how.com", personal: "hever@gmail.com"  } } )
    db.users.insert( { name : "Something", email : { work : "thing@some.com", personal: "some@thing.com"  } } )

    db.users.find( { email: { work: "Blah@Where.com", personal : "Wherever.Where.com" } } );

    db.users.find( { "email.work" : "who@blah.com" } );

Write a query that finds all products that cost more than 10,000 and that have a rating of 5 or better.

    db.catalog.find( { price : { $gt : 10000 } , "reviews.rating" : { $gte : 5 } } );

**Querying, Cursors**
---

    cur = db.people.find(); null;

	cur.hasNext()

	cur.next()

	while (cur.hasNext()) printjson(cur.ext());

    cur.limit(5)

    cur.sort( { name : -1 } );

    db.scores.find( { type : "exam" } ).sort( { score : -1 } ).skip(50).limit(20)

**Counting Results**
---

    db.people.count( { Weapon : "Lightsaber" });  

How would you count the documents in the scores collection where the type was "essay" and the score was greater than 90?

    db.scores.count({ type:"essay", score:{$gt:90}});  

**Wholesale Updating of a document**
---

    db.people.update({ Name: 88 }, { Name: "IG 88", Weapon : "Vibrowhip" } )

    *** this will remove any other fields for IG 88 ***

**$set**
---

    db.people.update ( { Name: 88 }, { $set : { age : 150 } } )

    db.people.update ( { Name: "IG 88" }, { $inc : { age : 10 } } )

    db.users.update( { '_id':'myrnarackham'}, {'$set':{'country':'RU'}})

**$unset**
---

    db.users.update( { '_id':'myrnarackham'}, {'$unset':{'country':'RU'}})

	db.users.update({_id: 'jimmy'}, {$unset: {interests:1}}) // any value will work

**$push, $pop, $pull, pushAll, pullAll, and addToSet**
---

    db.arrays.insert( { _id : 0, a : [1, 3, 5, 7]})

    db.arrays.update( { _id : 0 }, { $set : "a.2" : 5 } } )  // array field name . decimal place : replacement value

    db.arrays.update( { _id : 1 }, { $push : { a : 6 } } ) // push adds to the right side

    db.arrays.update( { _id : 1 }, { $pop : { a : 1 } } ) // remove the right most element

    db.arrays.update( { _id : 3 }, { $pop : { a : -1 } } ) // remove the left most

    db.arrays.update( { _id : 2 }, { $pushAll : { a : [ 10, 12, 14 ] } } ) // add multiple values to the right

    db.arrays.update( { _id : 2 }, { $pullAll : { a : [ 10, 12, 14 ] } } ) // remove things

    db.arrays.update( { _id : 3 }, { $pull : { a : 14 } } ) // removes a number regardless of position

    db.arrays.update( { _id : 2 }, { $addToSet : { a : 12 } } ) // acts as a push...does nothing if exists

Suppose you have the following document in your friends collection:
    
> { _id : "Mike", interests : [ "chess", "botany" ] }

What will the result of the following updates be?
>     db.friends.update( { _id : "Mike" }, { $push : { interests : "skydiving" } } );
>     db.friends.update( { _id : "Mike" }, { $pop : { interests : -1 } } );
>     db.friends.update( { _id : "Mike" }, { $addToSet : { interests : "skydiving" } } );
>     db.friends.update( { _id : "Mike" }, { $pushAll: { interests : [ "skydiving" , "skiing" ] } } );
 
**Result:** 
    
> { _id : "Mike" , "interests" : [ "botany", "skydiving", "skydiving", "skiing" ] }

**Upserts**
---

    db.people.update( { Name: "Tycho" }, { $set : { age : 41 } }, { upsert : true } ) // adds a new document

**$Multi-update**
---

    db.people.update( {  } , { $set : { Status : "Active" } }, { multi : true } ) // updates all documents

	db.people.update( { 'Age': { $lt:35}}, { $inc:{Age:20}}, { multi : true } ) // increases age by 20 for anyone under 35

**Removing Data**
---

	db.people.remove( { name : 7 } ) // remove 

    db.people.remove( { } ); // remove all

	db.people.remove( { Age: {$lt:25}})

**getLastError** (MongoDb 2.4 and earlier)
---

    (Not worried about this)

**Node find, findOne, and cursors**
---

    mongoimport -d database -c collection grades.json

    db.collection('grades').findOne(query, callback); (Quiz answer)

**Using Field Projection**
---

    db.collection('grades')find({}, {'grade':1, '_id':0}, callback); (Quiz 

---

 mongoimport --headerline --type csv

**What port?**

> sudo lsof -iTCP -sTCP:LISTEN | grep mongo