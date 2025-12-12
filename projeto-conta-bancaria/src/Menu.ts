import { SavingsAccount } from './model/SavingsAccount';
import chalk from "chalk";
import readline = require("readline-sync");
import { CheckingAccount } from './model/CheckingAccount';
import { AccountService } from './service/AccountService';
import { Account } from './model/Account';

export function main() {

    let option: number;
    let accountNumber, agency, accountType, balance, limit, birthday: number;
    let starter: string;
    const typesAccounts = ['Conta Corrente', 'Conta Poupanca'];

    let accountService: AccountService = new AccountService();

    console.log("\nCriar Contas\n");

    let cc1: CheckingAccount = new CheckingAccount(accountService.geranateNumber(), 123, 1, "João da Silva", 1000, 100.0);
    accountService.create(cc1);

    let cc2: CheckingAccount = new CheckingAccount(accountService.geranateNumber(), 124, 1, "Maria da Silva", 2000, 100.0);
    accountService.create(cc2);

    let cp1: SavingsAccount = new SavingsAccount(accountService.geranateNumber(), 125, 2, "Mariana dos Santos", 4000, 12);
    accountService.create(cp1);

    let cp2: SavingsAccount = new SavingsAccount(accountService.geranateNumber(), 125, 2, "Juliana Ramos", 8000, 15);
    accountService.create(cp2);

    // accountService.listAll();

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

                agency = readline.questionInt("Digite o numero da agencia: ");
                starter = readline.question("\nDigite o nome do titular da conta: ");
                accountType = readline.keyInSelect(typesAccounts, "", {cancel: false}) + 1;
                balance = readline.questionFloat("\nDigite o saldo da conta (R$): ");

                switch (accountType) {
                    case 1: 
                        limit = readline.questionFloat("Digite o limite da conta (R$): ");
                        accountService.create(new CheckingAccount(accountService.geranateNumber(),
                                agency, accountType, starter, balance, limit));
                        break;

                    case 2:
                        birthday = readline.questionInt("Digite o dia do aniversario da conta poupanca: ");
                        accountService.create(new SavingsAccount(accountService.geranateNumber(),
                                agency, accountType, starter, balance, birthday));
                        break;
                }

                break;

            case 2:
                console.log(chalk.greenBright("\n\nListar todas as contas\n\n"));
                accountService.listAll();
                break;

            case 3:
                console.log(chalk.greenBright("\n\nConsultar dados da conta por número\n\n"));
                accountNumber = readline.questionInt("Digite o numero da conta: ");
                accountService.findByAccountNumber(accountNumber);
                break;

            case 4:
                console.log(chalk.greenBright("\n\nAtualizar dados da conta\n\n"));

                accountNumber = readline.questionInt("Digite o numero da conta: ");
                let account = accountService.findInArray(accountNumber);

                if (account != null) {
                    agency = readline.questionInt("Digite o Número da agência: ");
                    starter = readline.question("Digite o Nome do Titular da conta: ");
                    accountType = account.accountType;
                    balance = readline.questionFloat("\nDigite o Saldo da conta (R$): ");

                    switch (accountType) {
                        case 1:
                            limit = readline.questionFloat("Digite o Limite da Conta (R$): ");
                            accountService.update(
                                new CheckingAccount(accountNumber, agency, accountType, starter, balance, limit));
                            break;

                        case 2:
                            birthday = readline.questionInt("Digite o Dia do aniversário da Conta Poupança: ");
                            accountService.update(new SavingsAccount(accountNumber, agency, accountType, starter, balance, birthday));
                            break;
                    }

                } else {
                    console.log(`\nA Conta numero: ${accountNumber} não foi encontrada!`);
                }

                break;

            case 5:
                console.log(chalk.greenBright("\n\nApagar uma conta\n\n"));
                accountNumber = readline.questionInt("Digite o numero da Conta: ");
                accountService.delete(accountNumber);
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
