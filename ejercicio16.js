/**Desarrollar un algoritmo que nos calcule el cuadrado de los 9 
 * primeros números naturales.
*/

// for (let i = 0; i< 9 ; i++){
//     console.log(`El cuadrado de ${i+1} es ${(i+1) * (i+1)}`);
// }


// let n = 0;

// while ( ++n < 10) {
 
//   console.log(`El cuadrado de ${n} es ${n*n}`);
// }


// let n = 0;
// do {
//   n ++;
//   console.log(`El cuadrado de ${n} es ${n * n}`);
// } while (n < 9);


function calcularCuadrados() {
  for (let i = 1; i <= 9; i++) {
    const cuadrado = i * i;
    console.log(`El cuadrado de ${i} es ${cuadrado}`);
  }
}

calcularCuadrados();


