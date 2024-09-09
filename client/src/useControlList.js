import React, { useReducer } from 'react'
import { listReducer } from './helpers/listReducer'

export const useControlList = () => {
    // Agregar init cuando ya se junte con la base.
    const [list, dispatch] = useReducer(listReducer(), initialState = [])

    // Añadir item
    const handleAddItem = (item) =>{
        dispatch(
            {
                type: 'add_item',
                payload: item
            }
        );   
    }
    // Eliminar item
    const handleDelItem = () =>{
        dispatch(
            {
                type: 'del_item',
                payload: item.id
            }
        );
    }
    // Tachar item
    const handleCrossItem = () =>{
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
        listPending: list.filter(item=>!item.done).length,
        handleAddItem,
        handleDelItem,
        handleCrossItem
    }
}
