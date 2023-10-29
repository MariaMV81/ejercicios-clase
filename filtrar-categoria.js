/**
 * Funcion que recibe un listado de productos y una categoria, debe devolver
 * array con los productos que son de la categoria del parametro de entrada.
 *
 * Ejemplo
 *
 * filtrarPorCategoria(productos, "deporte"); debe devolver producto en nombre "bicicleta";
 */

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
  {
    nombre: "reloj",
    stock: 4,
    categoria: "joyeria",
    precio: 186,
    valoraciones: 4.2,
  },
  {
    nombre: "pulsera",
    stock: 12,
    categoria: "joyeria",
    precio: 69,
    valoraciones: 4.2,
  },
];

function filtrarPorCategoria(productos, categoria) {
  const productosFiltrados = []
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === categoria) {
      productosFiltrados[productosFiltrados.length] = productos[i];
    }
  }
  return productosFiltrados;
}


const categoriaDeseada = "joyeria";
const productosFiltrados = filtrarPorCategoria(productos, categoriaDeseada);

console.log(productosFiltrados);
