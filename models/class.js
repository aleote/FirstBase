// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Class = sequelize.define("Class", {
  className: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startTime: {
    type: Sequelize.DATE(4:6),
    allowNull: false
  },
  endTime: {
    type: Sequelize.DATE(4:6),
    allowNull: false
  },
  instructorID: {
    type: Sequelize.INTEGER,
  },
  limitPpl: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  enrolledPpl: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Class.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Class;
