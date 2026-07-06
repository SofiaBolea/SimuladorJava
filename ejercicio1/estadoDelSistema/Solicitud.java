package ejercicio1.estadodelsistema;

public class Solicitud {

    private int clase;

    public Solicitud() {
        super();
        this.clase = (int) ((Math.random() * 3) + 1);
    }

    public int getClase() {
        return this.clase;
    }

}
