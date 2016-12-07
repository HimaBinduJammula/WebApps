var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingEstimate.js');
const notfoundstring = 'No such waterproofing estimate';
//Base:  api/waterproofingEstimate

//GET /api/waterproofingEstimate
api.get("/", function (req, res) {
  res.render("waterproofing/waterproofing.ejs");
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingEstimates.query;
    res.send(JSON.stringify(data));
});

api.get('/findone/:id', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

// GET /api/waterproofingEstimate/{id}


//GET create 
api.get("/create", function (req, res) {
  res.render("waterproofing/create.ejs");
});

//POST a new waterproofing entry
api.post('/save', function(req, res) {
     console.log("Handling POST " + req);
     var data = req.app.locals.waterproofingEstimates.query;
     var item = new Model;
     console.log("NEW ID " + req.body._id);
     item._id = parseInt(req.body._id);
     return res.redirect('/waterproofingEstimate');
});

//GET /details
api.get('/details/:id', function(req,res){
      console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render("waterproofing/details.ejs",
        {
            title: "waterproofing Estimate",
            layout: "layout.ejs",
            waterproofingEstimate: item
        });
})

// GET one Edit
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing/edit.ejs',
        {
            title: "waterproofing Estimate",
            layout: "layout.ejs",
            waterproofingEstimate: item
        });
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/waterProofingEstimate');
});

// GET on Delete
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render("waterproofing/delete.ejs",
        {
            title: "waterProofing Estimate",
            layout: "layout.ejs",
            waterProofingEstimate: item
        });
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/waterProofingEstimate');
});

module.exports = api;

//This controller is modified by Team 5-3
//Cher-Xa Thao
//Brandyn Kopp