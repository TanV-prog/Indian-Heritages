'use client';

import React, { useState } from 'react';
import { Download, Monitor, Check, Copy, FolderDown, Terminal, Sparkles, X, FileArchive, ArrowRight } from 'lucide-react';

interface ExportDesktopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExportDesktopModal({ isOpen, onClose }: ExportDesktopModalProps) {
  const [activeTab, setActiveTab] = useState<'windows' | 'mac' | 'linux'>('windows');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const commands = {
    windows: [
      {
        title: 'Step 1: Download & Move ZIP to Desktop',
        code: `# Click the button above to download 'indian_heritage_platform_full_project.zip'
# Then move the file from Downloads to your Desktop, or run PowerShell:
Move-Item "$HOME\\Downloads\\indian_heritage_platform_full_project.zip" "$HOME\\Desktop"`,
      },
      {
        title: 'Step 2: Extract to Desktop',
        code: `Expand-Archive -Path "$HOME\\Desktop\\indian_heritage_platform_full_project.zip" -DestinationPath "$HOME\\Desktop\\indian-heritage"`,
      },
      {
        title: 'Step 3: Run the Next.js Frontend',
        code: `cd "$HOME\\Desktop\\indian-heritage"
npm install
npm run dev`,
      },
      {
        title: 'Alternative: Run the Django Backend',
        code: `cd "$HOME\\Desktop\\indian-heritage\\django_project"
pip install -r requirements.txt
python manage.py runserver`,
      },
    ],
    mac: [
      {
        title: 'Step 1: Unzip directly to your Desktop',
        code: `unzip ~/Downloads/indian_heritage_platform_full_project.zip -d ~/Desktop/indian-heritage`,
      },
      {
        title: 'Step 2: Launch Next.js Application',
        code: `cd ~/Desktop/indian-heritage
npm install
npm run dev`,
      },
      {
        title: 'Alternative: Launch Django Backend',
        code: `cd ~/Desktop/indian-heritage/django_project
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver`,
      },
    ],
    linux: [
      {
        title: 'Step 1: Unpack into Desktop folder',
        code: `mkdir -p ~/Desktop/indian-heritage
unzip ~/Downloads/indian_heritage_platform_full_project.zip -d ~/Desktop/indian-heritage`,
      },
      {
        title: 'Step 2: Run dev environment',
        code: `cd ~/Desktop/indian-heritage
npm install
npm run dev`,
      },
    ],
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="export-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs max-w-3xl w-full shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#35443A] text-[#FAF7F0] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xs bg-[#5F806B] flex items-center justify-center text-[#E8D8BD]">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <h2 id="export-modal-title" className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F0]">
                Move Project to Your Desktop
              </h2>
              <p className="text-xs text-[#E8D8BD]/90 mt-0.5">
                Download the complete codebase and unpack it on your computer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#E8D8BD]/80 hover:text-[#FAF7F0] hover:bg-white/10 rounded-xs transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Download CTA Card */}
          <div className="bg-white border-2 border-[#5F806B]/30 rounded-xs p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-[#5F806B]/15 text-[#35443A] rounded-xs">
                  <FileArchive className="w-3.5 h-3.5 text-[#5F806B]" /> Complete Bundle
                </span>
                <span className="text-xs text-[#8A735A] font-medium">~24 MB · Ready to run</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#35443A]">
                indian_heritage_platform_full_project.zip
              </h3>
              <p className="text-xs text-[#35443A]/80 max-w-md leading-relaxed">
                Contains full Next.js 15 app, Django 5 backend with seeded SQLite database, all cultural images, components, and documentation.
              </p>
            </div>

            <a
              href="/download/indian_heritage_platform_full_project.zip"
              download="indian_heritage_platform_full_project.zip"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] active:bg-[#3d5446] rounded-xs transition-colors shadow-sm shrink-0 text-center"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download Project ZIP</span>
            </a>
          </div>

          {/* Included Components Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs">
              <span className="font-bold text-[#35443A] block mb-1">1. Next.js Frontend</span>
              <p className="text-[#8A735A]">
                App Router, Tailwind CSS, 12+ Living Traditions, Interactive Map, Audio Ballads, Quiz Engine.
              </p>
            </div>
            <div className="p-3.5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs">
              <span className="font-bold text-[#35443A] block mb-1">2. Django 5 Backend</span>
              <p className="text-[#8A735A]">
                Models, SQLite pre-seeded DB, admin dashboard, REST API, templates, Render deployment config.
              </p>
            </div>
            <div className="p-3.5 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs">
              <span className="font-bold text-[#35443A] block mb-1">3. Media & Assets</span>
              <p className="text-[#8A735A]">
                Authentic cultural illustrations, photography, audio simulator tracks, and README guide.
              </p>
            </div>
          </div>

          {/* OS-Specific Setup Tabs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8D8BD] pb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#5F806B]" />
                <h4 className="text-sm font-bold text-[#35443A] uppercase tracking-wider">
                  How to move & run on your Desktop
                </h4>
              </div>

              {/* OS Tabs */}
              <div className="flex gap-1 bg-[#E8D8BD]/40 p-1 rounded-xs">
                {(['windows', 'mac', 'linux'] as const).map((os) => (
                  <button
                    key={os}
                    type="button"
                    onClick={() => setActiveTab(os)}
                    className={`px-3 py-1 text-xs font-semibold rounded-xs transition-colors capitalize ${
                      activeTab === os
                        ? 'bg-[#35443A] text-[#FAF7F0]'
                        : 'text-[#35443A]/70 hover:text-[#35443A]'
                    }`}
                  >
                    {os === 'windows' ? 'Windows' : os === 'mac' ? 'macOS' : 'Linux'}
                  </button>
                ))}
              </div>
            </div>

            {/* Steps & Commands for selected OS */}
            <div className="space-y-3">
              {commands[activeTab].map((step, idx) => (
                <div key={idx} className="bg-white border border-[#E8D8BD] rounded-xs overflow-hidden">
                  <div className="px-4 py-2 bg-[#FAF7F0] border-b border-[#E8D8BD] flex items-center justify-between text-xs font-semibold text-[#35443A]">
                    <span>{step.title}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(step.code, idx)}
                      className="inline-flex items-center gap-1.5 text-[11px] text-[#5F806B] hover:text-[#35443A] font-medium"
                      title="Copy command"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-3.5 text-[12px] bg-[#1E2721] text-[#E8D8BD] font-mono overflow-x-auto whitespace-pre">
                    <code>{step.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tip */}
          <div className="p-4 bg-[#5F806B]/10 border border-[#5F806B]/30 rounded-xs text-xs text-[#35443A] space-y-1">
            <span className="font-bold flex items-center gap-1.5 text-[#35443A]">
              <Sparkles className="w-3.5 h-3.5 text-[#5F806B]" /> No dependencies needed to download
            </span>
            <p className="text-[#35443A]/80 leading-relaxed">
              Once downloaded, the folder on your Desktop contains everything in pure source code form. You can open it in VS Code, Cursor, or any IDE. To start right away, open terminal in the folder and run <code>npm install && npm run dev</code>.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#FAF7F0] border-t border-[#E8D8BD] flex items-center justify-between">
          <span className="text-xs text-[#8A735A]">
            Direct archive path: <code>/download/indian_heritage_platform_full_project.zip</code>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#35443A] bg-white border border-[#E8D8BD] hover:bg-[#E8D8BD]/20 rounded-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
