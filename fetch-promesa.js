/**
 * Esta es nuestra funcion ok (then) de la promesa.
 */
function mostrar(respuesta) {
    console.log(calcularMayorAncho(respuesta));
    console.log(calcularMayorAlto(respuesta));
}

function calcularMayorAlto(listado) {
    let alto = 0;

    for (let i = 0; i < listado.length; i++) {
        if (listado[i].height > alto) {
            alto = listado[i].height;
        }
    }

    return alto;
}

function calcularMayorAncho(listado) {
    let ancho = 0;

    for (let i = 0; i < listado.length; i++) {
        if (listado[i].width > ancho) {
            ancho = listado[i].width;
        }
    }

    return ancho;
}

/**
 * Esta es nuestra funcion error (catch) de la promesa. 
 */
function fallo(error) {
    console.log("Error: ", error);
}

let promesa = fetch("https://api.thecatapi.com/v1/images/search?limit=10");
 
promesa.then((response) => response.json()).then(mostrar).catch(fallo);