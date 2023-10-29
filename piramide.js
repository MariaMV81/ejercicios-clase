/**
 * Pedir al usuario un numero por consola y dibujar un triangulo de manera que se muestre
 * tal que asi
 *
 * Si el usuario introduce 4 el resultado por consola se verá
 *
 * *
 * **
 * ***
 * ****
 */

let readline = require("readline-sync");

let numero = Number(readline.question("Dime un numero mayor que 0: "));

let linea = "";

// for (let i = 0; i < numero; i++){
//     for (let j = 0; j < numero; j++){
//         linea += "*"
//      }

//      console.log(linea);
// }

// for (let i = 0; i < numero; i++) {
//   linea += "*";

//   console.log(linea);
// }

/*
Entera la pirámide
*//* NO SALE CON LET = 5 DA SIEMPRE LA MISMA PIRAMIDE*/ 

// let num = 5;
// for (let i = 0; i < num; i++) {

//   let linea = "";
//   for (let k = 0; k < num - i - 1; k++) {
//     linea += " ";
//   }

//   linea += "**";
//   for (let j = 0; j < i * 2; j++) {
//     linea += "*";
//   }
//   console.log(linea);
// }
