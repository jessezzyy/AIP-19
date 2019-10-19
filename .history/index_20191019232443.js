const multer = require('multer'); //file input
var cloudinary = require('cloudinary'); //upload image to get url
const cloudinaryStorage = require("multer-storage-cloudinary"); //upload image to get url
var express = require('express');  
var session = require('express-session');
var app = express();
const path = require('path'); //load page path
var bodyParser = require('body-parser');
var db = require('./client/src/database/db'); //deal with database api
var cors = require('cors');
var sessions; 

cloudinary.config({ 
  cloud_name: 'aip2019', 
  api_key: '922532683857719', 
  api_secret: 'wptvpeRRhF1GXK_In28CabMUDJ8' 
});

app.use(session({secret: 'my-secret',resave: false,saveUninitialized: false}));
app.use(cors());
app.use(bodyParser.json());//Use the body parser to parse the body of a post
app.use(bodyParser.urlencoded({ extended: true }));//Use the body parser to parse the body of a post
app.use(express.static(path.join(__dirname, 'client/build')));

//load page
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//check if users log in using session
app.post('/', function (req, res) {
  if(sessions&&sessions.username){
    console.log(sessions.username);
    res.send(sessions.username);
    }else
    res.send('nologin');
    
})

//deal with log in request
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

//deal with log out request
app.post('/home/logout',function(req,res){
  sessions.destroy(function(err) {
    sessions = null; 
    res.redirect('/');
  }); 
});

//deal with sign up request
app.post('/signup', function (req, res) {
  sessions=req.session;
  var username=req.body.user;
  var password=req.body.password;

  if(username && password){
  	db.signup( username, password,function(result){
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
//deal with image storage
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "images",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }] //limit image storge size
});

// deal with image upload
var parser = multer({ storage: storage })
app.post('/upload',parser.single("myImage"), (req, res) => {
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

//deal with replyed image upload
app.post('/reply',parser.single("myImage"), (req, res) => {

  var url = req.file.url;
  var id = req.file.public_id;
  console.log(url);
  console.log(id);
  if(sessions&&sessions.username){
    db.storeReply("5d9e14ece93393722183b515",sessions.username, url, id);
    console.log("Sucess");
    res.send('Sucess');
  }else
  res.send('please log in');
});

//deal with showing all images 
app.post('/getAllImg', function (req, res){
  db.getAllImg(function(result){
    console.log(result);
    res.send(result);
  });
});

//deal with showing all users' username
app.post('/getList', function (req, res) {
  db.allusers(function(result){
    console.log(result);
    res.send(result);
  });
})

var port = process.env.PORT || 8080;
var server=app.listen(port,function() {
  console.log("app running on port 8080"); });
