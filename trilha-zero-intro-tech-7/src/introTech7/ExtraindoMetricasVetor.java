package introTech7;

import java.util.Arrays;

public class ExtraindoMetricasVetor {

    int[] numeros = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6};
    int[] pares = new int[5];
    int[] impares = new int[5];
    int indexPar;
    int indexImpar;
    int total;
    double media;

    void main() {
        extraindoDados();

        System.out.println("Numeros pares: " + Arrays.toString(pares));
        System.out.println("Numeros impares: " + Arrays.toString(impares));
        System.out.println("Soma dos numeros: " + total);
        System.out.println("Media dos numeros: " + media);
    }

    public void extraindoDados() {
        for (int x = 0; x < numeros.length; x++) {
            if (numeros[x] % 2 == 0) {
                pares[indexPar] = numeros[x];
                indexPar++;
            } else {
                impares[indexImpar] = numeros[x];
                indexImpar++;
            }

            total += numeros[x];
        }
        media = (double)total / numeros.length;
    }

}