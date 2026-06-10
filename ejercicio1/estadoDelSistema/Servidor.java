package ejercicio1.estadoDelSistema;

public class Servidor {
    Boolean estaOcupado;
    Solicitud solicitudEnProcesamiento;

    public Servidor(boolean estado) {
        estaOcupado = estado;
    }

    public boolean getEstaOcupado() {
        return estaOcupado;
    }

    public void pasarAOcupado(Solicitud solicitud) {
        this.estaOcupado = true;
        this.solicitudEnProcesamiento = solicitud;
    }

    public void setEstaOcupado(boolean estado) {
        this.estaOcupado = estado;
    }

    public Solicitud getSolicitudEnProcesamiento() {
        return solicitudEnProcesamiento;
    }

}
