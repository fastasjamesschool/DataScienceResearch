## Create a new database.
use(database);  
## Database currently being used
db
## Databases available
show dbs
## Create a new collection.
db.createCollection(collection);  
## Create an object for this collection
db.collection.insert({  
    title: "Testing 1",  
    description: "This is test number 1 for Mongo",  
    submitted: "This is a test",  
    tags: ['This', 'is', 'a', 'test']  
})
## Create multiple objects for this collection
db.collection.insertMany([{  
    title: "Testing 2",  
    description: "This is test number 2 for Mongo",  
    submitted: "This is a test",  
    tags: ['This', 'is', 'a', 'test']  
},  
{  
    title: "Testing 3",  
    description: "This is test number 3 for Mongo",  
    submitted: "This is a test",  
    tags: ['This', 'is', 'a', 'test']  
},  
{  
    title: "Testing 4",  
    description: "This is test number 4 for Mongo",  
    submitted: "This is a test",  
    tags: ['This', 'is', 'a', 'test']  
}])

## Search for all objects in this collection

db.collection.find()

## Search for one object in this collection

db.collection.findOne()

## Search for objects meeting certain criteria

db.collection.find( {title: "Testing 1"})