'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, ArrowUpRight, Download } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
  onContributeClick: () => void;
  onExportClick?: () => void;
  activeSection?: string;
}

export default function Navbar({ onSearchClick, onContributeClick, onExportClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E8D8BD]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F806B]"
          >
            <div className="w-10 h-10 rounded-xs bg-[#5F806B] text-[#FAF7F0] flex items-center justify-center shadow-xs">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-[#E8D8BD]"
              >
                <path d="M3 11L12 4L21 11" />
                <path d="M5 11V20H19V11" />
                <path d="M12 9C12 9 10.5 12 10.5 13.5C10.5 14.3284 11.1716 15 12 15C12.8284 15 13.5 14.3284 13.5 13.5C13.5 12 12 9 12 9Z" fill="#E8D8BD" />
                <path d="M8 18C10 16.5 14 16.5 16 18" stroke="#FAF7F0" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#35443A] leading-none">
                Indian Heritage
              </span>
              <span className="text-[11px] tracking-wider text-[#8A735A] uppercase mt-1 font-medium">
                From Knowledge to Continuity
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (single line, no pills, clean typography) */}
          <nav className="hidden xl:flex items-center gap-6 text-[13.5px] font-medium text-[#35443A]/85">
            <a href="#home" className="hover:text-[#5F806B] transition-colors whitespace-nowrap">
              Home
            </a>
            <a href="#explore" className="hover:text-[#5F806B] transition-colors whitespace-nowrap">
              Explore
            </a>
            <a href="#map-section" className="hover:text-[#5F806B] transition-colors whitespace-nowrap">
              Living Map
            </a>
            <a href="#at-risk" className="hover:text-[#b85b28] transition-colors whitespace-nowrap font-semibold">
              At Risk
            </a>
            <a href="#keepers" className="hover:text-[#5F806B] transition-colors whitespace-nowrap">
              Knowledge Keepers
            </a>
            <a href="#learn" className="hover:text-[#5F806B] transition-colors whitespace-nowrap">
              Learn
            </a>
            <a href="#stories" className="hover:text-[#5F806B] transition-colors whitespace-nowrap">
              Stories
            </a>
            <a href="#contribute" className="hover:text-[#5F806B] transition-colors whitespace-nowrap">
              Contribute
            </a>
          </nav>

          {/* Zone 3: Search & Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onSearchClick}
              type="button"
              className="p-2 text-[#35443A]/80 hover:text-[#35443A] hover:bg-[#E8D8BD]/30 rounded-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F806B]"
              aria-label="Open Heritage Search"
              title="Search traditions, keepers, and at-risk practices"
            >
              <Search className="w-5 h-5" />
            </button>
            {onExportClick && (
              <button
                onClick={onExportClick}
                type="button"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-[#FAF7F0] hover:bg-[#E8D8BD]/50 border border-[#E8D8BD] rounded-xs transition-colors whitespace-nowrap shadow-2xs"
                title="Download full project codebase to your desktop"
              >
                <Download className="w-3.5 h-3.5 text-[#5F806B]" />
                <span>Export to Desktop</span>
              </button>
            )}
            <button
              onClick={onContributeClick}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs transition-colors shadow-xs whitespace-nowrap"
            >
              <span>Preserve a Tradition</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onSearchClick}
              type="button"
              className="p-2 text-[#35443A]/80 rounded-xs"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#35443A] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#E8D8BD] bg-[#FAF7F0] px-6 py-6 space-y-4 shadow-md">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#35443A]">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#5F806B]">
              Home
            </a>
            <a href="#explore" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#5F806B]">
              Explore
            </a>
            <a href="#map-section" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#5F806B]">
              Living Map
            </a>
            <a href="#at-risk" onClick={() => setMobileMenuOpen(false)} className="py-1 text-[#b85b28] font-semibold">
              Traditions at Risk
            </a>
            <a href="#keepers" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#5F806B]">
              Meet Knowledge Keepers
            </a>
            <a href="#learn" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#5F806B]">
              Learn Traditions
            </a>
            <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#5F806B]">
              Stories & Ballads
            </a>
            <a href="#contribute" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#5F806B]">
              Contribute Knowledge
            </a>
          </nav>
          <div className="pt-4 border-t border-[#E8D8BD]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContributeClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] rounded-xs"
            >
              <span>Preserve a Tradition</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            {onExportClick && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExportClick();
                }}
                className="w-full mt-2.5 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-white border border-[#E8D8BD] rounded-xs"
              >
                <Download className="w-4 h-4 text-[#5F806B]" />
                <span>Move Files to Desktop (.ZIP)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
