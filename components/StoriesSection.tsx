'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ORAL_STORIES, OralStory } from '@/lib/heritage-data';
import { Volume2, Play, Pause, FileText, MapPin, Mic, Clock } from 'lucide-react';

export default function StoriesSection() {
  const [playingStoryId, setPlayingStoryId] = useState<string | null>(null);
  const [expandedTranscriptId, setExpandedTranscriptId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    if (playingStoryId === id) {
      setPlayingStoryId(null);
    } else {
      setPlayingStoryId(id);
    }
  };

  const toggleTranscript = (id: string) => {
    setExpandedTranscriptId(expandedTranscriptId === id ? null : id);
  };

  return (
    <section id="stories" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A735A] font-medium mb-3">
            <span>Oral History & Spoken Memory</span>
            <span aria-hidden="true">·</span>
            <span>Unwritten Archives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
            Voices of Heritage
          </h2>
          <p className="mt-3 text-base text-[#35443A]/85 leading-relaxed">
            Preserving knowledge shared by village elders, farmers, artisans, and bards before spoken dialects and memories fade away.
          </p>
        </div>

        {/* Stories List */}
        <div className="space-y-8">
          {ORAL_STORIES.map((story: OralStory) => {
            const isPlaying = playingStoryId === story.id;
            const isTranscriptOpen = expandedTranscriptId === story.id;

            return (
              <div
                key={story.id}
                className="bg-[#FAF7F0] border border-[#E8D8BD] rounded-sm p-6 sm:p-8 hover:border-[#8FAF9A] transition-colors shadow-2xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Contributor Visual & Profile */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 items-start sm:items-center lg:items-start">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-sm overflow-hidden border border-[#E8D8BD] bg-[#E8D8BD]/20 shrink-0">
                      <Image
                        src={story.image}
                        alt={story.contributor}
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#5F806B]">
                        {story.category}
                      </div>
                      <h4 className="font-serif text-lg font-bold text-[#35443A]">
                        {story.contributor}
                      </h4>
                      <p className="text-xs text-[#8A735A] font-medium">
                        {story.contributorRole}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-[#8A735A] pt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#5F806B]" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Story Content & Audio Player */}
                  <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#8A735A] mb-2 font-medium">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{story.duration}</span>
                        </div>
                        <span aria-hidden="true">·</span>
                        <span>{story.recordedDate}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#35443A] leading-snug">
                        &ldquo;{story.title}&rdquo;
                      </h3>

                      <p className="mt-3 text-sm text-[#35443A]/85 leading-relaxed">
                        {story.description}
                      </p>
                    </div>

                    {/* Interactive Audio Player Bar */}
                    <div className="p-4 bg-[#F8F4EC] border border-[#E8D8BD] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => togglePlay(story.id)}
                          type="button"
                          className="w-10 h-10 rounded-full bg-[#5F806B] text-[#FAF7F0] flex items-center justify-center hover:bg-[#4d6957] transition-colors shrink-0 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F806B]"
                          aria-label={isPlaying ? 'Pause audio recording' : 'Play audio recording'}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                        </button>

                        <div className="space-y-0.5">
                          <div className="text-xs font-semibold text-[#35443A] flex items-center gap-2">
                            <span>{story.audioSampleName}</span>
                            {isPlaying && (
                              <span className="text-[10px] text-[#5F806B] uppercase font-bold tracking-wider">
                                Playing
                              </span>
                            )}
                          </div>
                          
                          {/* Visualizer bars */}
                          <div className="flex items-center gap-1 h-3 mt-1">
                            {[40, 70, 30, 90, 60, 80, 45, 95, 50, 75, 40, 65, 85, 30, 70].map((h, i) => (
                              <span
                                key={i}
                                className={`w-1 rounded-full transition-all duration-300 ${
                                  isPlaying ? 'bg-[#5F806B]' : 'bg-[#8A735A]/30'
                                }`}
                                style={{
                                  height: isPlaying ? `${Math.max(20, (h + (i % 3) * 15) % 100)}%` : '20%',
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={() => toggleTranscript(story.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-[#FAF7F0] border border-[#8A735A]/40 rounded-sm hover:bg-[#E8D8BD]/30 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#5F806B]" />
                          <span>{isTranscriptOpen ? 'Hide Transcript' : 'Read Transcript'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Transcript */}
                    {isTranscriptOpen && (
                      <div className="mt-4 p-5 bg-[#FAF7F0] border-l-2 border-[#5F806B] rounded-r-sm text-sm text-[#35443A]/90 leading-relaxed font-sans space-y-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1 flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5 text-[#5F806B]" />
                          <span>Spoken Transcript Translation (Dialect Archive)</span>
                        </div>
                        <div className="whitespace-pre-line italic font-serif">
                          {story.transcript}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
