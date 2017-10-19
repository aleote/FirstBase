var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var Instructor = sequelize.define("Instructor", {
    fullName: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING
    },
    teachClass: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING,
      default: '/assets/img/profile-image-default.png'
    }
  }, {
    timestamps: false
  });



  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // Instructor.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };

  // // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // // In this case, before a User is created, we will automatically hash their password
  // Instructor.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  return Instructor;

}
