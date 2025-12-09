import chalk from "chalk";
import readline = require("readline-sync");

export function main() {

    let option: number;

    while (true) {

        console.log(chalk.yellow("*****************************************************\n"));
        console.log(chalk.cyan("                BANCO DO BRAZIL COM Z                "));
        console.log(chalk.yellow("\n*****************************************************\n"));
        console.log(chalk.green("            1 - Criar Conta                          "));
        console.log(chalk.green("            2 - Listar todas as Contas               "));
        console.log(chalk.green("            3 - Buscar Conta por Numero              "));
        console.log(chalk.green("            4 - Atualizar Dados da Conta             "));
        console.log(chalk.green("            5 - Apagar Conta                         "));
        console.log(chalk.green("            6 - Sacar                                "));
        console.log(chalk.green("            7 - Depositar                            "));
        console.log(chalk.green("            8 - Transferir valores entre Contas      "));
        console.log(chalk.red("            9 - Sair                                 "));
        console.log(chalk.yellow("\n*****************************************************\n"));

        option = readline.questionInt(chalk.yellow("Entre com a opcao desejada: "));

        if (option == 9) {
            console.log(chalk.cyan("\nBanco do Brazil com Z - O seu futuro comeca aqui!"));
            about();
            process.exit(0);
        }

        switch (option) {
            case 1:
                console.log(chalk.greenBright("\n\nCriar conta\n\n"));
                break;

            case 2:
                console.log(chalk.greenBright("\n\nListar todas as contas\n\n"));
                break;

            case 3:
                console.log(chalk.greenBright("\n\nConsultar dados da conta por número\n\n"));
                break;

            case 4:
                console.log(chalk.greenBright("\n\nAtualizar dados da conta\n\n"));
                break;

            case 5:
                console.log(chalk.greenBright("\n\nApagar uma conta\n\n"));
                break;

            case 6:
                console.log(chalk.greenBright("\n\nSaque\n\n"));
                break;

            case 7:
                console.log(chalk.greenBright("\n\nDeposito\n\n"));
                break;
                
            case 8:
                console.log(chalk.greenBright("\n\nTransferencia entre contas\n\n"));
                break;
                
            default:
                console.log(chalk.greenBright("\nOpcao Invalida!\n"));
                break;
        }
        
    }

}

export function about(): void {
    console.log("\n=================================================================================");
    console.log("Projeto Desenvolvido por: ");
    console.log("Matheus Alan - matheusv@genstudents.org");
    console.log("https://github.com/matheualan/repo-generation/tree/main/projeto-conta-bancaria");
    console.log("=================================================================================");
}

main();
