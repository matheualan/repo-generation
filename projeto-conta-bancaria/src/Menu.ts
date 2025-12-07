import * as readline from "readline-sync";

export function main() {

    let option: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        option = readline.questionInt("Entre com a opcao desejada: ");

        if (option == 9) {
            console.log("\nBanco do Brazil com Z - O seu futuro comeca aqui!");
            about();
            process.exit(0);
        }
        
    }

}

export function about(): void {
    console.log("\n************************************************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Matheus Alan - matheusv@genstudents.org");
    console.log("https://github.com/matheualan/repo-generation/tree/main/projeto-conta-bancaria");
    console.log("************************************************************************************");
}

main();
