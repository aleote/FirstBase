// var db = require("../models/user.js");
var db = require("../models");

module.exports = function(app) {
	app.get("/", function(res) {
		db.User.findAll({}).then(function(result){
		console.log(result[0].username)
		});
		//res.send
	});
};



// 	 {
// 		db.User.findAll({}).then(function(result){
// 			var something = res.json(result)

// 			console.log(something);
// 		});
// 	});
// };