/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'testDB';
const collection = 'testCollection';

// Create a new database.

use(database);
/*
// Create a new collection.
db.createCollection(collection);

// Create an object for this collection
db.collection.insert({
    title: "Testing 1",
    description: "This is test number 1 for Mongo",
    submitted: "This is a test",
    tags: ['This', 'is', 'a', 'test']
})

// Create multiple objects for this collection
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

// Search for all objects in this collection

db.collection.find()

// Search for one object in this collection

db.collection.findOne()

// Search for objects meeting certain criteria

db.collection.find( {title: "Testing 1"})

*/

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
