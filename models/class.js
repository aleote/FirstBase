// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define("Class", {
    className: {
    type: DataTypes.STRING,
    allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    instructorID: {
      type: DataTypes.INTEGER,
    },
    limitPpl: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enrolledPpl: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  return Class;

  }

