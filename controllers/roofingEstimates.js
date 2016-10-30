var express = require('express');
var api = express.Router();

// roofing routing relative to views folder declared in app.js

// GET roofing default page
api.get("/", function (request, response) {
  response.render("roofing/roofing.ejs");
});

// GET create
api.get("/create", function (request, response) {
  response.render("roofing/create.ejs");
});

module.exports = api;