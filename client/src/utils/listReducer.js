export const listReducer = (initialList = [], action) => {
    switch (action.type) {
        case 'add_item':
            return [...initialList, action.payload];

        case 'del_item':
            return initialList.filter((item) => item.id != action.payload);

        case 'cross_item':
            return initialList.map((item) => {
                if (item.id == action.payload) {
                    return { ...item, done: !item.done };
                }
                return item;
            });
        case 'set_tasks':
            return action.payload; // Actualizar lista completa
        default:
            return initialList;
    }
}
