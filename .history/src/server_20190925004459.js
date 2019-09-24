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

app.post('/', function (req, res) {
  if(sessions&&sessions.username){
    console.log(sessions.username);
    res.send(sessions.username);
    }else
    res.send('mei');
    
})

app.get('/user:username',function(req,res){
   if(sessions&&sessions.username){
     res.send(sessions.username);
     console.log(sessions.username);
   }else 
     res.send('mei');
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
});

app.get('/user/logout',function(req,res){
  sessions.destroy(); 
  res.send('Log out succussfully');    
});

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
    res.redirect('/');
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

