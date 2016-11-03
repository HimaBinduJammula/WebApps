var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingEstimate.js');
const notfoundstring = 'No such waterproofing estimate';
//Base:  api/waterproofingEstimate

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingEstimates.query;
    res.send(JSON.stringify(data));
});


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

//This controller is modified by Team 5-3
//Cher-Xa Thao
//Brandyn Kopp