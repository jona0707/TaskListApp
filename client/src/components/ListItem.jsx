export const ListItem = ({ item, onDelItem, onCrossItem }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${(item.done) ? 'text-decoration-line-through' : ''}`}
        onClick={() => onCrossItem(item.id)}
      >
        {item.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDelItem(item.id)}>
        Eliminar
      </button>
    </li>
  );
};
