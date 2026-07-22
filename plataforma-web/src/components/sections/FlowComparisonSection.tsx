"use client";

import React from "react";
import { Tabs } from "../ui/Tabs";
import { Activity, Code2 } from "lucide-react";

export function FlowComparisonSection() {
  const tabs = [
    {
      id: "teoria",
      label: "Flujo Teórico",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] border-2 border-dashed border-slate-600 rounded-xl bg-slate-800/50 p-4 md:p-8">
          <figure className="flex flex-col items-center">
            <img src="/Flujo-teorico-simulador-DES.png" alt="Flujo Teórico Simulador DES" className="rounded-lg shadow-lg max-h-[500px] w-auto object-contain" />
            <figcaption className="mt-4 text-sm text-slate-400 italic text-center max-w-xl">
              Fuente adaptada de: "Simulation Modeling and Analysis". 5ta Ed. Law (2015). - Capítulo 1: Basic Simulation Modeling.
            </figcaption>
          </figure>
        </div>
      ),
    },
    {
      id: "practica",
      label: "Flujo Práctico (Código)",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] border-2 border-dashed border-slate-600 rounded-xl bg-slate-800/50 p-4 md:p-8">
          <figure className="flex flex-col items-center">
            <img src="/DiagramaDeFlujo.png" alt="Flujo Práctico Simulador Java" className="rounded-lg shadow-lg max-h-[500px] w-auto object-contain" />
          </figure>
        </div>
      ),
    },
  ];

  return (
    <section id="flujos" className="py-16 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comparación de Flujos</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Analiza cómo la teoría general de simulación por eventos discretos se mapea a la implementación real en código Java.
        </p>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
}
