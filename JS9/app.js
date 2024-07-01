/* Crea dos archivos, persona.js y app.js. En persona.js, define y exporta una 
clase Persona con propiedades nombre y edad, y un método  mostrarInformacion. 
Luego, importa esta clase en app.js y crea instancias de Persona y ejecuta el método de la clase. */

import { Persona } from './persona.js';

const grupoPersonas = [
    new Persona("Felipe", 10),
    new Persona("Carlos", 20),
    new Persona("Enzo", 30),
    new Persona("Franco", 40)
];

console.log("Informacion del grupo de personas:");
for (var i = 0; i < grupoPersonas.length; i++){
    grupoPersonas[i].mostrarInformacion();
}