var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , About = require('./estimatePartAbout.js')
  , Footage = require('./estimatePartFootage.js')
  , Flooring = require('./estimatePartFlooring.js')
  , Aggregate = require('./estimatePartAggregate.js')
  , Labor = require('./estimatePartLabor.js')
  , Mileage = require('./estimatePartMileage.js')
  , Miscellaneous = require('./estimatePartAbout.js')
/*
var FlooringEstimateSchema = new Schema({
  _id: { type: Number, required: true },
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
*/

var FlooringEstimateSchema = new Schema({
    _id: { type: Number, required: true },
  estimatePartAbout: [{ type: Schema.Types.ObjectId, ref: About, required: true }],
  estimatePartFootage: [{ type: Schema.Types.ObjectId, ref: Footage, required: true }],
  estimatePartFlooring: [{ type: Schema.Types.ObjectId, ref: Flooring, required: true }],
  estimatePartAggregate: [{ type: Schema.Types.ObjectId, ref: Aggregate, required: true }],
  estimatePartLabor:[ { type: Schema.Types.ObjectId, ref: Labor, required: true }],
  estimatePartMileage: [{ type: Schema.Types.ObjectId, ref: Mileage, required: true }],
  estimatePartMisc:[ { type: Schema.Types.ObjectId, ref: Miscellaneous, required: true }],
  comment: { type: String, required: false },
  profitMargin: { type: Number, required: true, default: .50 },
  costPerSquareFoot: Number,
  bidPerSquareFoot: Number,
  updated: { type: Date, default: Date.now },
  isComplete: Boolean
});


FlooringEstimateSchema.virtual('created').get(function () {
  return this._id.getTimestamp()
})

var flooringEstimate = mongoose.model('FlooringEstimate', FlooringEstimateSchema)
module.exports = flooringEstimate

// This model is managed by team 5-R01
//Dambadeni Kalu Achchillage, Nilantha
//Muralidhar Gouda Buddanagoudagari