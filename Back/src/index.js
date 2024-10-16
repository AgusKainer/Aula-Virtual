const app = require("./app");
const conexionDB = require("./db/conexionDB");
const { crearAdmin, crearRoles } = require("./services/initialRol");

const server = async () => {
  try {
    await conexionDB.sync();
    await crearRoles();
    await crearAdmin();
    console.log("CONEXION A LA DB EXITOSA");

    app.listen(1000);
    console.log("SERVIDOR EN EL PUERTO 1000");
  } catch (error) {
    console.log(`ERROR AL LEVANTAR EL SERVIDOR: ${error}`);
  }
};
server();
