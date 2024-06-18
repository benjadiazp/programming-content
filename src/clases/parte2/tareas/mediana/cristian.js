var edadesFamiliaSchmidt = [37, 69, 33, 74, 35];
var edadesHermanosSchmidt = [33, 37, 35];
var humedadesDePan = [80, 100, 60, 90, 70];
var panPorDiaKg = [20, 30, 10, 25, 28, 23];
var seriesLibros = [7, 8, 2, 1];

function mediana(arr) {
  const arrOrdenado = arr.sort(function (a, b) {
    if (a > b) {
      return -1;
    } else if (a == b) {
      return 0;
    } else {
      return 1;
    }
  });
  var total = 0;
  if (arr.length % 2 === 0) {
    for (i = arr.length / 2 - 1; i < arr.length / 2 + 1; i++) {
      total += arrOrdenado[i];
    }
    console.log(total / 2);
  } else {
    for (i = arr.length / 2 - 0.5; i < arr.length / 2 + 0.5; i++) {
      total += arrOrdenado[i];
    }
    console.log(total);
  }
}

mediana(edadesFamiliaSchmidt);
mediana(edadesHermanosSchmidt);
mediana(humedadesDePan);
mediana(panPorDiaKg);
mediana(seriesLibros);
