var express = require('express');
var api = express.Router();

var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFlooring.js');
<<<<<<< HEAD
const notfoundstring = 'No such waterproofing primer';


// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------

module.exports = api;  // at the very end
=======
const notfoundstring = 'No such estimatePartFlooring';
>>>>>>> d8c94698ebb1872afe5b5e6c4859b8746cfff6a2


// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartFloorings.query;
    res.send(JSON.stringify(data));
});


module.exports = api;  // at the very end
// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
 response.render("flooring_cost/index.ejs");
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartFloorings.query;
    res.send(JSON.stringify(data));
});


module.exports = api;