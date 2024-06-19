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
  //callback
  console.log(resultado); // 23
});

//const valorDolar = fetch("https://mindicador.cl/api");
let valorDolar;

fetch("https://mindicador.cl/api").then((resultado) => {
  // JSON: JavaScript Object Notation
  /*
    const obj = {
      att1: {
        color: "rojo",
        fecha: new Date(),
        otro_objeto: {}
      }
    }
  */
  resultado.json().then((objeto) => {
    valorDolar = objeto.dolar.valor;
    console.log(valorDolar);
  });
});

async function imprimirSumaLenta(a, b) {
  console.log(await sumaLenta(a, b));
}

//imprimirSumaLenta(4, 3); // 7

const imprimirValorDolar = async () => {
  const respuestaServidor = await fetch("https://mindicador.cl/api");
  const objetoJSON = await respuestaServidor.json();
  console.log(objetoJSON);
  const valor = objetoJSON.dolar.valor;
  console.log("Valor dolar", valor);
};

imprimirValorDolar();

console.log("Bienvenido!");
