'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HeritageEntry } from '@/lib/heritage-data';
import {
  X,
  MapPin,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Users,
  GraduationCap,
  BookOpen,
  Building,
  Check,
  Calendar,
  Layers,
  Award,
  Download,
} from 'lucide-react';

interface HeritageDetailModalProps {
  entry: HeritageEntry | null;
  onClose: () => void;
  onSelectRelated?: (traditionName: string) => void;
  onActionClick?: (role: string) => void;
}

export default function HeritageDetailModal({
  entry,
  onClose,
  onSelectRelated,
  onActionClick,
}: HeritageDetailModalProps) {
  // Close on Escape key press and manage body overflow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (entry) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [entry, onClose]);

  if (!entry) return null;

  return (
    <HeritageDetailModalContent
      key={entry.id}
      entry={entry}
      onClose={onClose}
      onSelectRelated={onSelectRelated}
      onActionClick={onActionClick}
    />
  );
}

function HeritageDetailModalContent({
  entry,
  onClose,
  onSelectRelated,
  onActionClick,
}: {
  entry: HeritageEntry;
  onClose: () => void;
  onSelectRelated?: (traditionName: string) => void;
  onActionClick?: (role: string) => void;
}) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [hasCompletedCurriculum, setHasCompletedCurriculum] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const toggleStep = (stepNum: number) => {
    if (completedSteps.includes(stepNum)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepNum));
    } else {
      setCompletedSteps([...completedSteps, stepNum]);
    }
  };

  const handleCompleteCurriculum = () => {
    setHasCompletedCurriculum(true);
    setActionNotice('Congratulations! You earned the Digital Apprentice Badge for this tradition.');
    setTimeout(() => setActionNotice(null), 5000);
  };

  const triggerRoleAction = (role: string) => {
    setActionNotice(`Preservation pathway initiated for: ${role}`);
    if (onActionClick) onActionClick(role);
    setTimeout(() => setActionNotice(null), 4000);
  };

  const handleDownloadDossier = () => {
    const mdContent = `# Heritage Continuity Dossier: ${entry.name}
**Category:** ${entry.categoryLabel}
**Location:** ${entry.village}, ${entry.district}, ${entry.state}
**Preservation Status:** ${entry.statusLabel}
**Verification Status:** ${entry.verificationStatus}
**Last Field Documented:** ${entry.continuityProfile.lastDocumented}

---

## 1. Overview & Cultural Significance
${entry.fullDescription}

### Historical Context
${entry.history}

### Traditional Practice & Technique
${entry.traditionalPractice}

### Key Natural Materials Used
${entry.materialsUsed.map((m) => `- ${m}`).join('\n')}

---

## 2. Heritage Continuity Profile
- **Knowledge Holders:** ${entry.continuityProfile.knowledgeHoldersCount} Elders
- **Young Practitioners:** ${entry.continuityProfile.youngPractitionersCount} Active Learners
- **Communities Practicing:** ${entry.continuityProfile.communitiesCount} Villages
- **Knowledge Transfer Status:** ${entry.continuityProfile.knowledgeTransferStatus}
- **Learning Modules Available:** ${entry.continuityProfile.learningAvailable ? 'Yes' : 'No'}

### Identified Risk Factors
${entry.continuityProfile.riskFactors.map((r) => `- ${r}`).join('\n')}

### Urgent Preservation Action Needed
${entry.continuityProfile.preservationActionNeeded}

---

## 3. Generational Shift (Then vs Now)
### Historical Baseline (Then)
${entry.thenNowComparison.then.map((t) => `- ${t}`).join('\n')}

### Contemporary Reality (Today)
${entry.thenNowComparison.today.map((t) => `- ${t}`).join('\n')}

### Preservation Opportunities
${entry.thenNowComparison.preservationOpportunity.map((p) => `- ${p}`).join('\n')}

---

## 4. Knowledge Journey
1. **Knowledge Holder:** ${entry.knowledgeJourney.knowledgeHolder}
2. **Documentation:** ${entry.knowledgeJourney.documentation}
3. **Community Verification:** ${entry.knowledgeJourney.verification}
4. **Learning Module:** ${entry.knowledgeJourney.learningModule}
5. **Young Learner:** ${entry.knowledgeJourney.youngLearner}
6. **Future Practitioner:** ${entry.knowledgeJourney.futurePractitioner}

---
*Archived by Indian Heritage Continuity Platform · Open Knowledge Initiative*
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `continuity-dossier-${entry.slug}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setActionNotice('Continuity Dossier (.md) downloaded successfully!');
    setTimeout(() => setActionNotice(null), 4000);
  };

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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#35443A]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs shadow-2xl z-10 overflow-hidden my-6 max-h-[94vh] flex flex-col">
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8D8BD] bg-[#FAF7F0]/95 backdrop-blur-xs sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs text-[#8A735A] font-medium">
            <span className="uppercase tracking-wider text-[#5F806B] font-bold">
              {entry.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span>Continuity Dossier #{entry.id}</span>
            <span aria-hidden="true">·</span>
            <span className="bg-[#E8D8BD]/40 text-[#35443A] px-2 py-0.5 rounded-xs font-mono text-[10px]">
              {entry.verificationStatus}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadDossier}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-[#E8D8BD]/40 hover:bg-[#E8D8BD] border border-[#8A735A]/40 rounded-xs transition-colors cursor-pointer"
              title="Download structured continuity dossier (.md)"
            >
              <Download className="w-3.5 h-3.5 text-[#5F806B]" />
              <span className="hidden sm:inline">Export Dossier</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#35443A]/70 hover:text-[#35443A] hover:bg-[#E8D8BD]/40 rounded-xs transition-colors focus:outline-none"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10 divide-y divide-[#E8D8BD]/70">
          
          {/* Section 1: Hero & Title Lockup */}
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden border border-[#E8D8BD] bg-[#E8D8BD]/20">
              <Image
                src={entry.image}
                alt={entry.name}
                fill
                referrerPolicy="no-referrer"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#35443A]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 text-[#FAF7F0] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-[#E8D8BD]" />
                  <span>{entry.village}, {entry.district}, {entry.state}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold bg-[#FAF7F0]/90 text-[#35443A] px-2.5 py-1 rounded-xs">
                  <span>{getStatusDot(entry.preservationStatus)}</span>
                  <span className={getStatusColor(entry.preservationStatus)}>
                    Status: {entry.statusLabel}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 id="modal-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#35443A]">
                {entry.name}
              </h2>
              <p className="mt-3 text-base text-[#35443A]/85 leading-relaxed">
                {entry.fullDescription}
              </p>
            </div>
          </div>

          {/* Section 2: HERITAGE CONTINUITY PROFILE (Core Pivot Requirement) */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#5F806B] block">
                  Preservation Diagnostic
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#35443A]">
                  Heritage Continuity Profile
                </h3>
              </div>
              <span className="text-xs text-[#8A735A] italic">
                Demonstration Data · Sample Audit
              </span>
            </div>

            {/* 6 Key Continuity Profile Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3.5 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs">
                <span className="text-[11px] text-[#8A735A] uppercase block font-semibold">Knowledge Holders</span>
                <span className="font-serif text-xl font-bold text-[#35443A] tabular-nums">
                  {entry.continuityProfile.knowledgeHoldersCount} Elders
                </span>
                <span className="text-[10px] text-[#8A735A] block mt-0.5">Documented masters</span>
              </div>

              <div className="p-3.5 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs">
                <span className="text-[11px] text-[#8A735A] uppercase block font-semibold">Young Practitioners</span>
                <span className="font-serif text-xl font-bold text-[#5F806B] tabular-nums">
                  {entry.continuityProfile.youngPractitionersCount} Active
                </span>
                <span className="text-[10px] text-[#8A735A] block mt-0.5">Learners / apprentices</span>
              </div>

              <div className="p-3.5 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs">
                <span className="text-[11px] text-[#8A735A] uppercase block font-semibold">Documented Villages</span>
                <span className="font-serif text-xl font-bold text-[#35443A] tabular-nums">
                  {entry.continuityProfile.communitiesCount} Clusters
                </span>
                <span className="text-[10px] text-[#8A735A] block mt-0.5">Across {entry.state}</span>
              </div>

              <div className="p-3.5 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs">
                <span className="text-[11px] text-[#8A735A] uppercase block font-semibold">Knowledge Transfer</span>
                <span className={`text-sm font-bold block mt-1 ${
                  entry.continuityProfile.knowledgeTransferStatus === 'Active Mentorship' ? 'text-green-700' :
                  entry.continuityProfile.knowledgeTransferStatus === 'Critical Interruption' ? 'text-red-700' : 'text-amber-700'
                }`}>
                  {entry.continuityProfile.knowledgeTransferStatus}
                </span>
                <span className="text-[10px] text-[#8A735A] block">Generational pipeline</span>
              </div>

              <div className="p-3.5 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs">
                <span className="text-[11px] text-[#8A735A] uppercase block font-semibold">Last Field Documented</span>
                <span className="text-sm font-bold text-[#35443A] block mt-1">
                  {entry.continuityProfile.lastDocumented}
                </span>
                <span className="text-[10px] text-[#8A735A] block">Archival field verification</span>
              </div>

              <div className="p-3.5 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs">
                <span className="text-[11px] text-[#8A735A] uppercase block font-semibold">Curriculum Available</span>
                <span className="text-sm font-bold text-[#5F806B] block mt-1">
                  {entry.continuityProfile.learningAvailable ? 'Yes · 5 Steps' : 'Under Review'}
                </span>
                <span className="text-[10px] text-[#8A735A] block">Open student module</span>
              </div>
            </div>

            {/* Risk factors and action */}
            <div className="p-4 bg-[#F1F6F3] border border-[#8FAF9A]/60 rounded-xs space-y-2 text-xs">
              <span className="font-bold text-[#b85b28] uppercase text-[11px] block">
                Primary Transmission Vulnerabilities:
              </span>
              <ul className="space-y-1 text-[#35443A]">
                {entry.continuityProfile.riskFactors.map((r, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#b85b28] font-bold">·</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-[#8FAF9A]/40 text-[#5F806B] font-semibold">
                <strong>Recommended Preservation Action:</strong> {entry.continuityProfile.preservationActionNeeded}
              </div>
            </div>
          </div>

          {/* Section 3: THEN → NOW → PRESERVATION OPPORTUNITY (Core Requirement) */}
          <div className="pt-8 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#8A735A] block">
                Comparative Historical Context
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#35443A]">
                Then → Today → Preservation Opportunity
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Then */}
              <div className="p-4 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs">
                <span className="text-[11px] uppercase font-bold text-[#8A735A] block mb-2">
                  01. Then (Ancestral Practice)
                </span>
                <ul className="space-y-2 text-[#35443A]/85">
                  {entry.thenNowComparison.then.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#5F806B] font-bold">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Today */}
              <div className="p-4 bg-[#FAF7F0] border border-[#b85b28]/50 rounded-xs">
                <span className="text-[11px] uppercase font-bold text-[#b85b28] block mb-2">
                  02. Today (Current Threat)
                </span>
                <ul className="space-y-2 text-[#35443A]/85">
                  {entry.thenNowComparison.today.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#b85b28] font-bold">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunity */}
              <div className="p-4 bg-[#F1F6F3] border border-[#5F806B] rounded-xs">
                <span className="text-[11px] uppercase font-bold text-[#5F806B] block mb-2">
                  03. Preservation Opportunity
                </span>
                <ul className="space-y-2 text-[#35443A] font-medium">
                  {entry.thenNowComparison.preservationOpportunity.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#5F806B] font-bold">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: SIGNATURE UI — KNOWLEDGE JOURNEY (6 Steps) */}
          <div className="pt-8 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#5F806B] block">
                Signature UI Architecture
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#35443A]">
                The Knowledge Journey
              </h3>
              <p className="text-xs text-[#8A735A] mt-1">
                How oral, village-held wisdom travels into verified modern continuity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 pt-2">
              {[
                { title: 'Knowledge Holder', desc: entry.knowledgeJourney.knowledgeHolder, num: '01' },
                { title: 'Documentation', desc: entry.knowledgeJourney.documentation, num: '02' },
                { title: 'Verification', desc: entry.knowledgeJourney.verification, num: '03' },
                { title: 'Learning Module', desc: entry.knowledgeJourney.learningModule, num: '04' },
                { title: 'Young Learner', desc: entry.knowledgeJourney.youngLearner, num: '05' },
                { title: 'Future Practitioner', desc: entry.knowledgeJourney.futurePractitioner, num: '06', highlight: true },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xs border flex flex-col justify-between text-xs ${
                    step.highlight
                      ? 'bg-[#5F806B] text-[#FAF7F0] border-[#5F806B]'
                      : 'bg-[#F8F4EC] border-[#E8D8BD] text-[#35443A]'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                      step.highlight ? 'text-[#E8D8BD]' : 'text-[#8A735A]'
                    }`}>
                      Step {step.num}
                    </span>
                    <strong className="block font-serif text-sm leading-snug mb-1">
                      {step.title}
                    </strong>
                    <p className={`text-[11px] leading-relaxed ${step.highlight ? 'text-[#FAF7F0]/90' : 'text-[#35443A]/75'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: LEARN THIS TRADITION (Interactive Step-by-Step Curriculum) */}
          {entry.learningCurriculum && (
            <div className="pt-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#5F806B] block">
                    Interactive Apprenticeship Module
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#35443A]">
                    Learn This Tradition: {entry.learningCurriculum.moduleTitle}
                  </h3>
                </div>
                <span className="text-xs text-[#8A735A] font-semibold">
                  {completedSteps.length} of {entry.learningCurriculum.steps.length} Steps Completed
                </span>
              </div>

              <div className="space-y-3">
                {entry.learningCurriculum.steps.map((step) => {
                  const isDone = completedSteps.includes(step.stepNumber);
                  return (
                    <div
                      key={step.stepNumber}
                      onClick={() => toggleStep(step.stepNumber)}
                      className={`p-4 rounded-xs border cursor-pointer transition-colors flex items-start gap-4 ${
                        isDone ? 'bg-[#F1F6F3] border-[#5F806B]' : 'bg-[#FAF7F0] border-[#E8D8BD] hover:border-[#8FAF9A]'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-xs flex items-center justify-center shrink-0 text-xs font-bold ${
                        isDone ? 'bg-[#5F806B] text-[#FAF7F0]' : 'bg-[#E8D8BD]/50 text-[#35443A]'
                      }`}>
                        {isDone ? <Check className="w-4 h-4" /> : step.stepNumber}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-base font-semibold text-[#35443A]">
                            Step {step.stepNumber}: {step.title}
                          </h4>
                          <span className="text-[11px] text-[#8A735A] font-medium">{step.duration}</span>
                        </div>
                        <p className="text-xs text-[#35443A]/85 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="mt-2 text-[11px] text-[#5F806B] bg-[#FAF7F0] p-2 rounded-xs border border-[#E8D8BD]/70">
                          <strong>Ancestral Method:</strong> {step.traditionalMethod}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Completion Action */}
              <div className="p-4 bg-[#F8F4EC] border border-[#E8D8BD] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#35443A]">
                  {hasCompletedCurriculum ? (
                    <span className="text-green-700 font-bold flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-green-700" />
                      <span>Module Certified: Digital Apprentice Badge issued!</span>
                    </span>
                  ) : (
                    <span>Click steps above to record practical mastery, then claim completion badge.</span>
                  )}
                </div>

                <button
                  onClick={handleCompleteCurriculum}
                  type="button"
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs ${
                    hasCompletedCurriculum
                      ? 'bg-green-700 text-white'
                      : 'bg-[#5F806B] text-white hover:bg-[#4d6957]'
                  }`}
                >
                  {hasCompletedCurriculum ? '✓ Module Completed' : 'I Completed This Learning Module'}
                </button>
              </div>
            </div>
          )}

          {/* Section 6: PRESERVATION ACTION (4 Multi-Stakeholder Cards) */}
          <div className="pt-8 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#8A735A] block">
                Participatory Action Pathways
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#35443A]">
                How Can You Help Preserve This?
              </h3>
              <p className="text-xs text-[#8A735A] mt-1">
                Preservation succeeds when knowledge holders, students, educators, and institutions collaborate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
              {/* Card 1: Knowledge Holder */}
              <div className="p-4 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xl mb-1">👨🌾</div>
                  <span className="text-[10px] uppercase font-bold text-[#8A735A] block">Knowledge Holder</span>
                  <h4 className="font-serif text-base font-bold text-[#35443A]">Share Your Knowledge</h4>
                  <p className="text-xs text-[#35443A]/75 mt-1 leading-snug">
                    Record your traditional practice, secret botanical dyes, or oral song meters.
                  </p>
                </div>
                <button
                  onClick={() => triggerRoleAction('Knowledge Holder')}
                  className="w-full py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs"
                >
                  Share Knowledge
                </button>
              </div>

              {/* Card 2: Student */}
              <div className="p-4 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xl mb-1">🎓</div>
                  <span className="text-[10px] uppercase font-bold text-[#8A735A] block">Student</span>
                  <h4 className="font-serif text-base font-bold text-[#35443A]">Learn a Tradition</h4>
                  <p className="text-xs text-[#35443A]/75 mt-1 leading-snug">
                    Follow structured learning modules and discover local master keepers to apprentice with.
                  </p>
                </div>
                <button
                  onClick={() => triggerRoleAction('Student Learner')}
                  className="w-full py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs"
                >
                  Start Learning
                </button>
              </div>

              {/* Card 3: Teacher / Researcher */}
              <div className="p-4 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xl mb-1">🧑🏫</div>
                  <span className="text-[10px] uppercase font-bold text-[#8A735A] block">Teacher / Researcher</span>
                  <h4 className="font-serif text-base font-bold text-[#35443A]">Document & Teach</h4>
                  <p className="text-xs text-[#35443A]/75 mt-1 leading-snug">
                    Create verified educational curricula and archive regional linguistic variations.
                  </p>
                </div>
                <button
                  onClick={() => triggerRoleAction('Teacher & Researcher')}
                  className="w-full py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs"
                >
                  Create Resource
                </button>
              </div>

              {/* Card 4: Organization */}
              <div className="p-4 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xl mb-1">🤝</div>
                  <span className="text-[10px] uppercase font-bold text-[#8A735A] block">Organization</span>
                  <h4 className="font-serif text-base font-bold text-[#35443A]">Support Preservation</h4>
                  <p className="text-xs text-[#35443A]/75 mt-1 leading-snug">
                    Sponsor village workshops, fair-wage tool grants, and community seed banks.
                  </p>
                </div>
                <button
                  onClick={() => triggerRoleAction('Partner Organization')}
                  className="w-full py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs"
                >
                  Get Involved
                </button>
              </div>
            </div>

            {actionNotice && (
              <div className="p-3 bg-[#F1F6F3] border border-[#5F806B] rounded-xs text-xs text-[#5F806B] font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-[#5F806B]" />
                <span>{actionNotice}</span>
              </div>
            )}
          </div>

          {/* Section 7: Historical Provenance & Traditional Practice */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#35443A] mb-3">
                Historical Provenance
              </h3>
              <p className="text-sm text-[#35443A]/85 leading-relaxed first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#5F806B]">
                {entry.history}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-[#35443A] mb-3">
                Traditional Methodology
              </h3>
              <p className="text-sm text-[#35443A]/85 leading-relaxed">
                {entry.traditionalPractice}
              </p>
            </div>
          </div>

          {/* Section 8: Why Preserve This? */}
          <div className="pt-8">
            <div className="p-6 bg-[#F1F6F3] border border-[#8FAF9A]/50 rounded-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5F806B] font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#5F806B]" />
                <span>Why Preserve This?</span>
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#35443A] mb-2">
                Ecological & Cultural Imperative
              </h4>
              <p className="text-sm text-[#35443A]/90 leading-relaxed font-sans">
                {entry.whyPreserve}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 border-t border-[#E8D8BD] bg-[#FAF7F0] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#35443A] hover:bg-[#E8D8BD]/30 rounded-xs"
          >
            Close Dossier
          </button>

          <a
            href="#contribute"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] rounded-xs hover:bg-[#4d6957]"
          >
            <span>Contribute Knowledge to this Record</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
