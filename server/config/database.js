// Configurar sequelize para conexión con BDD.
const { Sequelize } = require('sequelize');

// Configura tu conexión aquí
const sequelize = new Sequelize('nombre_de_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
