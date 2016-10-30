var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  return response.render('roofing_topcoats/index.ejs');
});




module.exports = api;