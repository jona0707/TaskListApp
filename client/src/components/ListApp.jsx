export const ListApp = () => {
    // Función para retornar valores de los hijos
  return (
    <>
      <h1>Aplicación de Lista de Tareas con Base de Datos</h1>
      <hr />
      <div className="row">
        <div className="col-7">
            <h2>Lista de Tareas:</h2>
            <hr />
            <h4>Todas: , <small>Pendientes: </small></h4>
            {/* ComponenteLista */}
        </div>
        <div className="col-5">
            <h2>Crea una tarea:</h2>
            <hr />
            {/* ComponenteTarea */}
        </div>
      </div>
    </>
  );
};
