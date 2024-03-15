"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    static associate({ Row }) {
      this.hasMany(Row, { foreignKey: "listId" });
      // define association here
    }
  }
  List.init(
    {
      shortName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      fullName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      color: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "List",
    },
  );
  return List;
};
