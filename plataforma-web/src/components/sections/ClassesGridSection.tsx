"use client";

import React, { useState } from "react";
import { FlipCard } from "../ui/FlipCard";
import { Box, Cog, Component, Database, Terminal, PlaySquare, Timer, BarChart, FileText, Settings } from "lucide-react";

const CardDescriptionWithMethods = ({ mainText, methodsText }: { mainText: React.ReactNode, methodsText: React.ReactNode }) => {
  const [showMethods, setShowMethods] = useState(false);
  return (
    <div className="flex flex-col gap-2 text-left text-[11px] leading-relaxed w-full h-full relative pb-2">
      <div className={`flex-col gap-2 ${showMethods ? 'hidden' : 'flex'}`}>
        {mainText}
        <button
          onClick={(e) => { e.stopPropagation(); setShowMethods(true); }}
          className="mt-3 self-start bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-400/50 text-indigo-100 py-1.5 px-3 rounded-lg font-semibold transition-colors"
        >
          Ver Métodos
        </button>
      </div>

      <div className={`flex-col gap-2 ${showMethods ? 'flex' : 'hidden'}`}>
        {methodsText}
        <button
          onClick={(e) => { e.stopPropagation(); setShowMethods(false); }}
          className="mt-3 self-start text-indigo-300 hover:text-indigo-100 underline font-semibold"
        >
          Ocultar Métodos
        </button>
      </div>
    </div>
  );
};

