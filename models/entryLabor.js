var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var EntryLaborSchema = new Schema({
    type: { type: String, required: true },
    count: { type: Number, required: true, default:1 },
    hoursPerPerson: { type: Number, required: true, default:8},
    dollarsPerHour: { type: Number, required: true, default:15},
    nightsPerPerson:{ type: Number, required: true, default:1},
    roomCost:{ type: Number, required: true, default:80}
})

var entryLabor = mongoose.model('EntryLabor', EntryLaborSchema)
module.exports = entryLabor