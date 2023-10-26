/**
 * Haz un algoritmo que sume todos los números de un array.
 */

const lista = [12, 12, 5, 1, 9, 7, 12, 54, 45];
let resultado = 0;
let resultadoPares = 0;
let resultadoImpares = 0;

//sumar todos los numeros del array

for (let i = 0; i < lista.length; i++){
    resultado += lista[i];
} 



//Sumar solo los números que son pares

 for ( let i = 0 ; i < lista.length; i++){
    if (lista[i] % 2 == 0){
        resultadoPares += lista[i]
        }
       
    }
 

    //Sumar los que estan en una posición impar

    for ( let i = 0 ; i < lista.length; i++){
        if ( i % 2 > 1){
            resultadoImpares += lista[i];

        }
    }

    console.log(`La suma de todos los números es: ${resultado}`);
    console.log(`La suma de los números pares es: ${resultadoPares}`);
    console.log(`La suma de los números impares es: ${resultadoImpares}`);
    