const mysql = require("mysql2");

// Crear conexión a base de datos polo_digital en mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "08886544Mj",
  database: "polo_digital",
});

// Conectarse al servidor de mysql local

connection.connect(function (error) {
  if (error) {
    return console.error(`error: ${error.massege}`);
  }

  console.log("conectado a MySQL!!!");
});

// Hacer  una consulta para seleccionar todos los empleados

connection.query("select * from empleados", function (error, result, fields) {
  if (error) {
    return console.error(`error: ${error.message}`);
  }

  //console.log(result);

  // Ordenar a los empleados por nombre

  let listaOrdenada = [];
  for (let i = 0; i < result.length; i++) {
    let incluido = false;

    for (let j = 0; j < listaOrdenada.length; j++) {
      if (result[i].nombre < listaOrdenada[j].nombre) {
        for (let k = listaOrdenada.length; k > j; k-- ){
            listaOrdenada[k] = listaOrdenada[k -1];
        }

        listaOrdenada[j] = result[i];
        incluido = true;

        break;
      }
    }

    if (!incluido){
      listaOrdenada[listaOrdenada.length] = result[i];
    }
  }
  console.log(listaOrdenada);
});

//Hacer una consulta para seleccionar a todos los empleados

connection.query("select * from empleados", function (error, result, fields) {
  if (error) {
    return console.error(`error: ${error.message}`);
  }

  //mostrar al empleado con el salario más alto

  let salarioMasAlto = 0;
  let empleadoSalarioMasAlto = null;

  for (let i = 0; i < result.length; i++) {
    if (result[i].salario > salarioMasAlto) {
      salarioMasAlto = result[i].salario;
      empleadoSalarioMasAlto = result[i];
    }
  }

  console.log("Empleado con el salario más alto:", empleadoSalarioMasAlto);
});

//ordenar por apellidos de forma descendente

connection.query("select * from empleados", function (error, result, fields) {
  if (error) {
    return console.error(`error: ${error.message}`);
  }

  let listaOrdenada = [];

  for (let i = 0; i < result.length; i++) {
    let incluido = false;

    for (let j = 0; j < listaOrdenada.length; j++) {
      if (result[i].apellidos > listaOrdenada[j].apellidos) {
        for (let k = listaOrdenada.length; k > j; k--) {
          listaOrdenada[k] = listaOrdenada[k - 1];
        }

        listaOrdenada[j] = result[i];
        incluido = true;

        break;
      }
    }

    if (!incluido) {
      listaOrdenada[listaOrdenada.length] = result[i];
    }
  }
  console.log(listaOrdenada);
});






// Cerrar conexion a la base de datos

connection.end(function (error) {
  if (error) {
    return console.error(`error: ${error.message}`);
  }

  console.log("Desconectado de MySQL!!!");
});
