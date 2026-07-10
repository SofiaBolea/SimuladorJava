import React from "react";
import { FileJson } from "lucide-react";

export function XMLConfiguratorSection() {
  return (
    <section id="configurador" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Configurador XML</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Inyección de dependencias en acción. Configura tu modelo conectando las clases a través del archivo XML.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel: Inputs */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-3xl p-8 flex flex-col gap-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-indigo-400 flex items-center gap-3 border-b border-slate-800 pb-4">
            <FileJson size={28} /> Panel de Configuración
          </h3>
          
          <div className="space-y-4">
            <h4 className="text-slate-200 font-medium">Componentes Principales</h4>
            <div className="w-full h-12 rounded-lg bg-slate-950 border border-slate-700 flex items-center px-4 text-slate-500 font-mono text-sm">
              [Input Placeholder: Ruta Clase Modelo]
            </div>
            <div className="w-full h-12 rounded-lg bg-slate-950 border border-slate-700 flex items-center px-4 text-slate-500 font-mono text-sm">
              [Input Placeholder: Ruta Clase Contadores]
            </div>
            <div className="w-full h-12 rounded-lg bg-slate-950 border border-slate-700 flex items-center px-4 text-slate-500 font-mono text-sm">
              [Input Placeholder: Ruta Clase Reporte]
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-slate-200 font-medium">Evento Inicial</h4>
            <div className="w-full h-12 rounded-lg bg-slate-950 border border-slate-700 flex items-center px-4 text-slate-500 font-mono text-sm">
              [Input Placeholder: Ruta Clase Evento Inicial]
            </div>
            <div className="w-full h-12 rounded-lg bg-slate-950 border border-slate-700 flex items-center px-4 text-slate-500 font-mono text-sm">
              [Input Placeholder: Nombre Método de Tiempo]
            </div>
          </div>
        </div>

        {/* Right Panel: XML Preview */}
        <div className="bg-slate-950 border border-slate-700 rounded-3xl p-8 overflow-hidden relative shadow-xl flex flex-col">
          <div className="absolute top-0 right-0 bg-slate-800 px-6 py-2 rounded-bl-2xl text-xs font-mono text-slate-300 border-b border-l border-slate-700 shadow-md">
            configuracion.xml
          </div>
          <div className="flex-grow flex items-center overflow-x-auto pt-8">
            <pre className="text-sm md:text-base font-mono text-slate-300 leading-loose">
              <code>
<span className="text-slate-500">{"<?xml version=\"1.0\" encoding=\"UTF-8\"?>"}</span>
<br/><span className="text-blue-400">{"<simulacion>"}</span>
<br/>    <span className="text-blue-400">{"<modelo>"}</span><span className="text-green-400">{"[Valor del Modelo]"}</span><span className="text-blue-400">{"</modelo>"}</span>
<br/>    <span className="text-blue-400">{"<contadores>"}</span><span className="text-green-400">{"[Valor de Contadores]"}</span><span className="text-blue-400">{"</contadores>"}</span>
<br/>    <span className="text-blue-400">{"<reporte>"}</span><span className="text-green-400">{"[Valor del Reporte]"}</span><span className="text-blue-400">{"</reporte>"}</span>
<br/>    <span className="text-blue-400">{"<libreria>"}</span><span className="text-green-400">{"[Valor de la Libreria]"}</span><span className="text-blue-400">{"</libreria>"}</span>
<br/>
<br/>    <span className="text-blue-400">{"<eventoInicial>"}</span>
<br/>        <span className="text-blue-400">{"<clase>"}</span><span className="text-green-400">{"[Clase]"}</span><span className="text-blue-400">{"</clase>"}</span>
<br/>        <span className="text-blue-400">{"<metodoTiempo>"}</span><span className="text-green-400">{"[Método]"}</span><span className="text-blue-400">{"</metodoTiempo>"}</span>
<br/>    <span className="text-blue-400">{"</eventoInicial>"}</span>
<br/><span className="text-blue-400">{"</simulacion>"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
