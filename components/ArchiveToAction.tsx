'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ArchiveToAction() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F4EC] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A735A] font-semibold mb-3">
            <span>The Core Differentiator</span>
            <span aria-hidden="true">·</span>
            <span>Why Documentation Alone Is Not Enough</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
            From Archive to Action
          </h2>
          <p className="mt-3 text-base text-[#35443A]/85 leading-relaxed">
            India already possesses museums, photo catalogs, and static digital archives. Yet traditional knowledge continues to disappear because storing records does not train future practitioners.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Traditional Digital Archive (Passive) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#8A735A] font-semibold uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4 text-[#8A735A]" />
                <span>The Conventional Model</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#35443A] mb-4">
                Traditional Digital Archive
              </h3>
              <p className="text-xs sm:text-sm text-[#35443A]/75 leading-relaxed mb-6">
                Treats cultural heritage as museum relics or tourism curiosities. Photos and text sit in passive storage databases with no bridge to youth or living practice.
              </p>

              {/* Passive Linear Flow */}
              <div className="space-y-3 font-sans">
                <div className="p-3 bg-[#E8D8BD]/20 border border-[#E8D8BD] rounded-xs text-xs flex items-center justify-between text-[#8A735A]">
                  <span className="font-semibold">01. Document</span>
                  <span className="text-[11px] opacity-75">Take photos / collect notes</span>
                </div>
                <div className="text-center text-[#8A735A] text-xs">↓</div>
                <div className="p-3 bg-[#E8D8BD]/20 border border-[#E8D8BD] rounded-xs text-xs flex items-center justify-between text-[#8A735A]">
                  <span className="font-semibold">02. Store</span>
                  <span className="text-[11px] opacity-75">Deposit in static database</span>
                </div>
                <div className="text-center text-[#8A735A] text-xs">↓</div>
                <div className="p-3 bg-[#E8D8BD]/20 border border-[#E8D8BD] rounded-xs text-xs flex items-center justify-between text-[#8A735A]">
                  <span className="font-semibold">03. Browse</span>
                  <span className="text-[11px] opacity-75">Passive consumption by visitors</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8D8BD] text-xs text-[#8A735A] italic">
              Result: The knowledge holder passes away, and the craft remains only a photograph on a server.
            </div>
          </div>

          {/* Right: Indian Heritage Continuity Model (Active) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FAF7F0] border-2 border-[#5F806B] rounded-xs shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#5F806B] text-[#FAF7F0] text-[10px] uppercase font-bold tracking-widest px-3 py-1">
              Continuity Architecture
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-[#5F806B] font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#5F806B]" />
                <span>Our Living Platform</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#35443A] mb-3">
                Indian Heritage: Active Continuity
              </h3>
              <p className="text-xs sm:text-sm text-[#35443A]/85 leading-relaxed mb-6">
                We bridge the gap between elder knowledge keepers and the next generation of practitioners through structured learning, risk assessment, and hands-on apprenticeships.
              </p>

              {/* Active 6-Step Continuity Pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#F1F6F3] border border-[#8FAF9A]/60 rounded-xs">
                  <span className="font-bold text-[#5F806B] block mb-0.5">01. Document</span>
                  <p className="text-[#35443A]/80 text-[11px] leading-snug">
                    Record exact botanical formulas, tools, songs, and hand movements.
                  </p>
                </div>

                <div className="p-3 bg-[#F1F6F3] border border-[#8FAF9A]/60 rounded-xs">
                  <span className="font-bold text-[#5F806B] block mb-0.5">02. Verify</span>
                  <p className="text-[#35443A]/80 text-[11px] leading-snug">
                    Community & peer review avoids misinformation or commercial distortion.
                  </p>
                </div>

                <div className="p-3 bg-[#F1F6F3] border border-[#8FAF9A]/60 rounded-xs">
                  <span className="font-bold text-[#b85b28] block mb-0.5">03. Assess Risk</span>
                  <p className="text-[#35443A]/80 text-[11px] leading-snug">
                    Identify aging practitioners, depleted raw materials, and urgent gaps.
                  </p>
                </div>

                <div className="p-3 bg-[#F1F6F3] border border-[#8FAF9A]/60 rounded-xs">
                  <span className="font-bold text-[#5F806B] block mb-0.5">04. Learn</span>
                  <p className="text-[#35443A]/80 text-[11px] leading-snug">
                    Transform complex oral skills into step-by-step student curricula.
                  </p>
                </div>

                <div className="p-3 bg-[#F1F6F3] border border-[#8FAF9A]/60 rounded-xs">
                  <span className="font-bold text-[#5F806B] block mb-0.5">05. Connect</span>
                  <p className="text-[#35443A]/80 text-[11px] leading-snug">
                    Link university & youth learners directly with verified Knowledge Keepers.
                  </p>
                </div>

                <div className="p-3 bg-[#5F806B] text-[#FAF7F0] border border-[#5F806B] rounded-xs">
                  <span className="font-bold text-[#E8D8BD] block mb-0.5">06. Pass Knowledge Forward</span>
                  <p className="text-[#FAF7F0]/90 text-[11px] leading-snug">
                    Create new active practitioners who keep the living tradition flourishing.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8D8BD] text-xs text-[#5F806B] font-semibold flex items-center justify-between">
              <span>Goal: Generational Continuity over Static Exhibition</span>
              <span className="text-[11px] text-[#8A735A] font-normal italic">Living Heritage Continuity Paradigm</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
