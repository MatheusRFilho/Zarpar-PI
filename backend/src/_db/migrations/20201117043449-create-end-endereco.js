'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('end_enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      end_logradouro: {
        type: Sequelize.STRING
      },
      end_numero: {
        type: Sequelize.STRING
      },
      end_cidade: {
        type: Sequelize.STRING
      },
      end_bairro: {
        type: Sequelize.STRING
      },
      end_cidade: {
        type: Sequelize.STRING
      },
      end_uf: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('end_enderecos');
  }
};