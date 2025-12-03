const readline = require("readline-sync");

let num1 = readline.questionInt("Informe o primeiro numero: ");
let num2 = readline.questionInt("Informe o segundo numero: ");

if (num1 >= num2) {
    console.log("Intervalo invalido!");
    process.exit();
}

console.log(`Intervalo entre ${num1} e ${num2}:`);

for (let i = num1; i < num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} eh multiplo de 3 e 5.`);
    }
}