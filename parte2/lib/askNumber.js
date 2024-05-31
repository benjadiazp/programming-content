// Objetivo: Mostrar cómo trabajar con inputs y outputs en NodeJS
//
// Para ejecutar este programa, correr:
// $ node inputs-outputs.js
//
// Este ejemplo hace algo parecido al anterior, pero exporta la función askNumber para poder usarla en otros archivos.

const readline = require("readline");

const askNumber = (msg) => {
  const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const response = new Promise((resolve, reject) => {
    lineReader.question(msg ?? "Inserta un número\n", (input) => {
      try {
        const number = parseInt(input);
        if (isNaN(number)) {
          throw new Error("No escribiste un número");
        }
        resolve(number);
      } catch (error) {
        console.error(error);
        resolve(askNumber(msg));
      } finally {
        lineReader.close();
      }
    });
  });
  return response;
};

// Exportamos la función askNumber para poder usarla en otros archivos
module.exports = askNumber;
