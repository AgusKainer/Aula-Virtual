const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbName = process.env.DB_NAME;
const user = process.env.DB_USER;
const pass = process.env.DB_PASs;

const conexionDB = new Sequelize(dbName, user, pass, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = conexionDB;
