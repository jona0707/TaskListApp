import { useControlList } from "../hooks/useControlList";
import { AddItem } from "./AddItem";
import { Footer } from "./Footer";
import { List } from "./List";

export const ListApp = () => {
  // Función para retornar valores de los hijos
  const {
    list,
    listLength,
    listPending,
    handleAddItem,
    handleDelItem,
    handleCrossItem,
  } = useControlList();
  return (
    <div className="root">
      <h1 className="text-center">Aplicación de Lista de Tareas con Base de Datos</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <h2>Lista de Tareas:</h2>
          <hr />
          <h4>
            Todas: {listLength}, <small>Pendientes:{listPending} </small>
          </h4>
          {/* ComponenteLista */}
          <List
            list={list}
            onDelItem={handleDelItem}
            onCrossItem={handleCrossItem}
          />
        </div>
        <div className="col-5">
          <h2>Crea una tarea:</h2>
          <hr />
          {/* Componente AñadirTarea */}
          <AddItem onAddItem={handleAddItem} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
