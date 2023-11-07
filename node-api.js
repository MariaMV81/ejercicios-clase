let express = require("express");
let mysql = require("mysql2");
let app = express();


//Crear la conexion a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '08886544Mj',
    database: 'polo_digital'
});

// Conectarse al servidor de mysql local

connection.connect(function(error){
    if (error){
        return console.error(`error: ${error.message}`);
    }

    console.log("Conectado a MySQL!!!");
});



// obtener el listado de clientes
app.get("/clientes", function(request, response) {
    connection.query("select * from clientes", function(error, result, fields) {
        if (error)  {
            response.status(400).send(`error: ${error.message}`);

            return;
        }
    
        response.send(result);
    });
});

// obtener listado de empleados y empleados clientes
app.get("/todos-empleados", function(request, response) {
    connection.promise().query("select * from empleados").then(function(result) {
        let empleados = result[0];

        connection.query("select * from empleados_clientes", function(error, result, fields) {
             for (let i = 0; i < result.length; i++) {
                empleados[empleados.length] = result[i];
             }

             response.send(empleados);
        });
    }).catch(function(error) {
        response.status(400).send(`error: ${error.message}`);
    });
});

// obtener total empleados de los clientes
app.get("/total-empleados", function(request, response) {
    connection.query("select * from clientes", function(error, result, fields) {
        let total = 0;

        for (let i = 0; i < result.length; i++) {
            total += result[i].numero_empleados;
        }

        response.send({ totalEmpleados: total });
    });
});

app.listen(8000, function(){
    console.log("Server is up and running");
})