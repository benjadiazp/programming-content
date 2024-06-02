// Objetivo: Mostrar el uso de variables en JavaScript
//
// Para ejecutar este programa, correr:
// $ node variables.js
//
// Comenzamos con una variable sin valor
var a;
console.log(a); // undefined

// Asignamos un valor a la variable
a = 5;
console.log(a); // 5

// Podemos reasignar la variable
a = 3;
console.log(a); // 3

// Podemos reasignar la variable con una operación
a = a + 2;
console.log(a); // 5

// Podemos reasignar la variable con una operación más compleja
a = a * 2 + 1;
console.log(a); // 11

// También podemos declarar e inicializar una variable en una sola línea
var b = 7;
console.log(b); // 7

// Podemos reasignar la variable con una operación
b = b - 3;
console.log(b); // 4

// Podemos hacer operaciones entre variables
var c = a + b;
console.log(c); // 15

// Podemos reasignar una variable con otra variable
a = b;
console.log(a); // 4
