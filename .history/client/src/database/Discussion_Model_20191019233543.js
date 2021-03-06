//User Model in databae
let mongoose = require('mongoose')
var ImgModel = require("./Image_model.js")
var Schema = mongoose.Schema;

const DisSchema = new Schema({
	img: {
	imgauthor: String,
	imgurl: String,
	imgkey_id: String,
	timestamp: { type: Date, default: Date.now}	
},
	author: String,
	url: String,
	key_id: String,
	timestamp: { type: Date, default: Date.now}
});

module.exports = mongoose.model('discussions', DisSchema)