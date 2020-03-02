// initialize service
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
var cors = require('cors');
app.use(cors());

// initialize sqlite db
var dbFile = './walmart_inhome.db';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);


// create endpoints related to users
app.get('/users', function(request, response) {
  db.all('SELECT * from users', function(err, rows) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(rows));
  });
});

app.post('/upload-user', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  const payloadResponse = {
    message: ''
  };
  // check if UI has passed back name
  if (request && request.query && request.query.name){
    const sqlStatementForFindingPerson = `SELECT * from users WHERE name = '${request.query.name}'`;

    db.all(sqlStatementForFindingPerson, (err, rows) => {
      if (err){
        response.status(500).send(JSON.stringify(payloadResponse));
      } else if (rows && rows.length === 0){ //if user is not found in users table, upload user
        const sqlInsertStatement = `INSERT INTO users (name) VALUES ('${request.query.name}')`;
        db.all(sqlInsertStatement, function(err, rows) {
          if(err){
            response.status(500).send(JSON.stringify(payloadResponse));
          }
          payloadResponse.message = 'user uploaded successfully!';
          response.status(200).send(JSON.stringify(payloadResponse));
        });
      } else { // if user is found don't upload user
        payloadResponse.message = 'user already exists in database';
        response.status(200).send(JSON.stringify(payloadResponse));
      }
    });
  }
  else {
    response.status(500).send();
  }
});

app.post('/delete-user', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  const payloadResponse = {
    message: ''
  };
  // check if UI has passed back name
  if (request && request.query && request.query.name){
    const sqlStatementForFindingPerson = `SELECT * from users WHERE name = '${request.query.name}'`;

    db.all(sqlStatementForFindingPerson, (err, rows) => {
      if (err){
        response.status(500).send(JSON.stringify(payloadResponse));
      } else if (rows && rows.length > 0){ // if user is present, delete user
        const sqlDeleteStatement = `DELETE from users WHERE name = '${request.query.name}'`;
        db.all(sqlDeleteStatement, function(err, rows) {
          if(err){
            response.status(500).send(JSON.stringify(payloadResponse));
          }
          payloadResponse.message = 'user deleted!';
          response.status(200).send(JSON.stringify(payloadResponse));
        });
      } else { // if user is not present in users, don't delete user
        payloadResponse.message = 'no user found to delete';
        response.status(200).send(JSON.stringify(payloadResponse));
      }
    });
  }
  else {
    response.status(500).send();
  }
});

// create endpoints related to items
app.get('/items', function(request, response) {
  db.all('SELECT * from items', function(err, rows) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(rows));
  });
});

app.post('/upload-item', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  const payloadResponse = {
    message: ''
  };
  // check if UI has passed back name
  if (request && request.query && request.query.name){
    const sqlStatementForFindingPerson = `SELECT * from items WHERE name = '${request.query.name}'`;

    db.all(sqlStatementForFindingPerson, (err, rows) => {
      if (err){
        response.status(500).send(JSON.stringify(payloadResponse));
      } else if (rows && rows.length === 0){
        const sqlInsertStatement = `INSERT INTO items (name) VALUES ('${request.query.name}')`;
        db.all(sqlInsertStatement, function(err, rows) {
          if(err){
            response.status(500).send(JSON.stringify(payloadResponse));
          }
          payloadResponse.message ='item uploaded successfully!';
          response.status(200).send(JSON.stringify(payloadResponse));
        });
      } else {
        payloadResponse.message = 'item already exists in database';
        response.status(200).send(JSON.stringify(payloadResponse));
      }
    });
  }
  else {
    response.status(500).send();
  }
});

app.post('/delete-item', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  const payloadResponse = {
    message: ''
  };
  // check if UI has passed back name
  if (request && request.query && request.query.name){
    const sqlStatementForFindingPerson = `SELECT * from items WHERE name = '${request.query.name}'`;

    db.all(sqlStatementForFindingPerson, (err, rows) => {
      if (err){
        response.status(500).send(JSON.stringify(payloadResponse));
      } else if (rows && rows.length > 0){
        const sqlDeleteStatement = `DELETE from items WHERE name = '${request.query.name}'`;
        db.all(sqlDeleteStatement, function(err, rows) {
          if(err){
            response.status(500).send(JSON.stringify(payloadResponse));
          }
          payloadResponse.message = 'item deleted!';
          response.status(200).send(JSON.stringify(payloadResponse));
        });
      } else {
        payloadResponse.message = 'no item found to delete';
        response.status(200).send(JSON.stringify(payloadResponse));
      }
    });
  }
  else {
    response.status(500).send();
  }
});

// create endpoints related to orders
app.get('/orders', function(request, response) {
  db.all('SELECT o1.order_id, o1.item_id, o2.id, o2.user_id, i1.name as item_name, u1.name as user_name from order_items o1, orders o2, items i1, users u1 where o1.order_id = o2.id and o1.item_id=i1.id and o2.user_id=u1.id', function(err, rows) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(rows));
  });
});

app.get('/orderstbl', function(request, response) {
  db.all('SELECT * from orders', function(err, rows) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(rows));
  });
});

app.get('/orderitemstbl', function(request, response) {
  db.all('SELECT * from order_items', function(err, rows) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(rows));
  });
});

app.post('/upload-order', function(request, response) {
  const payloadResponse = {
    message: ''
  };
  // first insert into orders table with user id
  db.all(`INSERT INTO orders (user_id) VALUES (${request.query.userId})`, function(err, rows) {
    response.setHeader('Content-Type', 'application/json');
    if (err){
      response.status(500).send(JSON.stringify(payloadResponse));
    }
    let order_id = 0;
    // second after inserting to orders, get count of orders table to find the latest order id
    db.all('SELECT * from orders', function(err, rows) {
      if (err){
        response.status(500).send(JSON.stringify(payloadResponse));
      }
      order_id = rows.length;
      // third insert into order_items table, order id and item id
      db.all(`INSERT INTO order_items (order_id, item_id) VALUES (${order_id}, ${request.query.itemId})`, function(err, rows) {
        if (err){
          response.status(500).send(JSON.stringify(payloadResponse));
        }
        payloadResponse.message = 'successfully uploaded order!';
        response.status(200).send(JSON.stringify(payloadResponse));
      });
    });
  });
});

// listen app on port 6069
app.listen(6069, () => {
  console.log("Server running on port 6069");
});