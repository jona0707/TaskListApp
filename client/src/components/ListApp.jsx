import { useControlList } from "../hooks/useControlList";
import { List } from "./List";

export const ListApp = () => {
  // Función para retornar valores de los hijos
  const {list, listLength, listPending, handleAddItem, handleDelItem, handleCrossItem} = useControlList();
  return (
    <>
      <h1>Aplicación de Lista de Tareas con Base de Datos</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <h2>Lista de Tareas:</h2>
          <hr />
          <h4>
            Todas: {listLength}, <small>Pendientes:{listPending} </small>
          </h4>
          {/* ComponenteLista */}
          <List list={list} onDelItem={handleDelItem} onCrossItem={handleCrossItem}/> 
        </div>
        <div className="col-5">
          <h2>Crea una tarea:</h2>
          <hr />
          {/* Componente AñadirTarea */}

        </div>
      </div>
    </>
  );
};
