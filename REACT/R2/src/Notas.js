import React, { useState, useEffect } from 'react';
import './Style.css';

function Nota() {
    const [contenido, setContenido] = useState('');
    const [temporizador, setTemporizador] = useState(null);
    const [notas, setNotas] = useState([]);

    const cambio = (evento) => {
        const nuevoContenido = evento.target.value;
        setContenido(nuevoContenido);
        clearTimeout(temporizador);
        const nuevoTemporizador = setTimeout(() => {
            guardarNotas(nuevoContenido);
        }, 2000);

        setTemporizador(nuevoTemporizador);
    };

    const guardarNotas = (contenido) => {
        setNotas((prevNotas) => [...prevNotas, contenido]);
        setContenido('');
    };

    return (
        <div className="container">
            <div className="notasContainer">
                <h1>Aplicación de Notas</h1>
                <textarea
                    placeholder="Escribe tu nota aquí..."
                    value={contenido}
                    onChange={cambio}
                    rows="10"
                    cols="50"
                />
                <div className="guardadas">
                    <h2>Notas Guardadas</h2>
                    <ul>
                        {notas.map((nota, index) => (
                            <li key={index}>{nota}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nota;
