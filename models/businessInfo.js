module.exports = function(sequelize, DataTypes) {
  var BusinessInfo = sequelize.define("BusinessInfo", {
  	// id: {
   //  	type: DataTypes.INTEGER,
   //    autoIncrement: true,
   //    primaryKey: true
   // },
   businessName: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   address: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   hours: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   aboutUs: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   phonenumber: {
   	type: DataTypes.STRING,
   	allowNull: false
   }

  });

  return BusinessInfo;
}