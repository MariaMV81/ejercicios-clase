/**
 * En un partido de tenis, cada juego de pelotas dura un maximo de 5 jugadas.
 *
 * Dada una secuencia de jugasdas donde se indica la pelota que se ha usado, nuestro codigo debe
 * indicar si alguna pelota ha ya no es validad o si todas las pelotas son validas.
 *
 * Por ejemplo: dada la secuencia de jugadas siguiente con el numero de pelota usada s = [
 * 1, 1, 1, 2, 1, 1] nuestro codigo de la promesa debe llamar a reject con el numero de pelota 1
 *
 * Otro ejemplo: dada la secuencia de jugadas sigueinte con el numero de pelota usada s = [
 * 1, 2, 3, 4, 1, 2] nuestro codigo de la promesa debe llamar a resolve con el mensaje "Pelotas ok"
 */

const jugadasUno = [1, 1, 2, 3, 4, 1, 1, 2, 2, 3, 3, 4, 4, 1, 1, 2];
const jugadasDos = [1, 3, 2, 3, 4, 1, 1, 2, 2, 3, 3, 4, 4, 1, 4, 2];

function comprobarPelotas(jugadas) {
  let p = new Promise(function (resolve, reject) {
        // Contador para cada tipo de pelota
    const contadorPelotas = {};

    // Recorremos las jugadas
    for (let i = 0; i < jugadas.length; i++) {
      const pelota = jugadas[i];

      // Verificamos si la pelota ya se ha usado 5 veces
      if (contadorPelotas[pelota]) {
        contadorPelotas[pelota]++;
        if (contadorPelotas[pelota] > 5) {
          reject(pelota);
          return;
        }
      } else {
        contadorPelotas[pelota] = 1;
      }
    }

    // Si llegamos aquí, todas las pelotas son válidas
    resolve("Pelotas ok");
  });
 

  return p;
}

comprobarPelotas(jugadasUno); // falta codigo (then y catch)
comprobarPelotas(jugadasDos); // falta codigo (then y catch)
