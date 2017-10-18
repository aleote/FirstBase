var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {

burger.selectAll(function(data) {

		res.render("index", {
			title: "PAGE TITLE", //import from navigation,
			description: "This is the copy about the store location",
			address:"123 W Some Street, Suite 102, SmallTown, WA, 99901"			
		});
	});

});

router.get("/contact-us" , function(req, res){

	res.render("contact-us")
})


router.get("/user/register", function(req, res) {
	res.render("register", {
		title: "PAGE: REGISTER", //import from navigation,
		// burgers: data,

	});
});

router.get("/classes", function(req, res) {

	burger.selectAll(function(data) {

		var classList = [ {
			id: "12345",
			name: "Class 1",
			time: "12:00",
			avail: "5",
			desc: " sit amet, consectetur adipisicing elit. Quisquam, nemo, quo! Non sunt dolores provident ratione odit, voluptas, harum unde inventore dolore accusamus dicta beatae soluta corporis suscipit magnam earum?",
			duration: "60 min",
			instructor:"John Murray"
		},	{	name: "Class Two",
			time: "12:30",
			avail: "20",
			desc: " sit amet, consectetur adipisicing elit. Quisquam, nemo, quo! Non sunt dolores provident ratione odit, voluptas, harum unde inventore dolore accusamus dicta beatae soluta corporis suscipit magnam earum?",
			duration: "60 min",
			instructor:"John Murray"
}
		];


		res.render("classes", {
			classes: classList,

		})
	})
});

router.get("/instructors", function(req, res) {

		var instructorTest = [{
			id: "1",
			img: "/assets/img/fitness-instructor-4.jpg",
			name: "Janet Smith",
			classes: "Yoga, Boxing, Cardio KickBox",
			bio: "Adina started taking yoga at her gym in 2003, and for the next six years muscled her way through power yoga classes and adamantly refused to chant AUM. In 2010, she stumbled into Brooklyn Yoga School, where her real practice of yoga began in glimpses of inner peace, purpose, and happiness. She kept coming back, and learned to slow down, sit still, stand on her head, fall on her face, and slowly start showing up in life. In 2012, Adina completed the BYS 200 HR Teacher Training, and began sharing her practice with others. She holds profound gratitude for her many teachers and for the incredibly humbling opportunity to develop and share her practice in this beautiful space."
		},{
			id: "2",
			img: "/assets/img/fitness-instructor-54.jpg",
			name: "John Jones",
			classes: "TRX, PowerYoga",
			bio: "Adina started taking yoga at her gym in 2003, and for the next six years muscled her way through power yoga classes and adamantly refused to chant AUM. In 2010, she stumbled into Brooklyn Yoga School, where her real practice of yoga began in glimpses of inner peace, purpose, and happiness. She kept coming back, and learned to slow down, sit still, stand on her head, fall on her face, and slowly start showing up in life. In 2012, Adina completed the BYS 200 HR Teacher Training, and began sharing her practice with others. She holds profound gratitude for her many teachers and for the incredibly humbling opportunity to develop and share her practice in this beautiful space."
		},{
			id:"3",
			img: "/assets/img/fitness-instructor-6.jpg",
			name: "Peter Hanes",
			classes: "Boxing, Battle Ropes",
			bio: "Adina started taking yoga at her gym in 2003, and for the next six years muscled her way through power yoga classes and adamantly refused to chant AUM. In 2010, she stumbled into Brooklyn Yoga School, where her real practice of yoga began in glimpses of inner peace, purpose, and happiness. She kept coming back, and learned to slow down, sit still, stand on her head, fall on her face, and slowly start showing up in life. In 2012, Adina completed the BYS 200 HR Teacher Training, and began sharing her practice with others. She holds profound gratitude for her many teachers and for the incredibly humbling opportunity to develop and share her practice in this beautiful space."
		}];


console.log(instructorTest);
		res.render("instructors", {
			instructors: instructorTest						
		});

});


router.get("/all-burgers", function(req, res) {

	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});

});

router.post("/api/burgers/", function(req, res) {

	console.log(req.body);

	burger.insertOne(req.body.burger),
		function(result) {
			console.log(result);
			res.json({
				id: result
			});
		};
	res.redirect("/");

});

router.put("/api/burgers/:id", function(req, res) {
	console.log("made it to update ROUTE");

	var id = req.params.id;

	console.log("this is req.params" + id);

	burger.updateOne('1', id, function(result) {
		console.log(result);
		res.json(result);

	})

});



module.exports = router;