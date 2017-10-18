var express = require("express");

var router = express.Router();

// Import the model (manager.js) to use its database functions.
// var user = require("../models/user.js");
// var classes = require("../models/class.js");
// var master = require("../models/master.js");
// var manager = require("../models/manager.js");
var classList = [ {
      id: "12345",
      name: "Class 1",
      time: "12:00",
      avail: "5",
      desc: " sit amet, consectetur adipisicing elit. Quisquam, nemo, quo! Non sunt dolores provident ratione odit, voluptas, harum unde inventore dolore accusamus dicta beatae soluta corporis suscipit magnam earum?",
      duration: "60 min",
      instructor:"John Murray"
    },  { name: "Class Two",
      time: "12:30",
      avail: "20",
      desc: " sit amet, consectetur adipisicing elit. Quisquam, nemo, quo! Non sunt dolores provident ratione odit, voluptas, harum unde inventore dolore accusamus dicta beatae soluta corporis suscipit magnam earum?",
      duration: "60 min",
      instructor:"John Murray"
}
    ];


    res.render("classes", {
      classes: classList,

    });

// Create all our routes and set up logic within those routes where required.
router.get("/manager", function(req, res) {
  manager.all(function(data) {
    var hbsObject = {
      user: data
      classes: data
      master: data
    };
    console.log(hbsObject);
    res.render("managerView", hbsObject);
  });
});

// router.post("/api/managers", function(req, res) {
//   console.log("---req.body----");
//   console.log(req.body);
//   console.log("-------");

  
//   manager.create([
//     "manager_name", "devoured"
//   ], [
//     req.body.name, false
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/managers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   manager.update({
//     devoured: true
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/managers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   manager.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
