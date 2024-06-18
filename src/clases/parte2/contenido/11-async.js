let segundos = 0;

const interval1 = setInterval(() => {
  segundos++;
}, 1000); // Cada 1 segundo

const interval2 = setInterval(() => {
  console.log(`Han pasado ${segundos} segundos.`);
}, 2000); // cada 2 segundos

setTimeout(() => {
  clearInterval(interval1);
  clearInterval(interval2);
}, 10000); // a los 10 segundos
