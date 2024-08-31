import './ListaT.css';

function ListaT() {
    
    return (
    <div className = "listaTareas">
        <h1>Tareas a Completar:</h1>
        <div className="Tareas">
            <div className='listaTarea'>
            <input type="checkbox"/>Lavar los Platos
            </div>
        </div>
        <input type="text" id="agregar" placeholder="Ingrese su tarea aqui"></input>
        <button onClick={ () =>{
            const tarea = document.getElementById('agregar')
            const nuevaTareaDiv = document.createElement('div');
            nuevaTareaDiv.className = 'listaTarea';

            const nuevaTareaCheckbox = document.createElement('input');
            nuevaTareaCheckbox.type = 'checkbox';

            var contenidoTarea = document.createTextNode(tarea.value);
            nuevaTareaDiv.appendChild(nuevaTareaCheckbox);
            nuevaTareaDiv.appendChild(contenidoTarea);
            
            const tareasDiv = document.querySelector('.Tareas');
            tareasDiv.appendChild(nuevaTareaDiv);
            tarea.value = ""
        } }>Agregar Tarea</button>
    </div>
   
    );
}

export default ListaT;