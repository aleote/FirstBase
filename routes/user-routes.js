// var db = require("../models/user.js");
var express = require("express");
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {


	app.post('/user/login', passport.authenticate('local', { failureRedirect: '/user/register' }),
	  	function(req, res) {
		  	console.log("yea");

		   console.log(req.body) 
		   console.log(req.user)
		   res.render('index');
	    //res.json(res);
  });




	app.get("/user/failed2", function(req, res){
		console.log("failed")
		res.render("loginTest");
	});


	app.post("/user/register", function(req, res) {
		db.User.create({
			fName: req.body.fname,
			lName: req.body.lname,
			email: req.body.email,
			phonenumber:req.body.phone,
			username: req.body.username,
			password:req.body.password
		}).then(function(dbUser){
			res.json(dbUser);
		});
	});


	  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });






//************* use these to for get and post...havent gotten it working yet*********
	// app.get("/", function(req, res) {
	// 	db.User.findAll({}).then(function(result){

			
	// 		var userDetails = {
	// 			user: result
	// 		};
	// 		console.log(userDetails.user[0].id)
	// 		 res.render("index", userDetails.user[0])

	// });


	// app.post("/api/post", function(res) {
	// 	db.User.findAll({}).then(function(result){
	// 	console.log(result[0].username)
	// 	});
	// 	//res.send
	// });
//********************************************************************************



};



