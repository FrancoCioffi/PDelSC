import { Link } from 'react-router-dom';
import tareas from './tareas';
import './inicio.css';


function inicio() {
  return (
    <div className='container'>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <Link to={`/tarea/${tarea.id}`}>
              {tarea.titulo} - {tarea.descripcionCorta}
            </Link>
          </li>
        ))}
      </ul>
      <div className='botonContainer'>
         <Link className='boton' to="/crear">Crear nueva tarea</Link>
      </div>
    </div>
  );
}

export default inicio;
