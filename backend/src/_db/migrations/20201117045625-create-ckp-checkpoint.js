'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ckp_checkpoints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ckp_vgmId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'vgm_viagem',
          key: 'id'
        }
      },
      ckp_nome: {
        type: Sequelize.STRING
      },
      ckp_descricao: {
        type: Sequelize.STRING
      },
      ckp_status: {
        type: Sequelize.BOOLEAN
      }, 
      ckp_gdvId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'gdv_gerenteDeViagem',
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
    await queryInterface.dropTable('ckp_checkpoints');
  }
};