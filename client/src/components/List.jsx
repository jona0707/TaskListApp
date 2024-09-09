import { ListItem } from "./ListItem"

export const List = ({list = [], onDelItem, onCrossItem}) => {
  return (
    <>
    <ul className="list-group">
        {
            list.map( (item) => (
                <ListItem key={item.id} item={item} onDelItem={onDelItem} onCrossItem={onCrossItem}></ListItem>
            ))
        }
    </ul>
    </>
  )
}
