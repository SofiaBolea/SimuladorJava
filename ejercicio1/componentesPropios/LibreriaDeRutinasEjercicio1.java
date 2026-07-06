package ejercicio1.componentespropios;

public class LibreriaDeRutinasEjercicio1 extends des.LibreriaDeRutinas {

    public int tiempoEntreArribosSolicitudes() {
        double media = 1.91;
        double u = Math.random();

        double tiempo = -media * Math.log(1 - u);

        return (int) Math.round(tiempo);
    }

    public int tiempoDeProcesamiento() {
        double media = 2.5;
        double u = Math.random();
        double tiempo = -media * Math.log(1 - u);
        return (int) Math.round(tiempo);
    }

}
