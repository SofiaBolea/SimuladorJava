"use client";

import React from "react";
import { Tabs } from "../ui/Tabs";
import { TerminalSquare } from "lucide-react";

export function AnnexSection() {
  const ideTabs = [
    {
      id: "vscode",
      label: "Visual Studio Code",
      content: (
        <div className="text-slate-300 space-y-6 font-mono text-sm leading-relaxed max-w-3xl mx-auto bg-slate-950 p-8 rounded-xl border border-slate-700 shadow-inner">
          <div className="flex gap-4">
            <span className="text-indigo-400 font-bold">1.</span>
            <p>[Paso 1: Abrir la vista del explorador y seleccionar "New Folder" para crear el paquete del ejercicio].</p>
          </div>
          <div className="flex gap-4">
            <span className="text-indigo-400 font-bold">2.</span>
            <p>[Paso 2: Crear una nueva clase `.java`. VS Code generará automáticamente el bloque de package basándose en la carpeta].</p>
          </div>
          <div className="flex gap-4">
            <span className="text-indigo-400 font-bold">3.</span>
            <p>[Paso 3: Utilizar la extensión "Extension Pack for Java" para autocompletar la herencia y métodos sobreescritos].</p>
          </div>
          <div className="flex gap-4">
            <span className="text-indigo-400 font-bold">4.</span>
            <p>[Paso 4: Pulsar en "Run and Debug" situado sobre el método `main` de `ProgramaPrincipal.java`].</p>
          </div>
        </div>
      )
    },
    {
      id: "intellij",
      label: "IntelliJ IDEA",
      content: (
        <div className="text-slate-300 space-y-6 font-mono text-sm leading-relaxed max-w-3xl mx-auto bg-slate-950 p-8 rounded-xl border border-slate-700 shadow-inner">
          <div className="flex gap-4">
            <span className="text-blue-400 font-bold">1.</span>
            <p>[Paso 1: Clic derecho en el directorio fuente (src) -{'>'} New -{'>'} Package].</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blue-400 font-bold">2.</span>
            <p>[Paso 2: Clic derecho en el nuevo paquete -{'>'} New -{'>'} Java Class].</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blue-400 font-bold">3.</span>
            <p>[Paso 3: Usar el atajo `Alt + Insert` (o `Cmd + N`) para autogenerar constructores vacíos y sobrescribir métodos obligatorios].</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blue-400 font-bold">4.</span>
            <p>[Paso 4: Hacer clic en la flecha verde (Play) junto al método `main` en la clase principal para compilar y ejecutar].</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="paquetes" className="py-16 md:py-24 px-4 sm:px-8 max-w-5xl mx-auto">
      <div className="mb-12 flex flex-col items-center gap-4 justify-center text-center">
        <TerminalSquare size={56} className="text-slate-400 mb-2" />
        <h2 className="text-3xl md:text-5xl font-bold text-white">Anexo: Creación de Paquetes en el IDE</h2>
        <p className="text-slate-400 text-lg mt-4 max-w-xl">
          Instrucciones básicas para gestionar la estructura de carpetas de tu nuevo modelo de simulación según tu IDE favorito.
        </p>
      </div>
      <Tabs tabs={ideTabs} />
    </section>
  );
}
