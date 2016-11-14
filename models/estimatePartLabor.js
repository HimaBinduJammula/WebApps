var mongoose = require('mongoose')
  , Schema = mongoose.Schema
   , EntryLabor = require('./entryLabor.js')

var EstimatePartLaborSchema = new Schema({
     entries: [{
        entry: { type: Schema.Types.ObjectId, ref: EntryLabor },
    }],
    subtotal:  { type: Number, required: true, default: 0 }
})

var estimatePartLabor = mongoose.model('EstimatePartLabor', EstimatePartLaborSchema)
module.exports = estimatePartLabor
// This model is managed by Team 5-10
// Hima Bindu Jammula
// Shravani Alampalli