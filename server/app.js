const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Aquí van las rutas
// app.use('/api/tareas', require('./routes/tareas'));

module.exports = app;
