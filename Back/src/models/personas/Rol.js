const { DataTypes } = require("sequelize");

const conexionDB = require("../../db/conexionDB");

const ROLES = ["alumno", "profesor", "admin"];

const Roles = conexionDB.define("roles", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});

module.exports = { ROLES, Roles };
