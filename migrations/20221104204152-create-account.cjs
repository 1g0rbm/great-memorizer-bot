'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('accounts', {
      chatId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: false,
      },
    })
  },

  async down (queryInterface) {
    return queryInterface.dropTable('accounts')
  }
};
