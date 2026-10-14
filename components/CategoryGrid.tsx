'use client';

import React from 'react';
import { HERITAGE_CATEGORIES } from '@/lib/heritage-data';
import {
  Sprout,
  Scissors,
  Palette,
  BookOpen,
  Utensils,
  Leaf,
  Sparkles,
  Home,
  ArrowRight,
} from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sprout,
  Scissors,
  Palette,
  BookOpen,
  Utensils,
  Leaf,
  Sparkles,
  Home,
};

export default function CategoryGrid({ onSelectCategory, selectedCategory }: CategoryGridProps) {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A735A] font-medium mb-3">
              <span>Eight Pillars of Memory</span>
              <span aria-hidden="true">·</span>
              <span>Classification System</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
              Heritage Categories
            </h2>
            <p className="mt-2 text-base text-[#35443A]/80 max-w-2xl">
              Select a domain to filter traditional knowledge, oral archives, and living community practices.
            </p>
          </div>

          {selectedCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-xs font-semibold uppercase tracking-wider text-[#5F806B] hover:text-[#35443A] underline underline-offset-4 self-start md:self-auto cursor-pointer"
            >
              Show all categories
            </button>
          )}
        </div>

        {/* Categories 8-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HERITAGE_CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.iconName] || Leaf;
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`p-6 rounded-sm border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#E8D8BD]/40 border-[#5F806B] shadow-xs'
                    : 'bg-[#FAF7F0] border-[#E8D8BD] hover:border-[#8FAF9A] hover:bg-[#F8F4EC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-sm flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#5F806B] text-[#FAF7F0]'
                          : 'bg-[#8FAF9A]/20 text-[#5F806B]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-sans font-medium text-[#8A735A]">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#35443A] mb-2">
                    {cat.label}
                  </h3>

                  <p className="text-xs text-[#35443A]/75 leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E8D8BD]/60 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#5F806B]">
                  <span>{isSelected ? 'Active Filter' : 'Explore'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
