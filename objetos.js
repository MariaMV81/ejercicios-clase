const productos = [
  {
    nombre: "bicicleta",
    stock: 2,
    categoria: "Deporte",
    precio: 1000,
    valoraciones: 4.5,
  },
  {
    nombre: "xbox",
    stock: 20,
    categoria: "Videojuegos",
    precio: 350,
    valoraciones: 4,
  },
  {
    nombre: "ps5",
    stock: 1,
    categoria: "Videojuegos",
    precio: 499,
    valoraciones: 4.2,
  },
];

// console.log(productos[0].nombre);
// console.log(productos[1].precio);

for (let i = 0; i < productos.length; i++) {
  console.log(productos[i].nombre, productos[i].precio);
}

/**
 * Calcula la media  de los precios de los productos en el array.
 */

let precio = 0;
for (let i = 0; i < productos.length; i++) {
  precio += productos[i].precio;
}
console.log(`La media de los productos es: ${precio / productos.length}`);

/**
 * Calcula la media  de los precios de los productos en el array.
 */

let valoraciones = 0;
for (let i = 0; i < productos.length; i++) {
  valoraciones += productos[i].valoraciones;
}
console.log(
  `La media de las valoraciones es: ${valoraciones / productos.length}`
);

/**
 * Funcion que devuelve el nombre y el stock del producto mas caro
 */

function buscarNombre(nombre, stock) {
  let mayor = 0;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > mayor) {
      mayor = productos[i].precio;
    }
  }

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio == mayor) {
      mayor = productos[i].precio;
      return `El producto más caro es: ${productos[i].nombre} y tiene un stock de: ${productos[i].stock}`
    }

    
  }
  

  return `No existe producto`;
}

console.log(buscarNombre(productos));

/**
 * Funcion que recibe un listado de productos y una categoria, debe devolver
 * array con los productos que son de la categoria del parametro de entrada.
 *
 * Ejemplo
 *
 * filtrarPorCategoria(productos, "deporte"); debe devolver producto en nombre "bicicleta";
 */
