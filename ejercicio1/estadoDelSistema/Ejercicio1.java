package ejercicio1.estadoDelSistema;

import des.EstadoDelSistema;

public class Ejercicio1 extends EstadoDelSistema {

    public ColaDeSolicitudes cola;
    public Servidor servidor;

    @Override
    public void inicializar() {
        this.servidor = new Servidor(false);
        this.cola = new ColaDeSolicitudes();
    }

}
