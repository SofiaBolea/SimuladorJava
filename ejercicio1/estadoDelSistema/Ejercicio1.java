package ejercicio1.estadodelsistema;

import des.EstadoDelSistema;

public class Ejercicio1 extends EstadoDelSistema {

    private ColaDeSolicitudes cola;
    private Servidor servidor;

    public void inicializar() {
        cola = new ColaDeSolicitudes();
        servidor = new Servidor(false);
    }

    public boolean estaServidorOcupado() {
        return servidor.getEstaOcupado();
    }

    public void encolarSolicitud(Solicitud solicitud) {
        cola.encolarSolicitud(solicitud);
    }

    public void atenderSolicitud(Solicitud solicitud) {
        cola.encolarSolicitud(solicitud);
        servidor.pasarAOcupado(cola.solicitudPrioritaria());
    }

    public boolean haySolicitudesEnEspera() {
        return cola.getCantSolicitudesEsperando() > 0;
    }

    public Solicitud obtenerSolicitudPrioritaria() {
        return cola.solicitudPrioritaria();
    }

    public void actualizarServidorDisponible() {
        servidor.pasarALibre();
    }
}
