const Rol = require("../models/model/Rol");

const initialRol = async () => {
  try {
    const roles = Rol.findAll();

    if (roles.length === 0) {
      await Rol.bulkCreate([
        { name: "Profesor" },
        { name: "Alumno" },
        { name: "Root" },
      ]);
      console.log("Roles creados");
    } else {
      console.log("Los Roles ya estan creados");
    }
  } catch (error) {
    console.log(`ERROR AL CREAR LO ROLES: ${error}`);
  }
};

module.exports = initialRol;
