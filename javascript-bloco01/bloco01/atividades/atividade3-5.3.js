const readline = require("readline-sync");

const salario = readline.questionFloat("Informe o salario: ");
const adcNoturno = readline.questionFloat("Informe o adicional noturno: ");
const horaExtra = readline.questionFloat("Informe as horas extras: ");
const desconto = readline.questionFloat("Informe o desconto: ");

let salarioLiquido = salario + adcNoturno + (horaExtra * 5) - desconto;

console.log(salarioLiquido.toFixed(2));