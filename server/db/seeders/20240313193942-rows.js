'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Rows', [
    {
      listId: 1,
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      listId: 1,
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      listId: 1,
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      listId: 2,
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      listId: 2,
      cityId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      listId: 2,
      cityId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      listId: 3,
      cityId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      listId: 3,
      cityId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      listId: 4,
      cityId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rows', null, {});
     
  }
};
