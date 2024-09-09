const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Middleware para parsear JSON
app.use(express.json());
// Rutas:
app.use('/api', taskRoutes)

module.exports = app;
