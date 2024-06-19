"use strict";
var numero = 1;
var str = "Hola mundo";
var bool = true;
var arr;
arr = [1, 2, 3];
var pedro = {
    nombre: "Pedro",
    edad: 20,
};
var alumnos = [
    pedro,
    {
        nombre: "Juan",
        edad: 21,
        genero: "M",
    },
];
fetch("https://mindicador.cl/api")
    .then(function (res) {
    return res.json();
})
    .then(function (objJson) {
    console.log(objJson);
    var valorDolar = objJson.dolar.valor;
    console.log(valorDolar);
});
numero = 2;
console.log(numero);
