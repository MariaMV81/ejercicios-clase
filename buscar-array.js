/**
 * Crear una funcion que recibe como parametros un array de numeros y un numero
 * La funcion tiene que devolver la posicion del numero dentro del array
 * o no existe si numero no esta en el array.
 *
 * array = [1, 2, 3, 4];
 *
 * si numero = 2 -> debe devolver 1;
 * si numero 5 -> debe devolver "no existe";
 * 
 * datos de uso:
 * 
 * array = [4, 6, 18, 15, 10] numero = 18
 * array = [1, 2, 3, 4, 5, 6] numero = 8
 * array = [21, 31, 41, 51, 61] numero = 61
 */


    let array1 = [4, 6, 18, 15, 10];
    let array2 = [1, 2, 3, 4, 5, 6];
    let array3 = [21, 31, 41, 51, 61];

    let n1 = 18;
    let n2 = 8;
    let n3 = 61;


function arrayNumeros(array1, n1){
  

    for (let i = 0; i < array1.length; i++){
        if (array1[i] == n1){
            return `La posición de ${n1} es: ${i}`;
        }
    }
    return `No existe número dentro del array`;
}

console.log(arrayNumeros(array1, n1));


/**
 * Crea  una función que lea un array  
 * y diga si dos número dados estan  dentro del array.
 */

 

function leerArray(array1, n1, n2){

    for (let i = 0; i < array1.length; i++){

        for ( let j = 0; j < array1.length; j++){
          if (array1[(i, j)] == n1 && n2) {
            return `los números ${n1} y ${n2} están dentro del array ${[
              i,
              j,
            ]}.`;
          } else if (array1[(i, j)] == n1 || n2) {
            return `Solamente el número ${n1} está dentro del array.`;
          }
        }
    }

    return `No existen ninguno de los número dentro del array`


}

console.log(leerArray(array1, n1, n2));

// Otra parte pero con arrays

let arrays = [4, 6, 18, 15, 10];
let arrayNuevo = [15, 10];
let resultado = ["No existe", "No existe"];


function leerArrays(arrays, arrayNuevo) {
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrayNuevo.length; j++) {
      if (arrays[i] == arrayNuevo[j]) {

      resultado[j] = i;
      
      }
    }
  }

  return resultado;
}

console.log(leerArrays(arrays, arrayNuevo));