const allClasses = [
  {
    id: "programa",
    title: "ProgramaPrincipal",
    category: "motor",
    icon: <Terminal size={32} />,
    desc: (
      <div className="flex flex-col gap-3 text-left text-[11px] leading-relaxed pb-4">
        <p><strong>Núcleo de Ejecución:</strong> Invoca la rutina de inicialización y entra en el bucle principal de simulación: llama a la <code>RutinaDeTiempo.java</code> para avanzar el reloj al próximo evento, invoca la rutina del <code>Evento.java</code> correspondiente, y verifica la condición de fin. Al terminar, llama al <code>GeneradorDeReportes.java</code>.</p>

        <ul className="space-y-2.5 list-disc pl-4 marker:text-indigo-300">
          <li>
            <strong className="text-indigo-200">Preparación:</strong> Antes de iniciar, instancia las clases específicas (heredadas de abstractas) para preparar el entorno del modelo particular mediante <code>crearComponentesDependientes()</code>. Aquí se vincula el motor genérico con el modelo específico (ej. Ejercicio1).
          </li>
          <li>
            <strong className="text-indigo-200">Importancia DES:</strong> Se debe instanciar la <code>LibreriaDeRutinas</code> (para la estocasticidad) y definir el primer evento. Sin este, la simulación nunca empezaría.
          </li>
          <li>
            <strong className="text-indigo-200">Inicialización:</strong> Invoca a <code>RutinaDeInicializacion.run(...)</code>. Se fuerza el RelojDeSimulacion a cero, se limpian los ContadoresEstadisticos y se prepara la ListaDeEventos (FEL) insertando el suceso inicial.
          </li>
          <li>
            <strong className="text-indigo-200">Bucle Principal (do-while):</strong> Representa la vida operativa del sistema.
            <ul className="space-y-1.5 list-[circle] pl-4 mt-1 opacity-90">
              <li><strong>Gestión del Tiempo (Timing Routine):</strong> <code>manejoDeTiempo.run(...)</code> pide a la ListaDeEventos el suceso más inminente. El RelojDeSimulacion "salta" directo a ese tiempo.</li>
              <li><strong>Ejecución (Event Routine):</strong> <code>eventoPorEjecutar.rutinaDeEvento(...)</code> cambia el Estado del Sistema, actualiza Contadores Estadísticos y generar nuevos eventos futuros.</li>
              <li><strong>Condición de Fin:</strong> <code>terminoLaSimulacion(...)</code> evalúa el fin por Tiempo o por Cantidad.</li>
            </ul>
          </li>
          <li>
            <strong className="text-indigo-200">Reportes:</strong> El control pasa a <code>reporte.run(contadores)</code>, transformando datos "crudos" en Medidas de Performance (promedios, utilizaciones) para decisiones.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: "rutina_init",
    title: "RutinaDeInicializacion",
    category: "motor",
    icon: <PlaySquare size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p><strong>Configuración Inicial:</strong> Inicializa el reloj de simulación en cero, resetea los contadores estadísticos, define el estado inicial del sistema y prepara la lista de eventos (cargando el primer evento).</p>
            <p>El <code>ProgramaPrincipal.java</code> la invoca una única vez al comienzo de la ejecución, justo después de instanciar los objetos y antes de entrar al bucle principal de la simulación (do-while).</p>
          </div>
        }
        methodsText={
          <div className="space-y-2">
            <p><strong className="text-indigo-200">Método principal:</strong> Dentro de la clase <code>RutinaDeInicializacion.java</code> existe un único método principal llamado <code>run(...)</code>.</p>
            <p>Este método internamente invoca los métodos <code>inicializar()</code> de cada uno de los componentes de la simulación.</p>
          </div>
        }
      />
    )
  },
  {
    id: "estado",
    title: "EstadoDelSistema",
    category: "motor",
    icon: <Database size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p>Representa exactamente la colección de variables de estado necesarias para describir el sistema en un momento particular.</p>
            <p>Esta clase abstracta sirve como molde conceptual para tomar una "foto" del modelo en cualquier instante, agrupando los atributos clave que rigen la lógica (como el estado libre u ocupado de un servidor, o la cantidad de entidades esperando en una cola).</p>
            <p>Al ser abstracta, obliga a crear una clase específica (como <code>Ejercicio1.java</code>) que defina las variables exactas del problema a simular.</p>
          </div>
        }
        methodsText={
          <ul className="space-y-2 list-disc pl-4 marker:text-indigo-300">
            <li><strong className="text-indigo-200">inicializar() (Abstracto):</strong> Obliga a cualquier clase hija a programar cómo deben arrancar sus variables de estado al comienzo de la simulación (para t=0). Esto garantiza que el modelo parta siempre con las condiciones iniciales correctas.</li>
          </ul>
        }
      />
    )
  },
  {
    id: "reloj",
    title: "RelojDeSimulacion",
    category: "motor",
    icon: <Cog size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p>Es la encargada de mantener y gestionar el tiempo virtual (o simulado) en el que transcurre el modelo de simulación.</p>
            <p>Implementando el mecanismo de "avance de tiempo del próximo evento" descrito en la teoría, esta clase avanza hacia el instante del evento más inminente, ignorando por completo los períodos de inactividad del sistema.</p>
            <p>Tiene un único atributo (<code>valor</code>), que almacena el tiempo actual.</p>
          </div>
        }
        methodsText={
          <ul className="space-y-2 list-disc pl-4 marker:text-indigo-300">
            <li><strong className="text-indigo-200">RelojDeSimulacion():</strong> Crea la instancia del reloj.</li>
            <li><strong className="text-indigo-200">inicializar():</strong> Establece el valor del reloj en 0. Se utiliza en la <code>RutinaDeInicializacion.java</code> al comienzo de la simulación para asegurar que el sistema parta desde cero.</li>
            <li><strong className="text-indigo-200">actualizar(double valor):</strong> Recibe como parámetro un "salto de tiempo" (el tiempo que falta para el próximo evento) y se lo suma al reloj actual, haciendo avanzar el tiempo de la simulación.</li>
            <li><strong className="text-indigo-200">getValor():</strong> Devuelve el valor numérico (double) con el tiempo en el que se encuentra parada la simulación en ese instante.</li>
          </ul>
        }
      />
    )
  },
  {
    id: "evento",
    title: "Evento",
    category: "abstracta",
    icon: <Box size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p>Es una clase abstracta que representa una ocurrencia instantánea en el tiempo que altera el estado del sistema.</p>
            <p>Siguiendo la premisa teórica de tener "una rutina para cada tipo de evento", esta clase actúa como plantilla obligando a crear subclases solo para eventos primarios (ej. arribo de clientes). Los eventos secundarios no son clases independientes, sino transiciones lógicas dentro de las rutinas de los eventos principales que los originan.</p>
            <p className="font-semibold text-indigo-300 pt-1">Ciclo de vida:</p>
            <ul className="list-disc pl-4 opacity-90 marker:text-indigo-400">
              <li><strong>Creación:</strong> Se instancia (al inicio o desde otro evento).</li>
              <li><strong>Sincronización:</strong> Se actualiza el tiempo faltante.</li>
              <li><strong>Selección:</strong> Se identifica como el suceso más inminente.</li>
              <li><strong>Ejecución:</strong> <code>rutinaDeEvento()</code> aplica los cambios.</li>
            </ul>
          </div>
        }
        methodsText={
          <div className="space-y-2">
            <p className="opacity-90 italic pb-1">Sus atributos registran el tiempo relativo (cuánto falta) y absoluto (cuándo ocurre realmente).</p>
            <ul className="space-y-2 list-disc pl-4 marker:text-indigo-300">
              <li><strong className="text-indigo-200">Evento(double saltoDeTiempo):</strong> Constructor. Crea el evento recibiendo el tiempo que falta para que suceda.</li>
              <li><strong className="text-indigo-200">getTiempoQueFaltaParaQueOcurra() y getTiempoDeOcurrencia():</strong> Getters para el tiempo relativo y el absoluto en el que se ejecuta.</li>
              <li><strong className="text-indigo-200">setTiempoQueFalta...() y setTiempoDeOcurrencia(...):</strong> Setters encargados de guardar el tiempo relativo y absoluto.</li>
              <li><strong className="text-indigo-200">refreshTiempo(double elapsedTime):</strong> Le resta el tiempo transcurrido al tiempo que falta para que ocurra el evento.</li>
              <li><strong className="text-indigo-200">rutinaDeEvento(...) (Abstracto):</strong> Obliga a las clases hijas a programar cómo modificar el Estado Del Sistema, Contadores y generar nuevos sucesos.</li>
            </ul>
          </div>
        }
      />
    )
  },
  {
    id: "rutina_tiempo",
    title: "RutinaDeTiempo",
    category: "motor",
    icon: <Timer size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p>Esta clase es la implementación de lo que la teoría define como la <strong>"Rutina de sincronización"</strong> (Timing routine).</p>
            <p>Se encarga de hacer saltar el tiempo del reloj directamente hacia el instante en el que ocurrirá el próximo suceso, ignorando por completo los períodos de tiempo intermedios donde no pasa nada en el sistema.</p>
          </div>
        }
        methodsText={
          <div className="space-y-2">
            <p><strong className="text-indigo-200">run(ListaDeEventos eventos, RelojDeSimulacion reloj):</strong> coordina el reloj y los eventos mediante los siguientes pasos:</p>
            <ul className="space-y-1 list-[circle] pl-4 marker:text-indigo-300">
              <li>Le pide a la <code>ListaDeEventos</code> que le entregue el evento más inminente (próximo a ocurrir).</li>
              <li>Lee cuánto tiempo falta para que ocurra.</li>
              <li>Le indica al <code>RelojDeSimulacion</code> que avance exactamente esa cantidad de tiempo.</li>
              <li>Guarda dentro del evento el instante absoluto en el cual está ocurriendo.</li>
              <li>Finalmente, devuelve ese evento ya "maduro" con el tiempo actualizado para que el Programa Principal ejecute su lógica.</li>
            </ul>
          </div>
        }
      />
    )
  },
  {
    id: "rutina",
    title: "LibreriaDeRutinas",
    category: "abstracta",
    icon: <Component size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p>Aquí dentro se deben escribir las funciones estadísticas que generen números pseudo-aleatorios (que se ajusten a distribuciones Exponenciales, Normales, Poisson, etc.) para dictaminar los tiempos y valores aleatorios involucrados en la simulación (ej. "cuándo será el próximo arribo").</p>
          </div>
        }
        methodsText={
          <div className="space-y-2 text-indigo-200/90 italic mt-2">
            <p>Esta clase no predefine métodos abstractos obligatorios.</p>
            <p>Se deben implementar aquí las funciones estocásticas particulares (ej. <code>getTiempoQueFaltaParaQueOcurra</code>) que requiera el problema a modelar.</p>
          </div>
        }
      />
    )
  },
  {
    id: "contadores",
    title: "ContadoresEstadisticos",
    category: "abstracta",
    icon: <BarChart size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p>Agrupa las variables utilizadas para almacenar información estadística sobre el rendimiento del sistema a medida que transcurre la simulación (usadas luego por el generador de reportes).</p>
            <p>Se diseñó como una clase abstracta porque las métricas de interés varían en cada caso de estudio. Así, no define variables genéricas, sino que delega la definición detallada a la clase hija que el usuario implemente (por ejemplo, <code>ContadoresEstadisticosEjercicio1</code>).</p>
          </div>
        }
        methodsText={
          <ul className="space-y-2 list-disc pl-4 marker:text-indigo-300">
            <li><strong className="text-indigo-200">inicializar() (Abstracto):</strong> Responde directamente a la <code>RutinaDeInicializacion.java</code>. Obliga a todas las subclases concretas a programar una subrutina que ponga en vacío o en 0 todas sus sumatorias y contadores al comienzo de la simulación. Esto garantiza que la recopilación de datos arranque desde una base totalmente limpia en el tiempo 0.</li>
          </ul>
        }
      />
    )
  },
  {
    id: "reportes",
    title: "GeneradorDeReportes",
    category: "abstracta",
    icon: <FileText size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p>Su finalidad exclusiva es calcular e imprimir los resultados de desempeño al terminar la simulación. Toma en crudo todos los datos reunidos y se encarga de presentarlos ordenadamente al exterior.</p>
            <p className="opacity-90 italic text-indigo-100/90 pt-1">Al igual que las rutinas de inicialización y tiempo, las rutinas provistas desde el generador de reportes no impactan en el núcleo simulativo; simplemente presentan datos del ciclo generados de antemano.</p>
          </div>
        }
        methodsText={
          <div className="space-y-2">
            <p><strong className="text-indigo-200">run(ContadoresEstadisticos contadores) (Abstracto):</strong> Obliga al usuario del motor en su propia clase hija (ej. <code>GeneradorDeReportesEjercicio1</code>) a implementar una subrutina que:</p>
            <ul className="space-y-1 list-[circle] pl-4 marker:text-indigo-300">
              <li>Tome las sumatorias y acumuladores desde los contadores (pasados por parámetro).</li>
              <li>Aplique las fórmulas estadísticas pertinentes (promedios de espera, tasas de servicio, porcentajes de ocupación o bloqueos, varianzas, etc.).</li>
              <li>Reporte esos hallazgos (sea escribiéndolas por consola o guardándolas en un archivo de salida).</li>
            </ul>
          </div>
        }
      />
    )
  },
  {
    id: "lista",
    title: "ListaDeEventos",
    category: "motor",
    icon: <Database size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p>Gestiona la <strong>Future Event List (FEL)</strong>, guardando y manteniendo ordenados cronológicamente todos los sucesos programados a futuro.</p>
            <p>Es una pieza fundamental del motor: opera sobre una colección interna (<code>LinkedList&lt;Evento&gt;</code>) y retiene la referencia del <code>primerEvento</code>, el detonador que pone en marcha el modelo.</p>
          </div>
        }
        methodsText={
          <ul className="space-y-2 list-disc pl-4 marker:text-indigo-300">
            <li><strong className="text-indigo-200">ListaDeEventos(Evento primerEvento):</strong> Constructor. Requiere inyectar el evento inicial que activará la simulación.</li>
            <li><strong className="text-indigo-200">inicializar():</strong> Crea la lista de eventos y le asigna el evento inicial.</li>
            <li><strong className="text-indigo-200">agregar(Evento nuevoEvento):</strong> Agenda un nuevo suceso (generado por la lógica de algún otro evento procesado) y emite un aviso en sistema para auditar su creación.</li>
            <li><strong className="text-indigo-200">obtenerMasInminente():</strong> Identifica, extrae y elimina el evento con el menor tiempo de retardo. Inmediatamente llama a <code>actualizarListado()</code> para corregir los tiempos relativos del resto.</li>
            <li><strong className="text-indigo-200">actualizarListado(...) (Privado):</strong> Aplica una corrección sobre el resto de los eventos agendados (mediante <code>refreshTiempo()</code>), disminuyendo su "tiempo que falta para que ocurra" en las unidades de tiempo que transcurrieron.</li>
          </ul>
        }
      />
    )
  },
  {
    id: "configurador",
    title: "ConfiguradorXML",
    category: "motor",
    icon: <Settings size={32} />,
    desc: (
      <CardDescriptionWithMethods
        mainText={
          <div className="space-y-2">
            <p><strong>Configurador Dinámico:</strong> Responsable de la carga desacoplada del modelo y la parametrización de la simulación mediante un archivo <code>configuracion.xml</code>.</p>
            <p>Utiliza la API de Reflexión de Java para instanciar en tiempo de ejecución los componentes específicos del problema sin necesidad de modificar el código del motor.</p>
          </div>
        }
        methodsText={
          <ul className="space-y-2 list-disc pl-4 marker:text-indigo-300">
            <li><strong className="text-indigo-200">cargarConfiguracion(String rutaXML):</strong> Lee el XML, parsea la estructura y crea las instancias de las clases del modelo, contadores, reporte, librería y evento inicial. También extrae los límites de fin.</li>
            <li><strong className="text-indigo-200">Getters de Componentes:</strong> Proveen acceso a los objetos instanciados para el programa principal (<code>getModelo()</code>, <code>getContadores()</code>, <code>getReporte()</code>, <code>getLibreria()</code>, <code>getEventoInicial()</code>).</li>
            <li><strong className="text-indigo-200">Getters de Parada:</strong> Devuelven los parámetros de condición de fin (<code>getTipoFin()</code>, <code>getValorFin()</code>, <code>getMetodoContadorFin()</code>).</li>
          </ul>
        }
      />
    )
  },
];

