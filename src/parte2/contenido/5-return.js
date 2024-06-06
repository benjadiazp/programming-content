// Funciones con return.

function saludar (nombre) {
    console.log("Hola " + nombre + "!");
    // No hay valor de retorno
}

//console.log(saludar);
//console.log(saludar("Juan"));

function saludarConReturn (nombre) {
    console.log("Hola " + nombre + "!");
    return "Saludo enviado exitosamente.";
}

//console.log(saludarConReturn("Juan"));


// Ejemplo 2:

function sumar (a, b) {
    console.log(a + b);
    return a + b;
}

//sumar(sumar(4,3), 3);

// Ejemplo 3:

const obtenerSaludo = (nombre) => {
    return "Hola " + nombre + "!";
}

console.log(obtenerSaludo("Juan"));

const saludoGuardado = obtenerSaludo("Ana");

console.log(saludoGuardado);