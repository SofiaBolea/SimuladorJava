"use client";

import React, { useState } from "react";

interface FlipCardProps {
  frontTitle: string;
  frontIcon?: React.ReactNode;
  backDescription: React.ReactNode;
}

export function FlipCard({ frontTitle, frontIcon, backDescription }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-80 w-full [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800 text-slate-200 [backface-visibility:hidden] flex flex-col items-center justify-center p-6 border border-slate-700">
          {frontIcon && <div className="mb-4 text-indigo-400">{frontIcon}</div>}
          <h3 className="text-xl font-bold text-center">{frontTitle}</h3>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-indigo-600 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col p-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] overflow-y-auto custom-scrollbar">
          <div className="w-full h-full font-medium">{backDescription}</div>
        </div>
      </div>
    </div>
  );
}
