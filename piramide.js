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

for (let i = 0; i < numero; i++) {
  linea += "*";

  for (let j = 0; j < numero -i -1; j++){
    linea += " ";
  }

  console.log(linea);
}
