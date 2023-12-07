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
  database: "polo_digital",
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

//Definir la función migrarClientes:--------------------------------------------------------------------------------------------
/**
 * Esta función realiza la migración de datos. Obtiene una colección en MongoDB llamada "clientes" 
 * y ejecuta una consulta SQL para seleccionar todos los registros de la tabla "clientes" en MySQL. 
 * Luego, inserta esos datos en la colección de MongoDB.
 */
async function migrarClientes() {
  const collection = mongoDatabase.collection("clientes");
  
  const clientes = await collection.find().toArray();

  if (clientes.length > 0){
    console.log("El cliente ya existe");

   return true;
  }

  // Extract
  mysqlConnection.query(
    `select razon_social, cif, sector, telefono, numero_empleados from clientes`,
    async (error, result, fields) => {
      // Transform
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          razon_social: result[i].razon_social,
          cif: result[i].cif,
          sector: result[i].sector,
          telefono: result[i].telefono,
          numero_empleados: result[i].numero_empleados,
        
        });
      }

      // Load
      if (error) {
        throw error;
      }

      await collection.insertMany(transformado);
      console.log("Datos migrados con éxito a MongoDB");
    }
  );

  }
//Migrar Empleados-------------------------------------------------------------------------------------------------------------------------
async function migrarEmpleados() {
  const collection = mongoDatabase.collection("empleados");

  const empleados = await collection.find().toArray();

  if (empleados.length > 0){
    console.log("El empleado ya existe");

   return true;
  }

  // Extract
  mysqlConnection.query(
      `SELECT e.nombre, e.apellidos, e.telefono, e.salario, e.puesto, e.dni, u.email, u.password
      FROM empleados e
      LEFT JOIN usuarios u ON u.id = e.usuarioID`,
    async (error, result, fields) => {
      if (error) {
        throw error;
      }
      // Transform
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          nombre: result[i].nombre,
          apellidos: result[i].apellidos,
          telefono: result[i].telefono,
          salario: result[i].salario,
          puesto: result[i].puesto,
          dni: result[i].dni,

          usuario: {
            email: result[i].email,
            password: result[i].password,
          },
        });
      }

      // Load
      if (error) {
        throw error;
      }

      await collection.insertMany(transformado);
      console.log("Datos migrados con éxito a MongoDB");
    }
  );
}

//Migrar usuarios------------------------------------------------------------------------------------------------------------------------
async function migrarUsuarios(){
   const collection = mongoDatabase.collection("usuarios");

   const usuarios = await collection.find().toArray();

   if (usuarios.length > 0) {
     console.log("El usuarios ya existe");

     return true;
   }else{
    console.log("Coleccion de usuarios migrada sactisfactoriamente")
   }

   //extract
   
    mysqlConnection.query(
    `select email, password from usuarios`,
    async (error, result, fields) => {
      if (error) {
        throw error;
      }
      // Transform
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          email: result[i].email,
          password: result[i].password,
          
        });
      }

      // Load
      if (error) {
        throw error;
      }

      await collection.insertMany(transformado);
      console.log("Datos migrados con éxito a MongoDB");
    }
  );
}


//Migrar empleados-clientes------------------------------------------------------------------------------------------------------------------------
async function migrarEmpleadosClientes(){
   const collection = mongoDatabase.collection("empleados_clientes");

   const usuarios = await collection.find().toArray();

   if (usuarios.length > 0) {
     console.log("La colección empleados_clientes ya existe en MongoDB");

     return true;
   }else{
    console.log("Coleccion de empleados_clientes migrada sactisfactoriamente")
   }

   //extract
   
    mysqlConnection.query(
      `SELECT
  ec.nombre,
  ec.apellidos,
  ec.dni,
  ec.telefono AS telefono_empleados_clientes,
  u.email,
  u.password,
  c.razon_social,
  c.cif,
  c.sector,
  c.telefono AS telefono_cliente,
  c.numero_empleados
FROM empleados_clientes ec
JOIN usuarios u ON ec.id = u.id
JOIN clientes c ON ec.id = c.id`,
      async (error, result, fields) => {
        if (error) {
          throw error;
        }
        // Transform
        let transformado = [];
        for (let i = 0; i < result.length; i++) {
          transformado.push({
            nombre: result[i].nombre,
            apellidos: result[i].apellidos,
            dni: result[i].dni,
            telefono: result[i].telefono,

            usuario: {
              email: result[i].email,
              password: result[i].password,
            },

            clientes: {
              razon_social: result[i].razon_social,
              cif: result[i].cif,
              sector: result[i].sector,
              telefono: result[i].telefono,
              numero_empleados: result[i].numero_empleados,
            },
          });
        }

        // Load
        if (error) {
          throw error;
        }

        await collection.insertMany(transformado);
        console.log("Datos migrados con éxito a MongoDB");
      }
    );
}


