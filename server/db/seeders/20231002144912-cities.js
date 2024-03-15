"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          name: "Москва",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Санкт-Петербург",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Милан",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Шанхай",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Пекин",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Токио",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Лос-Анджелес",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Вашингтон",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Нью-Йорк",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Париж",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Лондон",
          year: "2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
