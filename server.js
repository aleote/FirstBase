var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 8080;


var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

//updated by louis to include header
app.engine("handlebars", exphbs({ 
	title: "PAGE TITLE",
	defaultLayout: "main",
	partials: "/views/partials/header/header"
	}));
app.set("view engine", "handlebars");



//Routes
require("./routes/user-routes.js")(app);
require("./routes/html-routes.js")(app);

//updated by louis for controller file
var routes = require("./controllers/firstBase_controller.js");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




