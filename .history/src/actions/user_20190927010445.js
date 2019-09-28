var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var assert = require('assert');
var url = 'mongodb://localhost:27017/Blog';

module.exports = {
	/*signup: function(name, username, password,callback){
		MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true},  function(err, database) {
		  var db = database.db('Blog');
		  db.collection('users').findOne( {user : username},function(err, result){
			  if(result==null){
				db.collection('users').insertOne( {
					"name": name,
					"user": username,
					"password": password
				},function(err, result){
					assert.equal(err, null);
					callback(true);
					console.log("Saved the user sign up details.");
				});
			  }
			  else{
				callback(false);
			  }
		  });
		});
	},*/

	validateSignIn: function(username, password,callback){
		
		MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, database){
          console.log("Connected successfully to server");
          var db = database.db('Blog');
			db.collection('users').findOne( { user : username ,password: password 
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
		mongoose.connect('mongodb://localhost/Blog');
		var User = mongoose.model('User', {
			name: String,
			username: String,
			password: String,
		  });
		  var name = new User({ name: name, username: username, password: password});
		  name.save(function (err,name) {
			   console.log(name);
			  if(assert.equal(err, null)){
				callback(true);
				console.log("Saved the user sign up details.");
			  }else
			    callback(false);
			});
	}


	/*var Post = mongoose.model('Post', {
		title: String,
		content: String,
		author: String,
		create_at: Date,
	  });*/
}
