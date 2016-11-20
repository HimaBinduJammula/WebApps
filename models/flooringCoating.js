var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var FlooringCoatingSchema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    unit: { type: String, required: true },
    displayorder: { type: String, required: true },
    price: { type: Number, required: true }
})

var flooringCoating = mongoose.model('FlooringCoating', FlooringCoatingSchema)
module.exports = flooringCoating

//This model is managed by Team 5-12
//Harsha Vardhan Reddy Alla
//Saiteja Guduri