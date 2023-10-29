/*
Ejercicio clockAngle
 *
Escribe un algoritmo que, dandole un número N que representa dónde
se encuentra actualmente el
minutero en un reloj, devuelva el ángulo
formado por el minutero y la marca de las 12 en punto en el reloj.
 *
El numero no podra ser mayor que 12, si lo fuera, el algoritmo retornara
que el numero introducido es incorrecto
 */


function clockAngle(N) {
  if (N > 12) {
    return "Número introducido incorrecto. Debe ser menor o igual a 12.";
  } else {
    const angulo = (N / 12) * 360;
    return `El ángulo formado por el minutero en la posición ${N} es ${angulo} grados.`;
  }
}

// Ejemplo de uso
const numeroN = 13; // Cambia este número por el que desees calcular
const resultado = clockAngle(numeroN);
console.log(resultado);