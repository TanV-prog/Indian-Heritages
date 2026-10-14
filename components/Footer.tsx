'use client';

import React from 'react';
import { ArrowUp, Handshake, Download } from 'lucide-react';

interface FooterProps {
  onExportClick?: () => void;
}

export default function Footer({ onExportClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F0] border-t border-[#E8D8BD] pt-16 pb-12 text-[#35443A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Complementing Existing Efforts Callout (Section 13 Requirement) */}
        <div className="mb-14 p-6 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#5F806B]">
              <Handshake className="w-4 h-4 text-[#5F806B]" />
              <span>Working Alongside Existing Heritage Efforts</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#35443A]">
              Complementing National Documentation Initiatives
            </h4>
            <p className="text-xs text-[#35443A]/80 leading-relaxed">
              This platform does not seek to replace official institutions or national databases. Rather, it acts as an agile community bridge connecting documented knowledge with youth learners, practical apprenticeship modules, and localized transmission continuity.
            </p>
          </div>

          <div className="text-right text-[11px] text-[#8A735A] shrink-0">
            <span className="font-semibold block text-[#35443A]">Open Knowledge Initiative</span>
            <span>National Heritage Continuity</span>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8D8BD]">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#5F806B] text-[#FAF7F0] flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#E8D8BD]"
                >
                  <path d="M3 11L12 4L21 11" />
                  <path d="M5 11V20H19V11" />
                  <path d="M12 9C12 9 10.5 12 10.5 13.5C10.5 14.3284 11.1716 15 12 15C12.8284 15 13.5 14.3284 13.5 13.5C13.5 12 12 9 12 9Z" fill="#E8D8BD" />
                  <path d="M8 18C10 16.5 14 16.5 16 18" stroke="#FAF7F0" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#35443A]">
                Indian Heritage
              </span>
            </div>

            <p className="font-serif italic text-base text-[#8A735A] max-w-sm">
              &ldquo;From Knowledge to Continuity.&rdquo;
            </p>

            <p className="text-xs text-[#35443A]/75 leading-relaxed max-w-md">
              A digital platform dedicated to identifying, documenting, verifying, and learning India&apos;s traditional knowledge — connecting living knowledge keepers with next-generation practitioners.
            </p>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8A735A] block">
              Platform Pathways
            </span>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-[#5F806B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#explore" className="hover:text-[#5F806B] transition-colors">
                  Continuity Directory
                </a>
              </li>
              <li>
                <a href="#at-risk" className="hover:text-[#b85b28] transition-colors">
                  Traditions at Risk
                </a>
              </li>
              <li>
                <a href="#keepers" className="hover:text-[#5F806B] transition-colors">
                  Meet Knowledge Keepers
                </a>
              </li>
              <li>
                <a href="#map-section" className="hover:text-[#5F806B] transition-colors">
                  Living Map
                </a>
              </li>
              <li>
                <a href="#learn" className="hover:text-[#5F806B] transition-colors">
                  Learning Modules
                </a>
              </li>
              <li>
                <a href="#contribute" className="hover:text-[#5F806B] transition-colors">
                  Preserve a Tradition
                </a>
              </li>
            </ul>
          </div>

          {/* Archival Framework (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8A735A] block">
              Continuity Pipeline
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#35443A]/80">
              <span>· Identify Gaps</span>
              <span>· Field Document</span>
              <span>· Community Verify</span>
              <span>· Assess Risk</span>
              <span>· Student Modules</span>
              <span>· Match Mentors</span>
              <span>· Practical Mastery</span>
              <span>· Future Stewards</span>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#5F806B] hover:text-[#35443A] font-semibold uppercase tracking-wider"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to top</span>
              </button>
              {onExportClick && (
                <button
                  onClick={onExportClick}
                  className="inline-flex items-center gap-1.5 text-xs text-[#35443A] hover:text-[#5F806B] font-semibold uppercase tracking-wider underline decoration-[#5F806B]/50 underline-offset-4"
                >
                  <Download className="w-3.5 h-3.5 text-[#5F806B]" />
                  <span>Download Codebase to Desktop (.ZIP)</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Prototype Legal & Affiliation Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#8A735A] gap-4">
          <div className="space-y-1">
            <p className="font-semibold text-[#35443A]">
              Built as a cultural preservation initiative for intergenerational knowledge continuity.
            </p>
            <p className="text-[11px] opacity-85">
              This independent project does not claim official government affiliation, UNESCO certification, or statutory status. All figures represent demonstrator datasets.
            </p>
          </div>

          <div className="text-[11px] font-mono tabular-nums text-right">
            <span>© 2026 Indian Heritage Open Project · Living Commons</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
