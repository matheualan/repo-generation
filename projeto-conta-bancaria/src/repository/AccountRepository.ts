import { Account } from "../model/Account";

export interface AccountRepository {

    findByAccountNumber(num: number): void;
    listAll(): void;
    save(account: Account): void;
    update(account: Account): void;
    delete(num: number): void;

    withdraw(accountNumber: number, value: number): void;
    deposit(accountNumber: number, value: number): void;
    transfer(originNumber: number, destinationNumber: number, value: number): void;

}