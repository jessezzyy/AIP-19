let mongoose = require('mongoose')
var Schema = mongoose.Schema;

let emailSchema = new mongoose.Schema({
  email: String
})

module.exports = mongoose.model('Email', emailSchema)