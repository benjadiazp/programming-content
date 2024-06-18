// Objetivo: Mostrar cómo trabajar con módulos en NodeJS
//
// Para ejecutar este programa, correr:
// $ node modulos.js
//
// Importamos la función "askNumber" del archivo "7-inputs-outputs.js"
const askNumber = require("./7-inputs-outputs");

var firstNumber;
var secondNumber;

// Preguntamos por un número
askNumber("Escribe un número: ").then((number) => {
  firstNumber = number;
  askNumber("Escribe otro número: ").then((number) => {
    secondNumber = number;
    // Sumamos los dos números
    const sum = firstNumber + secondNumber;

    // Imprimimos el resultado
    console.log("La suma de los dos números es: " + sum);
    // Cerramos el programa
    process.exit();
  });
});
