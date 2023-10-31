function consola(mensaje) {
  console.log(mensaje);
}

function fallo() {
  console.log("error");
}

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hola que hace");
  }, 300);
});

console.log("antes de la promesa");

promesa.then(consola).catch(fallo);

console.log("despues de la promesa");
