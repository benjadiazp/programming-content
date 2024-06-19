const miArr = [3, 2, 6, 1000, 64, 62, 2];

const ordenarArreglo = (arr) =>
  arr.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));

const obtenerPromedio = (arr) =>
  arr.reduce((acc, n) => acc + n, 0) / arr.length;

function obtenerMediana(arr) {
  if (!arr.length) return;
  ordenarArreglo(arr);
  const mitad = Math.floor(arr.length / 2);
  /*
  return arr.length % 2
    ? arr[mitad]
    : obtenerPromedio(arr.slice(mitad - 1, mitad + 1)); // alternativa: arr[mitad] + arr[mitad-1] / 2
    */
  if (arr.length % 2 > 0) {
    return arr[mitad];
  } else {
    return arr[mitad] + arr[mitad - 1] / 2;
  }
}

console.log(obtenerMediana(miArr));

// Pendiente: Calcular la moda
// Imprimir el número que más se repite
