package ejercicio1.estadodelsistema;

import java.util.LinkedList;
import java.util.Queue;

public class ColaDeSolicitudes {
    private Queue<Solicitud> colaClase1;
    private Queue<Solicitud> colaClase2;
    private Queue<Solicitud> colaClase3;
    private Queue<Solicitud> colaClase4;

    public ColaDeSolicitudes() {
        this.colaClase1 = new LinkedList<>();
        this.colaClase2 = new LinkedList<>();
        this.colaClase3 = new LinkedList<>();
        this.colaClase4 = new LinkedList<>();
    }

    public void encolarSolicitud(Solicitud solicitudParaAgregar) {
        switch (solicitudParaAgregar.getClase()) {
            case 1:
                this.colaClase1.add(solicitudParaAgregar);
                break;
            case 2:
                this.colaClase2.add(solicitudParaAgregar);
                break;
            case 3:
                this.colaClase3.add(solicitudParaAgregar);
                break;
            case 4:
                this.colaClase4.add(solicitudParaAgregar);
                break;
            default:
                break;
        }
    }

    public int getCantSolicitudesEsperando() {
        return colaClase1.size() + colaClase2.size() + colaClase3.size() + colaClase4.size();
    }

    public Solicitud solicitudPrioritaria() {
        if (!colaClase1.isEmpty()) {
            return colaClase1.poll();
        } else if (!colaClase2.isEmpty()) {
            return colaClase2.poll();
        } else if (!colaClase3.isEmpty()) {
            return colaClase3.poll();
        } else if (!colaClase4.isEmpty()) {
            return colaClase4.poll();
        } else {
            return null;
        }
    }

}
