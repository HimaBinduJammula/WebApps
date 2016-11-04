// This model is managed by Team 5-6
// Naganjali Mutyala
// Akhila Patlola

var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("roofing_cost/index.ejs");
});




module.exports = api;