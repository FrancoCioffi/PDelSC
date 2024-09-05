import React, {useState} from 'react'
import './Style.css';

function Juego() {  
    const [compara, setCompara] = useState("");
    const numeroRandom = Math.floor(Math.random() * 100);
    console.log(numeroRandom)

    function comparaNumero(){
        const intento = document.getElementById("numeroUsuario").value;
        console.log(numeroRandom);

        if (+intento !== numeroRandom) {
            if (numeroRandom > +intento) {
                setCompara("Más alto");
            } else {
                setCompara("Más bajo");
            }
        }
        else{
            setCompara('Le pegaste')
        }
    }
    return (
        <div className="container">
            <div className='juegoContainer'>
            <h2>ADIVINAR EL NUMERO</h2>
            <h4 id="compara">El numero es: {compara}</h4>
                <div className="numero">
                    <input type="number" id="numeroUsuario"></input>
                </div>
                <button className='adivinar' onClick={comparaNumero}>Intentar</button>
            </div>
        </div>

    );
}
export default Juego;