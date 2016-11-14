var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFootage.js');
const notfoundstring = 'No such estimate Part Footage';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
 response.render("footage/index.ejs");
});

module.exports = api;

// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartFootages.query;
    res.send(JSON.stringify(data));
});

api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('footage/index.ejs',
        { title: "WP Primers", layout: "layout.ejs" });
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("footage/create.ejs",
        { title: "WP Primers", layout: "layout.ejs" });
});


// DELETE
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('footage/delete.ejs',
        {
            title: "Footage",
            layout: "layout.ejs",
            estimatePartFootage: item
        });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.sqft);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { 'sqft': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('footage/details.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartFootage: item
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.sqft);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { 'sqft': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('footage/edit.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartFootage: item
        });
});
