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

console.log(productos[0].nombre);
console.log(productos[1].precio);

for (let i = 0; i < productos.length; i++){
    console.log(productos[i].nombre, productos[i].precio)
}
