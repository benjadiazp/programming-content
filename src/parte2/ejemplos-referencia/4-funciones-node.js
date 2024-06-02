// Objetivo: Mostrar el uso de funciones en JavaScript
//
// Para ejecutar este programa, correr:
// $ node funciones-node.js
//
// NodeJS ya incluye algunas funciones predefinidas:
// - console.log: Para imprimir en la consola
console.log("Hola!");

// - parseInt: Para convertir un string a un número entero
var numero = parseInt("5.34");
console.log(numero);

// - parseFloat: Para convertir un string a un número decimal
var decimal = parseFloat("5.34");
console.log(decimal);

// - isNaN: Para verificar si un valor no es un número
var noEsNumero = isNaN("Hola");
console.log(noEsNumero);

var esNumero = isNaN(5);
console.log(esNumero);

// - setTimeout: Para ejecutar una función después de un tiempo
setTimeout(() => {
  console.log("Han pasado 2 segundos");
}, 2000);

// - setInterval: Para ejecutar una función cada cierto tiempo
var tiempoTranscurrido = 0;
setInterval(() => {
  tiempoTranscurrido += 1;
  console.log(`Han pasado ${tiempoTranscurrido} segundos`);
}, 1000);

// - clearInterval: Para detener la ejecución de setInterval. Lo dejaremos correr por 5 segundos.
setTimeout(() => {
  clearInterval();
}, 5000);

// - JSON.stringify: Para convertir un objeto a un string
var objeto = { key: "value" };
var objetoString = JSON.stringify(objeto);
console.log(objetoString);

// - JSON.parse: Para convertir un string a un objeto
var objetoParseado = JSON.parse(objetoString);

// - Math: Para realizar operaciones matemáticas
console.log("Math.PI:", Math.PI); // La constante PI: 3.141592653589793
console.log("Math.round(5.5):", Math.round(5.5)); // Para redondear
console.log("Math.floor(5.5):", Math.floor(5.5)); // Para redondear hacia abajo
console.log("Math.ceil(5.5):", Math.ceil(5.5)); // Para redondear hacia arriba
console.log("Math.random():", Math.random()); // Para obtener un número aleatorio entre 0 y 1
console.log("Math.abs(-5):", Math.abs(-5)); // Para obtener el valor absoluto
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Para elevar un número a una potencia
console.log("Math.sqrt(9):", Math.sqrt(9)); // Para obtener la raíz cuadrada
console.log("Math.sin(90):", Math.sin(90)); // Para obtener el seno
console.log("Math.cos(90):", Math.cos(90)); // Para obtener el coseno
console.log("Math.tan(45):", Math.tan(45)); // Para obtener la tangente
console.log("Math.log(10):", Math.log(10)); // Para obtener el logaritmo natural
console.log("Math.exp(2):", Math.exp(2)); // Para obtener el exponencial
console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3)); // Para obtener el número más grande
console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3)); // Para obtener el número más pequeño
console.log("Math.trunc(5.5):", Math.trunc(5.5)); // Para truncar el número
console.log("Math.sign(-5):", Math.sign(-5)); // Para obtener el signo del número
