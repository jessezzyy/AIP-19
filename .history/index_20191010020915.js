const http = require('http');
const fs = require('fs');
const multer = require('multer');
var cloudinary = require('cloudinary').v2;
var express = require('express');
var session = require('express-session');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var user = require('./client/src/actions/user');
var cors = require('cors');

cloudinary.config({ 
  cloud_name: 'aip2019', 
  api_key: '922532683857719', 
  api_secret: 'wptvpeRRhF1GXK_In28CabMUDJ8' 
});

app.use(session({secret: 'my-secret',resave: false,saveUninitialized: false}));
app.use(cors());
app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body
var sessions;
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post('/', function (req, res) {
  if(sessions&&sessions.username){
    console.log(sessions.username);
    res.send(sessions.username);
    }else
    res.send('meiyou');
    
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

app.post('/home/logout',function(req,res){
  sessions.destroy(function(err) {
    sessions = null; 
    res.redirect('/');
  }); 
});

app.post('/signup', function (req, res) {
  sessions=req.session;
  var name=req.body.name;
  var username=req.body.user;
  var password=req.body.password;

  if(name && username && password){
  	user.signup(name, username, password,function(result){
      if(result){
        sessions.username = username;
        console.log('ok');
        res.send('Success');
      }
      else{
        console.log('fail');
        res.send('username is existed');
      }
    }); 
   }
   else{
  	res.send('please fill information');
  }
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})
var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
  upload(req, res, err);
});

app.post('/upload', function (req, res) {
  if(sessions&&sessions.username){
    var author = sessions.username;
    var imgurl = req.body.imgurl;
    var contentType = imgurl.split(":")[1];
    contentType = contentType.split(";")[0];
    var bindata = new Buffer(imgurl.split(",")[1],"base64");
    var key = imgurl.split("/")[4];
    key = key.split("A")[0];
    user.storeimage(author, imgurl, contentType, key);
        res.send('Success');
    }else
    res.send('please log in');
});

app.post('/getDis', function (req, res){
   user.getImage();
});


app.post('/getList', function (req, res) {
  user.allusers(function(result){
    console.log(result);
    res.send(result);
  });
})

var port = process.env.PORT || 8080;
var server=app.listen(port,function() {
  console.log("app running on port 8080"); });
