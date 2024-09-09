const Task = require('../models/task');

// Controlador para mostrar, editar, eliminar y agregar tarea.
// Obtener tareas:
exports.getTask = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la lista de tareas.' }, error); // Respuesta para cuando hay un Internal Server Error.
    }
};

// Crear tarea:
exports.createTask = async (req, res) => {
    try {
        const { description } = req.body;
        const newTask = await Task.create({ description });
        res.status(201).json(newTask); // Usado para indicar correcta creación.
    } catch (error) {
        res.status(500).json({ message: 'Error al crear tarea.' }, error);
    }
};

// Eliminar tarea:
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.destroy({ where: id });
        res.status(204).end(); // Respuesta existosa sin contenido. (eliminación)
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar tarea.' }, error);
    }
};

// Cambiar status de tarea (done o !done):
exports.toggleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id); // Encuentra con el metodo findByPk (primary key)
        if (task) {
            task.done = !task.done;
            await task.save();
            res.json(task);
        }else{
            res.status(404).json({ message: 'Tarea no encontrada.' }); // Respuesta para cuando algo no se encuentra.
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar tarea.' }, error);
    }
};
