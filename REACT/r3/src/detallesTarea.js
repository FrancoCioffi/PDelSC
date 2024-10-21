import { useParams } from 'react-router-dom';
import tareas from './tareas';

function DetallesTareas() {
  const { id } = useParams();
  const tarea = tareas.find((t) => t.id === parseInt(id));

  if (!tarea) {
    return <h2>Tarea no encontrada</h2>;
  }

  return (
    <div className='container'>
      <h1>{tarea.titulo}</h1>
      <p>{tarea.descripcionLarga}</p>
      <p>Fecha de creación: {tarea.fecha}</p>
      <p>Estado: {tarea.completado ? "Completada" : "Incompleta"}</p>
    </div>
  );
}

export default DetallesTareas;
