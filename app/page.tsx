'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ArchiveToAction from '@/components/ArchiveToAction';
import HeritageHealth from '@/components/HeritageHealth';
import TraditionsAtRisk from '@/components/TraditionsAtRisk';
import KnowledgeKeepers from '@/components/KnowledgeKeepers';
import LivingHeritage from '@/components/LivingHeritage';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedTraditions from '@/components/FeaturedTraditions';
import HeritageMap from '@/components/HeritageMap';
import StoriesSection from '@/components/StoriesSection';
import LearningSection from '@/components/LearningSection';
import ContributeSection from '@/components/ContributeSection';
import Footer from '@/components/Footer';
import HeritageDetailModal from '@/components/HeritageDetailModal';
import SearchModal from '@/components/SearchModal';
import ExportDesktopModal from '@/components/ExportDesktopModal';
import {
  INITIAL_HERITAGE_ENTRIES,
  INITIAL_CONTRIBUTIONS,
  HeritageEntry,
} from '@/lib/heritage-data';

export default function HomePage() {
  const [entries, setEntries] = useState<HeritageEntry[]>(INITIAL_HERITAGE_ENTRIES);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEntry, setSelectedEntry] = useState<HeritageEntry | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContribute = () => {
    const el = document.getElementById('contribute');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToExplore = () => {
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewApprovedEntry = (newEntry: HeritageEntry) => {
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#35443A] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        onSearchClick={() => setIsSearchOpen(true)}
        onContributeClick={handleScrollToContribute}
        onExportClick={() => setIsExportOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={handleScrollToExplore}
          onContributeClick={handleScrollToContribute}
          onExportClick={() => setIsExportOpen(true)}
        />

        {/* 2. From Archive to Action (Key Differentiator) */}
        <ArchiveToAction />

        {/* 3. Heritage Health (Preservation Vitality Dashboard) */}
        <HeritageHealth />

        {/* 4. Traditions at Risk (High-Priority Preservation Interventions) */}
        <TraditionsAtRisk
          entries={entries}
          onSelectEntry={(entry) => setSelectedEntry(entry)}
        />

        {/* 5. Meet the Knowledge Keepers (Elders & Mentors) */}
        <KnowledgeKeepers />

        {/* 6. A Living Heritage Philosophy */}
        <LivingHeritage />

        {/* 7. Heritage Categories */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 8. Living Traditions Directory & Continuity Profiles */}
        <FeaturedTraditions
          entries={entries}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSelectEntry={(entry) => setSelectedEntry(entry)}
        />

        {/* 9. Living Heritage Map (Geographic Atlas with Risk & Domain Filters) */}
        <HeritageMap
          entries={entries}
          onSelectEntry={(entry) => setSelectedEntry(entry)}
        />

        {/* 10. Voices of Heritage (Elder Audio Records & Transcripts) */}
        <StoriesSection />

        {/* 11. Learn From India's Heritage (Curricula & Mini Quiz) */}
        <LearningSection />

        {/* 12. Help Keep a Tradition Alive (Continuity Contribution & Verification Pipeline) */}
        <ContributeSection
          initialSubmissions={INITIAL_CONTRIBUTIONS}
          onNewApprovedEntry={handleNewApprovedEntry}
        />
      </main>

      {/* Footer with Working Alongside Existing Efforts */}
      <Footer onExportClick={() => setIsExportOpen(true)} />

      {/* Heritage Detail & Continuity Dossier Modal */}
      <HeritageDetailModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        entries={entries}
        onSelectEntry={(entry) => setSelectedEntry(entry)}
      />

      {/* Move / Export to Desktop Modal */}
      <ExportDesktopModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
