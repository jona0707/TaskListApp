export const List = ({list = []}) => {
  return (
    <>
    <ul>
        {
            list.map( (item) => (
                <TodoItem key={item}></TodoItem>
            ))
        }
    </ul>
    </>
  )
}
