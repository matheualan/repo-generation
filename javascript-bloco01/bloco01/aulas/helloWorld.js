console.log("Olá Mundo!");
let text = "Generation!";
console.log(`O melhor bootcamp do mundo eh da ${text}`);

const write = require("readline-sync");

let name = write.question("\nDigite um nome: ");
console.log("O nome digitado foi: ", name);

let age = write.questionInt("\nDigite a idade: ");
console.log("A idade digitada foi: ", age);