//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//object destructuring



//The connection string to our database
MongoClient.connect('mongodb://localhost:27017/ToDoApp', function(err, db) {
    
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    
    
    //passing any parameters to .find() lets you query the database
//    db.collection('Todos').find({completed: false}).toArray().then(function(docs) {
//        
//        console.log("Listing all the to do notes");
//        console.log(JSON.stringify(docs, undefined, 2));
//        
//    }, function(err) {
//        
//            console.log("Was not able to fetch the requested data", err);
//        
//    });
//    
    
//    db.collection('Todos').find().count().then(function(count) {
//        
//        console.log(`Number of things to do: ${count}`);
//       
//        
//    }, function(err) {
//        
//            console.log("Was not able to fetch the requested data", err);
//        
//    });


    db.collection('Users').find({name: 'Max'}).toArray().then(function(docs) {
        
        console.log("Number of people named Max");
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, function(err) {
        
            console.log("Was not able to fetch the requested data", err);
        
    });
    
    db.collection('Users').find({name: 'Max'}).count().then(function(count) {
        
        console.log(`\nNumber of people called Max: ${count}`);
       
        
    }, function(err) {
        
            console.log("Was not able to fetch the requested data", err);
        
    });
    
    
//    db.close();
});