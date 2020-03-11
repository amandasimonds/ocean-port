// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Badges = sequelize.define("Badges", {
    // The badges cannot be null
    badge: {
      type: DataTypes.STRING,
      allowNull: false,
      },

    quizscore: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    }}
    )
    return Badges
};