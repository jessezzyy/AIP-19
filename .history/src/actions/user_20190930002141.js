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

module.exports = {
	validateSignIn: function(username, password,callback){
		
		MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, database){
          console.log("Connected successfully to server");
          var db = database.db('Blog');
			db.collection('users').findOne( { username : username ,password: password 
			},function(err, result){
				if(result==null){
					callback(false);
				}
				else{
					callback(true);
				}
			});
		});
	},

	signup: function(name, username, password,callback){
		mongoose.connect('mongodb://localhost/Blog',{ useNewUrlParser: true, useUnifiedTopology: true});
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
		mongoose.connect('mongodb://localhost/Blog',{ useNewUrlParser: true, useUnifiedTopology: true});
		User.find({},'name',function(err,docs){
			return docs;
		})
	  }

	


	/*var Post = mongoose.model('Post', {
		title: String,
		content: String,
		author: String,
		create_at: Date,
	  });*/
}
