var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Blog';

module.exports = {
	signup: function(name, user, password,callback){
		MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true},  function(err, db) {
		  var db = database.db('Blog');
		  db.collection('users').findOne( {user : username},function(err, result){
			  if(result==null){
				db.collection('users').insertOne( {
					"name": name,
					"user": user,
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
	},

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
	}


	
}
