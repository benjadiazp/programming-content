/*
    Ejercicio: 
    1) Imprime los números del 1 al 100.
    2) Cuando un número sea múltiplo de 3, imprimir "fizz" en vez del número.
    3) Si es múltiplo de 5, imprimir "buzz".
    4) Si es múltiplo de ambos, imprimir "fizzbuzz".

    ej:
    1
    2
    fizz
    4
    buzz
    fizz
    7
    8
    fizz
    buzz
    11
    fizz
    13
    14
    fizzbuzz
*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++)
    console.log(
      `${i % 3 === 0 ? "fizz" : ""}${i % 5 === 0 ? "buzz" : ""}` || i,
    );
}

//fizzBuzz();

// O(1)
function superEficiente(n) {
  console.log(n);
}

superEficiente(100000000000);

// O(n^3)
function superIneficiente(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k, n);
      }
    }
  }
}

superIneficiente(1000);
