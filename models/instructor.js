module.exports = function(sequelize, DataTypes) {
  var Instructor = sequelize.define("Instructor", {
    username: {
    type: DataTypes.STRING,
    allowNull: false
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING
    },
    teachClass: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  return Instructor;

}
