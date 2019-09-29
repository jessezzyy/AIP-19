var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;
var url = 'mongodb://localhost:27017/Blog';

var user = new Schema({
	name:String,
	username:String,
	password:String
 });
 var User = mongoose.model('users', user); 
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
			  console.log("Saved the user sign up details.");
			  
			 });
		}
	});
	},
	 
	  allusers: function(){
		User.find({},'name',function(err,docs){
			
		})
		return 'wo';
	  }

	


	/*var Post = mongoose.model('Post', {
		title: String,
		content: String,
		author: String,
		create_at: Date,
	  });*/
}
