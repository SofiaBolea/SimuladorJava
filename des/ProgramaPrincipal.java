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
	private static ConfiguradorXML configurador;

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
			configurador = new ConfiguradorXML();
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

	// NO MODIFICAR!
	private static boolean terminoLaSimulacion(RelojDeSimulacion reloj, ContadoresEstadisticos contadores) {
		String tipo = configurador.getTipoFin();
		double valor = configurador.getValorFin();

		if ("tiempo".equalsIgnoreCase(tipo)) {
			return reloj.getValor() >= valor;
		} else if ("cantidad".equalsIgnoreCase(tipo)) {
			try {
				String metodo = configurador.getMetodoContadorFin();
				java.lang.reflect.Method m = contadores.getClass().getMethod(metodo);
				Object resultado = m.invoke(contadores);
				double cantidad = ((Number) resultado).doubleValue();
				return cantidad >= valor;
			} catch (Exception e) {
				System.err.println("Error al evaluar fin de simulacion por cantidad:");
				e.printStackTrace();
				System.exit(1);
			}
		}
		return false;
	}

}
