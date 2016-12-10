var express = require('express');
var api = express.Router();


// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "about")
// Specify the handler for each required combination of URI and HTTP verb 

// HANDLE VIEW DISPLAY REQUESTS --------------------------------------------

// GET t1
api.get('/t1', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t1/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t1/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t1/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t1/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t1/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t1/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t1/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t2
api.get('/t2', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t2/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t2/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t2/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t2/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t2/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t2/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t2/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t3
api.get('/t3', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t3/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t3/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t3/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t3/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t3/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t3/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t3/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t4
api.get('/t4', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t4/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t4/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t4/a/index.ejs',
        { title: "Akunuri Hari Kiran", layout: "layout.ejs" });
});
api.get('/t4/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t4/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t4/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t4/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t5
api.get('/t5', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t5/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t5/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t5/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t5/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t5/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t5/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t5 /c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t6
api.get('/t6', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t6/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t6/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t6/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t6/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t6/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t6/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t6/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t7
api.get('/t7', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t7/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t7/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t7/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t7/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t7/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t7/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t7/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t8
api.get('/t8', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t8/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t8/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t8/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t8/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t8/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t8/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t8/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t9
api.get('/t9', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t9/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t9/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t9/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t9/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t9/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t9/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t9/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t10
api.get('/t10', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t10/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t10/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t10/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t10/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t10/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t10/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t10/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t11
api.get('/t11', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t11/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t11/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t11/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t11/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t11/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t11/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t11/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t12
api.get('/t12', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t12/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t12/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t12/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t12/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t12/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t12/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t12/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t13
api.get('/t13', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t13/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t13/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t13/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t13/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t13/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t13/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t13/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t14
api.get('/t14', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t14/index.ejs',
        { title: "TeamName", layout: "layout.ejs" });
});
api.get('/t14/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t14/a/index.ejs',
        { title: "TeamMember1PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t14/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t14/b/index.ejs',
        { title: "TeamMember2PutYourNameHere", layout: "layout.ejs" });
});
api.get('/t14/c', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t14/c/index.ejs',
        { title: "TeamMember3PutYourNameHere", layout: "layout.ejs" });
});

// GET t15
api.get('/t15', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t15/index.ejs',
        { title: "Mentors", layout: "layout.ejs" });
});
api.get('/t15/a', function(req, res) {
    console.log("Handling GET " + req);
    res.render('t15/a/index.ejs',
        { title: "Neha Ankam", layout: "layout.ejs" });
});
api.get('/t15/b', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t15/b/index.ejs',
        { title: "Sreekanth Bandaru", layout: "layout.ejs" });
});
api.get('/t15/e', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t15/e/index.ejs',
        { title: "Rathnakar Ettedi", layout: "layout.ejs" });
});
api.get('/t15/k', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t15/k/index.ejs',
        { title: "Pushkar Kanikicherla", layout: "layout.ejs" });
});
api.get('/t15/m', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t15/m/index.ejs',
        { title: "Harika Malempati", layout: "layout.ejs" });
});
api.get('/t15/p', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t15/p/index.ejs',
        { title: "Bhavana Pilli", layout: "layout.ejs" });
});
api.get('/t15/r', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t15/r/index.ejs',
        { title: "Harsha Rachakunta", layout: "layout.ejs" });
});
api.get('/t15/q', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('t15/q/index.ejs',
        { title: "Dr. Zhengrui Qin", layout: "layout.ejs" });
});



module.exports = api;