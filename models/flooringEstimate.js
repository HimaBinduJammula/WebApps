var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , About = require('./estimatePartAbout.js')
  , Footage = require('./estimatePartFootage.js')
  , Flooring = require('./estimatePartFlooring.js')
  , Aggregate = require('./estimatePartAggregate.js')
  , Labor = require('./estimatePartLabor.js')
  , Mileage = require('./estimatePartMileage.js')
  , Miscellaneous = require('./estimatePartAbout.js')

var FlooringEstimateSchema = new Schema({
  about: { type: Schema.Types.ObjectId, ref: About },
  footage: { type: Schema.Types.ObjectId, ref: Footage },
  flooring: { type: Schema.Types.ObjectId, ref: Flooring },
  aggregate: { type: Schema.Types.ObjectId, ref: Aggregate },
  labor: { type: Schema.Types.ObjectId, ref: Labor },
  mileage: { type: Schema.Types.ObjectId, ref: Mileage },
  miscellaneous: { type: Schema.Types.ObjectId, ref: Miscellaneous },
  costPerSquareFoot: Number,
  bidPerSquareFoot: Number,
  updated: { type: Date, default: Date.now },
  isComplete: Boolean
})

FlooringEstimateSchema.virtual('created').get(function () {
  return this._id.getTimestamp()
})

var flooringEstimate = mongoose.model('FlooringEstimate', FlooringEstimateSchema)
module.exports = flooringEstimate

// This model is managed by team 5-R01
//Dambadeni Kalu Achchillage, Nilantha
//Muralidhar Gouda Buddanagoudagari