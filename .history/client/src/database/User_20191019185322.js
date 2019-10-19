var mongoose = require('mongoose')

var user = new Schema({
	username:String,
	password:String
});

module.exports = mongoose.model('users', user); 