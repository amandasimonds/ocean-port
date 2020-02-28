// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Badge = sequelize.define("Badge", {
    // The badges cannot be null
    badges: {
      type: DataTypes.STRING,
      allowNull: false,

      },

    quizscore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    }
    
    )
    return Badge

};