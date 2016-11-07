var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , EntryMisc = require('./entryMisc.js')

var EstimatePartMiscSchema = new Schema({
    entries: [{
        entry: { type: Schema.Types.ObjectId, ref: EntryMisc },
    }],
    subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartMisc = mongoose.model('EstimatePartMisc', EstimatePartMiscSchema)
module.exports = estimatePartMisc

// This model is managed by Team 5-11
// Ravva, Shanmukha Manikantha Surya Vamsi
// Avasarala, Venkata Bhardwaj
// Vallapurapu, Shankar
