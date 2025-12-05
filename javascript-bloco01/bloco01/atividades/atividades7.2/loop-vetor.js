const readline = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Indices:");
for (let i = 0; i < vetor.length; i++) {
    process.stdout.write(i + " ");
}

console.log("\nVetor:");
for (let i = 0; i < vetor.length; i++) {
    process.stdout.write(vetor[i] + " ");
}

console.log("\n");

let numero = readline.questionInt("Digite o numero que voce deseja encontrar: ");

let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        posicao = i;
        break;
    }
}
if (posicao !== -1) {
    console.log(`\nO numero ${numero} esta localizado na posicao: ${posicao}`);
} else {
    console.log(`\nO numero ${numero} nao foi encontrado!`);
}