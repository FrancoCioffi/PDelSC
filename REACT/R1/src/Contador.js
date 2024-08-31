import './Contador.css';
import React, { useState } from 'react';

function Contador() {
    const [contador, cambiarContador ] = useState(0);


    return (
        <div className = "contador">
            <h4>Contador: {contador}</h4>
            <button className="button" onClick={() => cambiarContador(contador + 1)}>Incrementar</button>  
            <button className="button" onClick={() => cambiarContador(contador - 1)}>Decrementar</button>      
        </div>
    );
}

export default Contador;