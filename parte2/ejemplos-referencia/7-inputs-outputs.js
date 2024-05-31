// Objetivo: Mostrar cómo trabajar con inputs y outputs en NodeJS
//
// Nota: Al ejecutar este programa, no se verá nada en la consola.
// Este ejemplo hace algo parecido al anterior, pero exporta la función askNumber para poder usarla en otros archivos.

const readline = require("readline");

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askNumber = (msg) => {
  let number;
  return new Promise((resolve, reject) => {
    lineReader.question(msg ?? "Inserta un número", (input) => {
      try {
        number = parseInt(input);
        if (isNaN(number)) {
          throw new Error("No escribiste un número");
        }
        resolve(number);
      } catch (error) {
        console.error(error);
        resolve(askNumber(msg));
      }
    });
  });
};

// Exportamos la función askNumber para poder usarla en otros archivos
module.exports = askNumber;
