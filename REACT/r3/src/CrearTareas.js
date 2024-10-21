import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tareas from './tareas';
import "./tarea.css"

function CrearTarea() {
  const [titulo, setTitulo] = useState('');
  const [descripcionCorta, setDescripcionCorta] = useState('');
  const [descripcionLarga, setDescripcionLarga] = useState('');
  const [completado, setCompletado] = useState(false);
  const navigate = useNavigate();
  
  const agregarTarea = (e) => {
    e.preventDefault();
    const newTarea = {
      id: tareas.length + 1,
      titulo,
      descripcionCorta,
      descripcionLarga,
      fecha: new Date().toISOString().split('T')[0],
      completado
    };
    tareas.push(newTarea); 
    navigate('/');
  };

  return (
    <div className='container'>
      <h1>Crear Nueva Tarea</h1>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción Corta"
          value={descripcionCorta}
          onChange={(e) => setDescripcionCorta(e.target.value)}
          required
        />
         <textarea
          placeholder="Descripción Larga"
          value={descripcionLarga}
          onChange={(e) => setDescripcionLarga(e.target.value)}
          required
        />
        <label>
          Completada:
          <input
            type="checkbox"
            checked={completado}
            onChange={(e) => setCompletado(e.target.checked)}
          />
        </label>
        <button type="submit" className='boton'>Añadir Tarea</button>
      </form>
    </div>
  );
}

export default CrearTarea;
