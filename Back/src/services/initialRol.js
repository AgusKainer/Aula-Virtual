const { Op } = require("sequelize");
const { Roles, Usuario } = require("../models/index.model");
const { adminCorreo, adminUser, adminPass } = require("../config");

const crearRoles = async () => {
  try {
    const countRol = await Roles.count();

    if (countRol > 0) return "Los roles esan creados";

    const values = await Roles.bulkCreate([
      { nombre: "alumno" },
      { nombre: "profesor" },
      { nombre: "admin" },
    ]);
    return values;
  } catch (error) {
    console.log(`ERROR AL CREAR LOS ROLES: ${error}`);
  }
};

const crearAdmin = async () => {
  const userFind = await Usuario.findOne({ correo: adminCorreo });
  console.log(userFind);
  if (userFind) return;

  const rol = await Roles.findAll({
    where: {
      nombre: {
        [Op.in]: ["admin"],
      },
    },
  });
  if (rol.length > 0) {
    const adminRol = rol[0].id;
    const admin = await Usuario.create({
      nombre: adminUser,
      correo: adminCorreo,
      contraseña: adminPass,
      role_id: adminRol,
    });
    console.log(`Usuario ADMIN creado: ${admin}`);
  } else {
    return "USUARIO ADMIN YA ESTA CREADO";
  }
};

module.exports = { crearAdmin, crearRoles };
