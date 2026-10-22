import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onOpenSyllabus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSyllabus }) => {
  return (
    <footer className="mt-auto bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-lg tracking-tight">STET 20 MOCKS</span>
              <span className="text-xs text-zinc-400">· Official CBT Simulator</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Authentic Bihar STET & BPSC TRE 4.0 exam prep platform featuring 20 full-length bilingual test series, accurate marking scheme, official syllabus mapping, and comprehensive explanations.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Platform Features
            </h4>
            <ul className="text-xs text-zinc-400 space-y-2">
              <li>
                <button onClick={onOpenSyllabus} className="hover:text-white transition-colors">
                  Official Syllabus & Qualifying Cut-off Marks
                </button>
              </li>
              <li>
                <span className="text-zinc-500">150 Questions · 150 Marks · 150 Minutes Timed Mocks</span>
              </li>
              <li>
                <span className="text-zinc-500">Bilingual (हिंदी एवं English) Question Display</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Platform Creator & Curator
            </h4>
            <div className="bg-zinc-900 border border-zinc-700 p-4">
              <p className="text-sm font-bold text-white mb-1">Deepak</p>
              <p className="text-xs text-zinc-400 mb-3">
                Test Series Architect & Technology Lead
              </p>
              <a
                href="https://www.linkedin.com/in/deepak03-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-zinc-500 mt-2 break-all">
                https://www.linkedin.com/in/deepak03-in
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            Designed & Created by <span className="text-white font-medium">Deepak</span> · Bihar STET & BPSC TRE-4 Test Series
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/deepak03-in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors underline"
            >
              https://www.linkedin.com/in/deepak03-in
            </a>
            <span aria-hidden="true">·</span>
            <span>Hostable Static Build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
