package introTech7;

import java.util.Collections;
import java.util.List;

public class MaiorDeTresNumeros {
    List<Integer> numeros = List.of(10, 5, 15);
    Integer maior = numeros.getFirst();

    void main() {
        for (Integer numero : numeros) {
            if (numero > maior) {
                maior = numero;
            }
        }
        System.out.println("O maior numero eh: " + maior);

        Integer maiorNumero = Collections.max(numeros);
        System.out.println("O maior numero eh: " + maiorNumero);
    }

}