// var db = require("../models/user.js");
var express = require("express");
var db = require("../models");

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.render("index")

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


	app.get("/user/register", function(req, res){
		res.render("testSignup")
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





	app.post("/user/login", function(req, res){
		

		
		var loginName = req.body.name;
		var loginPassword = req.body.password;






		return res.json(loginName);
		console.log(req.body)
	})


};



