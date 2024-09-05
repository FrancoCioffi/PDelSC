import React, {useState, useEffect} from 'react'
import './Style.css';

function Botones() {  
    const [color, setColor] = useState("#2d2d2d");
    useEffect(() => {
        document.body.style.backgroundColor = color;
      }, [color]);
    function cambiarFondo(actualColor){
        if(actualColor === 1){
            setColor('#a29898');
        }else if (actualColor === 2){
            setColor('#ccc');
        }
        if(actualColor === 3){
            setColor('#2d2d2d');
        }else if(actualColor === 4){
            setColor('#000');
        }
        console.log(color)
    }
    function video(){
        return "hola"
    }

    function audio(){
        return "hola"
    }
    function osito(){
        return "hola"
    }
    function momooi(){
        return "hola"
    }
    return (
        <div className = "container">
            <div className="botones-contenedor">
                <button className="button-56" role="button" onClick={() => cambiarFondo(1)} onDoubleClick={() => cambiarFondo(2)}>Modo Claro</button>
                <button className="button-56" role="button" onClick={() => cambiarFondo(3)} onDoubleClick={() => cambiarFondo(4)}>Modo Oscuro</button>
                <button className="button-56" role="button" onClick={video()}>Video</button>
                <button className="button-56" role="button" onClick={audio}>Audio</button>
                <button className="button-56" role="button" onClick={osito}>Osito</button>
                <button className="button-56" role="button" onClick={momooi}>Momoi</button>
            </div>
        </div>
    );
}
export default Botones;