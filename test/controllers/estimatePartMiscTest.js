var express = require('express');
var request = require("supertest");  // request
var should = require("should");
var expect = require("chai").expect;
const appport = 8081;
const appname = "jce";
const testId = 1;
const defaultPath = "estimatePartMisc";  
var app = express();

describe("Materials - estimatePartMisc unit test",function(){

  it("should return index page",function(done){
    request(app)
    .get(defaultPath+"/")
    .expect(200) // expected HTTP response
    .end(function(err,res){
      done();
    });
  });
  it("should return create page",function(done){
    request(app)
    .get(defaultPath+"/create")
    .expect(200) // expected HTTP response
    .end(function(err,res){
      done();
    });
  });
  it("should return delete page for id",function(done){
    request(app)
    .get(defaultPath+"/delete/"+testId)
    .expect(200) // expected HTTP response
    .end(function(err,res){
      done();
    });
  });
  it("should return details page for id",function(done){
    request(app)
    .get(defaultPath+"/details/"+testId)
    .expect(200) // expected HTTP response
    .end(function(err,res){
      done();
    });
  });
  it("should return edit page for id",function(done){
    request(app)
    .get(defaultPath+"/edit/"+testId)
    .expect(200) // expected HTTP response
    .end(function(err,res){
      done();
    });
  });

});