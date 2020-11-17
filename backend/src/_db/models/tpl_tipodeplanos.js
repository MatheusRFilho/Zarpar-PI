'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tpl_tipoDePlanos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tpl_tipoDePlanos.init({
    tpl_nome: DataTypes.STRING,
    tpl_descricao: DataTypes.STRING,
    tpl_valor: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'tpl_tipoDePlanos',
  });
  return tpl_tipoDePlanos;
};