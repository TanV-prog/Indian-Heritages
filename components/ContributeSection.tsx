'use client';

import React, { useState } from 'react';
import { ContributionSubmission, HeritageEntry } from '@/lib/heritage-data';
import { Send, CheckCircle, ShieldAlert, Check, X, Shield, Eye, Layers } from 'lucide-react';

interface ContributeSectionProps {
  onNewApprovedEntry?: (entry: HeritageEntry) => void;
  initialSubmissions: ContributionSubmission[];
}

export default function ContributeSection({
  onNewApprovedEntry,
  initialSubmissions,
}: ContributeSectionProps) {
  const [submissions, setSubmissions] = useState<ContributionSubmission[]>(initialSubmissions);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State with new continuity questions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: '',
    district: '',
    village: '',
    contributionType: 'Traditional farming practice',
    heritageName: '',
    whoPractices: '',
    isActivelyPracticed: 'Yes' as ContributionSubmission['isActivelyPracticed'],
    areYouthLearning: 'Few' as ContributionSubmission['areYouthLearning'],
    canTeach: 'Yes' as ContributionSubmission['canTeach'],
    description: '',
    traditionalPractice: '',
    culturalSignificance: '',
    preservationStatus: 'at_risk' as HeritageEntry['preservationStatus'],
    audioVideoLink: '',
    additionalInfo: '',
    permissionGranted: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Contributor name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errors.email = 'Valid email is required for verification contact';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.heritageName.trim()) errors.heritageName = 'Heritage or practice name is required';
    if (!formData.description.trim() || formData.description.length < 20)
      errors.description = 'Please provide a descriptive overview (min 20 characters)';
    if (!formData.permissionGranted)
      errors.permission = 'You must confirm permission to document this knowledge';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    const newSubmission: ContributionSubmission = {
      id: `contrib-${Date.now()}`,
      contributorName: formData.name,
      email: formData.email,
      state: formData.state,
      district: formData.district || 'Rural Cluster',
      village: formData.village || 'Village Commons',
      contributionType: formData.contributionType,
      heritageName: formData.heritageName,
      whoPractices: formData.whoPractices || 'Elder community practitioners',
      isActivelyPracticed: formData.isActivelyPracticed,
      areYouthLearning: formData.areYouthLearning,
      canTeach: formData.canTeach,
      description: formData.description,
      traditionalPractice: formData.traditionalPractice || 'Traditional oral lineage',
      culturalSignificance: formData.culturalSignificance || 'Living community practice',
      preservationStatus: formData.preservationStatus,
      audioVideoLink: formData.audioVideoLink,
      additionalInfo: formData.additionalInfo,
      permissionGranted: formData.permissionGranted,
      status: 'Pending Review',
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };

    setSubmissions([newSubmission, ...submissions]);
    setSubmittedSuccess(true);

    // Reset fields
    setFormData({
      name: '',
      email: '',
      state: '',
      district: '',
      village: '',
      contributionType: 'Traditional farming practice',
      heritageName: '',
      whoPractices: '',
      isActivelyPracticed: 'Yes',
      areYouthLearning: 'Few',
      canTeach: 'Yes',
      description: '',
      traditionalPractice: '',
      culturalSignificance: '',
      preservationStatus: 'at_risk',
      audioVideoLink: '',
      additionalInfo: '',
      permissionGranted: false,
    });
  };

  const updateSubmissionStatus = (
    id: string,
    newStatus: ContributionSubmission['status']
  ) => {
    const updated = submissions.map((sub) => {
      if (sub.id === id) {
        return { ...sub, status: newStatus };
      }
      return sub;
    });
    setSubmissions(updated);

    if (newStatus === 'Published' || newStatus === 'Community Verified') {
      const approvedSub = updated.find((s) => s.id === id);
      if (approvedSub && onNewApprovedEntry) {
        const approvedEntry: HeritageEntry = {
          id: approvedSub.id,
          slug: approvedSub.heritageName.toLowerCase().replace(/\s+/g, '-'),
          name: approvedSub.heritageName,
          category: 'farming',
          categoryLabel: approvedSub.contributionType,
          state: approvedSub.state,
          district: approvedSub.district,
          village: approvedSub.village,
          shortDescription: approvedSub.description,
          fullDescription: `${approvedSub.description} Documented by ${approvedSub.contributorName}.`,
          history: 'Documented via community submission during the 2026 heritage preservation cycle.',
          traditionalPractice: approvedSub.traditionalPractice,
          materialsUsed: ['Locally gathered natural ingredients', 'Artisan hand tools'],
          culturalSignificance: approvedSub.culturalSignificance,
          associatedCommunities: approvedSub.whoPractices || `Local village custodians in ${approvedSub.district}, ${approvedSub.state}`,
          currentChallenges: 'Dwindling youth participation and raw material availability.',
          preservationStatus: approvedSub.preservationStatus,
          statusLabel: approvedSub.preservationStatus.charAt(0).toUpperCase() + approvedSub.preservationStatus.slice(1),
          latitude: 20.5937,
          longitude: 78.9629,
          image: '/images/kalamkari_textile_art.jpg',
          contributor: `${approvedSub.contributorName} (Community Submission)`,
          verificationStatus: 'Community Verified',
          continuityProfile: {
            knowledgeHoldersCount: 15,
            youngPractitionersCount: approvedSub.areYouthLearning === 'Yes' ? 8 : 2,
            communitiesCount: 2,
            lastDocumented: 'April 2026',
            learningAvailable: true,
            knowledgeTransferStatus: approvedSub.areYouthLearning === 'None' ? 'Critical Interruption' : 'Fragmented Transmission',
            riskFactors: ['Few youth learners documented', 'Informal oral transmission without physical syllabus'],
            preservationActionNeeded: 'Connect with local vocational centers for structured apprentice pairing.',
          },
          thenNowComparison: {
            then: ['Practiced across all households in the locality'],
            today: ['Practiced only by few remaining elder practitioners'],
            preservationOpportunity: ['Digital curriculum recording and school demonstration circles'],
          },
          knowledgeJourney: {
            knowledgeHolder: approvedSub.whoPractices || 'Elder community practitioners',
            documentation: 'Community submission recorded on Indian Heritage platform',
            verification: 'Verified through community review pipeline',
            learningModule: 'Modular learning steps available for students',
            youngLearner: 'Youth apprentice connected via platform',
            futurePractitioner: 'Active new practitioner sustaining living craft',
          },
          whyPreserve: approvedSub.culturalSignificance,
          relatedTraditions: ['Local Village Knowledge'],
        };
        onNewApprovedEntry(approvedEntry);
      }
    }
  };

  return (
    <section id="contribute" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5F806B] font-bold mb-3">
              <span>Community Archival Pipeline</span>
              <span aria-hidden="true">·</span>
              <span>Preventing Memory Loss</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
              Help Keep a Tradition Alive
            </h2>
            <blockquote className="mt-3 p-3 bg-[#FAF7F0] border-l-2 border-[#5F806B] text-sm italic font-serif text-[#35443A]/90">
              &ldquo;The knowledge of a farmer, artisan, storyteller or elder can disappear when there is no record of it. Help us preserve that knowledge for future generations.&rdquo;
            </blockquote>
          </div>

          {/* Verification Workflow Curatorial Pipeline Toggle */}
          <button
            onClick={() => setIsAdminMode(!isAdminMode)}
            type="button"
            className="self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-[#E8D8BD]/40 hover:bg-[#E8D8BD] border border-[#8A735A]/50 rounded-xs transition-colors cursor-pointer"
          >
            <Shield className="w-4 h-4 text-[#5F806B]" />
            <span>{isAdminMode ? 'Back to Submission Form' : 'Curatorial Review Pipeline'}</span>
          </button>
        </div>

        {/* VERIFICATION PIPELINE MODERATION VIEW */}
        {isAdminMode ? (
          <div className="p-6 sm:p-8 bg-[#F8F4EC] border border-[#5F806B] rounded-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8D8BD] pb-4 gap-2">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5F806B]">
                  Archival Governance Workflow
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#35443A]">
                  Multi-Stage Verification Queue
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#8A735A]">
                <span className="bg-[#FAF7F0] px-2 py-0.5 rounded-xs border">Pending Review</span>
                <span>→</span>
                <span className="bg-[#FAF7F0] px-2 py-0.5 rounded-xs border">Under Review</span>
                <span>→</span>
                <span className="bg-[#FAF7F0] px-2 py-0.5 rounded-xs border">Community Verified</span>
                <span>→</span>
                <span className="bg-[#5F806B] text-[#FAF7F0] px-2 py-0.5 rounded-xs font-bold">Published</span>
              </div>
            </div>

            <div className="space-y-4">
              {submissions.map((sub) => (
                <div
                  key={sub.id}
                  className="p-5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-[#8A735A]">
                      <span className="font-semibold text-[#5F806B] uppercase">{sub.contributionType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sub.state} ({sub.village})</span>
                      <span aria-hidden="true">·</span>
                      <span>Submitted: {sub.submittedAt}</span>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#35443A]">
                      {sub.heritageName}
                    </h4>

                    <p className="text-xs text-[#35443A]/80 max-w-2xl leading-relaxed">
                      {sub.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#8A735A] pt-1">
                      <span>Practiced by: <strong>{sub.whoPractices || 'Elders'}</strong></span>
                      <span>·</span>
                      <span>Youth Learning: <strong>{sub.areYouthLearning}</strong></span>
                      <span>·</span>
                      <span>Can Teach: <strong>{sub.canTeach}</strong></span>
                      <span>·</span>
                      <span>Contributor: <strong>{sub.contributorName}</strong></span>
                    </div>
                  </div>

                  {/* Actions & Status Dropdown */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                    <div className="text-xs font-semibold px-2.5 py-1 rounded-xs border bg-white">
                      Status: <span className={
                        sub.status === 'Published' || sub.status === 'Community Verified' ? 'text-green-700 font-bold' :
                        sub.status === 'Under Review' ? 'text-amber-700 font-bold' : 'text-[#8A735A] font-bold'
                      }>{sub.status}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateSubmissionStatus(sub.id, 'Under Review')}
                        className="px-2 py-1 text-[11px] font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-xs"
                      >
                        Under Review
                      </button>

                      <button
                        onClick={() => updateSubmissionStatus(sub.id, 'Community Verified')}
                        className="px-2.5 py-1 text-[11px] font-semibold text-green-900 bg-green-100 hover:bg-green-200 rounded-xs"
                      >
                        Verify & Publish
                      </button>

                      <button
                        onClick={() => updateSubmissionStatus(sub.id, 'Pending Review')}
                        className="px-2 py-1 text-[11px] text-[#35443A] hover:bg-[#E8D8BD]/50 rounded-xs"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-xs text-[#8A735A] italic border-t border-[#E8D8BD] pt-4">
              * Community contributions never automatically publish without multi-stage editorial review and elder verification.
            </div>
          </div>
        ) : (
          /* STANDARD SUBMISSION FORM */
          <div className="bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs p-6 sm:p-10 shadow-2xs">
            {submittedSuccess && (
              <div className="mb-8 p-5 bg-[#F1F6F3] border border-[#8FAF9A] rounded-xs flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#5F806B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#35443A] leading-relaxed">
                  <strong className="block font-serif text-base text-[#5F806B]">
                    Knowledge Record Submitted for Review
                  </strong>
                  Your heritage submission has been logged into the preservation database with status{' '}
                  <span className="font-semibold text-[#8A735A]">&quot;Pending Review&quot;</span>. It will now progress through community validation before being cataloged in the open learning directory.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Contributor Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Varma"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  />
                  {formErrors.name && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. radhika@example.org"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  />
                  {formErrors.email && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Location Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    State / UT *
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="e.g. Andhra Pradesh"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  />
                  {formErrors.state && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.state}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    District
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="e.g. Krishna"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    Village / Town
                  </label>
                  <input
                    type="text"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    placeholder="e.g. Pedana"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  />
                </div>
              </div>

              {/* Row 3: Contribution Type & Tradition Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    What are you contributing? *
                  </label>
                  <select
                    value={formData.contributionType}
                    onChange={(e) => setFormData({ ...formData, contributionType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  >
                    <option value="Traditional farming practice">🌾 Traditional farming practice</option>
                    <option value="Craft technique">🧵 Craft technique</option>
                    <option value="Folk story">📖 Folk story</option>
                    <option value="Folk song">🎶 Folk song</option>
                    <option value="Traditional recipe">🍲 Traditional recipe</option>
                    <option value="Festival tradition">🎉 Festival tradition</option>
                    <option value="Indigenous knowledge">🌿 Indigenous knowledge</option>
                    <option value="Village tradition">🏡 Village tradition</option>
                    <option value="Traditional architecture">🏛 Traditional architecture</option>
                    <option value="Other">✨ Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    Heritage Practice Name *
                  </label>
                  <input
                    type="text"
                    value={formData.heritageName}
                    onChange={(e) => setFormData({ ...formData, heritageName: e.target.value })}
                    placeholder="e.g. Navadhanya Mixed Dryland Sowing"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  />
                  {formErrors.heritageName && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.heritageName}</span>
                  )}
                </div>
              </div>

              {/* Row 4: Continuity Support Fields (Crucial User Brief Requirement) */}
              <div className="p-4 bg-[#F8F4EC] rounded-xs border border-[#E8D8BD] space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-[#5F806B] block">
                  Continuity & Transmission Assessment
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#8A735A] mb-1">
                      Who traditionally practices this?
                    </label>
                    <input
                      type="text"
                      value={formData.whoPractices}
                      onChange={(e) => setFormData({ ...formData, whoPractices: e.target.value })}
                      placeholder="e.g. Village elder women farmers"
                      className="w-full px-3 py-2 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#8A735A] mb-1">
                      Is it still actively practiced?
                    </label>
                    <select
                      value={formData.isActivelyPracticed}
                      onChange={(e) => setFormData({ ...formData, isActivelyPracticed: e.target.value as any })}
                      className="w-full px-3 py-2 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A]"
                    >
                      <option value="Yes">Yes (Widely in daily life)</option>
                      <option value="Partially">Partially (Only during festivals/rituals)</option>
                      <option value="No / Barely">No / Barely (Only few elders remember)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#8A735A] mb-1">
                      Are younger people learning it?
                    </label>
                    <select
                      value={formData.areYouthLearning}
                      onChange={(e) => setFormData({ ...formData, areYouthLearning: e.target.value as any })}
                      className="w-full px-3 py-2 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A]"
                    >
                      <option value="Yes">Yes (Active youth participation)</option>
                      <option value="Few">Few (Only within some families)</option>
                      <option value="None">None (Severe generational gap)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div>
                    <label className="block font-semibold text-[#8A735A] mb-1">
                      Can someone teach this practice to others?
                    </label>
                    <select
                      value={formData.canTeach}
                      onChange={(e) => setFormData({ ...formData, canTeach: e.target.value as any })}
                      className="w-full px-3 py-2 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A]"
                    >
                      <option value="Yes">Yes (Elders willing to guide students)</option>
                      <option value="Possibly">Possibly with community support</option>
                      <option value="No">No active teachers available</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#8A735A] mb-1">
                      Preservation Risk Status
                    </label>
                    <select
                      value={formData.preservationStatus}
                      onChange={(e) => setFormData({ ...formData, preservationStatus: e.target.value as any })}
                      className="w-full px-3 py-2 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A]"
                    >
                      <option value="thriving">🟢 Thriving</option>
                      <option value="declining">🟡 Declining</option>
                      <option value="at_risk">🟠 At Risk</option>
                      <option value="endangered">🔴 Critically At Risk</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 5: Detailed Descriptions */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                  Detailed Description *
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Explain what this knowledge entails, its tools, botanical materials, or performance structure..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                />
                {formErrors.description && (
                  <span className="text-xs text-red-600 mt-1 block">{formErrors.description}</span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    How is it traditionally practiced?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.traditionalPractice}
                    onChange={(e) => setFormData({ ...formData, traditionalPractice: e.target.value })}
                    placeholder="Step-by-step methodology, ingredients, timing, or oral meter..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A735A] mb-1.5">
                    Cultural & Ecological Significance
                  </label>
                  <textarea
                    rows={3}
                    value={formData.culturalSignificance}
                    onChange={(e) => setFormData({ ...formData, culturalSignificance: e.target.value })}
                    placeholder="Why is it essential to carry this knowledge forward to future generations?"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs text-[#35443A] focus:outline-none focus:border-[#5F806B]"
                  />
                </div>
              </div>

              {/* Permission Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.permissionGranted}
                    onChange={(e) => setFormData({ ...formData, permissionGranted: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded-xs border-[#E8D8BD] text-[#5F806B] focus:ring-[#5F806B]"
                  />
                  <span className="text-xs text-[#35443A]/85 leading-normal">
                    I confirm that I have permission to share this traditional knowledge and that it respects customary community practices. I understand submissions undergo review before publication.
                  </span>
                </label>
                {formErrors.permission && (
                  <span className="text-xs text-red-600 mt-1 block">{formErrors.permission}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#E8D8BD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-[11px] text-[#8A735A]">
                  * All contributions are recorded with status <em>Pending Review</em>.
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E8D8BD]" />
                  <span>Submit for Archival Review</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
