'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class end_endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  end_endereco.init({
    end_logradouro: DataTypes.STRING,
    end_numero: DataTypes.STRING,
    end_cidade: DataTypes.STRING,
    end_bairro: DataTypes.STRING,
    end_cidade: DataTypes.STRING,
    end_uf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'end_endereco',
  });
  return end_endereco;
};