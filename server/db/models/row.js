'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Row extends Model {
   
    static associate({ List, City }) {
      this.belongsTo(List, { foreignKey: "listId" });
      this.belongsTo(City, { foreignKey: "cityId" });
      // define association here
    }
  }
  Row.init({
    listId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Lists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    cityId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Cities",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  }, {
    sequelize,
    modelName: 'Row',
  });
  return Row;
};