//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//object destructuring



//The connection string to our database
MongoClient.connect('mongodb://localhost:27017/ToDoApp', function(err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    
    //create a new table (called 'collection' in MongoDB)
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, function(err, result) {
//        if (err) {
//            return console.log('Was unable to insert new record', err);
//        }
//        
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
//    db.collection('Users').insertOne({
//        name: "Max",
//        age: 23,
//        location: "Philadelphia, PA"
//    }, function(err, result) {
//        if (err) {
//            return console.log("Unable to add new record");
//        }
//        
//        console.log(result.ops[0]._id.getTimestamp());
//    })
    
    db.close();
});