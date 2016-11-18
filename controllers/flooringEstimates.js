var express = require('express');
var api = express.Router();
var Model = require('../models/flooringEstimate.js');
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
//var Model = require('../models/waterproofingPrimer.js');
const notfoundstring = 'No such Flooring Estimate';

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

api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

// GET flooring-new
api.get("/create", function (request, response) {
  response.render("flooring/create.ejs");
});

// POST new
api.post('/save', function(req, res) {
     console.log("Handling POST " + req);
     var data = req.app.locals.flooringEstimates.query;
     var item = new Model;
     console.log("NEW ID " + req.body._id);
     item._id = parseInt(req.body._id);
    // item.estimatePartAbout.client = req.body.Client;
    // item.estimatePartAbout.created = req.body.Created;
    // item.estimatePartAbout.address = req.body.Address;
    // item.estimatePartAbout.city = req.body.City;
    // item.estimatePartAbout.state = req.body.State;
    // item.estimatePartAbout.zipcode = req.body.zipcode;
    // item.estimateSquareFootage.sqft = req.body.Squre_Footage;
    // item.costPerSquareFoot = req.body.CostPerSquareFoot;
    // item.bidPerSquareFoot = req.body.BidPerSquareFoot;
     return res.redirect('/flooringEstimate');
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render("flooring/details.ejs",
        {
            title: "Flooring Estimate",
            layout: "layout.ejs",
            flooringEstimate: item
        });
});

// GET one Edit
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring/edit.ejs',
        {
            title: "Flooring Estimate",
            layout: "layout.ejs",
            flooringEstimate: item
        });
});

//Edit Flooring Estimate SAVE
// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.estimatePartAbout.client = req.body.Client;
    item.estimatePartAbout.created = req.body.Created;
    item.estimatePartAbout.address = req.body.Address;
    item.estimatePartAbout.city = req.body.City;
    item.estimatePartAbout.state = req.body.State;
    item.estimatePartAbout.zipcode = req.body.zipcode;
    item.estimateSquareFootage.sqft = req.body.Squre_Footage;
    item.costPerSquareFoot = req.body.CostPerSquareFoot;
    item.bidPerSquareFoot = req.body.BidPerSquareFoot;
    
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/flooringEstimate');
});

// GET on Delete
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render("flooring/delete.ejs",
        {
            title: "Flooring Estimate",
            layout: "layout.ejs",
            flooringEstimate: item
        });
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.flooringEstimates.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/flooringEstimate');
});

module.exports = api;

// This model is managed by team 5-R01
//Dambadeni Kalu Achchillage, Nilantha
//Muralidhar Gouda Buddanagoudagari

/* 10 controller methods handled by controller:
	
   controllers/flooringEstimates.js  

2 Respond with JSON:

http://127.0.0.1:8081/flooringEstimate/findall       [WORKING]
http://127.0.0.1:8081/flooringEstimate/findone/1  [WORKING]

5 Respond with CRUD Views:

http://127.0.0.1:8081/flooringEstimate		   [WORKING]
http://127.0.0.1:8081/flooringEstimate/create     [WORKING]
http://127.0.0.1:8081/flooringEstimate/delete/1         [WORKING]
http://127.0.0.1:8081/flooringEstimate/details/1	 [WORKING]
http://127.0.0.1:8081/flooringEstimate/edit/1	        [WORKING]

3 Respond by executing CRUD actions:

http://127.0.0.1:8081/flooringEstimate/save		[FOUND]{on create new when click 'Post Entry' it will derect to the index, but will not create a new entry}
http://127.0.0.1:8081/flooringEstimate/save/1 	[WORKING]
http://127.0.0.1:8081/flooringEstimate/delete/1 	[WORKING]

*/
