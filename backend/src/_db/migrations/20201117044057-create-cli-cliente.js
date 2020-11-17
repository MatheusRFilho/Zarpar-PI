'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cli_clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cli_nomefantasia: {
        type: Sequelize.STRING
      },
      cli_cnpj: {
        type: Sequelize.STRING
      },
      cli_cpf: {
        type: Sequelize.STRING
      },
      cli_endId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'end_endereco',
          key: 'id'
        }
      },
      cli_telefone: {
        type: Sequelize.INTEGER
      },
      cli_celular: {
        type: Sequelize.INTEGER
      },
      cli_email: {
        type: Sequelize.STRING
      },
      cli_senha: {
        type: Sequelize.STRING
      },
      cli_tplId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'tpl_tipoDePlanos',
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
    await queryInterface.dropTable('cli_clientes');
  }
};