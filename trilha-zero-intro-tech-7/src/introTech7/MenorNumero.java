package introTech7;

import java.util.Collections;
import java.util.List;

public class MenorNumero {
    static List<Integer> numeros = List.of(-1, 3, 4, 2, 6);
    static Integer menorNumero = numeros.getFirst();

    static void main() {
        for (Integer numero : numeros) {
            if (numero < menorNumero) {
                menorNumero = numero;
            }
        }
        System.out.println("Menor numero e: " + menorNumero);

        Integer min = Collections.min(numeros);
        IO.println("Numero menor encontrado: " + min);
    }
}