//Migrar eventos------------------------------------------------------------------------------------------------------------------------
async function migrarEventos(){
   const collection = mongoDatabase.collection("eventos");

   const eventos = await collection.find().toArray();

   if (eventos.length > 0) {
     console.log("La colección eventos ya existe en MongoDB");

     return true;
   }else{
    console.log("Coleccion de eventos migrada sactisfactoriamente")
   }

   //extract
   
    mysqlConnection.query(
      `SELECT
  e.nombre,
  e.tipo,
  e.fecha_inicio,
  e.fecha_fin,
  e.organizado,
  e.aforo,
  s.nombre,
  s.superficie,
  s.planta,
  s.precio,
  s.tipo,
  c.razon_social,
  c.cif,
  c.sector,
  c.telefono AS telefono_cliente,
  c.numero_empleados
FROM eventos e
JOIN salas s ON e.id = s.id
JOIN clientes c ON e.id = c.id`,
      async (error, result, fields) => {
        if (error) {
          throw error;
        }
        // Transform
        let transformado = [];
        for (let i = 0; i < result.length; i++) {
          transformado.push({
            nombre: result[i].nombre,
            tipo: result[i].tipo,
            fecha_inicio: result[i].fecha_inicio,
            fecha_fin: result[i].fecha_fin,
            organizado: result[i].organizado,
            aforo: result[i].aforo,

            salas: {
              nombre: result[i].nombre,
              superficie: result[i].superficie,
              planta: result[i].planta,
              precio: result[i].precio,
              tipo: result[i].tipo,
            },

            clientes: {
              razon_social: result[i].razon_social,
              cif: result[i].cif,
              sector: result[i].sector,
              telefono: result[i].telefono,
              numero_empleados: result[i].numero_empleados,
            },
          });
        }

        // Load
        if (error) {
          throw error;
        }

        await collection.insertMany(transformado);
        console.log("Datos migrados con éxito a MongoDB");
      }
    );
}

//Migrar Inventario-------------------------------------------------------------------------------------------------------------------------
async function migrarInventario() {
  const collection = mongoDatabase.collection("inventario");

  const inventario = await collection.find().toArray();

  if (inventario.length > 0){
    console.log("La colección inventario ya existe");

   return true;
  }

  // Extract
  mysqlConnection.query(
    `SELECT
      i.nombre,
      i.referencia,
      i.tipo,
      i.estado,
      i.marca,
      i.clienteID,
      c.razon_social AS cliente_razon_social,
      c.cif AS cliente_cif,
      c.sector AS cliente_sector,
      c.telefono AS cliente_telefono,
      c.numero_empleados AS cliente_numero_empleados
    FROM inventario i
    LEFT JOIN clientes c ON c.id = i.clienteID;
`,
    async (error, result, fields) => {
      if (error) {
        throw error;
      }
      // Transform
      console.log(result);
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          nombre: result[i].nombre,
          referencia: result[i].referencia,
          tipo: result[i].tipo,
          estado: result[i].estado,
          marca: result[i].marca,
          clienteID: result[i].clienteID,

          clientes: {
            razon_social: result[i].cliente_razon_social,
            cif: result[i].cliente_cif,
            sector: result[i].cliente_sector,
            telefono: result[i].cliente_telefono,
            numero_empleados: result[i].cliente_numero_empleados,
          },
        });
      }

      // Load
      if (error) {
        throw error;
      }

      await collection.insertMany(transformado);
      console.log("Datos migrados con éxito a MongoDB");
    }
  );
}

//Migrar Mobiliario-------------------------------------------------------------------------------------------------------------------------
async function migrarMobiliario() {
  const collection = mongoDatabase.collection("mobiliario");

  const mobiliario = await collection.find().toArray();

  if (mobiliario.length > 0){
    console.log("La colección mobiliario ya existe");

   return true;
  }

  // Extract
  mysqlConnection.query(
    `SELECT
    m.nombre,
    m.referencia,
    m.tipo,
    m.estado,
    m.salaID,
    s.nombre AS sala_nombre,
    s.superficie,
    s.planta,
    s.tipo AS sala_tipo
FROM mobiliario m
LEFT JOIN salas s ON s.id = m.salaID;
`,
    async (error, result, fields) => {
      if (error) {
        throw error;
      }
      // Transform
      console.log(result);
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          nombre: result[i].nombre,
          referencia: result[i].referencia,
          tipo: result[i].tipo,
          estado: result[i].estado,
          salaID: result[i].salaID,

          salas: {
            nombre: result[i].sala_nombre,
            superficie: result[i].superficie,
            planta: result[i].planta,
            precio: result[i].precio,
            tipo: result[i].sala_tipo,
          },
        });
      }

      // Load
      if (error) {
        throw error;
      }

      await collection.insertMany(transformado);
      console.log("Datos migrados con éxito a MongoDB");
    }
  );
}

