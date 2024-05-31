// Objetivo: Mostrar cómo trabajar con inputs y outputs en NodeJS
//
// Para ejecutar este programa, correr:
// $ node inputs-outputs.js
//
// Necesitamos importar el módulo "readline" para poder leer la entrada del usuario
// Para importar un módulo en NodeJS, usamos la función require("[nombre-modulo]")
var readline = require("readline");

// Creamos una interfaz para leer la entrada del usuario
var lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Preguntamos por un número
var firstNumber;

lineReader.question("Escribe un número: ", function (input) {
  // Convertimos el valir del input (que es un string) a un número
  firstNumber = parseInt(input);

  if (isNaN(firstNumber)) {
    // isNaN (is Not a Number) es una función que devuelve true si el valor no es un número
    console.error("No escribiste un número");
  }

  // Imprimimos el número
  console.log("Escribiste el número: " + firstNumber);

  // Preguntamos por otro número
  var secondNumber;

  lineReader.question("Escribe otro número: ", function (input) {
    // Convertimos el valir del input (que es un string) a un número
    secondNumber = parseInt(input);

    if (isNaN(secondNumber)) {
      console.error("No escribiste un número");
    }

    // Imprimimos el número
    console.log("Escribiste el número: " + secondNumber);

    // Sumamos los dos números
    var sum = firstNumber + secondNumber;

    // Imprimimos el resultado
    console.log("La suma de los dos números es: " + sum);

    // Cerramos el input
    lineReader.close();
  });
});
