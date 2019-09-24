const http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user = require('./actions/user');

var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body

app.use(express.static('public'));

app.post('/login', function (req, res) {
  var username=req.body.user;
  var password=req.body.password;
  user.validateSignIn(username,password,function(result){
    if(result){
      console.log('ok');
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

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("ip: http://%s:%s", host, port)
})

