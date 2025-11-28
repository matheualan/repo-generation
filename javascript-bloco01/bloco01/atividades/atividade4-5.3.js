const readline = require("readline-sync");

const n1 = readline.questionFloat("Informe o primeiro numero: ");
const n2 = readline.questionFloat("Informe o segundo numero: ");
const n3 = readline.questionFloat("Informe o terceiro numero: ");
const n4 = readline.questionFloat("Informe o quarto numero: ");

let result = (n1 * n2) - (n3 * n4);

console.log(result);