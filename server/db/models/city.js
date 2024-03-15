const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate({ Row }) {
      this.hasMany(Row, { foreignKey: "cityId" });
    }
  }
  City.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      year: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
