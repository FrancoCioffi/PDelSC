// Ejercicio 1
import {suma, resta} from './math.js';

console.log("Suma:", suma(7,8))
console.log("Resta:", resta(8,7))

// Ejercicio 3
import { Calculadora } from './calculadora.js';

const usarCalculadora = new Calculadora();

usarCalculadora.multiplicar(7,8);
usarCalculadora.dividir(8,7);