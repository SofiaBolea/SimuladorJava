"use client";

import React, { useState } from "react";
import { Carousel } from "../ui/Carousel";
import { getExamplesData } from "../../data/examplesData";

export function ExamplesSection() {
  const [selectedExample, setSelectedExample] = useState("ej1");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const examplesData = getExamplesData(scrollTo);

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
        </div>
      </div>

      <Carousel steps={examplesData[selectedExample as keyof typeof examplesData]} />
    </section>
  );
}
