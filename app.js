const http = require("http");
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
var _ = require('lodash');
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const YAML = require('require-yaml');
const port = 8081;

// set up a temporary (in memory) database
const Datastore = require('nedb');
//var dbtoexpress = require("db-to-express-rest");

var db = new Datastore();
db.loadDatabase();

// create express app 
var app = express();

// set the root view folder & specify the view engine 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// specify various resources and apply them to our application
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/assets/'));  // works for views in root view folder
app.use(expressLayouts);



// Set up SEED DATA  .................................................

// Read in the sample data files
var aggregateMaterials = require('./data/aggregateMaterials.yml');
var estimatePartAbouts = require('./data/estimatePartAbouts.json');
var estimatePartAggregates = require('./data/estimatePartAggregates.json');
var estimatePartFloorings = require('./data/estimatePartFloorings.json');
var estimatePartFootages = require('./data/estimatePartFootages.json');
var estimatePartLabors = require('./data/estimatePartLabors.json');
var estimatePartMileages = require('./data/estimatePartMileages.json');
var estimatePartMiscs = require('./data/estimatePartMiscs.json');
var estimatePartRoofings = require('./data/estimatePartRoofings.json');
var estimatePartWaterproofings = require('./data/estimatePartWaterproofings.json');
var flooringCoatings = require('./data/flooringCoatings.yml');
var flooringEstimates = require('./data/flooringEstimates.json');
var mileageRates = require('./data/mileageRates.json');
var roofingBasecoats = require('./data/roofingBasecoats.yml');
var roofingEstimates = require('./data/roofingEstimates.json');
var roofingPrimers = require('./data/roofingPrimers.json');
var roofingTopcoats = require('./data/roofingTopcoats.yml');
var waterproofingBasecoats = require('./data/waterproofingBasecoats.yml');
var waterproofingEstimates = require('./data/waterproofingEstimates.json');
var waterproofingPrimers = require('./data/waterproofingPrimers.json');
var waterproofingTopcoats = require('./data/waterproofingTopcoats.yml');

// insert the sample data into our data store
db.insert(aggregateMaterials);
db.insert(estimatePartAbouts);
db.insert(estimatePartAggregates);
db.insert(estimatePartFloorings);
db.insert(estimatePartFootages);
db.insert(estimatePartLabors);
db.insert(estimatePartMileages);
db.insert(estimatePartMiscs);
db.insert(estimatePartRoofings);
db.insert(estimatePartWaterproofings);
db.insert(flooringCoatings);
db.insert(flooringEstimates);
db.insert(mileageRates);
db.insert(roofingBasecoats);
db.insert(roofingEstimates);
db.insert(roofingPrimers);
db.insert(roofingTopcoats);
db.insert(waterproofingBasecoats);
db.insert(waterproofingEstimates);
db.insert(waterproofingPrimers);
db.insert(waterproofingTopcoats);

// intialize app.locals (these objects will be available to our controllers)
app.locals.aggregateMaterials = db.find(aggregateMaterials);
app.locals.estimatePartAbouts = db.find(estimatePartAbouts);
app.locals.estimatePartAggregates = db.find(estimatePartAggregates);
app.locals.estimatePartFootages = db.find(estimatePartFootages);
app.locals.estimatePartFloorings = db.find(estimatePartFloorings);
app.locals.estimatePartLabors = db.find(estimatePartLabors);
app.locals.estimatePartMileages = db.find(estimatePartMileages);
app.locals.estimatePartMiscs = db.find(estimatePartMiscs);
app.locals.estimatePartRoofings = db.find(estimatePartRoofings);
app.locals.estimatePartWaterproofings = db.find(estimatePartWaterproofings);
app.locals.flooringCoatings = db.find(flooringCoatings);
app.locals.flooringEstimates = db.find(flooringEstimates);
app.locals.mileageRates = db.find(mileageRates);
global.allMileageRates = app.locals.mileageRates;
app.locals.roofingBasecoats = db.find(roofingBasecoats);
app.locals.roofingEstimates = db.find(roofingEstimates);
app.locals.roofingPrimers = db.find(roofingPrimers);
app.locals.roofingTopcoats = db.find(roofingTopcoats);
app.locals.waterproofingBasecoats = db.find(waterproofingBasecoats);
app.locals.waterproofingEstimates = db.find(waterproofingEstimates);
app.locals.waterproofingPrimers = db.find(waterproofingPrimers);
app.locals.waterproofingTopcoats = db.find(waterproofingTopcoats);

