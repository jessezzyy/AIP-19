const http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user = require('./actions/user');

var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body

/*app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
*/
app.use(express.static('public'));

/*app.post('/login', function (req, res) {  
  let username = req.body.user; 
  let password = req.body.password; 
  console.log(username);
  console.log(password);
  let message1 = {success:true}
  let message2 = {success:false}
  user.validateSignIn(username,password,function(result){
    if(result){
      res.send(message1)
    }
    else{
      res.send(message2)
    }
  });
})*/

app.post('/login', function (req, res) {
  var user_name=req.body.user;
  var password=req.body.password;
  user.validateSignIn(user_name,password,function(result){
    if(result){
      console.log(user_name)
      res.send('Success')
    }
    else{
      res.send('Wrong username pass')
    }
  }); 
})

app.post('/signup', function (req, res) {
  var name=req.body.name;
  var user=req.body.username;
  var password=req.body.password;

  if(name && username && password){
  	user.signup(name, username, password)
  }
  else{
  	res.send('Failure');
  }
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("ip: http://%s:%s", host, port)
})

