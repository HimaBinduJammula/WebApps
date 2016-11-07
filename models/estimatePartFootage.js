var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , EntryFootage = require('./entryFootage.js')

var EstimatePartFootageSchema = new Schema({
    entries: [{
        entry: { type: Schema.Types.ObjectId, ref: EntryFootage },
    }],
    sqft: { type: Number, required: true, default: 0 }
})

var estimatePartFootage = mongoose.model('EstimatePartFootage', EstimatePartFootageSchema)
module.exports = estimatePartFootage

// This model is managed by Team 5-4
// Harish Babu Achanta
// Hari Kiran Akunuri
// Mounika Naidu Chanati
