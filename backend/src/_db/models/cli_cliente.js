'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cli_cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cli_cliente.init({
    cli_nomefantasia: DataTypes.STRING,
    cli_cnpj: DataTypes.STRING,
    cli_cpf: DataTypes.STRING,
    cli_endId: DataTypes.INTEGER,
    cli_telefone: DataTypes.INTEGER,
    cli_celular: DataTypes.INTEGER,
    cli_email: DataTypes.STRING,
    cli_senha: DataTypes.STRING,
    cli_tplId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cli_cliente',
  });
  return cli_cliente;
};