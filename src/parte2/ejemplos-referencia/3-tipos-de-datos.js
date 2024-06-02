// Objetivo: Mostrar los tipos de datos en JavaScript
//
// Para ejecutar este programa, correr:
// $ node tipos-de-datos.js
//
// Ejemplos de tipos de datos
var number = 5; // number
var string = "Hello"; // string
var boolean = true; // boolean
var array = [1, 2, 3]; // array
var object = { key: "value" }; // object
var date = new Date(); // date

// También hay valores que representan una ausencia de valor
var nullValue = null; // null
var undefinedValue = undefined; // undefined

// Imprimimos los tipos de datos
console.log("number:", number);
console.log("string:", string);
console.log("boolean:", boolean);
console.log("array:", array);
console.log("object:", object);
console.log("date:", date);
console.log("nullValue:", nullValue);
console.log("undefinedValue:", undefinedValue);

// Intentemos sumar dos números. Para ello, creamos dos variables
var a = 2;
var b = 3;

// Sumamos las dos variables
console.log("a + b:", a + b); // 5

// Intentemos sumar dos strings. Para ello, creamos dos variables
var c = "buenas";
var d = "tardes";

// Sumamos las dos variables
console.log("c + d:", c + d); // "buenastardes"

// Si quisiéramos darle el formato correcto, insertamos un espacio entre las dos variables
console.log("c + d:", c + " " + d); // "buenas tardes"

// Una forma alternativa (En mi opinión más elegante) de hacerlo es con template strings
console.log(`c + d: ${c} ${d}`); // "buenas tardes"

// Intentemos sumar un número y un string. Para ello, creamos dos variables
var e = 2;
var f = "buenas tardes";

// Sumamos las dos variables
console.log("number + string:", e + f); // "2buenas tardes"

// Intentemos sumar un número y un boolean. Para ello, creamos dos variables
console.log("number + boolean:", e + boolean); // 3

// Si sumamos un string y un boolean, el boolean se convierte a string
console.log("c + boolean:", c + boolean); // "buenastrue"

// Si sumamos un string y un objeto, el objeto se convierte a string
console.log("c + object:", c + object); // "buenas[object Object]"

// Si sumamos dos strings que representan números, se concatenan, no se suman sus valores.
var g = "21";
var h = "36";
console.log("g + h:", g + h); // "2136"

// Si queremos sumar los valores de dos strings que representan números, debemos convertirlos a números usando la función parseInt([string])
console.log("parseInt(g) + parseInt(h):", parseInt(g) + parseInt(h)); // 57
