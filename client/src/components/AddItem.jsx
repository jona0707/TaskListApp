import { useForm } from "../hooks/useForm";

export const AddItem = ({ onAddItem }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(description.length<=1) return;

    const newItem = {
        id: Date.now(),
        description: description,
        done: false
    }
    onAddItem(newItem);
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label>Ingresa tu item:</label>
      <input
        type="text"
        className="form-control"
        placeholder="Ej: Debo comprar pan."
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary mt-1">
          Agregar
        </button>
      </div>
    </form>
  );
};
