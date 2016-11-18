var express = require('express');
var api = express.Router();
var Movie = require('../models/flooringEstimate');

// flooring routing ....................................

// GET flooring default page
api.get("/", function (request, response) {
 response.render("flooring/flooring.ejs");
});
// Handle Json Requests
api.get('/findall', function(req, res){
  res.setHeader('Content-type', 'application/json');
  var data = req.app.locals.flooringEstimates.query;
  res.send(JSON.stringify(data));
});

// GET flooring-new
api.get("/create", function (request, response) {
  response.render("flooring/create.ejs");
});

module.exports = api;

// This model is managed by team 5-R01
//Dambadeni Kalu Achchillage, Nilantha
//Muralidhar Gouda Buddanagoudagari