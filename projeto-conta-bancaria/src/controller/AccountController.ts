import { AccountService } from './../service/AccountService';
import { Account } from "../model/Account";
import { AccountRepository } from "../repository/AccountRepository";

export class AccountController {

    // private accountService: AccountService;

    // constructor(accountService: AccountService) {
    //     this.accountService = accountService;
    // }

    // constructor() {}

    constructor(private accountService: AccountService) {}

    public saveAccount(account: Account) {
        this.accountService.create(account);
    }

// export class AccountController implements AccountRepository {

    // findByAccountNumber(accountNumber: number): void {
    //     throw new Error("Method not implemented.");
    // }

    // listAll(): void {
    //     throw new Error("Method not implemented.");
    // }

    // save(account: Account): void {
    //     throw new Error("Method not implemented.");
    // }

    // update(account: Account): void {
    //     throw new Error("Method not implemented.");
    // }

    // delete(accountNumber: number): void {
    //     throw new Error("Method not implemented.");
    // }

    // withdraw(accountNumber: number, value: number): void {
    //     throw new Error("Method not implemented.");
    // }

    // deposit(accountNumber: number, value: number): void {
    //     throw new Error("Method not implemented.");
    // }

    // transfer(originNumber: number, destinationNumber: number, value: number): void {
    //     throw new Error("Method not implemented.");
    // }

    // public geranateNumber(): number {
    //     return 0;
    // }

    // public findInCollection(num: number): Account {
    //     return ;
    // }

}