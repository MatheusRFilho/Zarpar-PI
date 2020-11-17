'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vgm_viagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vgm_viagem.init({
    vgm_pontoDePartida: DataTypes.STRING,
    vgm_destino: DataTypes.STRING,
    vgm_dataIda: DataTypes.DATE,
    vgm_dataVolta: DataTypes.DATE,
    vgm_valor: DataTypes.STRING,
    vgm_codigoRastreio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vgm_viagem',
  });
  return vgm_viagem;
};