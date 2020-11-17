'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gpv_gerentePorViagems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gpv_vgmId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'vgm_viagem',
          key: 'id'
        }
      },
      gpv_gdvId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'gdv_gerenteDeViagem',
          key: 'id'
        }
      },
      gpv_lider: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('gpv_gerentePorViagems');
  }
};