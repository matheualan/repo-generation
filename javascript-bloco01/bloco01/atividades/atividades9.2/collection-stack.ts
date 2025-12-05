import { Stack } from "./Stack";
import readline = require("readline-sync");

let option;
const stack = new Stack<string>;

do {
    console.log("========= MENU ==========");
    console.log("1- Adicionar Livro na pilha");
    console.log("2- Listar todos os livros");
    console.log("3- Retirar Livro da pilha");
    console.log("0- Sair");
    console.log("==========================");

    option = readline.questionInt("\nEscolha a opcao do Menu: ");

    switch (option) {
        case 1:
            const name: string = readline.question("Insira o nome do livro: ");
            stack.push(name);
            console.log(`Livro ${name} adicionado!`);
            console.log(`\nPilha: `);
            stack.printStack();
            break;
        case 2:
            console.log("Pilha: ");
            stack.printStack();
            break;
        case 3:
            if (stack.isEmpty()) {
                console.log("A pilha esta vazia!")
                break;
            } else {
                console.log("Pilha: ");
                stack.pop();
                break;
            }
            break;
        case 0:
            console.log("Programa finalizado!");
            break;
    }
    
} while (option !== 0);