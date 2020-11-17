'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vgm_viagems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vgm_pontoDePartida: {
        type: Sequelize.STRING
      },
      vgm_destino: {
        type: Sequelize.STRING
      },
      vgm_dataIda: {
        type: Sequelize.DATE
      },
      vgm_dataVolta: {
        type: Sequelize.DATE
      },
      vgm_valor: {
        type: Sequelize.STRING
      },
      vgm_codigoRastreio: {
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
    await queryInterface.dropTable('vgm_viagems');
  }
};