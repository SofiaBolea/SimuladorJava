import React from "react";
import { FileJson } from "lucide-react";

export function XMLConfiguratorSection() {
  return (
    <section id="configurador" className="py-16 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Configurador XML</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Una vez creadas las clases del modelo, se debe configurar el archivo XML con las rutas correspondientes, como se muestra debajo.
          <br />
          Archivo: <span className="font-mono text-slate-300">"configuracion.xml"</span>
        </p>
      </div>

      <div className="">
        {/* Right Panel: XML Preview */}
        <div className="bg-slate-950 border border-slate-700 rounded-3xl p-4 md:p-8 overflow-hidden relative shadow-xl flex flex-col w-full max-w-full">
          <div className="absolute top-0 right-0 bg-slate-800 px-4 py-2 rounded-bl-2xl text-[10px] md:text-xs font-mono text-slate-300 border-b border-l border-slate-700 shadow-md">
            configuracion.xml
          </div>
          <div className="flex-grow flex items-center overflow-x-auto pt-10 md:pt-8 w-full">
            <pre className="text-sm md:text-base font-mono text-slate-300 leading-loose">
              <code>
                <span className="text-slate-500">{"<?xml version=\"1.0\" encoding=\"UTF-8\"?>"}</span>
                <br /><span className="text-blue-400">{"<simulacion>"}</span>
                <br />    <span className="text-blue-400">{"<modelo>"}</span><span className="text-green-400">{"[ruta completa de la clase del modelo del sistema, por ejemplo ejercicio1.estadodelsistema.Ejercicio1]"}</span><span className="text-blue-400">{"</modelo>"}</span>
                <br />    <span className="text-blue-400">{"<contadores>"}</span><span className="text-green-400">{"[ruta completa de la clase del contadores del sistema, por ejemplo ejercicio1.componentespropios.ContadoresEstadisticosEjercicio1]"}</span><span className="text-blue-400">{"</contadores>"}</span>
                <br />    <span className="text-blue-400">{"<reporte>"}</span><span className="text-green-400">{"[ruta completa de la clase del reporte del sistema, por ejemplo ejercicio1.componentespropios.GeneradorDeReportesEjercicio1]"}</span><span className="text-blue-400">{"</reporte>"}</span>
                <br />    <span className="text-blue-400">{"<libreria>"}</span><span className="text-green-400">{"[ruta completa de la clase de la libreria del sistema, por ejemplo ejercicio1.componentespropios.LibreriaDeRutinasEjercicio1]"}</span><span className="text-blue-400">{"</libreria>"}</span>
                <br />
                <br />    <span className="text-blue-400">{"<eventoInicial>"}</span>
                <br />        <span className="text-blue-400">{"<clase>"}</span><span className="text-green-400">{"[ruta completa de la clase del evento inicial del sistema, por ejemplo ejercicio1.eventos.EventoArribarACola]"}</span><span className="text-blue-400">{"</clase>"}</span>
                <br />        <span className="text-blue-400">{"<metodoTiempo>"}</span><span className="text-green-400">{"[nombre del metodo que genera el tiempo del evento inicial del sistema, por ejemplo tiempoEntreArribosSolicitudes]"}</span><span className="text-blue-400">{"</metodoTiempo>"}</span>
                <br />    <span className="text-blue-400">{"</eventoInicial>"}</span>
                <br /><span className="text-blue-400">{"</simulacion>"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
