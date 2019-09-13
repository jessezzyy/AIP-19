var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Blog';

module.exports = {
	signup: function(name, user, password){
		MongoClient.connect(url, function(err, db) {
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
		MongoClient.connect(url, function(err, database){
          console.log("Connected successfully to server");
          const db = database.db('Blog');
			db.collection('users').findOne( { user : username ,password: password 
			},function(err, result){
				if(result==null){
					console.log('returning false')
					callback(false)
				}
				else{
					console.log('returning true')
					callback(true)
				}
			});
		});
	}
	
}
