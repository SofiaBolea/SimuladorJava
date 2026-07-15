"use client";

import React, { useState } from "react";
import { Carousel } from "../ui/Carousel";

export function ExamplesSection() {
  const [selectedExample, setSelectedExample] = useState("ej1");

  const examplesData = {
    ej1: [
      { id: 1, title: "Paso 1: Arribo de Solicitud", content: <div className="min-h-[20rem] h-auto flex flex-col items-center justify-center border-2 border-dashed border-indigo-500/50 rounded-xl bg-slate-900/50 p-4 md:p-6 text-center"><p className="text-xl text-slate-300 font-medium mb-4">[Visualización del Arribo]</p><p className="text-slate-500 max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae provident, fugit eaque debitis sint soluta, ad beatae voluptate repellendus itaque! Aspernatur vitae tempora mollitia porro accusantium in fuga sunt!</p></div> },
      { id: 2, title: "Paso 2: Fin de Procesamiento", content: <div className="min-h-[20rem] h-auto flex flex-col items-center justify-center border-2 border-dashed border-indigo-500/50 rounded-xl bg-slate-900/50 p-4 md:p-6 text-center"><p className="text-xl text-slate-300 font-medium mb-4">[Visualización del Procesamiento]</p><p className="text-slate-500 max-w-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas accusamus sunt ea suscipit? Provident maiores, nobis nihil quas dicta unde, eligendi, neque eveniet enim dolor numquam? Commodi iste illum iusto?</p></div> }
    ],
    ej2: [
      { id: 1, title: "Paso 1: Revisión de Inventario", content: <div className="min-h-[20rem] h-auto flex flex-col items-center justify-center border-2 border-dashed border-emerald-500/50 rounded-xl bg-slate-900/50 p-4 md:p-6 text-center"><p className="text-xl text-slate-300 font-medium mb-4">[Visualización del Inventario]</p><p className="text-slate-500 max-w-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eum dicta dolor quas aspernatur deleniti autem consequatur laudantium. Voluptas sit quibusdam rem? Id rem labore iure doloremque quae. Enim, beatae.</p></div> }
    ]
  };

  return (
    <section id="ejemplos" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 mx-4 xl:mx-auto max-w-7xl bg-slate-900/40 rounded-3xl border border-slate-800 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Paso a Paso Interactivo</h2>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            onClick={() => setSelectedExample("ej1")}
            className={`px-8 py-3 rounded-full font-semibold transition-all shadow-md ${selectedExample === "ej1" ? "bg-indigo-600 text-white shadow-indigo-500/25" : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`}
          >
            Ejemplo 1
          </button>
          <button
            onClick={() => setSelectedExample("ej2")}
            className={`px-8 py-3 rounded-full font-semibold transition-all shadow-md ${selectedExample === "ej2" ? "bg-indigo-600 text-white shadow-indigo-500/25" : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`}
          >
            Ejemplo 2
          </button>
        </div>
      </div>

      <Carousel steps={examplesData[selectedExample as keyof typeof examplesData]} />
    </section>
  );
}
