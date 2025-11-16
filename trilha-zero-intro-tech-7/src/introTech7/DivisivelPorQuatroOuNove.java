package introTech7;

import java.util.Scanner;

public class DivisivelPorQuatroOuNove {
    static void main() {
        Scanner sc = new Scanner(System.in);
        IO.print("Informe um numero: ");
        int numero = sc.nextInt();
        sc.nextLine();
        if (numero % 4 == 0 && numero % 9 == 0) {
            System.out.println("O numero " + numero + " eh divisivel por 4 e 9.");
        } else if (numero % 4 == 0) {
            System.out.println("O numero " + numero + " eh divisivel por 4.");
        } else if (numero % 9 == 0) {
            System.out.println("O numero " + numero + " eh divisivel por 9.");
        } else {
            System.out.println("O numero " + numero + " divisivel por 4 nem por 9.");
        }
        sc.close();

        switch (numero) {
            case 1:
        }
    }
}