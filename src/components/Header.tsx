import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  currentView: 'dashboard' | 'exam' | 'result' | 'print';
  onNavigate: (view: 'dashboard' | 'exam' | 'result' | 'print') => void;
  onOpenSyllabus: () => void;
  activeTestTitle?: string;
  hasActiveTest: boolean;
  onResumeTest: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSyllabus,
  activeTestTitle,
  hasActiveTest,
  onResumeTest,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-left group"
          >
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm tracking-tight">
              ST
            </div>
            <span className="text-lg font-bold tracking-tight text-black whitespace-nowrap shrink-0 group-hover:underline">
              STET 20 MOCKS
            </span>
          </button>

          {/* Zone 2: clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`hover:text-black transition-colors whitespace-nowrap shrink-0 ${
                currentView === 'dashboard' ? 'text-black font-semibold underline underline-offset-4' : ''
              }`}
            >
              All 20 Tests
            </button>

            <button
              onClick={onOpenSyllabus}
              className="hover:text-black transition-colors whitespace-nowrap shrink-0"
            >
              Exam Pattern & Cut-off
            </button>

            <a
              href="https://www.linkedin.com/in/deepak03-in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              Curator: Deepak
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {currentView === 'exam' ? (
              <button
                onClick={() => onNavigate('dashboard')}
                className="px-4 py-2 text-xs font-semibold text-black bg-zinc-100 hover:bg-zinc-200 border border-black transition-colors whitespace-nowrap shrink-0"
              >
                Exit to Dashboard
              </button>
            ) : hasActiveTest ? (
              <button
                onClick={onResumeTest}
                className="px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-zinc-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Resume Test</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  onNavigate('exam');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-zinc-800 transition-colors whitespace-nowrap shrink-0"
              >
                Start Test 01
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
