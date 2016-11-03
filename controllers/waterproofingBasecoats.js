var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingBasecoat.js');
const notfoundstring = 'No such waterproofing primer';

// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (req, res) {
  return res.render('waterproofing_basecoats/index.ejs');
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingBasecoats.query;
    res.send(JSON.stringify(data));
});





module.exports = api;