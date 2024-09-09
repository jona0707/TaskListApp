// Archivo para definir rutas de la API:
const express = require('express');
const router = express.Router();
const { getTask, createTask, deleteTask, updateTask, toggleTask } = require('../controllers/taskController');

// Rutas:
router.get('/task',getTask);
router.post('/task',createTask);
router.delete('/task',deleteTask);
router.patch('/task',toggleTask); // Patch solo hace upgrade a ciertos elementos.

module.exports = router;

