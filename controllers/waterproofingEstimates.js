var express = require('express');
var api = express.Router();

//Base:  api/waterproofingEstimate

//GET /api/waterproofingEstimate
api.get("/", function (request, response) {
  response.render("waterproofing/waterproofing.ejs");
});

// GET /api/waterproofingEstimate/{id}


//GET create 
api.get("/create", function (request, response) {
  response.render("waterproofing/create.ejs");
});

module.exports = api;