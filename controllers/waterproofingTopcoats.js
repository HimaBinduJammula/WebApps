var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingTopcoat.js');
const notfoundstring = 'No such waterproofing primer';

// see app.js for the root request this controller handles

//GET create 
api.get('/create', function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("waterproofing_topcoats/create.ejs",
        { title: "RB", layout: "layout.ejs" });
});
//GET Index 
api.get("/", function (request, response) {
  response.render("waterproofing_topcoats/index.ejs");
});
//GET findall 
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingTopcoats.query;
    res.send(JSON.stringify(data));
});
//GET findone 
   api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingTopcoats.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
}); 

//GET /delete/:id 
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingTopcoats.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing_topcoats/delete.ejs',
        {
            title: "RB",
            layout: "layout.ejs",
            waterproofingTopcoat: item
        });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingTopcoats.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing_topcoats/details.ejs',
        {
            title: "RB",
            layout: "layout.ejs",
            waterproofingTopcoat: item
        });
});

// GET /edit:/id
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingTopcoats.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing_topcoats/edit.ejs',
        {
            title: "RB",
            layout: "layout.ejs",
            waterproofingTopcoat: item
        });
});

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.waterproofingTopcoats.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
    item.name = req.body.name;
    item.unit = req.body.unit;
    item.price = req.body.price;
    item.displayorder = parseInt(req.body.displayorder);
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/waterproofingTopcoat');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.waterproofingTopcoats.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.name = req.body.name;
    item.unit = req.body.unit;
    item.price = req.body.price;
    item.displayorder = req.body.displayorder;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/waterproofingTopcoat');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.waterproofingTopcoats.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/waterproofingTopcoat');
});




module.exports = api;

/* 10 controller methods handled by controller:

controllers/waterproofingTopcoats.js

http://127.0.0.1:8081/waterproofingTopcoat/findall [WORKING]

http://127.0.0.1:8081/waterproofingTopcoat/findone/1 [WORKING]

5 Response with CRUD Views:

http://127.0.0.1:8081/waterproofingTopcoat [WORKING]
http://127.0.0.1:8081/waterproofingTopcoat/create [WORKING]
http://127.0.0.1:8081/waterproofingTopcoat/delete/1 [WORKING]
http://127.0.0.1:8081/waterproofingTopcoat/details/1 [WORKING]
http://127.0.0.1:8081/waterproofingTopcoat/edit/1 [WORKING]

3 Response by executing CRUD actions:

http://127.0.0.1:8081/waterproofingTopcoat/save [FOUND]{on create new when click 'Post Entry' it will 
direct to the index, but not will create a new entry}
http://127.0.0.1:8081/waterproofingTopcoat/save/1 [WORKING]

http://127.0.0.1:8081/waterproofingTopcoat/delete/1 [WORKING]
*/
// This model is managed by Team 5-14
//Snigda,Jataprolu
//Samyuktha,Ganga
//Sruthi ,Palpandian