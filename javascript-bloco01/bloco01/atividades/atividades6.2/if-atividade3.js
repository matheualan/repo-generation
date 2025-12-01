// Para doar sangue é necessário ter entre 18 e 69 anos.
// idade entre 60 e 69 anos só podem doar sangue se não for a sua primeira doação.
// Escreva um Algoritmo que leia via teclado o 
// nome do doador (string)
// idade (número inteiro) do doador
// e se já fez outras doações de sangue (boolean).
// Conforme as Regras para a doação de sangue citadas acima,
// mostre na tela se o doador está Apto ou Não Apto para doar sangue.
// Veja os exemplos abaixo:

const readline = require("readline-sync");

console.log("=== DADOS NECESSARIOS PARA REALIZAR DOACAO ===");

const donorName = readline.question("Informe seu nome: ");
const donorAge = readline.questionInt("Informe sua idade: ");
let responseIfDonated = readline.question("Ja doou outras vezes? (S/N) ").trim().toUpperCase();

let alreadyDonated = (responseIfDonated === "S");

if (donorAge >= 18 && donorAge <= 69) {
    if (donorAge >= 60 && donorAge <= 69) {
        if (alreadyDonated) {
            console.log(`${donorName} esta apto para doar sangue!`);
        } else {
            console.log(`${donorName} nao esta apto para doar sangue!`);
            console.log(`Pessoas entre 60 a 69 anos so podem doar se ja tiverem doado antes!`);
        }
    } else {
        console.log(`${donorName} esta apto para doar sangue!`);
    }
} else {
    console.log(`${donorName} nao esta apto para doar sangue!`);
}