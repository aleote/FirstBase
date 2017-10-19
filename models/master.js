module.exports = function(sequelize, DataTypes) {
  var Master = sequelize.define("Master", {
    userId: {
    type: DataTypes.STRING,
    allowNull: false
    },
    classId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });



// Master.associate = function(models){
//   Master.belongsTo(models.Class), {
//     foreignKey:{
//       allowNull: false
//     }
//   }
// }

// Master.associate = function(models){
//   Master.belongsTo(models.User), {
//     foreignKey:{
//       allowNull: false
//     }
//   }
// }

return Master; 
}
