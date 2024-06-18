// Ejercicio de ejemplo.
//
// Preguntar a una persona su nombre y edad. Luego, saludarla con el su nombre al revés y su edad al cuadrado.
// Ej: "Juan", 30 -> "nauJ, tienes 900 años!"
// Luego, preguntar por la edad y el nombre de otra persona y saludarla de la misma manera.
// Ej: "Ana", 25 -> "anA, tienes 625 años!"
// Finalmente, decir quién tiene más años, incluyendo sus nombres y edades.
// Ej: "Juan tiene más años que Ana."

const askNumber = require("../lib/askNumber");
const askString = require("../lib/askString");

const saludarConNombreYEdad = (nombre, edad) => {
  console.log(
    `Hola ${nombre.split("").reverse().join("")}, tienes ${edad ** 2} años!`,
  );
};

askString("Escribe el primer nombre: ").then((nombre) => {
  askNumber("Ingresa su edad: ").then((edad) => {
    saludarConNombreYEdad(nombre, edad);
    askString("Escribe el segundo nombre: ").then((nombre2) => {
      askNumber("Ingresa su edad: ").then((edad2) => {
        saludarConNombreYEdad(nombre2, edad2);
        if (edad > edad2) {
          console.log(`${nombre} tiene más años que ${nombre2}.`);
        } else if (edad < edad2) {
          console.log(`${nombre2} tiene más años que ${nombre}.`);
        } else {
          console.log(`${nombre} y ${nombre2} tienen la misma edad.`);
        }
      });
    });
  });
});
