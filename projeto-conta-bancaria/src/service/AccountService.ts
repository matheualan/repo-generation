import chalk from "chalk";
import { Account } from "../model/Account";
import { AccountRepository } from "../repository/AccountRepository";

export class AccountService implements AccountRepository {

    private accountsList: Array<Account> = new Array<Account>();
    accountNumberSequence: number = 0;

    findByAccountNumber(accountNumber: number): void {
        let account = this.findInArray(accountNumber);

        if (account != null) {
            account.view();
        } else {
            console.log(chalk.red(`\nA conta numero: ${accountNumber} nao foi encontrada!`));
        }

        // if (!account) {
        //     console.log(chalk.red(`\nA conta numero: ${accountNumber} nao foi encontrada!`));
        //     return;
        // }
        // account.view();
    }

    listAll(): void {
        this.accountsList.forEach((account) => {account.view()});
    }

    create(account: Account): void {
        if (account != null) {
            this.accountsList.push(account);
            console.log(chalk.green(`Conta numero: ${account.accountNumber} criada com sucesso!`));
            return;
        }
        console.log(chalk.red("ERRO! Tente novamente!"));
    }

    update(account: Account): void {
        let findAccount = this.findInArray(account.accountNumber);

        if (findAccount != null) {
            this.accountsList[this.accountsList.indexOf(findAccount)] = account;
            console.log(chalk.green(`\nA Conta numero: ${account.accountNumber} foi atualizada com sucesso!`));
        } else {
            console.log(chalk.red(`\nA Conta numero: " ${account.accountNumber} não foi encontrada!`));
        }
    }

    delete(accountNumber: number): void {
        let findAccount = this.findInArray(accountNumber);

        if (findAccount != null) {
            this.accountsList.splice(this.accountsList.indexOf(findAccount), 1);
        	console.log(chalk.yellow(`\nA Conta numero: ${accountNumber} foi apagada com sucesso!`));
        } else {
            console.log(chalk.red(`\nA Conta numero: ${accountNumber} não foi encontrada!`));
        }
    }

    withdraw(accountNumber: number, value: number): void {
        throw new Error("Method not implemented.");
    }

    deposit(accountNumber: number, value: number): void {
        throw new Error("Method not implemented.");
    }

    transfer(originNumber: number, destinationNumber: number, value: number): void {
        throw new Error("Method not implemented.");
    }

    public geranateNumber(): number {
        return ++this.accountNumberSequence;
    }

    public findInArray(accountNumber: number): Account | null {
        for (let account of this.accountsList) {
            if (account.accountNumber === accountNumber) {
                return account;
            }
        }
        return null;
    }

}