export function ClassesGridSection() {
  const [filter, setFilter] = useState("todas");

  const filtered = filter === "todas" ? allClasses : allClasses.filter(c => c.category === filter);

  return (
    <section id="clases" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 mx-4 xl:mx-auto max-w-7xl bg-slate-900/40 rounded-3xl border border-slate-800 overflow-hidden">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Arquitectura de Clases</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
          Componentes centrales del simulador. Podes hacer clic o pasa el mouse sobre las tarjetas para ver sus responsabilidades. Estas clases bases son aquellas que no deben tocarse para que el simulador funcione. Las clases abstractas son las que deben extenderse para correr un modelo en particular.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {["todas", "abstracta"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-full border transition-all font-semibold capitalize ${filter === f
                ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                }`}
            >
              {f === "todas" ? "Todas" : "Clases Abstractas"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-4">
        {filtered.map(c => (
          <FlipCard
            key={c.id}
            frontTitle={c.title}
            frontIcon={c.icon}
            backDescription={c.desc}
          />
        ))}
      </div>

      <div className="w-full min-h-[300px] md:min-h-[500px] border-2 border-dashed border-slate-700 rounded-2xl bg-slate-800/30 flex flex-col items-center justify-center p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-300 mb-4 text-center">[Diagrama de Clases General UML]</h3>
        <img src="/DiagramaDeClases.png" alt="Diagrama de Clases General UML" className="rounded-lg shadow-lg w-full h-auto max-w-5xl object-contain" />
        <ul className="text-slate-300 text-left list-disc pl-4 space-y-1 mt-4">
          <li className="ml-2 mb-1"><strong>Asociación Directa / Atributos (Flecha sólida con punta):</strong> Representa que una clase mantiene una referencia permanente a otra como atributo.</li>
          <li className="ml-2 mb-1"><strong>Herencia / Generalización (Línea sólida con triángulo vacío):</strong> Indica una relación de extensión (una subclase hereda de una superclase o clase abstracta).</li>
          <li className="ml-2 mb-1"><strong>Dependencia de Uso (Línea punteada con punta de flecha):</strong> Indica que una clase interactúa temporalmente con otra (por ejemplo, pasándola como parámetro en un método).</li>
        </ul>
      </div>
    </section>
  );
}
