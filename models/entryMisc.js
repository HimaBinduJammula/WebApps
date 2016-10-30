var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var EntryMiscSchema = new Schema({
    description: { type: String, required: true },
    cost: { type: Number, required: true, default: 0 }
})

var entryMisc = mongoose.model('EntryMisc', EntryMiscSchema)
module.exports = entryMisc