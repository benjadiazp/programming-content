// 1 al 100
// multiplos de 3 son fizz
// multiplos de 5 son buzz
// multiplos de ambos son fizz buzz

// 2 tipos de complejidad: Espacial y Temporal

// Complejidad temporal
// O(1) <-- el mejor
// O(log n) <-- ideal!
// O(n) <- un for solito
// O(2n) <- un for después de otro for
// O(n^2) <- un for dentro de otro for
// O(2^n) <- muy ineficiente

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
