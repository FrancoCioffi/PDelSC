import './Style.css';

function Formulario() {
    function handleSubmit(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        if (nombre && email && password){
            if(password.length > 10 && password.length < 18){
                alert("Registro exitoso")
            }
            else{
                alert("Las contraseñas deben de tener un minimo de 12 caracteres y un maximo de 20")
            }
        }
        else{
            alert("Ningun campo puede estar vacio")
        }
    }
    return (
        <div className='container'>
            <div className="formContainer">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form">
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                />
                <label htmlFor="email">Correo Electrónico:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                />
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            </div>
        </div>
    );
}

export default Formulario;
