'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gdv_gerenteDeViagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  gdv_gerenteDeViagem.init({
    gdv_email: DataTypes.STRING,
    gdv_senha: DataTypes.STRING,
    gdv_nome: DataTypes.STRING,
    gdv_cliId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gdv_gerenteDeViagem',
  });
  return gdv_gerenteDeViagem;
};