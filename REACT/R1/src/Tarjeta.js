import './Tarjeta.css';

function Tarjeta({nombre = "Franco", apellido= "Cioffi", profesion = "Atiendo Boludos"}) {
  return (
    
    <div className="Tarjeta">
        <div className="icon">
            <img src={require('./profileuser.png')} alt="Icono" />
        </div>
        <h1 className="tittle">Presentacion</h1>
        <h4>Nombre: {nombre}</h4>
        <h4>Apellido: {apellido}</h4>
        <h4>Profesion: {profesion}</h4>
    </div>
  );
}

export default Tarjeta;
