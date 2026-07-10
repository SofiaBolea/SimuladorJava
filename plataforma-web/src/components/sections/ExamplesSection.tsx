"use client";

import React, { useState } from "react";
import { Carousel } from "../ui/Carousel";

export function ExamplesSection() {
  const [selectedExample, setSelectedExample] = useState("ej1");

  const examplesData = {
    ej1: [
      { id: 1, title: "Paso 1: Arribo de Solicitud", content: <div className="h-80 flex flex-col items-center justify-center border-2 border-dashed border-indigo-500/50 rounded-xl bg-slate-900/50 p-6 text-center"><p className="text-xl text-slate-300 font-medium mb-4">[Visualización del Arribo]</p><p className="text-slate-500 max-w-md">[Lorem ipsum dolor sit amet. Un cliente llega al sistema y se encola o entra al servidor si está ocioso.]</p></div> },
      { id: 2, title: "Paso 2: Fin de Procesamiento", content: <div className="h-80 flex flex-col items-center justify-center border-2 border-dashed border-indigo-500/50 rounded-xl bg-slate-900/50 p-6 text-center"><p className="text-xl text-slate-300 font-medium mb-4">[Visualización del Procesamiento]</p><p className="text-slate-500 max-w-md">[Lorem ipsum dolor sit amet. El servidor termina de atender y despacha al cliente.]</p></div> }
    ],
    ej2: [
      { id: 1, title: "Paso 1: Revisión de Inventario", content: <div className="h-80 flex flex-col items-center justify-center border-2 border-dashed border-emerald-500/50 rounded-xl bg-slate-900/50 p-6 text-center"><p className="text-xl text-slate-300 font-medium mb-4">[Visualización del Inventario]</p><p className="text-slate-500 max-w-md">[Lorem ipsum dolor sit amet. Se revisa el nivel de stock en el depósito.]</p></div> }
    ]
  };

  return (
    <section id="ejemplos" className="py-24 px-6 max-w-7xl mx-auto bg-slate-900/40 rounded-3xl border border-slate-800">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Paso a Paso Interactivo</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10">
          Sigue el rastro de ejecución de distintos ejercicios resueltos, evento por evento.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button 
            onClick={() => setSelectedExample("ej1")}
            className={`px-8 py-3 rounded-full font-semibold transition-all shadow-md ${selectedExample === "ej1" ? "bg-indigo-600 text-white shadow-indigo-500/25" : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`}
          >
            Ejemplo 1 (Sistema de Colas)
          </button>
          <button 
            onClick={() => setSelectedExample("ej2")}
            className={`px-8 py-3 rounded-full font-semibold transition-all shadow-md ${selectedExample === "ej2" ? "bg-indigo-600 text-white shadow-indigo-500/25" : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`}
          >
            Ejemplo 2 (Inventario)
          </button>
        </div>
      </div>

      <Carousel steps={examplesData[selectedExample as keyof typeof examplesData]} />
    </section>
  );
}
