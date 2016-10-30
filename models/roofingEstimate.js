var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , About = require('./estimatePartAbout.js')
  , Footage = require('./estimatePartFootage.js')
  , Roofing = require('./estimatePartFlooring.js')
  , Aggregate = require('./estimatePartAggregate.js')
  , Labor = require('./estimatePartLabor.js')
  , Mileage = require('./estimatePartMileage.js')
  , Miscellaneous = require('./estimatePartAbout.js')

var RoofingEstimateSchema = new Schema({
  about: { type: Schema.Types.ObjectId, ref: About },
  footage: { type: Schema.Types.ObjectId, ref: Footage },
  roofing: { type: Schema.Types.ObjectId, ref: Roofing },
  aggregate: { type: Schema.Types.ObjectId, ref: Aggregate },
  labor: { type: Schema.Types.ObjectId, ref: Labor },
  mileage: { type: Schema.Types.ObjectId, ref: Mileage },
  miscellaneous: { type: Schema.Types.ObjectId, ref: Miscellaneous },
  costPerSquareFoot: Number,
  bidPerSquareFoot: Number,
  updated: { type: Date, default: Date.now },
  isComplete: Boolean
})

RoofingEstimateSchema.virtual('created').get(function () {
  return this._id.getTimestamp()
})
var roofingEstimate = mongoose.model('RoofingEstimate', RoofingEstimateSchema)
module.exports = roofingEstimate