module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  	id: {
    	type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   username: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   fName: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   lName: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   email: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   phonenumber: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   password: {
   	type: DataTypes.STRING,
   	allowNull: false
   }, 
   classId: {
   	type: DataTypes.STRING,
   	allowNull: false
   }

  });

  return User;
}



