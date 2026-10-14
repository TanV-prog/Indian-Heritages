'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HeritageEntry } from '@/lib/heritage-data';
import { Search, MapPin, ArrowRight, ShieldCheck, Filter, Users, GraduationCap, CheckCircle2 } from 'lucide-react';

interface FeaturedTraditionsProps {
  entries: HeritageEntry[];
  onSelectEntry: (entry: HeritageEntry) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FeaturedTraditions({
  entries,
  onSelectEntry,
  selectedCategory,
  onCategoryChange,
}: FeaturedTraditionsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedZone, setSelectedZone] = useState<string>('all');

  const filteredEntries = entries.filter((entry) => {
    const matchesCategory =
      selectedCategory === 'all' || entry.category === selectedCategory;

    const matchesStatus =
      selectedStatus === 'all' || entry.preservationStatus === selectedStatus;

    const matchesZone = (() => {
      if (selectedZone === 'all') return true;
      const s = entry.state.toLowerCase();
      if (selectedZone === 'south') return s.includes('telangana') || s.includes('andhra') || s.includes('kerala') || s.includes('tamil');
      if (selectedZone === 'west') return s.includes('rajasthan') || s.includes('gujarat') || s.includes('maharashtra');
      if (selectedZone === 'north') return s.includes('kashmir') || s.includes('himachal') || s.includes('punjab') || s.includes('uttarakhand');
      if (selectedZone === 'east') return s.includes('assam') || s.includes('odisha') || s.includes('bengal') || s.includes('manipur') || s.includes('nagaland');
      return true;
    })();

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === '' ||
      entry.name.toLowerCase().includes(query) ||
      entry.state.toLowerCase().includes(query) ||
      entry.district.toLowerCase().includes(query) ||
      entry.village.toLowerCase().includes(query) ||
      entry.shortDescription.toLowerCase().includes(query) ||
      entry.categoryLabel.toLowerCase().includes(query);

    return matchesCategory && matchesStatus && matchesZone && matchesQuery;
  });

  const getStatusColor = (status: HeritageEntry['preservationStatus']) => {
    switch (status) {
      case 'thriving':
        return 'text-[#2e6945]';
      case 'declining':
        return 'text-[#9c711a]';
      case 'at_risk':
        return 'text-[#b85b28]';
      case 'endangered':
        return 'text-[#992626]';
      default:
        return 'text-[#35443A]';
    }
  };

  const getStatusDot = (status: HeritageEntry['preservationStatus']) => {
    switch (status) {
      case 'thriving':
        return '🟢';
      case 'declining':
        return '🟡';
      case 'at_risk':
        return '🟠';
      case 'endangered':
        return '🔴';
    }
  };

