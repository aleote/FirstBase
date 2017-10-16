module.exports = function(sequelize, DataTypes) {
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

  return Instructor;

}
