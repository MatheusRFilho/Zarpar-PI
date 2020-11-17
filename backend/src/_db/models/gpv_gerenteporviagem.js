'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gpv_gerentePorViagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  gpv_gerentePorViagem.init({
    gpv_vgmId: DataTypes.INTEGER,
    gpv_gdvId: DataTypes.INTEGER,
    gpv_lider: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'gpv_gerentePorViagem',
  });
  return gpv_gerentePorViagem;
};