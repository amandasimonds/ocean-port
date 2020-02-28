// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
      // The badges cannot be null
      favorites: {
        type: DataTypes.STRING,
        allowNull: false
        },
        favoriteType: {
            type: DataTypes.STRING,
            allowNull: false
        }
      
      }
      
      )
      return Favorite
  
  };