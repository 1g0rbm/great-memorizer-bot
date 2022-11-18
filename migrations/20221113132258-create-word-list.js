'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('wordlists', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
      },
      word_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })

    await queryInterface.addColumn(
      'accounts',
      'wordlist_id',
      {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: true,
      },
    )

    await queryInterface.addConstraint('wordlists', {
      fields: ['account_id'],
      type: 'foreign key',
      name: 'wordlists_ref_accounts',
      references: { table: 'accounts', field: 'chat_id' },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })

    await queryInterface.addConstraint('accounts', {
      fields: ['wordlist_id'],
      type: 'foreign key',
      name: 'accounts_ref_wordlist',
      references: { table: 'wordlists', field: 'id' },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
  },

  async down (queryInterface) {
    return Promise.all([
      queryInterface.removeConstraint('accounts', 'accounts_ref_wordlist'),
      queryInterface.removeConstraint('wordlists', 'wordlists_ref_accounts'),
      queryInterface.removeColumn('accounts', 'wordlist_id'),
      queryInterface.dropTable('wordlists'),
    ])
  }
}
