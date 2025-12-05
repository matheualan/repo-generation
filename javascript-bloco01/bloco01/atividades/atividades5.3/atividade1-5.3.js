const readline = require("readline-sync");

let salario = readline.questionInt("Digite o salario: ");
console.log("Salario informado: ", salario);

let abono = readline.questionInt("Digite o abano: ");
console.log("Abano informado: ", abono);

let novoSalario = salario + abono;
console.log("Salario + Abono = ", novoSalario);
console.log("Salario + Abono = ", salario + abono);