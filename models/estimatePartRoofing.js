// This model is managed by Team 5-6
// Naganjali Mutyala
// Akhila Patlola
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , RoofingBasecoat = require('./roofingBasecoat.js')
    , RoofingCoating = require('./roofingCoating.js')
    , RoofingPrimer = require('./roofingPrimer.js')
    , RoofingTopcoat = require('./roofingTopcoat.js')

var EstimatePartRoofingSchema = new Schema({
    _id: { type: Number, required: true },
    roofType: { type: String, required: true, default: 'Metal', enum: ['Metal', 'Mod Bit', 'Single Ply'] },
    processType: { type: String, required: true, default: 'Roof Coatings', enum: ['Roof Coatings', 'Polyurethane Foam & Coatings'] },

    coatingType: { type: String, required: true, default: 'Urethane', enum: ['Urethane', 'Silicone', 'Acrylic'] },
    coatingSelection: [{ type: Schema.Types.ObjectId, ref: RoofingCoating, required: false }],
    coatingCoverageSqFt: { type: Number, required: true },

    usesBasecoat: { type: Boolean, required: true, default: false },
    basecoatSelection: [{ type: Schema.Types.ObjectId, ref: RoofingBasecoat, required: false }],
    basecoatCoverageSqFt: { type: Number, required: true },

    usesPrimer: { type: Boolean, required: true, default: false },
    primerSelection: [{ type: Schema.Types.ObjectId, ref: RoofingPrimer, required: false }],
    primerCoverageSqFt: { type: Number, required: true },

    usesTopcoat: { type: Boolean, required: true, default: false },
    topcoatSelection: [{ type: Schema.Types.ObjectId, ref: RoofingTopcoat, required: false }],
    topcoatCoverageSqFt: { type: Number, required: true },

    subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartRoofing = mongoose.model('EstimatePartRoofing', EstimatePartRoofingSchema)
module.exports = estimatePartRoofing

// This model is managed by by team section-R06
// Naganjali muthyala
// Akhila Reddy Patlolla