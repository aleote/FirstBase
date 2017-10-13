// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Instructor = sequelize.define("Instructor", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING
  },
  teachClass: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Class.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Class;
