var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var url = "mongodb+srv://jessezzyy:520WOcaonima!@aip2019-rbm87.mongodb.net/Blog?retryWrites=true&w=majority";

var user = new Schema({
	name:String,
	username:String,
	password:String
 });

 var ImgSchema = new Schema({
	author: String,
	url: String,
	key_id: String,
    timestamp: { type: Date, default: Date.now}
});
 
ImgSchema.set('timestamps' true)
 var User = mongoose.model('users', user); 
 var image = mongoose.model('images', ImgSchema); 

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
		User.find({},{'name':1,'_id': 0},function(err,docs){
			callback(docs);
		});
	  },

	  storeimage: function(author, imgurl, contentType, key){
		var new_img = new image;
		new_img.img.data = imgurl;
		new_img.img.key = key;
		new_img.img.discussion = key;
		new_img.img.contentType = contentType;
		new_img.img.author = author;
         new_img.save();


		
	  }
       
	


	/*var Post = mongoose.model('Post', {
		title: String,
		content: String,
		author: String,
		create_at: Date,
	  });*/
}
