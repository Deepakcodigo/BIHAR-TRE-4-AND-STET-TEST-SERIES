import React, { useState, useEffect, useMemo } from 'react';
import { ALL_TEST_SERIES } from './data/testsData';
import { generateTestQuestions } from './data/questionBank';
import { TestSeriesInfo, UserAttempt, Question } from './types';
import { getAllAttempts, getStoredAttempt, saveStoredAttempt, clearAttempt, resetAllData } from './utils/storage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TestCard } from './components/TestCard';
import { ExamEngine } from './components/ExamEngine';
import { ResultAnalytics } from './components/ResultAnalytics';
import { PrintPaperView } from './components/PrintPaperView';
import { SyllabusModal } from './components/SyllabusModal';
import { 
  Search, Filter, CheckCircle2, Award, Clock, 
  RotateCcw, BookOpen, ExternalLink, ShieldCheck, ChevronRight 
} from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'exam' | 'result' | 'print'>('dashboard');
  const [activeTestId, setActiveTestId] = useState<string>('stet-mock-01');
  const [attempts, setAttempts] = useState<Record<string, UserAttempt>>({});
  
  // Modals
  const [isSyllabusOpen, setIsSyllabusOpen] = useState<boolean>(false);
  
  // Dashboard filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [paperFilter, setPaperFilter] = useState<'all' | 'Paper 1 (Secondary)' | 'Paper 2 (Sr Secondary)' | 'BPSC TRE 4.0 Special' | 'completed'>('all');

  // Load saved attempts on initial render
  useEffect(() => {
    const loaded = getAllAttempts();
    setAttempts(loaded);
  }, []);

  const activeTest = useMemo(() => {
    return ALL_TEST_SERIES.find(t => t.id === activeTestId) || ALL_TEST_SERIES[0];
  }, [activeTestId]);

  // Generate deterministic questions for active test
  const activeQuestions = useMemo(() => {
    return generateTestQuestions(activeTest.testNumber - 1);
  }, [activeTest.testNumber]);

  // Active attempt
  const currentAttempt = attempts[activeTest.id] || null;

  // Filtered test series for dashboard
  const filteredTests = useMemo(() => {
    return ALL_TEST_SERIES.filter(test => {
      const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            test.pyqTag.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      if (paperFilter === 'completed') {
        return Boolean(attempts[test.id]?.isCompleted);
      }
      if (paperFilter !== 'all') {
        return test.paperType === paperFilter;
      }
      return true;
    });
  }, [searchQuery, paperFilter, attempts]);

  // Summary statistics
  const stats = useMemo(() => {
    const completedList = Object.values(attempts).filter(a => a.isCompleted);
    const totalCompleted = completedList.length;
    const avgScore = totalCompleted > 0 
      ? completedList.reduce((acc, curr) => acc + (curr.score || 0), 0) / totalCompleted 
      : 0;
    const passedCount = completedList.filter(a => (a.score || 0) >= 75).length;

    return { totalCompleted, avgScore, passedCount };
  }, [attempts]);

  // Navigation handlers
  const handleStartTest = (testId: string) => {
    setActiveTestId(testId);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewResult = (testId: string) => {
    setActiveTestId(testId);
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrintTest = (testId: string) => {
    setActiveTestId(testId);
    setCurrentView('print');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeTest = (testId: string) => {
    if (window.confirm('Reset this test attempt and start fresh?')) {
      clearAttempt(testId);
      setAttempts(prev => {
        const updated = { ...prev };
        delete updated[testId];
        return updated;
      });
      setActiveTestId(testId);
      setCurrentView('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveAttempt = (attempt: UserAttempt) => {
    saveStoredAttempt(attempt);
    setAttempts(prev => ({
      ...prev,
      [attempt.testId]: attempt,
    }));
  };

  const handleSubmitExam = (attempt: UserAttempt) => {
    saveStoredAttempt(attempt);
    setAttempts(prev => ({
      ...prev,
      [attempt.testId]: attempt,
    }));
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeTest = () => {
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetAllAttempts = () => {
    if (window.confirm('Are you sure you want to reset all test attempts and scores?')) {
      resetAllData();
      setAttempts({});
    }
  };

  // Render view
  if (currentView === 'exam') {
    return (
      <ExamEngine
        test={activeTest}
        questions={activeQuestions}
        initialAttempt={currentAttempt}
        onSaveAttempt={handleSaveAttempt}
        onSubmitExam={handleSubmitExam}
        onExit={() => setCurrentView('dashboard')}
      />
    );
  }

  if (currentView === 'result' && currentAttempt) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header
          currentView={currentView}
          onNavigate={setCurrentView}
          onOpenSyllabus={() => setIsSyllabusOpen(true)}
          activeTestTitle={activeTest.title}
          hasActiveTest={Boolean(currentAttempt && !currentAttempt.isCompleted)}
          onResumeTest={handleResumeTest}
        />
        <main className="flex-1">
          <ResultAnalytics
            test={activeTest}
            questions={activeQuestions}
            attempt={currentAttempt}
            onRetake={() => handleRetakeTest(activeTest.id)}
            onBackToDashboard={() => setCurrentView('dashboard')}
            onPrintReport={() => setCurrentView('print')}
          />
        </main>
        <Footer
          onOpenSyllabus={() => setIsSyllabusOpen(true)}
        />
        <SyllabusModal isOpen={isSyllabusOpen} onClose={() => setIsSyllabusOpen(false)} />
      </div>
    );
  }

  if (currentView === 'print') {
    return (
      <PrintPaperView
        test={activeTest}
        questions={activeQuestions}
        onBack={() => setCurrentView('dashboard')}
      />
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <Header
        currentView={currentView}
        onNavigate={setCurrentView}
        onOpenSyllabus={() => setIsSyllabusOpen(true)}
        activeTestTitle={activeTest.title}
        hasActiveTest={Boolean(currentAttempt && !currentAttempt.isCompleted)}
        onResumeTest={handleResumeTest}
      />

      <main className="flex-1">
        {/* Editorial Executive Hero */}
        <section className="border-b border-black bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-600 mb-3">
                <span>Bihar STET & BPSC TRE 4.0</span>
                <span aria-hidden="true">·</span>
                <span>Official Test Series Platform</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight mb-4 text-balance">
                20 Full-Length Test Series for STET & BPSC TRE 4
              </h1>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-6">
                Curated by <strong>Deepak</strong>. Designed with the authentic BSEB computer-based test pattern: 150 questions, 150 marks, 150 minutes duration, bilingual Hindi-English options, and in-depth pedagogical solutions for Unit I Core Subject, Unit II (A) Art of Teaching, and Unit II (B) General Aptitude.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleStartTest('stet-mock-01')}
                  className="px-6 py-3 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Start Mock Test 01
                </button>

                <button
                  onClick={() => setIsSyllabusOpen(true)}
                  className="px-5 py-3 border border-black hover:bg-zinc-100 text-black text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  View Official Syllabus & Cut-offs
                </button>
              </div>
            </div>

            {/* KPI Performance Bar */}
            <div className="mt-12 pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[11px]">Total Test Series</span>
                <span className="text-2xl font-bold text-black tabular-nums">20 Full Mocks</span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">3,000 Total Questions</span>
              </div>

              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[11px]">Exam Blueprint</span>
                <span className="text-2xl font-bold text-black tabular-nums">150 Qs / 150 M</span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">150 Minutes CBT Timer</span>
              </div>

              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[11px]">General Cut-off</span>
                <span className="text-2xl font-bold text-black tabular-nums">75.0 Marks</span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">50% Qualifying Marks</span>
              </div>

              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[11px]">Your Progress</span>
                <span className="text-2xl font-bold text-black tabular-nums">
                  {stats.totalCompleted} / 20 Done
                </span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">
                  {stats.passedCount} Cleared Cut-off
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Test Series Catalog Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-black mb-8">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search mock tests by topic, PYQ year, or subject..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-black text-xs placeholder:text-zinc-400 focus:outline-hidden bg-white"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              <button
                onClick={() => setPaperFilter('all')}
                className={`px-3 py-1.5 font-medium whitespace-nowrap transition-colors border ${
                  paperFilter === 'all'
                    ? 'bg-black text-white border-black font-semibold'
                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
                }`}
              >
                All 20 Tests
              </button>

              <button
                onClick={() => setPaperFilter('Paper 1 (Secondary)')}
                className={`px-3 py-1.5 font-medium whitespace-nowrap transition-colors border ${
                  paperFilter === 'Paper 1 (Secondary)'
                    ? 'bg-black text-white border-black font-semibold'
                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
                }`}
              >
                Paper 1 (Secondary)
              </button>

              <button
                onClick={() => setPaperFilter('Paper 2 (Sr Secondary)')}
                className={`px-3 py-1.5 font-medium whitespace-nowrap transition-colors border ${
                  paperFilter === 'Paper 2 (Sr Secondary)'
                    ? 'bg-black text-white border-black font-semibold'
                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
                }`}
              >
                Paper 2 (Higher Sec)
              </button>

              <button
                onClick={() => setPaperFilter('BPSC TRE 4.0 Special')}
                className={`px-3 py-1.5 font-medium whitespace-nowrap transition-colors border ${
                  paperFilter === 'BPSC TRE 4.0 Special'
                    ? 'bg-black text-white border-black font-semibold'
                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
                }`}
              >
                BPSC TRE 4.0 Special
              </button>

              <button
                onClick={() => setPaperFilter('completed')}
                className={`px-3 py-1.5 font-medium whitespace-nowrap transition-colors border ${
                  paperFilter === 'completed'
                    ? 'bg-black text-white border-black font-semibold'
                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
                }`}
              >
                Attempted ({stats.totalCompleted})
              </button>
            </div>
          </div>

          {/* 20 Tests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTests.map(test => (
              <TestCard
                key={test.id}
                test={test}
                attempt={attempts[test.id]}
                onStart={handleStartTest}
                onViewResult={handleViewResult}
                onPrint={handlePrintTest}
                onRetake={handleRetakeTest}
              />
            ))}
          </div>

          {filteredTests.length === 0 && (
            <div className="text-center py-16 border border-dashed border-zinc-300 p-8">
              <p className="text-sm font-semibold text-black mb-1">No matching test series found</p>
              <p className="text-xs text-zinc-500 mb-4">Try adjusting your search query or filter selection.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setPaperFilter('all');
                }}
                className="px-4 py-2 bg-black text-white text-xs font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Reset progress action */}
          {stats.totalCompleted > 0 && (
            <div className="p-4 bg-zinc-50 border border-zinc-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <span className="text-zinc-600">
                You have completed {stats.totalCompleted} test(s) with an average score of {stats.avgScore.toFixed(1)}/150.
              </span>
              <button
                onClick={handleResetAllAttempts}
                className="text-zinc-700 hover:text-black underline font-semibold transition-colors"
              >
                Reset All Attempt History
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer
        onOpenSyllabus={() => setIsSyllabusOpen(true)}
      />

      <SyllabusModal isOpen={isSyllabusOpen} onClose={() => setIsSyllabusOpen(false)} />
    </div>
  );
}
