var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var RoofingTopcoatSchema = new Schema({
   _id: { type: Number, required: true },
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: String, required: true },
    price:  { type: Number, required: true }
})

var roofingTopcoat = mongoose.model('RoofingTopcoat', RoofingTopcoatSchema)
module.exports = roofingTopcoat
// This model is managed by Team 5-13
// Chilmakuri, Venkata Sandeep
// Siddamsetty, Sashidhar
// Chandupatla, Rahul Reddy