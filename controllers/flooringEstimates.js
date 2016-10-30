var express = require('express');
var api = express.Router();
var Movie = require('../models/flooringEstimate');

// flooring routing ....................................

// GET flooring default page
api.get("/", function (request, response) {
 response.render("flooring/flooring.ejs");
});

// GET flooring-new
api.get("/create", function (request, response) {
  response.render("flooring/create.ejs");
});

module.exports = api;