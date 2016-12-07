var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , About = require('./estimatePartAbout.js')
  , Footage = require('./estimatePartFootage.js')
  , WaterProofing = require('./estimatePartFlooring.js')
  , Aggregate = require('./estimatePartAggregate.js')
  , Labor = require('./estimatePartLabor.js')
  , Mileage = require('./estimatePartMileage.js')
  , Miscellaneous = require('./estimatePartAbout.js')

var WaterproofingEstimateSchema = new Schema({
  _id: {type: Number, required: true},
  about: { type: Schema.Types.ObjectId, ref: About },
  footage: { type: Schema.Types.ObjectId, ref: Footage },
  waterproofing: { type: Schema.Types.ObjectId, ref: WaterProofing },
  aggregate: { type: Schema.Types.ObjectId, ref: Aggregate },
  labor: { type: Schema.Types.ObjectId, ref: Labor },
  mileage: { type: Schema.Types.ObjectId, ref: Mileage },
  miscellaneous: { type: Schema.Types.ObjectId, ref: Miscellaneous },
  costPerSquareFoot: Number,
  bidPerSquareFoot: Number,
  updated: { type: Date, default: Date.now },
  isComplete: Boolean
})

WaterproofingEstimateSchema.virtual('created').get(function () {
  return this._id.getTimestamp()
})

var waterProofingEstimate = mongoose.model('WaterProofingEstimate', WaterproofingEstimateSchema)
module.exports = waterProofingEstimate

//This model is managed by Team 5-3
//Cher-Xa Thao
//Brandyn Kopp