//Migrar Salas-------------------------------------------------------------------------------------------------------------------------
async function migrarSalas() {
  const collection = mongoDatabase.collection("salas");

  const salas = await collection.find().toArray();

  if (salas.length > 0){
    console.log("La colección salas ya existe");

   return true;
  }

  // Extract
  mysqlConnection.query(
    `SELECT
      s.nombre,
      s.superficie,
      s.planta,
      s.precio,
      s.tipo,
      c.razon_social AS cliente_razon_social,
      c.cif AS cliente_cif,
      c.sector AS cliente_sector,
      c.telefono AS cliente_telefono,
      c.numero_empleados AS cliente_numero_empleados
    FROM salas s
    LEFT JOIN clientes c ON s.clienteID = c.id;
  `,
    async (error, result, fields) => {
      if (error) {
        throw error;
      }
      // Transform
      console.log(result);
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          nombre: result[i].nombre,
          superficie: result[i].superficie,
          planta: result[i].planta,
          precio: result[i].precio,
          tipo: result[i].tipo,
          clienteID: result[i].clienteID,

          clientes: {
            razon_social: result[i].cliente_razon_social,
            cif: result[i].cliente_cif,
            sector: result[i].cliente_sector,
            telefono: result[i].cliente_telefono,
            numero_empleados: result[i].cliente_numero_empleados,
          },
        });
      }

      // Load
      if (error) {
        throw error;
      }

      await collection.insertMany(transformado);
      console.log("Datos migrados con éxito a MongoDB");
    }
  );
}

//Migrar Usuarios_Eventos-------------------------------------------------------------------------------------------------------------------------
async function migrarUsuariosEventos() {
  const collection = mongoDatabase.collection("usuarios_eventos");

  const usuarios_eventos = await collection.find().toArray();

  if (usuarios_eventos.length > 0){
    console.log("La colección usuarios_eventos ya existe");

   return true;
  }

  // Extract
  mysqlConnection.query(
    `SELECT
      u.email,
      u.password,
      e.nombre,
      e.tipo,
      e.fecha_inicio,
      e.fecha_fin,
      e.organizado,
      e.aforo
    FROM usuarios_eventos ue
    LEFT JOIN usuarios u ON ue.usuariosID = u.id
    LEFT JOIN eventos e ON ue.eventosID = e.id;
  `,
    async (error, result, fields) => {
      if (error) {
        throw error;
      }
      // Transform
      console.log(result);
      let transformado = [];
      for (let i = 0; i < result.length; i++) {
        transformado.push({
          usuario: {
            email: result[i].email,
            password: result[i].password,
          },
          eventos: {
            nombre: result[i].nombre,
            tipo: result[i].tipo,
            fecha_inicio: result[i].fecha_inicio,
            fecha_fin: result[i].fecha_fin,
            organizado: result[i].organizado,
            aforo: result[i].aforo,
          },
        });
      }

      // Load
      if (error) {
        throw error;
      }

      await collection.insertMany(transformado);
      console.log("Datos migrados con éxito a MongoDB");
    }
  );
}






//Definir la función main:
/**
 * La función principal main realiza las siguientes acciones:
 * Conecta a MongoDB.
 * Selecciona la base de datos "polo_digital" en MongoDB.
 * Ejecuta la función migrarClientes.
 * Cierra las conexiones a MongoDB y MySQL.
 */
async function main() {
  // conectar con MongoDB
  await mongoConnection.connect();
  console.log("Conectado a MongoDB!!!");


  // seleccionar base de datos polodigital en Mongodb
  mongoDatabase = mongoConnection.db("polo_digital");

  await migrarClientes();
  await migrarEmpleados();
  await migrarUsuarios();
  await migrarEmpleadosClientes();
  await migrarEventos();
  await migrarInventario();
  await migrarMobiliario();
  await migrarSalas();
  await migrarUsuariosEventos();

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
