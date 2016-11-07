var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , AggregateMaterial = require('./aggregateMaterial.js')

var EstimatePartAggregateSchema = new Schema({
    isUsed: { type: Boolean, required: true, default: false },
    aggregateTypeSelection: { type: String, required: true, default: 'Sand',  enum: ['Sand', 'Quartz', 'Flake', 'Glass Beads']  },
    aggregateMaterialSelection: [{ type: Schema.Types.ObjectId, ref: AggregateMaterial, required: false}],
    coverageSqFt:  { type: Number, required: true},
    subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartAggregate = mongoose.model('EstimatePartAggregate', EstimatePartAggregateSchema)
module.exports = estimatePartAggregate

// This model is managed by Team 5-9
// Sri Sai Ravali Chinthareddy
// Avyakta Pallerla
