package des;

// Importaciones específicas del modelo han sido removidas ya que se usa Reflection

/* Subprograma que invoca a la Rutina de Tiempo para determinar evento inminente, 
 * transfiriendo el control a la Rutina de Evento asociada para que actualice el
 * Estado del Sistema. */

public class ProgramaPrincipal {

	// NO MODIFICAR! Creación de los componentes propios del ejemplo.
	private static EstadoDelSistema modelo;
	private static ContadoresEstadisticos contadores;
	private static GeneradorDeReportes reporte;
	private static LibreriaDeRutinas libreria;
	private static ListaDeEventos eventos;

	// NO MODIFICAR!
	public static void main(String[] args) {

		// Creación de los componentes propios del ejemplo a ejecutar.
		crearComponentesDependientes();

		// Creación de los componentes generales.
		RutinaDeInicializacion inicializacion = new RutinaDeInicializacion();
		RutinaDeTiempo manejoDeTiempo = new RutinaDeTiempo();
		RelojDeSimulacion reloj = new RelojDeSimulacion();

		System.out.println("------------------------------------------------------");
		System.out.println("***INICIALIZACION");
		System.out.println("------------------------------------------------------");

		// Flujo de control
		inicializacion.run(reloj, modelo, contadores, eventos, libreria);

		do {

			System.out.println("------------------------------------------------------");
			System.out.println("***PROGRAMA PRINCIPAL *** t=" + reloj.getValor());
			System.out.println("------------------------------------------------------");

			// Invocar a la rutina de tiempo.
			Evento eventoPorEjecutar = manejoDeTiempo.run(eventos, reloj);

			System.out.println("\t\t-- El SIMULADOR determina que el EVENTO MAS INMINENTE se dará en "
					+ eventoPorEjecutar.getTiempoQueFaltaParaQueOcurra() + " unidades de tiempo.");
			System.out.println("\t\t-- El SIMULADOR actualiza el RELOJ para ejecutar el EVENTO MAS INMINENTE del tipo "
					+ eventoPorEjecutar.getClass().getSimpleName() + ".");

			// Invocar a la rutina de evento.
			eventoPorEjecutar.rutinaDeEvento(modelo, contadores, eventos, libreria);

		} while (!terminoLaSimulacion(reloj, contadores));

		reporte.run(contadores);

	}

	// MODIFICAR para indicar el Estado del Sistema a Simnular
	private static void crearComponentesDependientes() {
		try {
			ConfiguradorXML configurador = new ConfiguradorXML();
			configurador.cargarConfiguracion("configuracion.xml");
			
			modelo = configurador.getModelo();
			contadores = configurador.getContadores();
			reporte = configurador.getReporte();
			libreria = configurador.getLibreria();
			
			Evento primerEvento = configurador.getEventoInicial();
			eventos = new ListaDeEventos(primerEvento);
		} catch (Exception e) {
			System.err.println("Error al cargar la configuración desde XML:");
			e.printStackTrace();
			System.exit(1);
		}
	}

	// MODIFICAR para indicar el estado de Fin de Simulación
	private static boolean terminoLaSimulacion(RelojDeSimulacion reloj, ContadoresEstadisticos contadores) {
		// TODO Aca se debe programar según el fin sea por tiempo o cantidad.

		// Ejemplo por tiempo
		int tiempoDeSimulacion = 10;
		if (reloj.getValor() >= tiempoDeSimulacion)
			return true;
		return false;

		// Ejemplo por cantidad: "Que se hayan procesado 15 solicitudes."
		/*
		 * ContadoresEstadisticosEjemplo contadorEjemplo =
		 * (ContadoresEstadisticosEjemplo) contadores;
		 * int cantidadDeSimulacion = contadorEjemplo.getCantProcesadas(),
		 * topeDeSimulacion=15;
		 * if(cantidadDeSimulacion >= topeDeSimulacion) return true;
		 * return false;
		 */

	}

}
