/* eslint-disable no-unused-vars */

const fakeUser = [...Array(1)].map((ft, x) => (
  {
    name: 'super admin',
    // // testing123
    password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
    email: 'admin@email.com',
    role: 'super_user',
    token: null,
    is_active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
));

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', fakeUser),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
