import { Account } from "./Account";

export class CheckingAccount extends Account {

    private _limit: number;

    constructor(accountNumber: number,
        agency: number,
        accountType: number,
        starter: string,
        balance: number,
        limit: number) {
        super(accountNumber, agency, accountType, starter, balance);
        this._limit = limit;
    }

    public get limit(): number {
        return this._limit;
    }

    public set limit(limit: number) {
        this._limit = limit;
    }

    // sacar
    public withdraw(value: number): boolean {
        if ((this.balance + this._limit) < value) {
            console.log("\nSaldo insuficiente!");
            return false;            
        }
        this.balance -= value;
        return true;
    }

    // visualizar
    public view(): void {
        super.view();
        console.log(`Limite: ${this._limit.toFixed(2)}`);
    }

}