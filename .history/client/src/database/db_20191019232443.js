//database api
var mongoose = require('mongoose');
var url = "mongodb+srv://jessezzyy:520WOcaonima!@aip2019-rbm87.mongodb.net/Blog?retryWrites=true&w=majority";
var UserModel = require("./User_model.js")
var DiscusModel = require("./Discussion_model.js")
var ImgModel = require("./Image_model.js")

//Connect to cloud mongo database
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {
	//deal with log in by checking username and password
	validateSignIn: function(username, password,callback){
		UserModel.findOne( { username : username ,password: password 
			},function(err, result){
				if(result==null){
					callback(false);
				}
				else{
					callback(true);
				}
			});
	},

    //deal with sign up data
	signup: function(username, password,callback){
		var name = new User({username: username, password: password});
		UserModel.find({username: username}).exec(function(err,docs){
			//Check for username existing 
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
	
	//get all users' usernames, show in User Rank
	allusers: function(callback){  
		UserModel.find({},{'username':1,'_id': 0},function(err,docs){
			callback(docs);
		});
	},
	 
	//deal with new image as to create a discussion
	storeimage: function(author, url, id){
		var newDis = new DiscusModel;
		newDis.author=author;
		newDis.url=url;
		newDis.key_id=id;
		newDis.save();
	},

     //get all discussion cover images, show in discussion list
	getAllImg: function(callback){
		DiscusModel.find({},{'url':1,'key_id':1,'author':1,'_id': 1},function(err,docs){
			callback(docs);
		});
	},
	
	//deal with replyed images in discussions
	storeReply: function(key, author, url, id){
		DiscusModel.findOne({key_id: "images/b3n2jnmd9imldnfc3bll"}, function(err, dis){
			if (dis){
				var newImg = new ImgModel;
				newImg.imgauthor= author;
				newImg.url=url;
				newImg.key_id=id;
				Discuss.img.push(newImg);
				Discuss.save();
			}	
		});
	}
}
