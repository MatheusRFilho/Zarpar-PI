'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('psv_passageirosPorViagems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      psv_pasId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'pas_passageiro',
          key: 'id'
        }
      },
      psv_vgmId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'vgm_viagem',
          key: 'id'
        }
      },
      psv_statusDePagamento: {
        type: Sequelize.BOOLEAN
      },
      psv_formaDePagamento: {
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
    await queryInterface.dropTable('psv_passageirosPorViagems');
  }
};