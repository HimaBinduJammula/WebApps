var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var EstimatePartAboutSchema = new Schema({
  client: { type: String, required: true },
  address: { type: String, required: false },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: false },
  latitude: { type: Number, required: false },
  longitude: { type: Number, required: false },
})

var estimatePartAbout = mongoose.model('EstimatePartAbout', EstimatePartAboutSchema)
module.exports = estimatePartAbout