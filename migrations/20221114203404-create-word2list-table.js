'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('words2lists', {
      word_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      wordlist_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
    })

    await queryInterface.addConstraint('words2lists', {
      fields: ['word_id', 'wordlist_id'],
      type: 'unique',
      name: 'words2lists_unique',
    })

    await queryInterface.addConstraint('words2lists', {
      fields: ['word_id'],
      type: 'foreign key',
      name: 'words2lists_word_id_foreign_key',
      references: { table: 'words', field: 'id' },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })

    await queryInterface.addConstraint('words2lists', {
      fields: ['wordlist_id'],
      type: 'foreign key',
      name: 'words2lists_wordlist_id_foreign_key',
      references: { table: 'wordlists', field: 'id' },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
  },

  async down (queryInterface) {
    await queryInterface.removeConstraint('words2lists', 'words2lists_unique'),
    await queryInterface.removeConstraint('words2lists', 'words2lists_wordlist_id_foreign_key'),
    await queryInterface.removeConstraint('words2lists', 'words2lists_word_id_foreign_key'),
    await queryInterface.dropTable('words2lists')
  }
}
