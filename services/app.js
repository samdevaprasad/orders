// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
var cors = require('cors');
app.use(cors());

// init sqlite db
var fs = require('fs');
var dbFile = './walmart_inhome.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

// check if db has data
db.serialize(function(){
  if (!exists) {
    console.log('oh no nothing exists!');
  }
  else {
    console.log('awesome we have data!');
  }
});

// create endpoints
app.get('/users', function(request, response) {
  db.all('SELECT * from users', function(err, rows) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(rows));
  });
});

app.get('/items', function(request, response) {
    db.all('SELECT * from items', function(err, rows) {
      response.send(JSON.stringify(rows));
    });
  });

app.get('/orders', function(request, response) {
db.all('SELECT * from orders', function(err, rows) {
    response.send(JSON.stringify(rows));
    });
});

app.get('/order_items', function(request, response) {
db.all('SELECT * from order_items', function(err, rows) {
    response.send(JSON.stringify(rows));
    });
});

app.listen(6064, () => {
    console.log("Server running on port 6063");
   });