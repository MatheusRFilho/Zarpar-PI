'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gdv_gerenteDeViagems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gdv_email: {
        type: Sequelize.STRING
      },
      gdv_senha: {
        type: Sequelize.STRING
      },
      gdv_nome: {
        type: Sequelize.STRING
      },
      gdv_cliId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'cli_cliente',
          key: 'id'
        }
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
    await queryInterface.dropTable('gdv_gerenteDeViagems');
  }
};