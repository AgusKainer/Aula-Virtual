const { Sequelize } = require("sequelize");
const { dbName, dbUser, dbPass } = require("../config");

const conexionDB = new Sequelize(dbName, dbUser, dbPass, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = conexionDB;
