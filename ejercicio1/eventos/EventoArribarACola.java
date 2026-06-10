package ejercicio1.eventos;

import des.Evento;
import des.LibreriaDeRutinas;
import ejercicio1.estadoDelSistema.Ejercicio1;
import ejercicio1.estadoDelSistema.Solicitud;

public class EventoArribarACola extends Evento {

    public EventoArribarACola(double tiempoDeOcurrencia) {
        super(tiempoDeOcurrencia);
    }

    public void rutinaDeEvento(EstadoDelSistema modelo, ContadoresEstadisticos contadores, ListaDeEventos eventos,
            LibreriaDeRutinas libreria) {
        Ejercicio1 modeloActual = (Ejercicio1) modelo;
        LibreriaDeRutinas libreriaActual = (LibreriaDeRutinas) libreria;

        EventoArribarACola nuevoEvento = new EventoArribarACola(libreriaActual.tiempoEntreArribosSolicitudes());
        eventos.agregar(nuevoEvento);

        Solicitud solicitudParaAgregar = new Solicitud();

        if (modeloActual.servidor.getEstaOcupado()) {
            modeloActual.cola.encolarSolicitud(solicitudParaAgregar);
        } else {
            modeloActual.servidor.pasarAOcupado(solicitudParaAgregar);
            int duracionDelProcesamiento = libreriaActual.tiempoProcesamiento();
            EventoTerminaProcesamiento nuevoEventoTermina = new EventoTerminaProcesamiento(
                    tiempoActual + duracionDelProcesamiento);
            eventos.agregar(nuevoEventoTermina);
        }

    }

}
