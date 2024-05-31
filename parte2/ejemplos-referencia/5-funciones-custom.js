// Objetivo: Mostrar cómo crear funciones custom en JavaScript
//
// Para ejecutar este programa, correr:
// $ node funciones-custom.js
//
// Declaramos una función llamada "saludar"
function saludar() {
  console.log("Hola!");
}

// Llamamos la función "saludar"
saludar();

// Declaramos una función llamada "saludarConNombre"
function saludarConNombre(nombre) {
  console.log("Hola " + nombre + "!");
}

// Llamamos la función "saludarConNombre"
saludarConNombre("Juan");

// Declaramos una función llamada "saludarConNombreYEdad"
function saludarConNombreYEdad(nombre, edad) {
  console.log("Hola " + nombre + ", tienes " + edad + " años!");
}

// Llamamos la función "saludarConNombreYEdad"
saludarConNombreYEdad("Juan", 30);

// También se pueden retornar el valor en vez de imprimirlo inmediatamente
function retornarSaludo(nombre) {
  return "Hola " + nombre + "!";
}

// Llamamos la función "retornarSaludo" y guardamos el resultado en una variable
var saludo = retornarSaludo("Juan");

// Imprimimos el resultado
console.log(saludo);

// Declaramos una función llamada "sumar"
function sumar(a, b) {
  return a + b;
}

// Llamamos la función "sumar" y guardamos el resultado en una variable
var resultado = sumar(2, 3);

// Imprimimos el resultado
console.log(resultado);

// Declaramos una función llamada "esPar"
function esPar(number) {
  return number % 2 === 0;
}

// Llamamos la función "esPar" y guardamos el resultado en una variable
var esPar1 = esPar(2);

// Imprimimos el resultado
console.log(esPar1);

// También podemos llamar la función directamente en el console.log
console.log(esPar(3));

// Declaramos una función llamada "esMayorDeEdad"
function esMayorDeEdad(edad) {
  return edad >= 18;
}

// Llamamos la función "esMayorDeEdad" y guardamos el resultado en una variable
var esMayorDeEdad1 = esMayorDeEdad(30);

// Imprimimos el resultado
console.log(esMayorDeEdad1);

// También podemos llamar la función directamente en el console.log
console.log(esMayorDeEdad(15));

// Formas alternativas de declarar funciones:
// También podemos declarar funciones en variables (Funciones anónimas)
var sumarConFunction = function (a, b) {
  return a + b;
};

// Llamamos la función "sumar" e imprimimos el resultado
console.log(sumar(2, 3));

// También podemos declarar funciones en variables (Funciones flecha)
var sumarConFlecha = (a, b) => {
  return a + b;
};

// Llamamos la función "sumar" e imprimimos el resultado
console.log(sumarConFlecha(2, 3));

// Si la función sólo tiene una línea, podemos omitir las llaves y la palabra "return"
var sumarConFlechaCorta = (a, b) => a + b;

// Llamamos la función "sumar" e imprimimos el resultado
console.log(sumarConFlechaCorta(2, 3));

// Si la función sólo tiene un argumento, podemos omitir los paréntesis
var cuadrado = (x) => x * x;

// Llamamos la función "cuadrado" e imprimimos el resultado
console.log(cuadrado(3));

// Si la función no tiene argumentos, debemos incluir los paréntesis
var obtenerFecha = () => new Date();

// Llamamos la función "obtenerFecha" e imprimimos el resultado
console.log(obtenerFecha());

// También podemos llamar funciones dentro de otras funciones
function sumarYMultiplicar(a, b, c) {
  return sumar(a, b) * c;
}

// Algunas funciones pueden ser asíncronas, como setTimeout
console.log("Antes del setTimeout");
setTimeout(() => {
  console.log("Han pasado 2 segundos");
}, 2000);
console.log("Después del setTimeout");

// Para lidiar con funciones asíncronas, podemos usar callbacks
function esperar2Segundos(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

console.log("Antes de esperar2Segundos");

esperar2Segundos(() => {
  console.log("Han pasado 2 segundos");
});

console.log("Después de esperar2Segundos");

// También podemos usar promesas para lidiar con funciones asíncronas
function esperar2SegundosPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

console.log("Antes de esperar2SegundosPromise");

esperar2SegundosPromise().then(() => {
  console.log("Han pasado 2 segundos");
});

console.log("Después de esperar2SegundosPromise");

// También podemos usar async/await para lidiar con funciones asíncronas
async function esperar2SegundosAsync() {
  await esperar2SegundosPromise();
  console.log("Han pasado 2 segundos");
}

console.log("Antes de esperar2SegundosAsync");

esperar2SegundosAsync();

console.log("Después de esperar2SegundosAsync");
