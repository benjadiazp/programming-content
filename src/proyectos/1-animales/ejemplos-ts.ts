let numero: number = 1;
const str: string = "Hola mundo";
const bool: boolean = true;
let arr: number[];

arr = [1, 2, 3];

type Persona = {
  nombre: string;
  edad: number;
  genero?: "M" | "F";
};

const pedro: Persona = {
  nombre: "Pedro",
  edad: 20,
};

const alumnos: Persona[] = [
  pedro,
  {
    nombre: "Juan",
    edad: 21,
    genero: "M",
  },
];

fetch("https://mindicador.cl/api")
  .then((res) => {
    return res.json();
  })
  .then(
    (
      objJson: unknown & {
        // Aquí no sé qué trae la API, pero sé que al menos trae { dolar: {valor: number;}}
        dolar: {
          valor: number;
        };
      },
    ) => {
      console.log(objJson);
      const valorDolar = objJson.dolar.valor;
      console.log(valorDolar);
    },
  );

numero = 2;
console.log(numero);
