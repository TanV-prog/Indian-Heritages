'use client';

import React, { useState, useEffect } from 'react';
import { HeritageEntry } from '@/lib/heritage-data';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  entries: HeritageEntry[];
  onSelectEntry: (entry: HeritageEntry) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  entries,
  onSelectEntry,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = entries.filter((e) => {
    const q = query.toLowerCase().trim();
    if (!q) return false;
    return (
      e.name.toLowerCase().includes(q) ||
      e.state.toLowerCase().includes(q) ||
      e.village.toLowerCase().includes(q) ||
      e.categoryLabel.toLowerCase().includes(q) ||
      e.shortDescription.toLowerCase().includes(q) ||
      e.associatedCommunities.toLowerCase().includes(q)
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#35443A]/70 backdrop-blur-xs flex items-start justify-center pt-20 px-4"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FAF7F0] border border-[#E8D8BD] rounded-sm shadow-xl z-10 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E8D8BD] gap-3 bg-[#FAF7F0]">
          <Search className="w-5 h-5 text-[#8A735A] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search heritage by name, craft, farming practice, state, or village..."
            className="w-full bg-transparent text-sm sm:text-base text-[#35443A] placeholder-[#8A735A]/70 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#8A735A] hover:text-[#35443A]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#8A735A] hover:text-[#35443A]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#8A735A] space-y-2">
              <p className="font-serif text-base text-[#35443A]">Explore India&apos;s Living Knowledge Base</p>
              <p>Try searching: <em>&ldquo;Millet&rdquo;</em>, <em>&ldquo;Kalamkari&rdquo;</em>, <em>&ldquo;Andhra Pradesh&rdquo;</em>, <em>&ldquo;Johad&rdquo;</em>, or <em>&ldquo;Theyyam&rdquo;</em></p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#8A735A]">
              <p className="font-serif text-base text-[#35443A]">No matching traditions found for &ldquo;{query}&rdquo;</p>
              <p className="mt-1">Try another keyword or submit this tradition via the Contribute section.</p>
            </div>
          ) : (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A735A] mb-2 px-2">
                {filtered.length} Traditions Found
              </div>
              <div className="space-y-2">
                {filtered.map((entry) => (
                  <div
                    key={entry.id}
                    onClick={() => {
                      onSelectEntry(entry);
                      onClose();
                    }}
                    className="p-3.5 bg-[#FAF7F0] hover:bg-[#E8D8BD]/30 border border-[#E8D8BD] rounded-xs cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#8A735A] font-medium">
                        <span className="text-[#5F806B] uppercase font-semibold">
                          {entry.categoryLabel}
                        </span>
                        <span>·</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#5F806B]" />
                          <span>{entry.state}</span>
                        </div>
                      </div>
                      <h4 className="font-serif text-base font-semibold text-[#35443A] group-hover:text-[#5F806B]">
                        {entry.name}
                      </h4>
                      <p className="text-xs text-[#35443A]/75 line-clamp-1 mt-0.5">
                        {entry.shortDescription}
                      </p>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#5F806B] transition-transform group-hover:translate-x-1 shrink-0 ml-3" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-[#F8F4EC] border-t border-[#E8D8BD] text-[11px] text-[#8A735A] flex justify-between">
          <span>Press ESC or click backdrop to close</span>
          <span>Open Cultural Commons</span>
        </div>
      </div>
    </div>
  );
}