  return (
    <section id="explore" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A735A] font-bold mb-3">
            <span>Living Traditions Directory</span>
            <span aria-hidden="true">·</span>
            <span>Continuity Profiles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
            Discover India&apos;s Living Traditions
          </h2>
          <p className="mt-3 text-base text-[#35443A]/85 leading-relaxed">
            Detailed continuity profiles documenting who holds the knowledge, whether younger practitioners are learning, and what actions prevent extinction.
          </p>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-[#8A735A] italic">
            <ShieldCheck className="w-4 h-4 text-[#5F806B]" />
            <span>Sample Demonstrator Records · Clearly distinguished from official state registries</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 p-4 sm:p-5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center shadow-2xs">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A735A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tradition, state, district, or craft..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] placeholder-[#8A735A]/70 focus:outline-none focus:border-[#5F806B] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A735A] hover:text-[#35443A]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            {/* Status Filter */}
            <div className="flex items-center gap-1.5 text-[#8A735A] font-semibold mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Status:</span>
            </div>

            <div className="inline-flex items-center bg-[#E8D8BD]/30 p-1 rounded-xs border border-[#E8D8BD]">
              {[
                { id: 'all', label: 'All Status' },
                { id: 'thriving', label: '🟢 Thriving' },
                { id: 'declining', label: '🟡 Declining' },
                { id: 'at_risk', label: '🟠 At Risk' },
                { id: 'endangered', label: '🔴 Critically At Risk' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedStatus(opt.id)}
                  type="button"
                  className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                    selectedStatus === opt.id
                      ? 'bg-[#FAF7F0] text-[#35443A] shadow-xs'
                      : 'text-[#35443A]/70 hover:text-[#35443A]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Region / Zone Filter */}
            <div className="inline-flex items-center bg-[#E8D8BD]/30 p-1 rounded-xs border border-[#E8D8BD] ml-1">
              {[
                { id: 'all', label: 'All India' },
                { id: 'south', label: 'South / Deccan' },
                { id: 'west', label: 'West / Desert' },
                { id: 'north', label: 'North / Himalayas' },
                { id: 'east', label: 'East / Northeast' },
              ].map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  type="button"
                  className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                    selectedZone === zone.id
                      ? 'bg-[#FAF7F0] text-[#35443A] shadow-xs'
                      : 'text-[#35443A]/70 hover:text-[#35443A]'
                  }`}
                >
                  {zone.label}
                </button>
              ))}
            </div>

            {(selectedCategory !== 'all' || selectedStatus !== 'all' || selectedZone !== 'all') && (
              <button
                onClick={() => {
                  onCategoryChange('all');
                  setSelectedStatus('all');
                  setSelectedZone('all');
                }}
                className="px-2 py-1 text-xs font-medium text-[#5F806B] hover:text-[#35443A] underline"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Live Result Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#8A735A] font-medium border-b border-[#E8D8BD]/60 pb-3">
          <span>
            <strong className="text-[#35443A] font-semibold tabular-nums">{filteredEntries.length}</strong>{' '}
            continuity profiles cataloged
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </span>

          <span className="hidden sm:inline-block">
            Inspect continuity health, knowledge transfer status, and learning modules
          </span>
        </div>

        {/* Heritage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntries.map((entry) => (
            <article
              key={entry.id}
              onClick={() => onSelectEntry(entry)}
              className="group flex flex-col bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs overflow-hidden hover:border-[#8FAF9A] hover:shadow-xs transition-all duration-200 cursor-pointer"
            >
              {/* Visual Header */}
              <div className="relative aspect-[16/10] w-full bg-[#E8D8BD]/20 overflow-hidden">
                <Image
                  src={entry.image}
                  alt={entry.name}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#35443A]/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Category unboxed tag */}
                <div className="absolute bottom-2.5 left-3 text-[11px] font-sans uppercase tracking-wider text-[#FAF7F0] font-semibold drop-shadow-xs">
                  {entry.categoryLabel}
                </div>

                <div className="absolute top-2.5 right-3 text-[10px] font-mono uppercase bg-[#FAF7F0]/90 text-[#35443A] px-2 py-0.5 rounded-xs border border-[#E8D8BD]">
                  {entry.verificationStatus}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8A735A] mb-2 font-medium">
                    <div className="flex items-center gap-1 text-[#5F806B]">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate max-w-[150px]">{entry.state}</span>
                    </div>
                    <div className={`flex items-center gap-1 font-semibold ${getStatusColor(entry.preservationStatus)}`}>
                      <span aria-hidden="true">{getStatusDot(entry.preservationStatus)}</span>
                      <span>{entry.statusLabel}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#35443A] leading-snug group-hover:text-[#5F806B] transition-colors">
                    {entry.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#35443A]/80 leading-relaxed line-clamp-2">
                    {entry.shortDescription}
                  </p>

                  {/* HERITAGE CONTINUITY PROFILE STRIP (Core Pivot Requirement) */}
                  <div className="mt-4 p-3 bg-[#F8F4EC] rounded-xs border border-[#E8D8BD] space-y-1.5 text-[11px]">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#8A735A] pb-1 border-b border-[#E8D8BD]/70 flex justify-between">
                      <span>Heritage Continuity Profile</span>
                      <span className="text-[#8A735A] font-normal italic">Demo Data</span>
                    </div>

                    <div className="flex justify-between items-center text-[#35443A]">
                      <span className="text-[#8A735A]">Knowledge Holders:</span>
                      <strong className="tabular-nums font-semibold">{entry.continuityProfile.knowledgeHoldersCount} Elders</strong>
                    </div>

                    <div className="flex justify-between items-center text-[#35443A]">
                      <span className="text-[#8A735A]">Young Learners:</span>
                      <strong className="tabular-nums font-semibold">{entry.continuityProfile.youngPractitionersCount} Active</strong>
                    </div>

                    <div className="flex justify-between items-center text-[#35443A]">
                      <span className="text-[#8A735A]">Knowledge Transfer:</span>
                      <span className={`font-semibold ${
                        entry.continuityProfile.knowledgeTransferStatus === 'Active Mentorship' ? 'text-green-700' :
                        entry.continuityProfile.knowledgeTransferStatus === 'Critical Interruption' ? 'text-red-700' : 'text-amber-700'
                      }`}>
                        {entry.continuityProfile.knowledgeTransferStatus}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[#35443A] pt-0.5">
                      <span className="text-[#8A735A]">Structured Learning:</span>
                      <strong className="text-[#5F806B]">
                        {entry.continuityProfile.learningAvailable ? '✓ Module Available' : 'Documentation in progress'}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-[#E8D8BD]/70 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#5F806B]">
                  <span>View Continuity Dossier</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
