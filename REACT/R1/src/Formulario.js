import './Formulario.css';

function Formulario() {
    
    return (
        <form className = "form">
            <h1 class="tittle">Formulario</h1>
                <input type="text" id="nombre" placeholder="Nombre" required></input>
                <button id="button" onClick={(event) => {
                    event.preventDefault(); // Evita que se envíe el formulario y se recargue la página
                
                    const nombre = document.getElementById('nombre');
                    const newDiv = document.createElement('div');
                
                    var nombreUsuario = document.createTextNode("Bienvenido " + nombre.value);
                    newDiv.appendChild(nombreUsuario);
                            
                    const formDiv = document.querySelector('form');
                    formDiv.appendChild(newDiv);
                    nombre.value = ""
            } }>Bienvenida</button>
        </form>
    );
}

export default Formulario;