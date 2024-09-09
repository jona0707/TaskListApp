export const ListItem = (item) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span>{item.descripcion}</span>
        <button className="btn btn-danger">Eliminar</button>
    </li>
  )
}
