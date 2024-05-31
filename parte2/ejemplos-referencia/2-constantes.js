// Objetivo: Mostrar el uso de constantes en JavaScript
//
// Para ejecutar este programa, correr:
// $ node constantes.js
//
// Las constantes son como las variables, pero su valor no puede cambiar.
// Declaramos una constante llamada "animal"
const animal = "perro";

// Imprimimos el valor de la constante
console.log("animal:", animal);

// Intentamos reasignar la constante
animal = "gato";

// Deberíamos ver un error en la consola. La siguiente línea no se ejecutará.
console.log("animal:", animal);
