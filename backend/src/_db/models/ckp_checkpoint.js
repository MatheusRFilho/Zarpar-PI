'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ckp_checkpoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ckp_checkpoint.init({
    ckp_vgmId: DataTypes.INTEGER,
    ckp_nome: DataTypes.STRING,
    ckp_descricao: DataTypes.STRING,
    ckp_status: DataTypes.BOOLEAN,
    ckp_gdvId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ckp_checkpoint',
  });
  return ckp_checkpoint;
};