import { useEffect, useReducer } from 'react'
import { listReducer } from '../helpers/listReducer'

export const useControlList = () => {

    // Momentaneo para mostrar en frontend
    const initialState = [];

    // Agregar init cuando ya se junte con la base.
    const [list, dispatch] = useReducer(listReducer, initialState);

    // Cargar tareas desde la base
    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks');
            const data = await response.json();
        } catch (error) {
            console.error('Erorr fetching las tasks. ', error)
        }
    }

    // Añadir item
    const handleAddItem = (item) => {
        dispatch(
            {
                type: 'add_item',
                payload: item
            }
        );
    }
    // Eliminar item
    const handleDelItem = (id) => {
        dispatch(
            {
                type: 'del_item',
                payload: id
            }
        );
    }
    // Tachar item
    const handleCrossItem = (id) => {
        dispatch(
            {
                type: 'cross_item',
                payload: id
            }
        );
    }

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
