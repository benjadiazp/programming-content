// Funciones
// Forma 1
function saludar(nombre, edad, nacionalidad, comidaFavorita) {
  // Declaración de la función
  console.log("Hola " + nombre + "!");
  console.log("Tienes " + edad + " años.");
  console.log("Eres de " + nacionalidad + ".");
}

const nombreDeAna = "Ana";
var edad = 21;
const nacionalidad = "Perú";
let comidaFavorita = "Completos italianos";

saludar("Juan", 45, "Chile", "Lasaña"); // Aquí invoco la función.
saludar(nombreDeAna, edad, nacionalidad, comidaFavorita);
saludar(21, "Carlos");

console.log("-------------");

// Forma 2: Función anónima
const buenosDias = function (nombre) {
  console.log("Buenos días " + nombre + "!");
};
function buenasTardes(nombre) {
  console.log("Buenas tardes " + nombre + "!");
}

var saludoCompleto = function (nombre, saludo) {
  saludo(nombre);
  console.log("Espero que estés bien.");
};

saludoCompleto("Juan", buenosDias);
saludoCompleto("Ana", buenasTardes);

console.log("-------------");
// Forma 3: Arrow function

const buenasNoches = (nombre) => {
  console.log("Buenas noches " + nombre + "!");
};

const malasNoches = (nombre) => console.log("Malas noches " + nombre + "!");

buenasNoches("Juan");
malasNoches("Ana");
