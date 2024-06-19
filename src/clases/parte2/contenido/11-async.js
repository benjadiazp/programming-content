let segundos = 0;

function incrementarSegundos(cantidad) {
  segundos += cantidad;
}

const interval1 = setInterval(() => incrementarSegundos(1), 1000); // Cada 1 segundo o 1000 milisegundos

const interval2 = setInterval(() => {
  console.log(`Han pasado ${segundos} segundos.`);
}, 2000); // cada 2 segundos

console.log("Intervalos");

setTimeout(() => {
  console.log("Cerrando intervals");
  clearInterval(interval1);
  clearInterval(interval2);
}, 10000); // a los 10 segundos
