import readline = require("readline-sync");

const set: Set<number> = new Set<number>();

console.log("Informe 10 numeros nao repetidos: ");
for (let i = 0; i < 10; i++) {
    set.add(readline.questionInt(`Informe o ${i + 1}o numero: `));
}

console.log(`Lista de numeros informados: ${Array.from(set).sort((a, b) => a - b)}`);

// Para ordenar números corretamente, deve passar uma função de comparação (compare function) para o método .sort()
// Essa função recebe dois argumentos (a e b) e deve retornar:
// Um número negativo: Se a deve vir antes de b
// Zero: Se a e b são considerados iguais
// Um número positivo: Se a deve vir depois de b
// Se a = 2 e b = 10: 2 - 10 = -8 (Negativo, a vem antes de b)
// Se a = 10 e b = 2: 10 - 2 = 8 (Positivo, a vem depois de b)