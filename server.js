//express libraries
const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      app = express();

//open server on port.
const port = process.env.PORT || 5000;
app.listen(port);
console.log('Server started on port ' + port + '.');

//bodyparser library necessary for parsing json requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongoDB
const mongoDB = require('./db-config.js').mongoDB;

const MongoClient = require('mongodb').MongoClient,
      ObjectId = require('mongodb').ObjectID;

//initiate mongoDB connection and make get and post requests in the connection for db access
MongoClient.connect(mongoDB.uri, function(err, client) {
  if (err) throw err;
  var db = client.db(mongoDB.dbname);

  //gets story given mongo ObjectId or entire collection if no given ID
  app.get('/api', (req, res, next) => {
    if (req.query.id != undefined) {
      const id = req.query.id;
      db.collection(mongoDB.collection).find({id: id}).toArray(function(err, results) {
        if (err || results.length == 0) {
          res.sendStatus(404); //404 not found
          return console.log(err);
        }
        else {
          res.send(results);
          console.log("Retrieved Room.");
          return;
        }
      })
    }
    else {
        db.collection(mongoDB.collection).find().toArray(function(err, results) {
          if (err || results.length == 0) {
            res.sendStatus(404); //404 not found
            return console.log("err");
          }
          else {
            res.send(results);
            console.log("Retrieved Rooms.");
            return;
          }
        })
    }
  });

  //update the story with the given mongoDB ObjectID
  app.put('/api', (req, res, next) => {
    var newInfo = req.body;
    console.log(req.body);
    console.log(req.query);
    db.collection(mongoDB.collection).replaceOne(
      {id: req.query.id},
      newInfo)
      .then(function(result) {
      console.log("Updated Data");
      res.end();
    }) 
  });

  //serve static html for production ready app
  
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

});
