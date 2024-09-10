const express = require('express');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Configura CORS
app.use(cors());

// Rutas:
app.use('/api', taskRoutes)

module.exports = app;
