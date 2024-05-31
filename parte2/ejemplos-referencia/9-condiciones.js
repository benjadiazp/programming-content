// Objetivo: Mostrar cómo trabajar con condiciones en JavaScript
//
// Para ejecutar este programa, correr:
// $ node condiciones.js
//
// Comenzamos con una variable sin valor
var a;

// Asignamos un valor a la variable
a = 5;

// Si la variable "a" es mayor a 3, imprimimos un mensaje
if (a > 3) {
  console.log("La variable 'a' es mayor a 3");
}

// Si la variable "a" es menor a 10, imprimimos un mensaje
if (a < 10) {
  console.log("La variable 'a' es menor a 10");
}

// Si la variable "a" es igual a 5, imprimimos un mensaje
if (a === 5) {
  console.log("La variable 'a' es igual a 5");
}

// Si la variable "a" es diferente a 3, imprimimos un mensaje
if (a !== 3) {
  console.log("La variable 'a' es diferente a 3");
}

// Si la variable "a" es mayor o igual a 5, imprimimos un mensaje
if (a >= 5) {
  console.log("La variable 'a' es mayor o igual a 5");
}

// Si la variable "a" es menor o igual a 5, imprimimos un mensaje
if (a <= 5) {
  console.log("La variable 'a' es menor o igual a 5");
}

// Si la variable "a" es mayor a 3 y menor a 10, imprimimos un mensaje
if (a > 3 && a < 10) {
  console.log("La variable 'a' es mayor a 3 y menor a 10");
}

// Si la variable "a" es mayor a 10 o menor a 5, imprimimos un mensaje
if (a > 10 || a < 5) {
  console.log("La variable 'a' es mayor a 10 o menor a 5");
}

// También podemos comparar variables entre sí
var b = 3;

// Si la variable "a" es mayor a la variable "b", imprimimos un mensaje
if (a > b) {
  console.log("La variable 'a' es mayor a la variable 'b'");
}

// También podemos usar "else" para ejecutar un bloque de código si la condición no se cumple
if (a === 3) {
  console.log("La variable 'a' es igual a 3");
} else {
  console.log("La variable 'a' no es igual a 3");
}

// También podemos usar "else if" para evaluar múltiples condiciones
if (a === 3) {
  console.log("La variable 'a' es igual a 3");
} else if (a === 7) {
  console.log("La variable 'a' es igual a 7");
} else {
  console.log("La variable 'a' no es igual a 3 ni a 7");
}
