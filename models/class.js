// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define("Class", {
    className: {
    type: Sequelize.STRING,
    allowNull: false
    },
    startTime: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endTime: {
      type: Sequelize.DATE,
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

  return Class;

  }

