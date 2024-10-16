const { Roles } = require("./personas/Rol");
const Usuario = require("./personas/Usuario");

Roles.hasMany(Usuario, { foreignKey: "role_id" });
Usuario.belongsTo(Roles, { foreignKey: "role_id" });

module.exports = { Roles, Usuario };
