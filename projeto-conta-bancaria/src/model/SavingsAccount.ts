import { Account } from "./Account";

export class SavingsAccount extends Account {
    
    private _birthday: number;

    constructor(accountNumber: number, agency: number, accountType: number, starter: string, balance: number,
        birthday: number) {
            super(accountNumber, agency, accountType, starter, balance);
            this._birthday = birthday;
    }

    public get birthday(): number {
        return this._birthday;
    }

    public set birthday(birthday: number) {
        this._birthday = birthday;
    }

}