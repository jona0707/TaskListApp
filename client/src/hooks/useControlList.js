import { useEffect, useReducer } from 'react'
import { listReducer } from '../utils/listReducer'
import { getTasks, createTask, deleteTask, updateTask } from '../utils/taskService';

export const useControlList = () => {

    // Momentaneo para mostrar en frontend
    const initialState = [];

    // Agregar init cuando ya se junte con la base.
    const [list, dispatch] = useReducer(listReducer, initialState);

    // Cargar tareas desde la base
    const loadTasks = async () => {
        try {
            const tasks = await getTasks();
            dispatch(
                {
                    type: 'set_tasks',
                    payload: tasks
                }
            )
        } catch (error) {
            console.error('Error fetching tasks. ', error)
        }
    }

    // Añadir item
    const handleAddItem = async (item) => {
        try {
            const newTask = await createTask(item);
            dispatch(
                {
                    type: 'add_item',
                    payload: newTask
                }
            );
        } catch (error) {
            console.error('Error agregando tasks. ', error)
        }
    }
    // Eliminar item
    const handleDelItem = async (id) => {
        try {
            await deleteTask(id);
            dispatch(
                {
                    type: 'del_item',
                    payload: id
                }
            );
        } catch (error) {
            console.error('Error eliminando tasks. ', error)
        }
    }
    // Tachar item
    const handleCrossItem = async (id) => {
        try {
            await updateTask(id);
            dispatch(
                {
                    type: 'cross_item',
                    payload: id
                }
            );
        } catch (error) {
            console.error('Error upgradeando tasks. ', error)
        }
    };
    
    useEffect(() => {
        loadTasks();
      }, []);

    return {
        useControlList,
        list,
        listLength: list.length,
        listPending: list.filter(item => !item.done).length,
        handleAddItem,
        handleDelItem,
        handleCrossItem
    }
}
