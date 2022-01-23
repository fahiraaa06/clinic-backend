require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    dialect: process.env.DB_TYPE,
    operatorsAliases: 0,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    dialect: process.env.DB_TYPE,
    operatorsAliases: 0,
  },
  production: {
    dialect: "postgres",
    protocol: "postgres",
    use_env_variable: "DATABASE_URL",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
};
