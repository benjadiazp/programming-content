var datoBooleano = true;

datoBooleano = 2 == 3;

console.log(datoBooleano);

datoBooleano = 2 != 3;

console.log(datoBooleano);
console.log(!datoBooleano);
console.log(!!datoBooleano);

if (true) {
  console.log("Es verdadero");
}
if (false) {
  console.log("Es falso"); // nunca se va a ejecutar
}

if (2 == 3) {
  console.log("Oveja");
} else {
  console.log("Cabra");
}

var vacio; // undefined
console.log(vacio);

if (!!vacio == false) {
  console.log("Es verdadero");
} else {
  console.log("Es falso");
}

console.log(!vacio); // true
console.log(!9348539845);
console.log(!0);
console.log(2 < 3); // true
console.log(2 > 2); // false
console.log(2 >= 2); // true

const edad = 10;

if (edad >= 18) {
  console.log("Es adulto");
} else if (edad >= 13) {
  console.log("Es adolescente");
} else {
  console.log("Es niño");
}

// Ejemplo practico

const numero = 15;

console.log(10 % 4); // mod / modulo
console.log(10 % 3);
function esPar(numero) {
  if (numero % 2 == 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

esPar(10);
esPar(11);
esPar(12);
esPar(13);
