package ejercicio1.componentesPropios;

public class LibreriaDeRutinasEjercicio1 extends des.LibreriaDeRutinas {

    public int tiempoEntreArribosSolicitudes() {
        double media = 1.91;
        double u = Math.random();

        double tiempo = -media * Math.log(1 - u);

        return (int) Math.round(tiempo);
    }

    public int tiempoDeProcesamiento() {
        double u = Math.random();

        // Rango uniforme entre 0.5 y 2.5
        // Fórmula: mínimo + (máximo - mínimo) * u
        double tiempo = 0.5 + (2.5 - 0.5) * u;

        // Retorna el valor redondeado a entero
        return (int) Math.round(tiempo);
    }

}
