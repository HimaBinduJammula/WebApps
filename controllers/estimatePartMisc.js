var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
 response.render("misc_cost/index.ejs");
});




module.exports = api;