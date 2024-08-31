/*Ejercicio 3: 
Exportación e Importación por Defecto
Crea dos archivos, calculadora.js y main.js. 
En calculadora.js, define y exporta por defecto una clase Calculadora con métodos multiplicar y dividir. Luego, importa esta clase en main.js y úsala. */

export class Calculadora{
    multiplicar(num1,num2){
        console.log("Multiplicacion:", (num1*num2))
    }
    dividir(num1,num2){
        console.log("Division:", (num1/num2))
    }
}