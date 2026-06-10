package ejercicio1.componentesPropios;

import des.ContadoresEstadisticos;
import des.GeneradorDeReportes;

public class GeneradorDeReportesEjercicio1 extends GeneradorDeReportes {

    @Override
    public void run(ContadoresEstadisticos contadores) {
        // TODO Auto-generated method stub
        ContadoresEstadisticosEjercicio1 contadoresEjemplo = (ContadoresEstadisticosEjercicio1) contadores;
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("GENERADOR DE REPORTES");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("Cantidad de solicitudes procesadas: " + contadoresEjemplo.getCantSolicitudesProcesadas());
    }

}
