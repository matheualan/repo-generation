import readline = require("readline-sync");

const array: string[] = [];

console.log("Informe 5 cores")
for (let i = 0; i < 5; i++) {
    array.push(readline.question(`${i + 1}a cor: `));
}

console.log(`Cores informadas: ${array}`);
console.log(`Cores ordenadas: ${array.sort()}`);