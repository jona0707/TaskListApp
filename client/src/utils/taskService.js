// Aquí se gestionarán las solicitudes a la API
import { api } from './api';

// Obtener todas las tareas:
export const getTasks = async () => {
    try {
        const response = await fetch(api);
        if (!response.ok) throw new Error('Respuesta negativa de red.');
        return await response.json();
    } catch (error) {
        console.error('Error recuperando tasks:', error);
        throw error;
    }
}


// Crear una nueva tarea:
export const createTask = async (task) => {
    try {
        const response = await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        });
        if (!response.ok) throw new Error('Respuesta negativa de red.');
        return await response.json();
    } catch (error) {
        console.error('Error agregando task:', error);
        throw error;
    }
};

// Eliminar una tarea
export const deleteTask = async (id) => {
    try {
        const response = await fetch(`${api}/${id}`, { 
            method: 'DELETE' 
        });
        if (!response.ok) throw new Error('Respuesta negativa de red.');
    } catch (error) {
        console.error('Error eliminando task:', error);
        throw error;
    }
};

// Actualizar estado de tarea
export const updateTask = async (id) => {
    try {
        const response = await fetch(`${api}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) throw new Error('Respuesta negativa de red.');
        return await response.json();
    } catch (error) {
        console.error('Error actualizando task:', error);
        throw error;
    }
};