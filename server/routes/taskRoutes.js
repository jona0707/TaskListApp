// Archivo para definir rutas de la API:
const express = require('express');
const router = express.Router();
const { getTask, createTask, deleteTask, updateTask, toggleTask } = require('../controllers/taskController');

// Rutas:
router.get('/tasks',getTask);
router.post('/tasks',createTask);
router.delete('/tasks/:id',deleteTask);
router.patch('/tasks/:id',toggleTask); // Patch solo hace upgrade a ciertos elementos.

module.exports = router;

