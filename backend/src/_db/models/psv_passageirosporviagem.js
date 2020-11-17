'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class psv_passageirosPorViagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  psv_passageirosPorViagem.init({
    psv_pasId: DataTypes.INTEGER,
    psv_vgmId: DataTypes.INTEGER,
    psv_statusDePagamento: DataTypes.BOOLEAN,
    psv_formaDePagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'psv_passageirosPorViagem',
  });
  return psv_passageirosPorViagem;
};