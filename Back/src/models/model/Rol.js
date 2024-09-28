const conexionDB = require("../../db/DB");
const { DataTypes } = require("sequelize");

const Rol = conexionDB.define("Rol", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Rol;
