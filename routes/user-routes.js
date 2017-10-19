// var db = require("../models/user.js");
var express = require("express");
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {


	app.post("/user/login", passport.authenticate('local', { failureRedirect: '/user/register' }),
	  	function(req, res) {
		  	console.log("yea-------------------------");

		   console.log(req.body) 
		   console.log(req.user)

		   //res.redirect("/manage-account");
		res.render("manager", {
		title: "MANAGE ACCOUNT", //import from navigation,
		// burgers: data,

	});
	    //res.json(res);
  });




	app.get("/user/failed2", function(req, res){
		console.log("failed")
		res.render("loginTest");
	});

	app.post("/user/register", function(req, res) {
		db.User.create({
			fName: req.body.firstName,
			lName: req.body.lastName,
			email: req.body.email,
			phonenumber:req.body.phone,
			username: req.body.userName,
			password:req.body.pwd
		}).then(function(dbUser){
			res.json(dbUser);
		});
	});


	app.post("/user/update", function(req, res) {
		console.log("----body----")
		console.log(req.body)
		console.log("----user-----")
		console.log(req.user)

		db.Master.create({
			userId: req.user.id,
			classId: req.body.class
		}).then(function(result){
			console.log(result)
			//res.render('manageAccount', {newCla})
		})
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



