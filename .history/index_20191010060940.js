const http = require('http');
const fs = require('fs');
const multer = require('multer');
var cloudinary = require('cloudinary');
const cloudinaryStorage = require("multer-storage-cloudinary");
var express = require('express');
var session = require('express-session');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var db = require('./client/src/database/db');
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
  db.validateSignIn(username,password,function(result){
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
  	db.signup(name, username, password,function(result){
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

/*refer to https://www.freecodecamp.org/news/how-to-allow-users-to-upload-images-with-node-express-mongoose-and-cloudinary-84cefbdff1d9/*/
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "images",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }] //optional, from a demo
});

var parser = multer({ storage: storage })

app.post('/32',parser.single("myImage"), (req, res) => {
  var url = req.file.url;
  var id = req.file.public_id;
  console.log(url);
  console.log(id);
  if(sessions&&sessions.username){
    db.storeimage(sessions.username, url, id)
    res.send('Sucess');
  }else
  res.send('please log in');
});

app.post('/upload',function(req, res) {
     var parUrl =  req.body.url;
     console.log(parUrl);
     parser.single("myImage"), (req, res) => {
    var url = req.file.url;
  var id = req.file.public_id;
  }
    return res.status(200).send(req.file)

  });


app.post('/getAllImg', function (req, res){
  db.getAllImg(function(result){
    console.log(result);
    res.send(result);
  });
});


app.post('/getList', function (req, res) {
  db.allusers(function(result){
    console.log(result);
    res.send(result);
  });
})

var port = process.env.PORT || 8080;
var server=app.listen(port,function() {
  console.log("app running on port 8080"); });
