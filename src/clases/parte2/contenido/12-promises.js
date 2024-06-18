const sumaRapida = function (a, b) {
  return a + b;
};

const sumaLenta = function (a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = a + b;
      resolve(resultado);
    }, 3000);
  });
};

console.log(sumaRapida(4, 5)); // 9
console.log(sumaLenta(4, 5)); // Promise { <pending }

sumaLenta(10, 13).then((resultado) => {
  console.log(resultado); // 23
});

async function imprimirSumaLenta(a, b) {
  console.log(await sumaLenta(a, b));
}

imprimirSumaLenta(4, 3); // 7
