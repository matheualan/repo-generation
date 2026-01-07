import { Client } from "./Client";

export function main() {

    const list: Array<Client> = new Array<Client>();

    const client1: Client = new Client("Demetrio", 25);
    const client2: Client = new Client("Juliano", 55);
    const client3: Client = new Client("Simaria", 35);

    list.push(client1, client2, client3);

    console.log(list.toString);

}

main();