let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];

//Multiplicar todos los elementos de un array

let resultado = coleccion[0];

resultado *= coleccion[0];
resultado *= coleccion[1];
resultado *= coleccion[2];
resultado *= coleccion[3];
resultado *= coleccion[4];
resultado *= coleccion[5];
resultado *= coleccion[6];
resultado *= coleccion[7];

console.log(resultado);

let resultadoDos = coleccion[0];

for ( let i = 0; i < coleccion.length; i++){
   resultadoDos *= coleccion[i];
}

console.log(resultadoDos);

//Sumar los elementos de un array hasta que encuentre un 1

let resultadoSuma = 0;

resultado += coleccion[0];
resultado += coleccion[1];
resultado += coleccion[2];
resultado += coleccion[3];
resultado += coleccion[4];

console.log(resultadoSuma);

let resultadoSumaDos = 0;

for (let i = 0; i < coleccion.length; i++){
   if (coleccion[i] === 1){
        break;
    }
    resultadoSumaDos += coleccion[i]; 
    
}

console.log(resultadoSumaDos);

let resultadoSumaTres = 0;

let i = 0;

while ( coleccion[i] != 1){
    resultadoSumaTres += coleccion[i++];
}

console.log(resultadoSumaTres);

let resultadoSumaCuatro = 0;
 let j = 0;

while ( coleccion[j] != 10){
    resultadoSumaCuatro += coleccion[j++];
}

console.log(resultadoSumaCuatro);






