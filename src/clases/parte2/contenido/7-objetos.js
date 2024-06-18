const animal1 = {
  nombre: "Perro",
  cantidadDePatas: 4,
  saltar: function () {
    console.log("No puedo saltar :C");
  },
};

const animal2 = {
  nombre: "Gato",
  cantidadDePatas: 4,
  saltar: function () {
    console.log("Acabo de saltar");
  },
};

const animal3 = {
  nombre: "Loro",
  cantidadDePatas: 2,
};

function imprimirPatas(animal) {
  console.log(
    "El " + animal.nombre + " tiene " + animal.cantidadDePatas + " patas.",
  );
}

imprimirPatas(animal1);
imprimirPatas(animal2);
imprimirPatas(animal3);

animal2.saltar();
animal1.saltar();
