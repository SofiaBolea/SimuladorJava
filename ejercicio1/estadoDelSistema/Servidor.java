package ejercicio1.estadodelsistema;

public class Servidor {

    Boolean estaOcupado;
    Solicitud solicitudEnProcesamiento;

    public Servidor(boolean estado) {
        this.estaOcupado = estado;
    }

    public boolean getEstaOcupado() {
        return this.estaOcupado;
    }

    public void pasarAOcupado(Solicitud solicitud) {
        this.estaOcupado = true;
        this.solicitudEnProcesamiento = solicitud;
    }

    public void pasarALibre() {
        this.estaOcupado = false;
        this.solicitudEnProcesamiento = null;
    }

    public void setEstaOcupado(boolean estado) {
        this.estaOcupado = estado;
    }

}
