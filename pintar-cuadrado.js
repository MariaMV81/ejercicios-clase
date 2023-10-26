/**
 * Pedir por consola un número y crear un array de longitud de numero introducido que 
 * contenga *. Ejemplo, se introduce 2, debe obtener ['*' , '*'];
 */


let readline = require("readline-sync"); /** Esto sirve para importar la libreria*/

let numero = Number(readline.question("Dime un numero: "));

let linea =[];

linea[0] = '*';
linea[1] = "*";
linea[2] = "*";

console.log(linea);

let linea2 = [];

for ( let i = 0; i < numero ; i++){
    linea2[i]= '*';
    
}

console.log(linea2);

// Solo llevaran asteriscos el primero y el último los demás será espacio

let linea3 = [];

linea3[0] = '*';
linea3[1] = " ";
linea3[2] = " ";
linea3[3] = "*";

console.log(linea);
console.log(linea3);

let linea4 = [];


for (i = 0; i < numero; i++){
    if (i == 0 || i == numero-1 ){
        lista4 = '*';
    } else{
        lista4 = ''
    }
   
}


console.log(linea);
console.log(linea4);



