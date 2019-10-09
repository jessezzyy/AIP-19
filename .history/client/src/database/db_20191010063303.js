var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var url = "mongodb+srv://jessezzyy:520WOcaonima!@aip2019-rbm87.mongodb.net/Blog?retryWrites=true&w=majority";

var user = new Schema({
	name:String,
	username:String,
	password:String
 });

 const ImgSchema = new Schema({
		_id: { type: Schema.ObjectId, ref: 'DisSchema' },
		imgauthor: String,
		imgurl: String,
		imgkey_id: String,
		timestamp: { type: Date, default: Date.now}
	
  });
  
  const DisSchema = new Schema({
	img: ImgSchema,
		author: String,
		url: String,
		key_id: String,
		timestamp: { type: Date, default: Date.now}
  });
 
 var User = mongoose.model('users', user); 
 var Img = mongoose.model('images', ImgSchema);
 var Discuss = mongoose.model('discussions', DisSchema); 

 mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {
	validateSignIn: function(username, password,callback){
		User.findOne( { username : username ,password: password 
			},function(err, result){
				if(result==null){
					callback(false);
				}
				else{
					callback(true);
				}
			});
	},

	signup: function(name, username, password,callback){
		var name = new User({ name: name, username: username, password: password});
		User.find({username: username}).exec(function(err,docs){
           if(docs.length){
			callback(false);
			console.log('exist');
		   }else{
		     name.save(function (err,doc) {
			  callback(true);
			  console.log("Saved the user sign up details");
			  
			 });
		}
	});
	},
	 
	  allusers: function(callback){  
		User.find({},{'name':1,'username':1,'_id': 0},function(err,docs){
			callback(docs);
		});
	  },

	  storeimage: function(author, url, id){
		var newDis = new Discuss;
		newDis.author=author;
		newDis.url=url;
		newDis.key_id=id;
		newDis.save();
	  },

	  getAllImg: function(callback){
		Discuss.find({},{'url':1,'key_id':1,'author':1,'_id': 0},function(err,docs){
			callback(docs);
		});
	  },

	  storeReply: function(key, author, url, id){
		  var newImg = new Img;
		  newImg.imgauthor= author;
		  newImg.url=url;
		  newImg.key_id=id;
		Discuss.update({key_id:key},newImg, function(err, raw) {
			if (err) {
			  console.log(err);
			}
			console.log(raw);
		  });
	  }
}
