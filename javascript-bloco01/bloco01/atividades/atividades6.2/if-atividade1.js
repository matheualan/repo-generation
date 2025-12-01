// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C 
// Imprima na tela se a soma de A + B é maior, menor ou igual a C.


const readline = require("readline-sync");

let a, b, c;

a = readline.questionInt("Informe o primeiro numero: ");
b = readline.questionInt("Informe o segundo numero: ");
c = readline.questionInt("Informe o terceiro numero: ");

let sum = a + b;

if (sum > c) {
    console.log("Soma maior que C");
} else if (sum < c) {
    console.log("Soma menor que C");
} else {
    console.log("Soma eh igual a C");
}