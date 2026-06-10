package ejercicio1.componentesPropios;

import des.ContadoresEstadisticos;

public class ContadoresEstadisticosEjercicio1 extends ContadoresEstadisticos {
    private int cantSolicitudesProcesadas;

    public void inicializar() {
        cantSolicitudesProcesadas = 0;
    }

    public int getCantSolicitudesProcesadas() {
        return cantSolicitudesProcesadas;
    }

    public void actualizarCantProcesadas() {
        cantSolicitudesProcesadas++;
    }
}
