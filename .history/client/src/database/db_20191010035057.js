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
		Id: { type: Schema.ObjectId, ref: 'DisSchema' },
		author: String,
		url: String,
		key_id: String,
		timestamp: { type: Date, default: Date.now}
	
  });
  
  const DisSchema = new Schema({
	img: ImgSchema,
	discussion: { 
		author: String,
		url: String,
		key_id: String,
		timestamp: { type: Date, default: Date.now}
	}
  });
 
 var User = mongoose.model('users', user); 
 var Image = mongoose.model('images', ImgSchema); 

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
		var new_img = new Image;
		new_img.author=author;
		new_img.url=url;
		new_img.key_id=id;
         new_img.save();
	  },

	  getAllImg: function(){
		  
	  }
       
	


	/*var Post = mongoose.model('Post', {
		title: String,
		content: String,
		author: String,
		create_at: Date,
	  });*/
}
