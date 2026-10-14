'use client';

import React from 'react';
import { HERITAGE_HEALTH_METRICS } from '@/lib/heritage-data';
import { Activity, ShieldCheck, Users, GraduationCap, BookOpen, MapPin } from 'lucide-react';

export default function HeritageHealth() {
  const m = HERITAGE_HEALTH_METRICS;

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5F806B] font-bold mb-3">
            <Activity className="w-4 h-4 text-[#5F806B]" />
            <span>Preservation Health Monitor</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
            Heritage Continuity Health
          </h2>
          <p className="mt-3 text-base text-[#35443A]/85 leading-relaxed">
            Measuring the vitality of India&apos;s living traditions through active practitioner numbers, documented knowledge holders, and youth engagement.
          </p>
          <div className="mt-3 text-xs text-[#8A735A] font-semibold italic flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#5F806B]" />
            <span>Prototype Demonstration — Sample Data (Not an official national statistical registry)</span>
          </div>
        </div>

        {/* 6 Key Continuity Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="p-5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-center shadow-2xs">
            <span className="font-serif text-3xl font-bold text-[#35443A] tabular-nums block">
              {m.documentedTraditions}
            </span>
            <span className="text-xs text-[#8A735A] font-semibold block mt-1">
              Documented Traditions
            </span>
          </div>

          <div className="p-5 bg-[#FAF7F0] border border-[#b85b28]/60 rounded-xs text-center shadow-2xs">
            <span className="font-serif text-3xl font-bold text-[#b85b28] tabular-nums block">
              {m.traditionsAtRisk}
            </span>
            <span className="text-xs text-[#b85b28] font-semibold block mt-1">
              Traditions at Risk
            </span>
          </div>

          <div className="p-5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-center shadow-2xs">
            <span className="font-serif text-3xl font-bold text-[#5F806B] tabular-nums block">
              {m.knowledgeKeepers}
            </span>
            <span className="text-xs text-[#8A735A] font-semibold block mt-1">
              Knowledge Keepers
            </span>
          </div>

          <div className="p-5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-center shadow-2xs">
            <span className="font-serif text-3xl font-bold text-[#35443A] tabular-nums block">
              {m.youngLearners}
            </span>
            <span className="text-xs text-[#8A735A] font-semibold block mt-1">
              Young Learners
            </span>
          </div>

          <div className="p-5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-center shadow-2xs">
            <span className="font-serif text-3xl font-bold text-[#35443A] tabular-nums block">
              {m.learningModules}
            </span>
            <span className="text-xs text-[#8A735A] font-semibold block mt-1">
              Learning Modules
            </span>
          </div>

          <div className="p-5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-center shadow-2xs">
            <span className="font-serif text-3xl font-bold text-[#35443A] tabular-nums block">
              {m.communitiesRepresented}
            </span>
            <span className="text-xs text-[#8A735A] font-semibold block mt-1">
              Villages Represented
            </span>
          </div>
        </div>

        {/* Visual Continuity Breakdown Bar */}
        <div className="p-6 sm:p-8 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8A735A]">
                Archival Health Breakdown
              </span>
              <h3 className="font-serif text-xl font-bold text-[#35443A]">
                Transmission Vulnerability Distribution
              </h3>
            </div>
            <span className="text-xs text-[#8A735A] font-medium">
              Total {m.documentedTraditions} Documented Practices in Sample Catalog
            </span>
          </div>

          {/* Segmented Progress Bar */}
          <div className="w-full h-4 bg-[#FAF7F0] rounded-xs overflow-hidden flex border border-[#E8D8BD]">
            {m.preservationStatusBreakdown.map((item, idx) => (
              <div
                key={idx}
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color,
                }}
                className="h-full transition-all duration-500"
                title={`${item.label}: ${item.count} (${item.percentage}%)`}
              />
            ))}
          </div>

          {/* Legend Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {m.preservationStatusBreakdown.map((item, idx) => (
              <div key={idx} className="p-3 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-[#35443A]">
                  <span>{item.dot}</span>
                  <span>{item.label}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold tabular-nums text-[#35443A]">{item.count}</span>
                  <span className="text-[11px] text-[#8A735A] ml-1">({item.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[11px] text-[#8A735A] border-t border-[#E8D8BD]/80 pt-3 flex flex-col sm:flex-row justify-between gap-2 italic">
            <span>Critical finding: 36% of recorded traditions show declining transmission, requiring immediate student-practitioner linkages.</span>
            <span>Continuity Index Analytical Dashboard</span>
          </div>
        </div>

      </div>
    </section>
  );
}
