var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , FlooringCoating = require('./flooringCoating.js')

var EstimatePartFlooringSchema = new Schema({
  floorSystemType: { type: String, required: true, default: 'Epoxy', enum: ['Epoxy', 'Decorative Expoxy', 'Urethane'] },
  usesUrethane: { type: Boolean, required: true, default: false },
  urethaneProductSelection: [{ type: Schema.Types.ObjectId, ref: FlooringCoating, required: false }],
  urethaneCoverageSqFt: { type: Number, required: true },
  usesEpoxy: { type: Boolean, required: true, default: false },
  expoxyProductSelection: [{ type: Schema.Types.ObjectId, ref: FlooringCoating, required: false }],
  expoxyCoverageSqFt: { type: Number, required: true },
  subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartFlooring = mongoose.model('EstimatePartFlooring', EstimatePartFlooringSchema)
module.exports = estimatePartFlooring

<<<<<<< HEAD
//<<<<<<< HEAD
// This data is managed by Team 5-05
// Lakshmi Supriya Nakerikanti
// Saravana Kumar Palaniyappan
//=======
=======
// This data is managed by Team 5-05
// Lakshmi Supriya Nakerikanti
// Saravana Kumar Palaniyappan
<<<<<<< HEAD
// This model is managed by Team 5-5
// Saravana Kumar Palaniyappan
// Lakshmi Supriya Nakerikanti
=======
>>>>>>> b5ba5109b9f3b2def0f66652e0d52416af452ce6
// This model is managed by Team 5-5
// Saravana Kumar Palaniyappan
// Lakshmi Supriya Nakerikanti// >>>>>>> d8c94698ebb1872afe5b5e6c4859b8746cfff6a2

// This data is managed by Team 5-05
// Lakshmi Supriya Nakerikanti
<<<<<<< HEAD
//>>>>>>> d8c94698ebb1872afe5b5e6c4859b8746cfff6a2
=======
// Saravana Kumar Palaniyappan

// This model is managed by Team 5-5
// Saravana Kumar Palaniyappan
// Lakshmi Supriya Nakerikanti

>>>>>>> 1069bf96a2f105b133f5bc8d0802888e7fc895f7
>>>>>>> b5ba5109b9f3b2def0f66652e0d52416af452ce6
