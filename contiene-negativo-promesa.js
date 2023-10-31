/**
 * Usando una promesa comprobar si todos los numeros de una lista son positivos, en tal caso
 * llamar a resolve, si el array contiene algun numero negativo debe llamar a la funcion reject.
 *
 * La funcion resolve debe mostrar el array por consola.
 * La funcion reject debe mostrar el numero negativo encontrado.
 *
 * Ejemplo 1: para el array [1, 2, 3] debe llamar a resolve y mostrar consola [1, 2, 3]
 * Ejemplo 2: para el array [1, 2, -1] debe llamar a reject y mostrar por consola -1
 */

const listado = [8, 4, 9, 12, 32, 9, 58, 14];
const listadoConNegativo = [8, 4, 9, 12, 32, 9, 58, -14];

function comprobarNegativo(listado, listadoConNegativo) {
  let p = new Promise(function (resolve, reject) {
    for (let i = 0; i < listado.length; i++){

        if (listado[i] < 0) {
        reject(listado[i]);
      }
    }

    resolve(listado);
      
  });

  return p;
}
// function sonPositivos() {
//   console.log(`Son positivos ${listado}`);
// }

// function noSonPositivos() {
//   console.log("no son positivos");
// }

comprobarNegativo(listado)
    .then((respuesta)=> console.log(respuesta))
    .catch((respuesta)=> console.log(respuesta));
comprobarNegativo(listadoConNegativo)
    .then((respuesta)=> console.log(respuesta))
    .catch((respuesta)=> console.log(respuesta));
