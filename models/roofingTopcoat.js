var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var RoofingTopcoatSchema = new Schema({
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: String, required: true },
    price:  { type: Number, required: true }
})

var roofingTopcoat = mongoose.model('RoofingTopcoat', RoofingTopcoatSchema)
module.exports = roofingTopcoat