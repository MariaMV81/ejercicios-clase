/**
 * Este código es un script en JavaScript que utiliza Node.js para migrar datos de una base de datos MySQL
 * a una base de datos MongoDB.
 */

//Importar las bibliotecas:
const { MongoClient } = require("mongodb");
const mysql = require("mysql2");

//Configurar la conexión a MySQL:
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "08886544Mj",
  database: "ecommerce_js",
});

//Configurar la conexión a MongoDB:
const mongourl = "mongodb://127.0.0.1:27017";
const mongoConnection = new MongoClient(mongourl);
let mongoDatabase;

//Conectar a MySQL:
mysqlConnection.connect(function (error) {
  if (error) {
    return console.error(`error: ${error.message}`);
  }

  console.log("conectado a MySQL!!!");
});


//Definir la función migrarProductos:--------------------------------------------------------------------------------------------
/**
 * Esta función realiza la migración de datos. Obtiene una colección en MongoDB llamada "productos" 
 * y ejecuta una consulta SQL para seleccionar todos los registros de la tabla "productos" en MySQL. 
 * Luego, inserta esos datos en la colección de MongoDB.
 */
async function migrarProductos() {
  const collection = mongoDatabase.collection("productos");
  
  const productos = await collection.find().toArray();

  if (productos.length > 0){
    console.log("La colección productos ya existe");

   return true;
  }

  // Extract
  mysqlConnection.query(
    `select nombre, valoracion, precio, descripcion_corta, descripcion_larga, foto from productos`,
    async (error, result, fields) => {
        if (error){
            console.error(error);
            return;
        }
      // Transform
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          nombre: result[i].nombre,
          valoracion: result[i].valoracion,
          precio: result[i].precio,
          descripcion_corta: result[i].descripcion_corta,
          descripcion_larga: result[i].descripcion_larga,
          foto: result[i].foto,
        });
      }

      // Load
      if (transformado.length > 0) {
        await collection.insertMany(transformado);
        console.log("Datos migrados con éxito a MongoDB (productos)");
      } else {
        console.log("No hay datos para migrar a MongoDB (productos)");
      }
    }
  );
  }



  //Definir la función migrarUsuarios:--------------------------------------------------------------------------------------------

async function migrarUsuarios() {
  const collection = mongoDatabase.collection("usuario");
  
  const usuario = await collection.find().toArray();

  if (usuario.length > 0){
    console.log("La colección usuarios ya existe");

   return true;
  }

  // Extract
  mysqlConnection.query(
    `select nombre, apellidos, email, contraseña from usuario`,
    async (error, result, fields) => {
        if (error) {
          console.error(error);
          return;
        }

      // Transform
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          nombre: result[i].nombre,
          apellidos: result[i].apellidos,
          email: result[i].email,
          contraseña: result[i].contraseña,
         
        });
      }

      // Load
      if (transformado.length > 0) {
        await collection.insertMany(transformado);
        console.log("Datos migrados con éxito a MongoDB (usuarios)");
      } else {
        console.log("No hay datos para migrar a MongoDB (usuarios)");
      }
    }
  );

  }



  //Definir la función main:
/**
 * La función principal main realiza las siguientes acciones:
 * Conecta a MongoDB.
 * Selecciona la base de datos "ecommerce_js" en MongoDB.
 * Ejecuta la función migrarClientes.
 * Cierra las conexiones a MongoDB y MySQL.
 */
async function main() {
  // conectar con MongoDB
  await mongoConnection.connect();
  console.log("Conectado a MongoDB!!!");


  // seleccionar base de datos polodigital en Mongodb
  mongoDatabase = mongoConnection.db("ecommerce_js");

  await migrarProductos();
  await migrarUsuarios();
 

  // Cerrar conexiones
  // await mongoConnection.close();
  // mysqlConnection.end();

  return true;
}

//Ejecutar el script principal:
/**
 * Se ejecuta la función principal y se manejan las promesas para imprimir mensajes de éxito o errores en la consola
 */
main()
  .then(() => {
    console.log("Completado");
  })
  .catch((error) => {
    console.error(error);
  });
