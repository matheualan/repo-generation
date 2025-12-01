// Escreva um algoritmo que leia um número inteiro via teclado 
// Mostre na tela uma mensagem indicando se este número é par ou ímpar
// Se o número é positivo ou negativo. Veja os exemplos abaixo:

const readline = require("readline-sync");

let number = readline.questionInt("Informe o numero: ");

if (number % 2 === 0) {
    console.log(`O numero ${number} eh PAR`);
} else {
    console.log(`O numero ${number} eh IMPAR`);
}

if (number > 0) {
    console.log(`O numero ${number} eh POSITIVO`);
} else if (number < 0) {
    console.log(`O numero ${number} eh NEGATIVO`);
} else {
    console.log("O numero eh ZERO");
}