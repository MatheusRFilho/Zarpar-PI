'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pas_passageiro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pas_passageiro.init({
    pas_nome: DataTypes.STRING,
    pas_cpf: DataTypes.STRING,
    pas_endId: DataTypes.INTEGER,
    pas_contatoPrincipal: DataTypes.STRING,
    pas_contato_emergencia: DataTypes.STRING,
    pas_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pas_passageiro',
  });
  return pas_passageiro;
};