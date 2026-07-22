"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

interface Step {
  id: number;
  title: string;
  content: React.ReactNode;
}

interface CarouselProps {
  steps: Step[];
}

export function Carousel({ steps }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Reiniciar el índice cuando cambia el listado de pasos (ej. cambiar de ejemplo)
  useEffect(() => {
    setCurrentIndex(0);
  }, [steps]);

  const next = useCallback(() => {
    if (!steps || steps.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  }, [steps]);

  const prev = useCallback(() => {
    if (!steps || steps.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  }, [steps]);

  // Soporte de navegación por teclado (flechas izquierda/derecha)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Manejo de gestos táctiles (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      next(); // Deslizar hacia la izquierda -> Siguiente paso
    } else if (distance < -minSwipeDistance) {
      prev(); // Deslizar hacia la derecha -> Paso anterior
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!steps || steps.length === 0) return null;

  const progressPercentage = ((currentIndex + 1) / steps.length) * 100;

  return (
    <div 
      className="relative w-full overflow-hidden rounded-3xl bg-slate-900/90 border border-slate-700/80 pb-20 md:pb-14 shadow-2xl backdrop-blur-sm"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Progress Bar */}
      <div className="w-full bg-slate-800/80 h-1.5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 h-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Header Info Bar */}
      <div className="flex items-center justify-between px-6 pt-5 pb-2 text-xs text-slate-400 border-b border-slate-800/60 font-mono">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-indigo-400" />
          <span>Paso {currentIndex + 1} de {steps.length}</span>
        </div>
        <div className="hidden sm:block text-[11px] text-slate-500">
          Usa <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-sans">←</kbd> <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-sans">→</kbd> para navegar
        </div>
      </div>

      {/* Slide Track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {steps.map((step) => (
          <div
            key={step.id}
            className="w-full min-w-0 flex-shrink-0 px-4 sm:px-12 md:px-20 pt-6 pb-4 md:py-8"
            style={{ flex: "0 0 100%" }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400 mb-6 text-center">
              {step.title}
            </h3>
            <div className="text-slate-300 max-w-4xl mx-auto w-full overflow-hidden">
              {step.content}
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prev}
        aria-label="Paso anterior"
        className="absolute left-3 md:left-5 top-[calc(100%-2.5rem)] md:top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-2xl bg-slate-800/90 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl border border-slate-700 hover:border-indigo-500 z-10 hover:scale-105 active:scale-95 group"
      >
        <ChevronLeft size={24} className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        aria-label="Siguiente paso"
        className="absolute right-3 md:right-5 top-[calc(100%-2.5rem)] md:top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-2xl bg-slate-800/90 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl border border-slate-700 hover:border-indigo-500 z-10 hover:scale-105 active:scale-95 group"
      >
        <ChevronRight size={24} className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10 bg-slate-950/80 px-4 py-2 rounded-full border border-slate-800 shadow-lg">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            title={`Ir al paso ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-8 bg-gradient-to-r from-indigo-500 to-indigo-400 shadow-sm shadow-indigo-500/50"
                : "w-2.5 bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
