//Image Model in databae
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const ImgSchema = new Schema({
	imgauthor: String,
	imgurl: String,
	imgkey_id: String,
	timestamp: { type: Date, default: Date.now}	
});

module.exports = mongoose.model('images', ImgSchema);