// Configurar sequelize para conexión con BDD.
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Configura tu conexión aquí
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
});

module.exports = sequelize;
