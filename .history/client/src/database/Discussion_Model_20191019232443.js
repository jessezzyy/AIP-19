//User Model in databae
let mongoose = require('mongoose')
var Schema = mongoose.Schema;

const DisSchema = new Schema({
	img: ImgSchema,
	author: String,
	url: String,
	key_id: String,
	timestamp: { type: Date, default: Date.now}
});

module.exports = mongoose.model('discussions', DisSchema)