export class Account {

    private _accountNumber: number;
    private _agency: number;
    private _accountType: number;
    private _starter: string;
    private balance: number;

    constructor(accountNumber: number, agency: number, accountType: number, starter: string, balance: number) {
        this._accountNumber = accountNumber;
        this._agency = agency;
        this._accountType = accountType;
        this._starter = starter;
        this.balance = balance;
    }

    public get accountNumber(): number {
        return this._accountNumber;
    }

    public set accountNumber(accountNumber: number) {
        this._accountNumber = accountNumber;
    }

    public get agency(): number {
        return this._agency;
    }

    public set agency(agency: number) {
        this._agency = agency;
    }

    public get accountType(): number {
        return this._accountType;
    }

    public set accountType(accountType: number) {
        this._accountType = accountType;
    }

    public get starter(): string {
        return this._starter;
    }

    public set starter(starter: string) {
        this._starter = starter;
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(balance: number) {
        this.balance = balance;
    }

    public withdraw(value: number): boolean {
        if (this.balance < value) {
            console.log("\nSaldo insuficiente!");
            return false;
        }
        
        this.balance -= value;
        return true;
    }

    public deposit(value: number): void {
        this.balance += value;
    }

    public view(): void {
        let type: string = "";

        switch (this._accountType) {
            case 1:
                type = "Conta Corrente";
                break;

            case 2:
                type = "Conta Poupanca";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._accountNumber);
        console.log("Agência: " + this._agency);
        console.log("Tipo da Conta: " + type);
        console.log("Titular: " + this._starter);
        console.log("Saldo: " + this.balance.toFixed(2));
    }

    
 
}