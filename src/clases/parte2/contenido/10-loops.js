var nVeces = 0;
/*
while (nVeces <= 3) {
    nVeces = nVeces + 1;
    console.log("Hola");
}
*/
/*
while (nVeces >= 0) {
    nVeces = nVeces + 1;
    console.log("Hola");
}
*/
/*
do {
    nVeces = nVeces + 1;
    consolelog("Hola");
} while (nVeces < 0);
*/
const arr = ["perro", "gato", "loro", "pez", "tortuga"];
var i = 0;
// Imprimir cada uno de los elementos del array
while (i < arr.length) {
  //console.log(arr[i++]);
  i = i + 1;
  //i++;
  // i += 1;
}

for (var j = 0; j < arr.length; j += 2) {
  console.log("Quiero tener un/a " + arr[j]);
}

/*
 for ( [iterador]; [condicion]; [incremento]) {
    // Codigo a ejecutar
 }
*/

const calcularPromedio = function (arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const promedio = total / arr.length;
  return promedio;
};

var arr2 = [1, 2, 3, 4, 5];
console.log(calcularPromedio(arr2));
arr2.push(100000);
console.log(calcularPromedio(arr2));

// TAREA: Calcular la mediana.

const arr3 = arr2.sort();
