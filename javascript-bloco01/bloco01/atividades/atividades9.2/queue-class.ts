import readline = require("readline-sync");
import { Queue } from "./Queue";

const queue = new Queue<string>;
let option;

do {
    console.log("========= MENU ==========");
    console.log("1- Adicionar na fila");
    console.log("2- Mostrar a fila");
    console.log("3- Remover da fila");
    console.log("0- Encerrar");
    console.log("==========================");

    option = readline.questionInt("\nEscolha a opcao do Menu: ");

    switch (option) {
        case 1:
            const name: string = readline.question("Insira o nome: ");
            queue.enqueue(name);
            console.log(`Cliente ${name} adicionado!`);
            console.log(`\nFila: `);
            queue.printQueue();
            break;
        case 2:
            console.log("Fila: ");
            queue.printQueue();
            break;
        case 3:
            if (queue.isEmpty()) {
                console.log("A fila esta vazia!")
                break;
            } else {
                console.log("Fila: ");
                queue.dequeue();
                break;
            }
            break;
        case 0:
            console.log("Programa finalizado!");
            break;
    }
    
} while (option !== 0);