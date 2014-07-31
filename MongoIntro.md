# Intro to MongoDb #

*My own personal notes :)*


----------

[http://www.mongodb.org](http://www.mongodb.org)

----------

**Replica Sets**



1. Primary DB - one and only writable instance
1. Secondary DB - read-only instances of primary
1. Arbiter DB - 

Mongo holds an election to see which instance becomes the primary

mongo --port xxxxxx

Find replica set...

**MongoDB Shell Commands**


Interactive Shell

1. Runs Javascript (Not just issuing CRUD)
2. Administrative tasks
3. Spelunk Data
4. Fix or modify some documents

Shell Quick Reference Keystrokes

- Ctrl + A = Start of line
- Ctrl + E = End of line
- Ctrl + K = delete to the end of the line
- Ctrl + L = Clear Screen


**Storing Data**

- All documents must have an _id field

>     db.<collection>.command
>     
>     objectid 
>     
>     objectid().getTimestamp()
>     
>     db.<collection>.save({ _id: x, blah blah })
>     
>     	db.<collection>.insert({ _id: x, blah blah })
>     
>     	db.user.insert({ first_name:'Han', last_name:'Solo' });

- Update -- is atomic within the document

>     db.collection.update();

Increment by x

    > db.foo.update({ _id:1, {$inc:{x:1}})