const http = require('http');
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var user = require('./actions/user');

var cors = require('cors');

app.use(session({secret: 'my-secret',resave: true,saveUninitialized: true}));
app.use(cors());
app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body
var sessions;

app.use(express.static('public'));

app.get('/', function (req, res) {
  if(sessions.username){
    console.log("you")
    console.log(sessions.username);
    res.redirect('/user'+sessions.username);
  }
  else{
   console.log("meiyou")
    res.sendFile(__dirname + '/containers/Home.js');
  }
})

app.post('/login', function (req, res) {
  sessions=req.session;
  var username=req.body.user;
  var password=req.body.password;
  user.validateSignIn(username,password,function(result){
    if(result){
      console.log('ok');
      sessions.username = username;
      console.log(sessions.username);
      res.send('Success');
    }
    else{
      console.log('fail');
      res.send('Failure');
    }
  }); 
})

app.post('/signup', function (req, res) {
  var name=req.body.name;
  var username=req.body.user;
  var password=req.body.password;

  if(name && username && password){
  	user.signup(name, username, password,function(result){
      if(result){
        console.log('ok');
        res.send('Success');
      }
      else{
        console.log('fail');
        res.send('Failure');
      }
    }); 
   }
   else{
  	res.send('please fill information');
  }
})

app.get('/test', function (req, res) {
  if(sessions && sessions.username){
    console.log(sessions);
    console.log(sessions.username);
    res.render('../public/index.html', {username: sessions.username})
  }
  else{
    res.send('unauthorized');
  }
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("ip: http://%s:%s", host, port)
})

