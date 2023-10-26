/**
 * Algoritmo que lea 3 numeros y nos retorne el mayor, o que en caso de serlo
 * nos retorne  un string que diga iguales.
 */

let readline = require("readline-sync"); /** Esto sirve para importar la libreria*/

let numeroUno = Number(readline.question("Dime un numero: "));
let numeroDos = Number(readline.question("Dime otro numero: "));
let numeroTres = Number(readline.question("Dime un tercer numero: "));

if (numeroTres > numeroDos && numeroDos > numeroUno) {
 console.log(numeroTres);
} else {
  console.log("Los números son iguales");
}

if (numeroUno == numeroDos && numeroUno == numeroTres) {

    console.log(" El número mayor es "+numeroUno+"")
} else if (numeroDos >= numeroUno && numeroDos >= numeroTres) {

    console.log("El número mayor es "+numeroDos+"")
} else {
 
  console.log("Los números son iguales")
}

