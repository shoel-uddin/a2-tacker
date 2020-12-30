'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class a2List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  a2List.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING,
    serial: DataTypes.STRING,
    caliber: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'a2List',
  });
  return a2List;
};