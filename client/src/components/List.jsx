import { ListItem } from "./ListItem"

export const List = ({list = [], onDelItem, onCrossItem}) => {
  return (
    <>
    <ul>
        {
            list.map( (item) => (
                <ListItem key={item} item={item} onDelItem={onDelItem} onCrossItem={onCrossItem}></ListItem>
            ))
        }
    </ul>
    </>
  )
}
