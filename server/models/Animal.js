var mongoose = require('mongoose');


var AnimalSchema = new mongoose.Schema({
  name: String,
  type: String
})


module.exports = mongoose.model('Animal', AnimalSchema)
