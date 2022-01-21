/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('visitors', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    pasien_id: {
      type: Sequelize.INTEGER,
    },
    dokter_id: {
      type: Sequelize.INTEGER,
    },
    status: {
      allowNull: false,
      type: Sequelize.ENUM('waiting', 'checked', 'done'),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('visitors'),
};
