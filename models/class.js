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


  //  Class.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Class.belongsTo(models.Instructor, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

 



  // Class.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Class.hasMany(models.Users, {
  //     onDelete: "cascade"
  //   });
  // };

  return Class;
  }