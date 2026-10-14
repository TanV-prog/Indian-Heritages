'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { KNOWLEDGE_KEEPERS, KnowledgeKeeper } from '@/lib/heritage-data';
import { Users, GraduationCap, MapPin, CheckCircle, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface KnowledgeKeepersProps {
  onLearnFromKeeper?: (keeper: KnowledgeKeeper) => void;
}

export default function KnowledgeKeepers({ onLearnFromKeeper }: KnowledgeKeepersProps) {
  const [selectedKeeper, setSelectedKeeper] = useState<KnowledgeKeeper | null>(null);
  const [connectSuccess, setConnectSuccess] = useState<string | null>(null);

  const handleConnect = (keeper: KnowledgeKeeper) => {
    setSelectedKeeper(keeper);
    setConnectSuccess(`Connection request sent to ${keeper.name}'s village knowledge circle!`);
    setTimeout(() => {
      setConnectSuccess(null);
    }, 4000);
  };

  return (
    <section id="keepers" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5F806B] font-bold mb-3">
              <Users className="w-4 h-4 text-[#5F806B]" />
              <span>Living Human Repositories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
              Meet the Knowledge Keepers
            </h2>
            <p className="mt-3 text-base text-[#35443A]/85 leading-relaxed">
              True heritage is carried in the minds and hands of living elders, master artisans, and community bards. Connect with practitioners willing to mentor younger generations.
            </p>
          </div>

          <div className="text-xs text-[#8A735A] font-medium italic self-start md:self-auto">
            Demo Profiles · Sample Archival Records
          </div>
        </div>

        {connectSuccess && (
          <div className="mb-8 p-4 bg-[#F1F6F3] border border-[#8FAF9A] rounded-xs text-xs text-[#2e6945] font-semibold flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#2e6945]" />
            <span>{connectSuccess} (Apprenticeship inquiry logged into mentorship queue)</span>
          </div>
        )}

        {/* 4 Keepers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KNOWLEDGE_KEEPERS.map((keeper) => (
            <div
              key={keeper.id}
              className="bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs p-6 flex flex-col justify-between hover:border-[#8FAF9A] hover:shadow-xs transition-all duration-200 group"
            >
              <div>
                {/* Visual Avatar */}
                <div className="relative aspect-square w-full rounded-xs overflow-hidden border border-[#E8D8BD] bg-[#E8D8BD]/20 mb-4">
                  <Image
                    src={keeper.image}
                    alt={keeper.name}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-2 left-2 bg-[#FAF7F0]/90 text-[10px] uppercase font-bold tracking-wider text-[#8A735A] px-2 py-0.5 rounded-xs border border-[#E8D8BD]">
                    Demo Profile
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5F806B] block">
                    {keeper.tradition}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#35443A]">
                    {keeper.name}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-[#8A735A]">
                    <MapPin className="w-3.5 h-3.5 text-[#5F806B] shrink-0" />
                    <span>{keeper.location}</span>
                  </div>

                  <p className="text-xs text-[#35443A]/80 leading-relaxed pt-2 border-t border-[#E8D8BD]/70">
                    {keeper.story}
                  </p>
                </div>

                {/* Key Metrics Definition Grid */}
                <div className="mt-4 pt-3 border-t border-[#E8D8BD]/70 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#8A735A]">Experience:</span>
                    <strong className="text-[#35443A] tabular-nums">{keeper.yearsOfExperience} Years</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A735A]">Mentorship Open:</span>
                    <strong className="text-[#2e6945]">
                      {keeper.canTeachOthers ? '✓ Open to Learners' : 'No Capacity'}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A735A]">Active Apprentices:</span>
                    <strong className="text-[#5F806B] tabular-nums">{keeper.activeLearnersCount} Learners</strong>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#E8D8BD]">
                <button
                  onClick={() => handleConnect(keeper)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs transition-colors shadow-xs cursor-pointer"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Learn from Keeper</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
