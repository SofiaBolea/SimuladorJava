"use client";

import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  return (
    <div className="w-full flex flex-col bg-slate-800/50 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
      <div className="flex border-b border-slate-700 bg-slate-900/50 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`px-8 py-4 font-semibold text-sm transition-all relative whitespace-nowrap ${
              activeTabId === tab.id
                ? "text-indigo-400 bg-slate-800"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`}
          >
            {tab.label}
            {activeTabId === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400" />
            )}
          </button>
        ))}
      </div>
      <div className="p-8 bg-slate-800 min-h-[300px]">
        {tabs.find((t) => t.id === activeTabId)?.content}
      </div>
    </div>
  );
}
