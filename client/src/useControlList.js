import React, { useReducer } from 'react'
import { listReducer } from './helpers/listReducer'

export const useControlList = () => {

    // Momentaneo para mostrar en frontend
    const initialState = [{
        id: new Date().getTime(),
        description: "Recolectar la piedra del alma",
        done: false,
    }]

    // Agregar init cuando ya se junte con la base.
    const [list, dispatch] = useReducer(listReducer, initialState)

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
    const handleDelItem = () => {
        dispatch(
            {
                type: 'del_item',
                payload: item.id
            }
        );
    }
    // Tachar item
    const handleCrossItem = () => {
        dispatch(
            {
                type: 'cross_item',
                payload: item.id
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
