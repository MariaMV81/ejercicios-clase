let listado = [1, 5, 12, 8, 7, 23, 8, 2];

function esMayor(a, b) {
  return a > b;
}

function esMenor(a, b) {
  return a < b;
}

function procesar(elementos, callback) {
  let numero = elementos[0];
  //let numeroMenor = elementos[0];
  for (let i = 1; i < elementos.length; i++) {
    if (callback(elementos[i], numero)) {
      numero = elementos[i];
    } 
    //  if (esMenor(elementos[i]) < numeroMenor) {
    //   numeroMenor = elementos[i];
    // }
  }

  
//   for (let i = 1; i < elementos.length; i++) {
//     if (esMenor(elementos[i]) < numeroMenor) {
//       numeroMenor = elementos[i];
//     }
//   }
  return numero;
}

// muestra el mayor
// let mayor = procesar(esMayor)
// console.log(mayor)
console.log(procesar(listado, esMayor));
// muestra el menor
// let menor = procesar(esMenor);
// console.log(menor);
console.log(procesar(listado, esMenor));
