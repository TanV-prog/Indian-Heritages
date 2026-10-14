'use client';

import React from 'react';
import { Sprout, Hammer, Music, BookOpen, UtensilsCrossed, Calendar, Compass, Building2 } from 'lucide-react';

const LIVING_ELEMENTS = [
  {
    icon: Sprout,
    title: "Farmers' Knowledge",
    text: "Soil texture diagnosis, cloud reading, multi-canopy millet intercropping, and drought-hardy seed saving.",
  },
  {
    icon: Hammer,
    title: "Artisans' Skills",
    text: "Natural botanical dye chemistry, handloom mathematics, bell-metal casting, and soft wood sculpting.",
  },
  {
    icon: Music,
    title: "Folk Songs & Rhythms",
    text: "Field songs, grinding mill verses, seasonal rain prayers, and harvest celebration chants.",
  },
  {
    icon: BookOpen,
    title: "Oral Stories & Ballads",
    text: "Living epics narrated across village squares without manuscripts, binding community memory.",
  },
  {
    icon: UtensilsCrossed,
    title: "Traditional Recipes",
    text: "Fermented slow foods, sun-dried wild greens, seasonal rasams, and unpolished heirloom grains.",
  },
  {
    icon: Calendar,
    title: "Local Festivals",
    text: "Solstice gratitude, cattle thankings, sacred grove veneration, and communal sharing ceremonies.",
  },
  {
    icon: Compass,
    title: "Indigenous Practices",
    text: "Earthen Johad rainwater check dams, terracotta cooling, and non-toxic herbal wellness systems.",
  },
  {
    icon: Building2,
    title: "Village Architecture",
    text: "Lime mortar, cow-dung plaster, passive courtyard ventilation, and bamboo roof joinery.",
  },
];

export default function LivingHeritage() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A735A] font-medium mb-3">
            <span>Philosophy of the Archive</span>
            <span aria-hidden="true">·</span>
            <span>Beyond Monuments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
            A Living Heritage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#35443A]/85 leading-relaxed">
            India&apos;s true heritage does not reside solely inside stone monuments, fortified palaces, or quiet glass display cases. It breathes everyday in the hands, voices, and collective practices of our rural villages.
          </p>
        </div>

        {/* 8 Living Facets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIVING_ELEMENTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-sm bg-[#FAF7F0] border border-[#E8D8BD] hover:border-[#8FAF9A] hover:bg-[#F4EFE6]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#8FAF9A]/20 text-[#5F806B] flex items-center justify-center mb-4 group-hover:bg-[#5F806B] group-hover:text-[#FAF7F0] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#35443A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#35443A]/75 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
