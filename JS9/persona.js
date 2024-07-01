/* Crea dos archivos, persona.js y app.js. En persona.js, define y exporta una 
clase Persona con propiedades nombre y edad, y un método  mostrarInformacion. 
Luego, importa esta clase en app.js y crea instancias de Persona y ejecuta el método de la clase. */

export class Persona{
    constructor(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
    }
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
    
}