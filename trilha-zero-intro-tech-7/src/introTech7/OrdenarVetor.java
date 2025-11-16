package introTech7;

import java.util.Arrays;

//Algoritmo de ordenacao Bubble Sort
public class OrdenarVetor {

    //Entrada dos dados
    int[] numeros = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6};
    int aux;

    //Saida dos dados
    void main() {
        System.out.println(ordemCrescente());
        System.out.println(ordemDecrescente());
    }

    //Lacos de repeticao e condicao
    private String ordemDecrescente() {
        for (int x = 0; x < numeros.length; x++) {
            for (int y = 0; y < (numeros.length - 1); y++) {
                if (numeros[y] < numeros[y + 1]) {
                    aux = numeros[y];
                    numeros[y] = numeros[y + 1];
                    numeros[y + 1] = aux;
                }
            }
        }
        return "Ordem Decrescente: " + Arrays.toString(numeros);
    }

    private String ordemCrescente() {
        for (int x = 0; x < numeros.length; x++) {
            for (int y = 0; y < (numeros.length - 1); y++) {
                if (numeros[y] > numeros[y + 1]) {
                    aux = numeros[y];
                    numeros[y] = numeros[y + 1];
                    numeros[y + 1] = aux;
                }
            }
        }
        return "Ordem Crescente: " + Arrays.toString(numeros);
    }

}