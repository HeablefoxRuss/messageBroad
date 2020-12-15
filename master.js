//These are all the thing you need to run the server

//express thing
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
//http thing
const http = require('http');
var fs = require('fs')
const wsServer = require('websocket').server;
const sqlite3 = require('sqlite3');
//More thing ypou need
var db = new sqlite3.Database('login.db');
const server = http.createServer();
//What port the server is listening to so it knows were to look to get things
server.listen(8080);
//uses the http to make a server
const ws = new wsServer({
  httpServer: server
});
//uses the express thing to look for stuff
var app = express();
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/login.html'));
});

app.listen(3000);

app.post('/auth', function(request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    db.get(`SELECT * FROM accounts WHERE username = '${username}' AND password = '${password}';`, function(error, results) {
      if (results) {
        request.session.loggedin = true;
        request.session.username = username;
        response.redirect('/home');
      } else {
        response.send('Incorrect Username and/or Password!');
      }
      response.end();
    });
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});

app.get('/home', function(request, response) {
  if (request.session.loggedin) {
    console.log("IT IS WORKING")
    fs.readFile('index.html', function(err, data) {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(data);
      return response.end();
    });
  } else {
    response.send('Please login to view this page!');
  }
});


let clients = [];
ws.on('request', function(request) {
  const connection = request.accept(null, request.origin);
  clients.push(connection);
  connection.on('message', function(message) {
    console.log('Received message: ' + message.utf8Data);
    data = message.utf8Data.split(':');
    //Broadcast
    clients.forEach(function(client) {
      client.sendUTF(message.utf8Data);
    });
  });
  connection.on('close', function(reasonCode, description) {
    console.log('Client has disconnected');
  });
});
