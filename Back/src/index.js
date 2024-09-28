const app = require("./app");

const server = async () => {
  try {
    app.listen(1234);
    console.log("Servidor funcionando en el puerto 1234");
  } catch (error) {
    console.log(`ERROR AL LEVANTAR EL SERVIDOR: ${error}`);
  }
};
server();
