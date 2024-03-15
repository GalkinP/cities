"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Lists",
      [
       {
          shortName: "Европа",
          fullName: "Список городов в Европе",
          color: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shortName: "Азия",
          fullName: "Список городов в Азии",
          color: "blue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shortName: "Америка",
          fullName: "Список городов в Америке",
          color: "green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shortName: "Африка",
          fullName: "Список городов в Африке",
          color: "yellow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lists", null, {});
  },
};
