var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.User.findAll({}).then(function(result){
			console.log(result)
		});
	});
};