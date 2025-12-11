import { Account } from "../model/Account";

export interface AccountRepository {

    findByAccountNumber(accountNumber: number): void;
    listAll(): void;
    create(account: Account): void;
    update(account: Account): void;
    delete(accountNumber: number): void;

    withdraw(accountNumber: number, value: number): void;
    deposit(accountNumber: number, value: number): void;
    transfer(originNumber: number, destinationNumber: number, value: number): void;

}