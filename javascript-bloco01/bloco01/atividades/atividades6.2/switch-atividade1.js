const readline = require("readline-sync");

console.log("MENU:\n1- Cachorro Quente\n2- X-Salada\n3- X-Bacon\n4- Bauru\n5- Refrigerante\n6- Suco de Laranja");
let codeProduct = readline.questionInt("\nInforme o codigo do produto: ");
let quantity = readline.questionInt("Informe a quantidade do produto: ");

let product;
let price;

switch (codeProduct) {
    case 1:
        product = "Cachorro Quente";
        price = 10.00;
        break;
    case 2:
        product = "X-Salada";
        price = 15.00;
        break;
    case 3:
        product = "X-Bacon";
        price = 18.00;
        break;
    case 4:
        product = "Bauru";
        price = 12.00;
        break;
    case 5:
        product = "Refrigerante";
        price = 8.00;
        break;
    case 6:
        product = "Suco de laranja";
        price = 13.00;
        break;
    default:
        console.log("Codigo informado eh invalido.");
        break;
}

let total = price * quantity;

console.log(`Produto: ${product}`);
console.log(`Quantidade: ${quantity}`);
console.log(`Total: ${total.toFixed(2)}`);