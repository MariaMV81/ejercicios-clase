/**
Ejercicio sum7
Escribe una función que tome un array de numeros enteros de mas de 3 elementos
y retorne true si 3 elementos consecutivos suman 7
 */

const arrayNumeros = [1,1,3,1]

function sum7(array){

    if (array.length > 3){
        return false;
    }
    
    for(let i = 0; i < array.length - 2; i++){

        if ( array[i] + array[i + 1] + array[i + 2] == 7){
            return true
        }

    }
    
    return false;
}

const resultado = sum7(arrayNumeros);
console.log(resultado);