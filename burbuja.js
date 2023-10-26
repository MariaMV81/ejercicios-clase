let lista = [7, 1, 3, 2, 34, 3, 8, 11, 6, 9];

for (let i = 0; i < lista.length; i++) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] > lista[j + 1]) {
      let Aux = lista[j];
      lista[j] = lista[j + 1];
      lista[j + 1] = Aux;
    }
  }
}

console.log(`La nueva lista es: ${lista}`);
