require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const PORT = process.env.PORT;
const SECRET_STRING = process.env.MY_STRING_SECRET;
const adminCorreo = process.env.ADMIN_CORREO;
const adminUser = process.env.ADMIN_USER;
const adminPass = process.env.ADMIN_PASSWORD;

module.exports = {
  dbName,
  dbPass,
  dbUser,
  PORT,
  SECRET_STRING,
  adminCorreo,
  adminPass,
  adminUser,
};
