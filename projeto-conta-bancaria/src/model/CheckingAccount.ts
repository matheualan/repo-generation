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
    public takeOut(value: number): boolean {
        if ((this.balance + this._limit) < value) {
            console.log("\nSaldo insuficiente!");
            return false;            
        }

        return true;
    }

    //visualizar
    public visualize(): void {

    }

}