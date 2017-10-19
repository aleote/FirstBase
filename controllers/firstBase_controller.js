var express = require("express");
var router = express.Router();
var db = require("../models");
var mo = require("method-override");

// var burger = require("../models/burger.js");

router.get("/", function(req, res) {


		res.render("index", {
			title: "HEAVENLY YOGA STUDIO", //import from navigation,
			description: "Welcome to Heavenly Yoga Studio. We've been a part of the yoga community here is SmallTown for over 10 years. We offer a wide range of classes, from Yoga to High Intensity Fitness.",
			address:"123 W Some Street, Suite 102, SmallTown, WA, 99901"			
		});


});


//Add new class
router.post("/manager/newclass", function(req, res){
	console.log(req.body)
	db.Class.create({
			className: req.body.className,
			startTime: req.body.startTime,
			endTime: req.body.endtime,
			instructorID: req.body.instructorid,
			limitPpl: req.body.limitppl,
			enrolledPpl:req.body.enrolledppl,
			category: req.body.category,
			description: req.body.description

		}).then(function(dbClass){
			res.json(dbClass);
	})
})

//Add new instructor
router.post("/manager/newinst", function(req, res){
	console.log(req.body)
	db.Instructor.create({
		fullName: req.body.fullName,
		bio: req.body.bio,
		teachClass: req.body.teachClass,
		photo: req.body.photo
		}).then(function(dbInst){
			res.json(dbInst);
	})
})



//**************************************************************************************

router.get("/user/register", function(req, res) {
	res.render("register", {
		title: "REGISTER", //import from navigation,
		// burgers: data,

	});
});



router.get("/manage-account", function(req, res) {
	res.render("manageAccount", {
		title: "MANAGE ACCOUNT", //import from navigation,
		// burgers: data,

	});
});



router.get("/classes", function(req, res) {

	db.Class.findAll({}).then(function(dbClass){
		//console.log("form --------------------------------------1stbase dbclass findAll")
		console.log(dbClass)
		res.render("classes", {
			classes: dbClass,

		})

	})
})


router.get("/manager", function(req, res) {
	var instructorList;
		db.Instructor.findAll({}).then(function(dbInstructors){
		//console.log("form ------------------------------manager 1stbase dbclass findAll")
		console.log(dbInstructors);
		instructorList = dbInstructors;
	})

	db.Class.findAll({}).then(function(dbClass){
		//console.log("form ------------------------------manager 1stbase dbclass findAll")
		console.log(dbClass);
		var classList = dbClass;
		console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
		res.render("manager", {
			classes: dbClass, 
			instructors: instructorList
		});
	});
});


router.get("/manager", function(req, res) {

	db.Class.findAll({}).then(function(dbClass){
		//console.log("form ------------------------------manager 1stbase dbclass findAll")
		console.log(dbClass);
		res.render("manager", {
			classes: dbClass

		})

	})
})



//manager add class
router.post("/classes/add", function(req, res){
console.log(" -----------req user-------------------")
	console.log(req.user)
	console.log(" -----------req body-------------------")
	console.log(req.body.class)

	db.Master.create({
		userId: req.user.id,
		classId: req.body.class,
		className: req.body.classname
	}).then(function(dbMaster){
		console.log(dbMaster)
	})
})


//manager add instructor
router.post("/instructors", function(req, res){
console.log(" -----------req user-------------------")
	console.log(req.user)
	console.log(" -----------req body-------------------")
	console.log(req.body)

	db.Instructor.create({
		fullName: req.body.title,
		bio: req.body.bio,
		teachClass: req.body.classtitle
		//photo: req.file.path
	}).then(function(Instructor){
		console.log(Instructor)
	})
})






router.get("/instructors", function(req, res) {

	db.Instructor.findAll({}).then(function(dbClass){
		//console.log("form --------------------------------------1stbase dbclass findAll")
		console.log(dbClass)
		res.render("instructors", {
			instructors: dbClass,

		})

	})
})






router.put("/manager", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Class.update({
      className: req.body.className,
      startTime: req.body.startTime,
      category: req.body.category,
		description: req.body.description,
		instructorID: req.body.instructorID
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbmanager) {
      res.json(dbmanager);
    });
  });










module.exports = router;