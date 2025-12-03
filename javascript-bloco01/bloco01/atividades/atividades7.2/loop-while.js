const readline = require("readline-sync");

let menorDe21 = 0;
let maiorDe21 = 0;

while (true) {
    let idade = readline.questionInt("Informe sua idade: ");

    if (idade < 0) {
        break;
    }

    if (idade < 21) {
        menorDe21++;
    } else if (idade > 50) {
        maiorDe21++;
    } else {
        console.log("Idade maior que 21 mas menor que 50");
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menorDe21}`);
console.log(`Total de pessoas maiores de 21 anos: ${maiorDe21}`);