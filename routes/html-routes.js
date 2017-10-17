// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads main page
  app.get("/", function(req, res) {
	  	res.render("index")
	  	console.log("in html-routes")
	  	console.log(req.body) 
	   console.log(req.user)

  });

  	app.get("/register", function(req, res){
		console.log("made it to register")
		res.render("createAccount")
	});


  	//For testing connection
  	app.get("/user/protected", function(req, res){
		console.log(req.user)
		if(!req.user) {
			return res.send("not in") 
		} else {
			res.send("logged in")
		}
	});

  
// Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/user/members", isAuthenticated, function(req, res) {
   	res.render("onlyForLogins", { name: req.user.username })
  });




};