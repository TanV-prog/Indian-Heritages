'use client';

import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col items-center justify-center p-6 text-center text-[#35443A]">
      <div className="w-16 h-16 rounded-full bg-amber-100 text-[#8A735A] flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8 text-[#b85b28]" />
      </div>

      <span className="text-xs uppercase tracking-widest text-[#8A735A] font-semibold mb-2">
        Notice · An Interruption in the Archive
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#35443A] max-w-md">
        A Temporary Pause in Documenting
      </h1>

      <p className="mt-4 text-sm text-[#35443A]/80 max-w-md leading-relaxed">
        The digital repository encountered an unexpected condition while retrieving archival records. Please refresh or retry loading the village knowledge base.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-sm transition-colors shadow-xs"
        >
          <RotateCcw className="w-4 h-4 text-[#E8D8BD]" />
          <span>Reload Archival Records</span>
        </button>
      </div>

      <div className="mt-12 text-[11px] text-[#8A735A] italic">
        Indian Heritage Living Traditions Archive · Knowledge Continuity Initiative
      </div>
    </div>
  );
}
