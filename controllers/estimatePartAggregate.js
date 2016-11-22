var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartAggregate.js');
const notfoundstring = 'No such estimatePartAggregate';

// see app.js for the root request this controller handles

// GET to this controller root URI
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('aggregate_cost/index.ejs',
        { title: "WP Primers", layout: "layout.ejs" });
});

// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "estimatePartAggregate")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartAggregates.query;
    res.send(JSON.stringify(data));
});

module.exports = api;  // at the very end

api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("aggregate_cost/create.ejs",
        { title: " PartAggregate", layout: "layout.ejs" });
});

// DELETE
api.get('/delete/:id', function(req, res){
    // res.setHeader('Content-Type', 'application/html');
    var data = req.app.locals.estimatePartAggregates.query;
    id = req.params.id;
    var item = data.find(function(dt){
    	return dt._id==id;
    });
    console.log("delete data ",item);
    if(!item){
    	 res.end(notfoundstring);
    }
    console.log("RETURNING VIEW FOR"+ JSON.stringify(item));
     res.render('aggregate_cost/delete.ejs',{
    	title: "Estimate Part Aggregates",
    	layout: "layout.ejs",
    	estimatePartAggregate: item
    });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('aggregate_cost/details.ejs',
        {
            title: "Esitmate Aggregate",
            layout: "layout.ejs",
            estimatePartAggregate: item
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('aggregate_cost/edit.ejs',
        {
            title: "estimatePartAggregate",
            layout: "layout.ejs",
            estimatePartAggregate: item
        });
});

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
    item.isUsed = req.body.isUsed;
    item.aggregateTypeSelection = req.body.aggregateTypeSelection;    
    item.aggregateMaterialSelection = req.body.aggregateMaterialSelection;
    item.coverageSqFt = req.body.coverageSqFt;
    item.subtotal= req.body.subtotal;
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});
// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.isUsed = req.body.isUsed;
    item.aggregateTypeSelection = req.body.aggregateTypeSelection;    
    item.aggregateMaterialSelection = req.body.aggregateMaterialSelection;
    item.coverageSqFt = req.body.coverageSqFt;
    item.subtotal= req.body.subtotal;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});
// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});
// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
	
 response.render("aggregate_cost/index.ejs");
});
