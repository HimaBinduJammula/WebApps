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

api.get('/findone/:id', function(req, res){
  res.setHeader('Content-type', 'application/json');
  var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

//GET /api/waterproofingEstimate
api.get("/", function (request, response) {
  response.render("waterproofing/waterproofing.ejs");
});

// GET /api/waterproofingEstimate/{id}


//GET create 
api.get("/create", function (req, res) {
  response.render("waterproofing/create.ejs");
});

api.post('/save', function(req, res) {
     console.log("Handling POST " + req);
     var data = req.app.locals.waterproofingEstimates.query;
     var item = new Model;
     console.log("NEW ID " + req.body._id);
     item._id = parseInt(req.body._id);
     return res.redirect('/waterproofingEstimate');
});

module.exports = api;

//This controller is modified by Team 5-3
//Cher-Xa Thao
//Brandyn Kopp