var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var EntryMiscSchema = new Schema({
    description: { type: String, required: true },
    cost: { type: Number, required: true, default: 0 }
})

var entryMisc = mongoose.model('EntryMisc', EntryMiscSchema)
module.exports = entryMisc


// This model is managed by Team 5-11
// Ravva, Shanmukha Manikantha Surya Vamsi
// Avasarala, Venkata Bhardwaj
// Vallapurapu, Shankar