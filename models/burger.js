
module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("burgers_db", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
    }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultsValue: false
    }
  });
  return Burger;
}
