"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const next = () => setCurrentIndex((prev) => (prev + 1) % steps.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);

  if (!steps || steps.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 pb-20 md:pb-12 shadow-2xl">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="px-4 sm:px-14 md:px-24 pt-8 pb-4 md:py-10"
            style={{ flex: '0 0 100%' }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400 mb-6 text-center">{step.title}</h3>
            <div className="text-slate-300 max-w-4xl mx-auto w-full">{step.content}</div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-[calc(100%-2.5rem)] md:top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-slate-900/90 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all shadow-lg z-10"
      >
        <ChevronLeft size={24} className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-[calc(100%-2.5rem)] md:top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-slate-900/90 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all shadow-lg z-10"
      >
        <ChevronRight size={24} className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-7 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-8 bg-indigo-500" : "w-2.5 bg-slate-600 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
