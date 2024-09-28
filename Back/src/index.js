const app = require("./app");
const conexionDB = require("./db/DB");
require("dotenv").config();
const port = process.env.PORT;

const server = async () => {
  try {
    await conexionDB.sync();
    console.log("Conexion a la DB exitosa");

    app.listen(port);
    console.log(`SERVER EN EL PUERTO: ${port}`);
  } catch (error) {
    console.log(`ERROR DEL SERVER: ${error}`);
  }
};
server();
