var mongoose = require('mongoose')
  , Schema = mongoose.Schema
    , EntryMileage = require('./entryMileage.js')

var EstimatePartMileageSchema = new Schema({
    dollarsPerMile: { type: Number, required: true, default: 0.54 },
    entries: [{
        entry: { type: Schema.Types.ObjectId, ref: EntryMileage },
    }],
    subtotal:  { type: Number, required: true, default: 0 }
})

var estimatePartMileage = mongoose.model('EstimatePartMileage', EstimatePartMileageSchema)
module.exports = estimatePartMileage


// This model is managed by Team 5-11
// Ravva, Shanmukha Manikantha Surya Vamsi
// Avasarala, Venkata Bhardwaj
// Vallapurapu, Shankar
