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