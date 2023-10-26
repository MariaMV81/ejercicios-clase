/**
 * Dadas dos variables A y B,
 * se pide realizar un algoritmo que intercambie los valores de ambas
 * variables y retorne un string con las variables concatenadas.
 * con un array de numeros
 */

// asignamos valores iniciales a las variables 'a' y 'b'
let a = 5; 
let b = 10; 

// Intercambiamos los valores de 'a' y 'b'
let camb = a;
a = b;
b = camb;

// Mostramos el valor de las variables concatenadas
console.log(`El valor de las variables es: ${a} ${b}`);