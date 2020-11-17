'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pas_passageiros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pas_nome: {
        type: Sequelize.STRING
      },
      pas_cpf: {
        type: Sequelize.STRING
      },
      pas_endId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'end_endereco',
          key: 'id'
        }
      },
      pas_contatoPrincipal: {
        type: Sequelize.STRING
      },
      pas_contato_emergencia: {
        type: Sequelize.STRING
      },
      pas_email: {
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
    await queryInterface.dropTable('pas_passageiros');
  }
};