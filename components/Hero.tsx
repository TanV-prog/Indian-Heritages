'use client';

import React from 'react';
import Image from 'next/image';
import { Compass, Sparkles, ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContributeClick: () => void;
  onExportClick?: () => void;
}

export default function Hero({ onExploreClick, onContributeClick, onExportClick }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Curatorial Headline and Intent */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#8A735A]">
              <span>From Knowledge to Continuity</span>
              <span aria-hidden="true">·</span>
              <span>Living Heritage Initiative</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.14] font-semibold text-[#35443A] tracking-tight text-balance">
              India&apos;s Heritage, Preserved for Tomorrow.
            </h1>

            <p className="text-base sm:text-lg text-[#35443A]/85 leading-relaxed max-w-xl font-normal">
              From the hands of farmers and artisans to the stories of our elders — discover, document and carry India&apos;s living heritage forward.
            </p>

            {/* Supporting Core Principle Quote */}
            <blockquote className="p-3.5 bg-[#FAF7F0] border-l-2 border-[#5F806B] text-xs sm:text-sm italic font-serif text-[#35443A]/90">
              &ldquo;Heritage is not only something we remember. It is knowledge we pass on.&rdquo;
            </blockquote>

            {/* CTAs */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExploreClick}
                type="button"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs transition-all shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F806B]"
              >
                <Compass className="w-4 h-4 text-[#E8D8BD]" />
                <span>Explore Living Heritage</span>
              </button>

              <button
                onClick={onContributeClick}
                type="button"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-[#FAF7F0] hover:bg-[#E8D8BD]/40 border border-[#8A735A]/50 rounded-xs transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F806B]"
              >
                <Sparkles className="w-4 h-4 text-[#8A735A]" />
                <span>Preserve a Tradition</span>
              </button>

              {onExportClick && (
                <button
                  onClick={onExportClick}
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-white hover:bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs transition-all cursor-pointer shadow-2xs"
                  title="Download and move project files to your desktop"
                >
                  <Download className="w-4 h-4 text-[#5F806B]" />
                  <span>Move to Desktop</span>
                </button>
              )}
            </div>

            {/* Pipeline Strip: Identify -> Document -> Verify -> Learn -> Connect -> Continue */}
            <div className="pt-4 border-t border-[#E8D8BD]/70">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8A735A] block mb-2">
                Continuity Framework:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-[#35443A]/80">
                <span className="bg-[#E8D8BD]/40 px-2 py-0.5 rounded-xs">Identify</span>
                <span className="text-[#8A735A]">→</span>
                <span className="bg-[#E8D8BD]/40 px-2 py-0.5 rounded-xs">Document</span>
                <span className="text-[#8A735A]">→</span>
                <span className="bg-[#E8D8BD]/40 px-2 py-0.5 rounded-xs">Verify</span>
                <span className="text-[#8A735A]">→</span>
                <span className="bg-[#E8D8BD]/40 px-2 py-0.5 rounded-xs">Learn</span>
                <span className="text-[#8A735A]">→</span>
                <span className="bg-[#E8D8BD]/40 px-2 py-0.5 rounded-xs">Connect</span>
                <span className="text-[#8A735A]">→</span>
                <span className="bg-[#5F806B] text-[#FAF7F0] px-2 py-0.5 rounded-xs font-bold">Continue</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual of Rural India Village Atmosphere */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-xs overflow-hidden border border-[#E8D8BD] shadow-sm bg-[#E8D8BD]/20">
              <Image
                src="/images/heritage_village_hero.jpg"
                alt="A peaceful traditional Indian village courtyard with clay tiles, rice flour kolam, brass diya, and ancient neem tree"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#35443A]/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-3 left-4 right-4 text-xs text-[#FAF7F0] font-sans flex items-center justify-between">
                <span className="italic font-serif">Living knowledge held in village spaces · Rural Deccan</span>
                <span className="text-[11px] opacity-80 uppercase tracking-wider">Field Archive 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
