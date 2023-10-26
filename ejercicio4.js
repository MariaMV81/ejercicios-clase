/**En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente. */

const cantidadCompra = 8000; 

let descuento = 0;
  
  if (cantidadCompra < 500) {
    descuento = 0; 
  } else if (cantidadCompra <= 1000) {
    descuento = 0.05; 
  } else if (cantidadCompra <= 7000) {
    descuento = 0.10; 
  } else if (cantidadCompra <= 15000) {
    descuento = 0.20; 
  } else {
    descuento = 0.25; 
  }

  const precioFinal = cantidadCompra * (1 - descuento);

  console.log(`El precio final es: ${precioFinal} €`);







