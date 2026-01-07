export class Client {

    // private name: string;
    // private age: number;

    constructor(private name: string, private age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number) {
        this.age = age;
    }

}