/* eslint-disable no-unused-vars */

const fakeUser = [
  {
    full_name: 'super admin',
    // // testing123
    password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
    email: 'admin@email.com',
    role: 'super_user',
    token: null,
    is_active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    full_name: 'dokter',
    password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
    email: 'dokter@email.com',
    role: 'dokter',
    token: null,
    is_active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    full_name: 'dokter2',
    password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
    email: 'dokter2@email.com',
    role: 'dokter',
    token: null,
    is_active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    full_name: 'kasir',
    password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
    email: 'kasir@email.com',
    role: 'kasir',
    token: null,
    is_active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    full_name: 'resepsionis',
    password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
    email: 'resepsionis@email.com',
    role: 'resepsionis',
    token: null,
    is_active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', fakeUser),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
