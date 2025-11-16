package introTech7;

import java.util.Collections;
import java.util.List;

public class MenorNumero {
    static List<Integer> numeros = List.of(-1, 3, 4, 2, 6);
    static Integer menorNumero = numeros.get(0);
    static void main() {
        for (int i = 0; i < numeros.size(); i++) {
            if (numeros.get(i) < menorNumero) {
                menorNumero = numeros.get(i);
            }
        }
        System.out.println("Menor numero e: " + menorNumero);

        Integer min = Collections.min(numeros);
        IO.println("Numero menor encontrado: " + min);
    }
}