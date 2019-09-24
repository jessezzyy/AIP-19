var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Blog';

module.exports = {
	signup: function(name, user, password){
		MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true},  function(err, db) {
		  	db.collection('users').insertOne( {
				"name": name,
				"user": user,
				"password": password
			},function(err, result){
				assert.equal(err, null);
		    	console.log("Saved the user sign up details.");
			});
		});
	},

	validateSignIn: function(username, password,callback){
		
		MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, database){
          console.log("Connected successfully to server");
          const db = database.db('Blog');
			db.collection('users').findOne( { user : username ,password: password 
			},function(err, result){
				if(result==null){
					callback(false)
				}
				else{
					callback(true)
				}
			});
		});
	}


	
}
