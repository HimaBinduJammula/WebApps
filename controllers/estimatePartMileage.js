var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/entryMileage.js');
const notfoundstring = 'No such estimatePartMileage';


// see app.js for the root request this controller handles
// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartMileages.query;
    res.send(JSON.stringify(data));
});

// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartMileages.query[0].entries;
    res.send(JSON.stringify(data));
});

api.get('/delete/:id', function(req, res){
    // res.setHeader('Content-Type', 'application/html');
    var data = req.app.locals.estimatePartMileages.query[0].entries;
    id = req.params.id;
    var item = data.find(function(dt){
    	return dt._id==id;
    });
    console.log("delete data ",item);
    if(!item){
    	 res.end(notfoundstring);
    }
    console.log("RETURNING VIEW FOR"+ JSON.stringify(item));
     res.render('mileage_cost/delete.ejs',{
    	title: "Mileage Cost",
    	layout: "layout.ejs",
    	estimatePartMileage: item
    });
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("mileage_cost/create.ejs",
        { title: " Entry", layout: "layout.ejs", newID: genrateUID(req.app.locals.estimatePartMileages.query[0].entries) });
});

function genrateUID(items){
    var ids = [];
    var UID = items.length+1; //Unique ID
    //check if above id is already exists, then generate new id if already exists else return this  unique id
    for(var i=0; i<items.length; i++){
        if(items[i]._id==UID)
            UID++;
    }
    return UID;
}

// // GET /delete/:id
// api.get('/delete/:id', function(req, res) {
//     console.log("Handling GET /delete/:id " + req);
//     var id = parseInt(req.params.id);
//     var data = req.app.locals..estimatePartMileages.query[0].entries;
//     var item = find(data, { '_id': id });
//     if (!item) { return res.end(notfoundstring); }
//     console.log("RETURNING VIEW FOR" + JSON.stringify(item));
//     return res.render('waterproofing_primers/delete.ejs',
//         {
//             title: "WP Primers",
//             layout: "layout.ejs",
//             waterproofingPrimer: item
//         });
// });

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartMileages.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('mileage_cost/details.ejs',
        {
            title: "Esitmate Part Mileage",
            layout: "layout.ejs",
            estimatePartMileage: item,
            mileageRateNow : getLatestMileageRate(req.app.locals.mileageRates.query)
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartMileages.query[0].entries;
    console.log(data);
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('mileage_cost/edit.ejs',
        {
            title: "estimatePartMileage",
            layout: "layout.ejs",
            estimatePartMileage: item
        });
});

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartMileages.query[0].entries;
    var item = new Model;
    // var item = {};
    console.log("NEW ID " + parseInt(req.body._id));
    item._id = parseInt(req.body._id);
    item.description = req.body.description;
    item.numberOfVehicles = req.body.numberOfVehicles;
    item.startLocation = req.body.startLocation;
    item.endLocation = req.body.endLocation;
    item.milesPerDrive = req.body.milesPerDrive;
    // item.displayorder = parseInt(req.body.displayorder);
    console.log("New Item "+item);
    data.push(item);
    console.log("Current List"+data[3]);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartMileage');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartMileages.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.description = req.body.description;
    item.numberOfVehicles = req.body.numberOfVehicles;
    item.startLocation = req.body.startLocation;
    item.endLocation = req.body.endLocation;
    item.milesPerDrive = req.body.milesPerDrive;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartMileage');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartMileages.query[0].entries;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartMileage');
});
// see app.js for the root request this controller handles


// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("mileage_cost/index.ejs",{
    mileageRateNow : getLatestMileageRate(request.app.locals.mileageRates.query)
  });
});

function getLatestMileageRate(rates){
    var curMilRate = rates[0];
    for(var i=0; i<rates.length;i++){
        if(rates[i].startDate>curMilRate.startDate)
            curMilRate = rates[i]; 
    }
    return curMilRate;
}




module.exports = api;