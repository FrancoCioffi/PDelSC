import './Style.css';

function Juego() {
    const numeroRandom = Math.floor(Math.random() * 100);
    let compara = ""
    function comparaNumero(){
        console.log(numeroRandom)
        const intento = document.getElementById("numeroUsuario").value
        if (numeroRandom != intento){
            if (numeroRandom > intento){
                compara = "Mas bajo";
            }
            else{
                compara = "Mas alto";
            }
        }
        else{
            compara = numeroRandom
        }
        return compara
    }
    return (
        <div className="container">
            <div className='juegoContainer'>
            <h2>ADIVINAR EL NUMERO</h2>
            <h4 id="compara">El numero es: {compara}</h4>
                <div className="numero">
                    <input type="numberInput" id="numeroUsuario"></input>
                </div>
                <button className='adivinar' onClick={comparaNumero}>Intentar</button>
            </div>
        </div>

    );
}

export default Juego;
