// Me llega la lista y el action que desestructuro en type y payload.
export const listReducer = (initialList = [], {type, payload}) => {
    switch (type) {
        case 'add_item':
            return [...initialList, payload];

        case 'del_item':
            return initialList.filter((item)=> item.id != payload);

        case 'cross_item':
            return initialList.map((item)=>{
                if(item.id == payload){
                    return {...item, done: !item.done};
                }
                return initialList;
            });
        default:
            return initialList;
    }
}
