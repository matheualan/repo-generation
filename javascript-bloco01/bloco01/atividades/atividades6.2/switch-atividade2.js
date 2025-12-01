const readline = require("readline-sync");

const name = readline.question("Informe o nome do colaborador: ");
const code = readline.questionInt("Informe o codigo do cargo do colaborador (1 a 6): ");
const salary = readline.questionInt("Informe o salario do colaborador: ");

let profession;
let adjustment;

switch (code) {
    case 1:
        profession = "Gerente";
        adjustment = 0.10;
        break;
    case 2:
        profession = "Vendedor";
        adjustment = 0.07;
        break;
    case 3:
        profession = "Supervisor";
        adjustment = 0.09;
        break;
    case 4:
        profession = "Motorista";
        adjustment = 0.06;
        break;
    case 5:
        profession = "Estoquista";
        adjustment = 0.05;
        break;
    case 6:
        profession = "Tecnico de TI";
        adjustment = 0.08;
        break;
    default:
        console.log("Codigo informado invalido");

}

let newSalary = salary + (salary * adjustment);
console.log(`Ola ${name}, seu novo salario como ${profession} sera de ${newSalary.toFixed(2)}`);