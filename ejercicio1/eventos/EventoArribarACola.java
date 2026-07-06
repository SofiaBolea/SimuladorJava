package ejercicio1.eventos;

import des.ContadoresEstadisticos;
import des.Evento;
import des.EstadoDelSistema;
import des.LibreriaDeRutinas;
import des.ListaDeEventos;
import ejercicio1.componentespropios.LibreriaDeRutinasEjercicio1;
import ejercicio1.estadodelsistema.Ejercicio1;
import ejercicio1.estadodelsistema.Solicitud;

public class EventoArribarACola extends Evento {
    public EventoArribarACola(double tiempoDeOcurrencia) {
        super(tiempoDeOcurrencia);
    }

    @Override
    public void rutinaDeEvento(EstadoDelSistema modelo, ContadoresEstadisticos contadores, ListaDeEventos eventos,
            LibreriaDeRutinas libreria) {

        Ejercicio1 modeloActual = (Ejercicio1) modelo;
        LibreriaDeRutinasEjercicio1 libreriaActual = (LibreriaDeRutinasEjercicio1) libreria;

        // Agendar próximo arribo

        EventoArribarACola nuevoEvento = new EventoArribarACola(libreriaActual.tiempoEntreArribosSolicitudes());

        eventos.agregar(nuevoEvento);

        Solicitud solicitudParaAgregar = new Solicitud();

        if (modeloActual.estaServidorOcupado()) {
            modeloActual.encolarSolicitud(solicitudParaAgregar);
        } else {
            modeloActual.atenderSolicitud(solicitudParaAgregar);
            int duracionDelProcesamiento = libreriaActual.tiempoDeProcesamiento();

            EventoTerminaProcesamiento nuevoEventoAdicional = new EventoTerminaProcesamiento(duracionDelProcesamiento);
            eventos.agregar(nuevoEventoAdicional);
        }

    }
}
