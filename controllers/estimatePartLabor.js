var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartLabor.js');
const notfoundstring = 'No such estimate Part Labor found';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("labor_cost/index.ejs");
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartLabors.query;
    res.send(JSON.stringify(data));
});



module.exports = api;


api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartLabors.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('labor_cost/index.ejs',
        { title: "WP Primers", layout: "layout.ejs" });
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("labor_cost/create.ejs",
        { title: "WP Primers", layout: "layout.ejs" });
});


// DELETE
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartLabors.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('labor_cost/delete.ejs',
        {
            title: "Footage",
            layout: "layout.ejs",
            estimatePartLabor: item
        });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.sqft);
    var data = req.app.locals.estimatePartLabors.query;
    var item = find(data, { 'sqft': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('labor_cost/details.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartLabor: item
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.sqft);
    var data = req.app.locals.estimatePartLabors.query;
    var item = find(data, { 'sqft': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('labor_cost/edit.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartLabor: item
        });
});
