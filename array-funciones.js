/**
 * Devuelve la suma de todos los elementos del array listado.
 */

function sumar(listado){
    let resultado = 0;
    

    for (let i = 0 ; i < listado.length ; i++){
        resultado += listado[i];
    }

    return resultado;
}


/**
 * Devuelve la multiplicacion de todos los elementos del array listado.
 */

function multiplicar(listado){

    let resultado1 = 1;
    

    for ( let j = 0 ; j < coleccion.length ; j++ ){
        resultado1 *= listado[j];
    }

    return resultado1;


}

let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];

//console log de la suma
console.log(sumar(coleccion));


//console log de la multiplicación
console.log(multiplicar(coleccion));