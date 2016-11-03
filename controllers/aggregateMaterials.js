var express = require('express');
var api = express.Router();

// see app.js for the root request this controller handles

api.get('/findall', function(req, res){
res.setHeader('Content-Type', 'application/json');
var data = req.app.locals.aggregateMaterials.query;
res.send(JSON.stringify(data));
});

// GET to this controller root URI
api.get("/", function (req, res) {
return res.render('aggregate/index.ejs');
});

module.exports = api;

//This model is managed by Team 5-12
//Harsha Vardhan Reddy Alla
//Saiteja Guduri