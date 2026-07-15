"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white px-4 sm:px-8">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/30 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/30 blur-[120px]" />

      <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 pb-2">
          Simulador de Eventos Discretos en Java
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Plataforma interactiva para comprender la arquitectura y ejecución de un modelo de simulación orientado al evento.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <button 
            onClick={() => scrollTo("flujos")}
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors flex items-center gap-2 shadow-lg shadow-indigo-500/25"
          >
            Ver Flujos <ArrowDown size={18} />
          </button>
          <button 
            onClick={() => scrollTo("clases")}
            className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors flex items-center gap-2 border border-slate-700"
          >
            Clases <ArrowDown size={18} />
          </button>
          <button 
            onClick={() => scrollTo("configurador")}
            className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors flex items-center gap-2 border border-slate-700"
          >
            Configurador XML <ArrowDown size={18} />
          </button>
          <button 
            onClick={() => scrollTo("ejemplos")}
            className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors flex items-center gap-2 border border-slate-700"
          >
            Ejemplos <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
