// Objetivo: Mostrar cómo trabajar con condiciones en JavaScript
//
// Para ejecutar este programa, correr:
// $ node condiciones.js

// Esta vez vamos a trabajar con condiciones más complejas

// Comenzamos con una variable sin valor
var a;

// Asignamos un valor a la variable
a = 5;

// Comenzamos con if-else
if (a > 3) {
  console.log("La variable 'a' es mayor a 3");
} else {
  console.log("La variable 'a' es menor o igual a 3");
}

// Introducimos una segunda variable, que es un string.
var b = "5";

// Comparamos la variable "a" con la variable "b"
// Veamos qué pasa si usamos "===" y qué pasa si usamos "=="

console.log("Comparando 'a' con 'b' usando '===':", a === b); // false
console.log("Comparando 'a' con 'b' usando '==':", a == b); // true

// También podemos comparar dos strings
var c = "hola";
var d = "hola";
var e = "adiós";

console.log("Comparando 'c' con 'd' usando '===':", c === d); // true
console.log("Comparando 'c' con 'd' usando '==':", c == d); // true
console.log("Comparando 'c' con 'e' usando '===':", c === e); // false
console.log("Comparando 'c' con 'e' usando '==':", c == e); // false
console.log("Comparando 'd' con 'e' usando '!==':", d !== e); // true
console.log("Comparando 'd' con 'e' usando '!=':", d != e); // true
