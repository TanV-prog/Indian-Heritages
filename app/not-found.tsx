'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col items-center justify-center p-6 text-center text-[#35443A]">
      <div className="w-16 h-16 rounded-full bg-[#E8D8BD]/50 text-[#5F806B] flex items-center justify-center mb-6">
        <Compass className="w-8 h-8" />
      </div>

      <span className="text-xs uppercase tracking-widest text-[#8A735A] font-semibold mb-2">
        Error 404 · Uncharted Pathway
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#35443A] max-w-md">
        This Village Trail Leads to Unrecorded Lands
      </h1>

      <p className="mt-4 text-sm text-[#35443A]/80 max-w-md leading-relaxed">
        The traditional knowledge or page you are looking for has either been moved or remains unchronicled in our digital village archives.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-sm transition-colors shadow-xs"
        >
          <Home className="w-4 h-4 text-[#E8D8BD]" />
          <span>Return to Village Square</span>
        </Link>
      </div>

      <div className="mt-12 text-[11px] text-[#8A735A] italic">
        Indian Heritage Living Traditions Archive · Knowledge Continuity Initiative
      </div>
    </div>
  );
}
