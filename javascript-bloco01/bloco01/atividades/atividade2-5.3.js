const readline = require("readline-sync");

let nota1 = readline.questionFloat("Informe a primeira nota: ");
console.log("Primeira nota: ", nota1);

let nota2 = readline.questionFloat("Informe a segunda nota: ");
console.log("Segunda nota: ", nota2);

let nota3 = readline.questionFloat("Informe a terceira nota: ");
console.log("Terceira nota: ", nota3);

let nota4 = readline.questionFloat("Informe a quarta nota: ");
console.log("Quarta nota: ", nota4);

let soma = nota1 + nota2 + nota3 + nota4;
let media = soma / 4;
console.log("Media das notas: ", media.toFixed(1));