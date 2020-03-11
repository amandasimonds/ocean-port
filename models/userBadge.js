// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var userBadge = sequelize.define("userBadge", {
      // The badges cannot be null
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
  
      badgeId: {
        type: DataTypes.STRING,
        allowNull: false,
      }
          }
      
      )
      return userBadge
  
  };