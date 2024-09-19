import React, { useState, useEffect } from 'react';
import "./Style.css";

function Botones() {  
    const [color, setColor] = useState("#2d2d2d");
    const [clickTimer, setClickTimer] = useState(null);

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    function cambiarFondo(actualColor) {
        if (actualColor === 1) {
            setColor('#a29898');
        } else if (actualColor === 2) {
            setColor('#ccc');
        } else if (actualColor === 3) {
            setColor('#2d2d2d');
        } else if (actualColor === 4) {
            setColor('#000');
        }
    }

    function alerta(event) {
        if (event.type === "click") {
            setClickTimer(setTimeout(() => {
                alert('Clic');
            }, 200));
        } else if (event.type === "dblclick") {
            if (clickTimer) {
                clearTimeout(clickTimer);
            }
            alert('Doble clic');
        }
    }

    function nombre(event) {
        if (event.type === "click") {
            document.title = "React";
        } else if (event.type === "dblclick") {
            document.title = "App"; 
        }
    }

    function fondo(event) {
        const button = event.target;
        if (event.type === "click") {
            button.style.backgroundColor = "#4CAF50"; 
        } else if (event.type === "dblclick") {
            button.style.backgroundColor = "#f44336";
        }
    }

    function borrar(event) {
        const button = event.target;
        if (event.type === "click") {
            button.style.backgroundColor = "red";
        } else if (event.type === "dblclick") {
            button.remove();
        }
    }

    return (
        <div className="container">
            <div className="botones-contenedor">
                <button className="button-56" onClick={() => cambiarFondo(1)} onDoubleClick={() => cambiarFondo(2)}>
                    Modo Claro
                </button>
                <button className="button-56" onClick={() => cambiarFondo(3)} onDoubleClick={() => cambiarFondo(4)}>
                    Modo Oscuro
                </button>
                <button className="button-56" onClick={alerta} onDoubleClick={alerta}>
                    Alerta
                </button>
                <button className="button-56" onClick={nombre} onDoubleClick={nombre}>
                    Cambiar Nombre
                </button>
                <button className="button-56" onClick={fondo} onDoubleClick={fondo}>
                    Fondo
                </button>
                <button className="button-56" onClick={borrar} onDoubleClick={borrar}>
                    Borrar
                </button>
            </div>
        </div>
    );
}

export default Botones;
