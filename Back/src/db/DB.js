const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const host = process.env.HOST;

const conexionDB = new Sequelize(dbName, dbUser, dbPass, {
  host: host,
  dialect: "postgres",
});

module.exports = conexionDB;
