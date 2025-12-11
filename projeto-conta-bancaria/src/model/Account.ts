export abstract class Account {

    // private _accountNumber: number;
    // private _agency: number;
    // private _accountType: number;
    // private _starter: string;
    // private _balance: number;

    // constructor(accountNumber: number, agency: number, accountType: number, starter: string, balance: number) {
    //     this._accountNumber = accountNumber;
    //     this._agency = agency;
    //     this._accountType = accountType;
    //     this._starter = starter;
    //     this._balance = balance;
    // }

    constructor(private _accountNumber: number,
        private _agency: number,
        private _accountType: number,
        private _starter: string,
        private _balance: number
    ) {}

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

    public get balance(): number {
        return this._balance;
    }

    public set balance(balance: number) {
        this._balance = balance;
    }

    // sacar
    public withdraw(value: number): boolean {
        if (this._balance < value) {
            console.log("\nSaldo insuficiente!");
            return false;
        }
        
        this._balance -= value;
        return true;
    }

    // depositar
    public deposit(value: number): void {
        this._balance += value;
    }

    // visualizar
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
        console.log("Saldo: " + this._balance.toFixed(2));
    }

}