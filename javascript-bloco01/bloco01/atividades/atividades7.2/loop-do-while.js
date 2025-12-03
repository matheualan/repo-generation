const readline = require("readline-sync");

// let count;
let sum = 0;
let n;

do {
    n = readline.questionInt("Informe um numero: ");

    if (n > 0) {
        sum += n;
    }

} while (n !== 0);

console.log(`Soma dos numeros positivos: ${sum}`);