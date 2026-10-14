'use client';

import React from 'react';
import Image from 'next/image';
import { HeritageEntry } from '@/lib/heritage-data';
import { AlertTriangle, MapPin, ArrowRight, ShieldAlert, Users, BookOpen } from 'lucide-react';

interface TraditionsAtRiskProps {
  entries: HeritageEntry[];
  onSelectEntry: (entry: HeritageEntry) => void;
}

export default function TraditionsAtRisk({ entries, onSelectEntry }: TraditionsAtRiskProps) {
  const [showAll, setShowAll] = React.useState(false);

  // Filter entries that are endangered, at_risk, or declining
  const allAtRisk = entries.filter(
    (e) => e.preservationStatus === 'endangered' || e.preservationStatus === 'at_risk' || e.preservationStatus === 'declining'
  );
  const atRiskEntries = allAtRisk.slice(0, showAll ? 9 : 3);

  const getStatusBadge = (status: HeritageEntry['preservationStatus']) => {
    switch (status) {
      case 'endangered':
        return { label: '🔴 CRITICALLY AT RISK', bg: 'bg-red-50 text-red-800 border-red-300' };
      case 'at_risk':
        return { label: '🟠 AT RISK', bg: 'bg-orange-50 text-orange-800 border-orange-300' };
      case 'declining':
        return { label: '🟡 DECLINING', bg: 'bg-amber-50 text-amber-800 border-amber-300' };
      default:
        return { label: '🟢 THRIVING', bg: 'bg-green-50 text-green-800 border-green-300' };
    }
  };

  return (
    <section id="at-risk" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#b85b28] font-bold mb-3">
              <ShieldAlert className="w-4 h-4 text-[#b85b28]" />
              <span>Urgent Intergenerational Intervention</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
              Traditions at Risk
            </h2>
            <p className="mt-3 text-base text-[#35443A]/85 leading-relaxed">
              Some traditions may disappear when the knowledge holders disappear. Here are living practices currently experiencing critical transmission gaps.
            </p>
          </div>

          <div className="text-xs text-[#8A735A] font-medium self-start md:self-auto italic">
            * Sample demonstrator profiles for knowledge continuity assessment
          </div>
        </div>

        {/* 3-Column At Risk Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {atRiskEntries.map((entry) => {
            const badge = getStatusBadge(entry.preservationStatus);
            return (
              <article
                key={entry.id}
                className="bg-[#FAF7F0] border border-[#E8D8BD] hover:border-[#b85b28] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-2xs group"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative aspect-[16/10] w-full bg-[#E8D8BD]/20 overflow-hidden">
                    <Image
                      src={entry.image}
                      alt={entry.name}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#35443A]/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Status Ribbon */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-xs border shadow-2xs ${badge.bg}`}>
                        {badge.label}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 text-xs text-[#FAF7F0] flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#E8D8BD]" />
                      <span>{entry.state}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8A735A] font-semibold">
                        {entry.categoryLabel}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#35443A] group-hover:text-[#b85b28] transition-colors leading-snug mt-1">
                        {entry.name}
                      </h3>
                    </div>

                    {/* 4 Critical Questions from User Brief */}
                    <div className="space-y-3 pt-2 text-xs border-t border-[#E8D8BD]/70">
                      <div>
                        <strong className="text-[#35443A] block font-semibold mb-0.5">
                          What is at risk?
                        </strong>
                        <p className="text-[#35443A]/80 leading-relaxed">
                          {entry.shortDescription}
                        </p>
                      </div>

                      <div>
                        <strong className="text-[#b85b28] block font-semibold mb-0.5">
                          Why is it at risk?
                        </strong>
                        <ul className="space-y-1 text-[#35443A]/80">
                          {entry.continuityProfile.riskFactors.slice(0, 2).map((factor, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-[#b85b28] font-bold">·</span>
                              <span>{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-2.5 bg-[#F8F4EC] rounded-xs border border-[#E8D8BD] flex items-center justify-between text-[11px]">
                        <div>
                          <span className="text-[#8A735A] block">Who holds knowledge:</span>
                          <strong className="text-[#35443A]">{entry.associatedCommunities}</strong>
                        </div>
                        <div className="text-right">
                          <span className="text-[#8A735A] block">Documented Holders:</span>
                          <strong className="text-[#5F806B] tabular-nums">{entry.continuityProfile.knowledgeHoldersCount} Elders</strong>
                        </div>
                      </div>

                      <div>
                        <strong className="text-[#5F806B] block font-semibold mb-0.5">
                          How can it be preserved?
                        </strong>
                        <p className="text-[#35443A]/80 leading-relaxed text-[11px]">
                          {entry.continuityProfile.preservationActionNeeded}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectEntry(entry)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs transition-colors shadow-xs cursor-pointer"
                  >
                    <span>View Preservation Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {allAtRisk.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-[#FAF7F0] hover:bg-[#E8D8BD]/50 border border-[#8A735A]/50 rounded-xs transition-colors shadow-2xs cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 text-[#b85b28]" />
              <span>{showAll ? 'Show Fewer (Top 3 Showcases)' : `View All Traditions At Risk (${allAtRisk.length} Cataloged)`}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