// verify our sample data was imported correctly
console.log(Object.keys(aggregateMaterials).length+ " aggregateMaterials");
console.log(Object.keys(estimatePartAbouts).length+ " estimatePartAbouts");
console.log(Object.keys(estimatePartAggregates).length+ " estimatePartAggregates");
console.log(Object.keys(estimatePartFloorings).length+ " estimatePartFloorings");
console.log(Object.keys(estimatePartFootages).length+ " estimatePartFootages");
console.log(Object.keys(estimatePartLabors).length+ " estimatePartLabors");
console.log(Object.keys(estimatePartMileages).length+ " estimatePartMileages");
console.log(Object.keys(estimatePartMiscs).length+ " estimatePartMiscs");
console.log(Object.keys(estimatePartRoofings).length+ " estimatePartRoofings");
console.log(Object.keys(estimatePartWaterproofings).length+ " estimatePartWaterproofings");
console.log(Object.keys(flooringCoatings).length+ " flooringCoatings");
console.log(Object.keys(flooringEstimates).length+ " flooringEstimates");
console.log(Object.keys(mileageRates).length+ " mileageRates");
console.log(Object.keys(roofingBasecoats).length+ " roofingBasecoats");
console.log(Object.keys(roofingEstimates).length+ " roofingEstimates");
console.log(Object.keys(roofingPrimers).length+ " roofingPrimers");
console.log(Object.keys(roofingTopcoats).length+ " roofingTopcoats");
console.log(Object.keys(waterproofingBasecoats).length+ " waterproofingBasecoats");
console.log(Object.keys(waterproofingEstimates).length+ " waterproofingEstimates");
console.log(Object.keys(waterproofingPrimers).length+ " waterproofingPrimers");
console.log(Object.keys(waterproofingTopcoats).length+ " waterproofingTopcoats");

// Set up ROUTING .................................................

// Request to this URI will be handled by this CONTROLLER..........
app.use('/', require('./controllers/index.js'));
app.use('/about', require('./controllers/about.js'));
app.use('/aggregate', require('./controllers/aggregateMaterials.js'));
app.use('/estimatePartAbout', require('./controllers/estimatePartAbout.js'));
app.use('/estimatePartAggregate', require('./controllers/estimatePartAggregate.js'));
app.use('/estimatePartFlooring', require('./controllers/estimatePartFlooring.js'));
app.use('/estimatePartFootage', require('./controllers/estimatePartFootage.js'));
app.use('/estimatePartLabor', require('./controllers/estimatePartLabor.js'));
app.use('/estimatePartMileage', require('./controllers/estimatePartMileage.js').api);
app.use('/estimatePartMisc', require('./controllers/estimatePartMisc.js'));
app.use('/estimatePartRoofing', require('./controllers/estimatePartRoofing.js'));
app.use('/estimatePartWaterproofing', require('./controllers/estimatePartWaterproofing.js'));
app.use('/flooringCoating', require('./controllers/flooringCoatings.js'));
app.use('/flooringEstimate', require('./controllers/flooringEstimates.js'));
app.use('/mileageRate', require('./controllers/mileageRate.js'));
app.use('/prospect', require('./controllers/prospects.js'));
app.use('/roofingBasecoat', require('./controllers/roofingBasecoats.js'));
app.use('/roofingEstimate', require('./controllers/roofingEstimates.js'));
app.use('/roofingPrimer', require('./controllers/roofingPrimers.js'));
app.use('/roofingTopcoat', require('./controllers/roofingTopcoats.js'));
app.use('/waterproofingBasecoat', require('./controllers/waterproofingBasecoats.js'));
app.use('/waterproofingEstimate', require('./controllers/waterproofingEstimates.js'));
app.use('/waterproofingPrimer', require('./controllers/waterproofingPrimers.js'));
app.use('/waterproofingTopcoat', require('./controllers/waterproofingTopcoats.js'));

// GET Qin
app.get("/Qin", function (request, response) {
  response.render("./mentors/drQin.ejs");
});

// end routing ================================================

// handle page not found errors
app.use(function (request, response) {
  response.status(404).render("404.ejs");
});

// create server by injecting our express app
var server = http.createServer(app);

// Listen for an application http request on port 8081 
server.listen(port, function () {
  console.log('Listening on http://127.0.0.1:' + port);
});

// This model is managed by team 5-R01
//Dambadeni Kalu Achchillage, Nilantha
//Muralidhar Gouda Buddanagoudagari