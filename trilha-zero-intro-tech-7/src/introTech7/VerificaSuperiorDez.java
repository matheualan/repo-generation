package introTech7;

import java.util.Scanner;

public class VerificaSuperiorDez {
    void main() {
        Scanner sc = new Scanner(System.in);
        IO.println("Informe um numero: ");
        int numero = sc.nextInt();
        sc.nextLine();
        if (numero > 10) {
            IO.println("Numero maior que de 10? Verdadeiro");
        } else {
            IO.println("Numero maior que de 10? Falso");
        }
        sc.close();
    }
}