var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var routes = require("./controllers/firstBase_controller.js");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");


// Sets up the Express app to handle data parsing
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
//app.use(bodyParser.text());
//app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// We need to use sessions to keep track of our user's login status
app.use(session({ 
	secret: "alskjdfh", 
	resave: false, 
	saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


app.engine("handlebars", exphbs({ 
	title: "PAGE TITLE",
	defaultLayout: "main",
	partials: "/views/partials/header/header"
	}));

app.set("view engine", "handlebars");


//Routes
require("./routes/html-routes.js")(app);
require("./routes/user-routes.js")(app);
app.use("/", routes)


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




