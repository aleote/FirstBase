// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads main page
  // app.get("/", function(req, res) {
	 //  	res.render("index")
	 //  	console.log("in html-routes")
	 //  	console.log(req.body) 
	 //   console.log(req.user)

  // });

  
  app.get("/contact-us", function(req, res){
    console.log("made it to contact")
    res.render("contact-us")
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
  		//var classNameArr;
  		db.Class.findAll({}).then(function(dbClass) {
  			console.log("------------------")
  			console.log(dbClass.length);
  			db.Master.findAll({
  				where: {
  					userId: req.user.id
  				}
  			}).then(function(dbMaster){
  					console.log("--------  master return ------")
  					console.log(dbMaster)
  					for(var i = 0; i < dbMaster.length; i++) {
  						console.log(dbMaster[i].classId)
  						db.Class.findAll({
  							where: {
  								id: dbMaster[i].classId
  							}
  						}).then(function(result){
  							console.log("------need to get class name from results---------")
  							console.log(result)
  							//cant get the username from the result
  						})
  					}
  				})
  				res.render("manageAccount", { name: req.user.username,
  														class: dbClass
  				})
  			})




  	});

   	//res.render("manageAccount", { name: req.user.username })
  




};