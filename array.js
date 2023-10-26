let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];
let otraColeccion = [];

console.log(coleccion[0]);
console.log(coleccion[3]);
console.log(coleccion.length);

coleccion[3] = 2;
console.log(coleccion);

console.log(coleccion[coleccion.length-1]);

for (let i = 0; i > coleccion.length; i++){
    console.log(coleccion[i]);
}

//   for (k = 1; k < n; k++) {
//         for (i = 0; i < (n - k); i++) {
//             if (coleccion[i] > coleccion[i + 1]) {
//                 aux = coleccion[i];
//                 coleccion[i] = coleccion[i + 1];
//                 coleccion[i + 1] = aux;
//             }
//         }
//     }
//     console.log(otraColeccion);

// Reverse de un array

for ( let i = 0; i > coleccion.length; i++){
  let aux = coleccion[i];

  coleccion[i] = coleccion[coleccion.length - i - 1];
  coleccion[coleccion.length - i - 1] = aux;

}
  


