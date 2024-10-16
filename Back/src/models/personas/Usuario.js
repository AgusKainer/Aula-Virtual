const { DataTypes } = require("sequelize");
const { Roles } = require("./Rol");
const conexionDB = require("../../db/conexionDB");

const Usuario = conexionDB.define("usuario", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
  },
  role_id: {
    type: DataTypes.UUID,
    references: {
      model: Roles,
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = Usuario;
