const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ["perro", "gato", "loro", "pez", "tortuga"];
const arr3 = [true, false, true, false, false, false];
const arr4 = ["perro", 2, true, 4, "gato", 6, false, 8, "loro", 10];
const arr5 = [[[1, 2, 3], 2, 3], [4, 5, 6], [7, 8, 9]];

const arr6 = ["ASDLKADLSGKLDSFKGLSDFVLSDKFGLDSKFLDSKFLSDKVLK DFLKLSDKFLK12...."] // mala práctica
const arr7 = ["http://dropbox.com/blabla"];

const arrEjemplo = ["perro", "gato", "loro", "pez", "tortuga"];
// [0, 1, 2, 3, 4]
console.log(arrEjemplo);
console.log(arrEjemplo[0]); // "perro"
console.log(arrEjemplo[5]); // undefined
console.log(arrEjemplo.length); // 5

const hiperMatriz = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ], 
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18],
        [19, 20, 21]
    ]
]

console.log(hiperMatriz);
console.log(hiperMatriz[0]);
console.log(hiperMatriz[0][2]);
console.log(hiperMatriz[1][2][0]);

hiperMatriz[0] = [];
hiperMatriz[0][5] = 1;

console.log(hiperMatriz);

hiperMatriz.push("oso");
console.log(hiperMatriz);
const ultimoElemento = hiperMatriz.pop();
console.log(ultimoElemento);
console.log(hiperMatriz);

hiperMatriz.push("oso");


console.log("slice", hiperMatriz.slice(2, 3));

console.log(hiperMatriz.at(-2));