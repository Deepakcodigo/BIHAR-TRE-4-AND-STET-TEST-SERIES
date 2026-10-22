import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Question, TestSeriesInfo, UserAttempt, QuestionStatus } from '../types';
import { 
  Clock, Flag, Check, ArrowLeft, ArrowRight, RotateCcw, 
  HelpCircle, AlertCircle, ChevronRight, Eye, Bookmark, LayoutGrid
} from 'lucide-react';

interface ExamEngineProps {
  test: TestSeriesInfo;
  questions: Question[];
  initialAttempt?: UserAttempt | null;
  onSaveAttempt: (attempt: UserAttempt) => void;
  onSubmitExam: (attempt: UserAttempt) => void;
  onExit: () => void;
}

export const ExamEngine: React.FC<ExamEngineProps> = ({
  test,
  questions,
  initialAttempt,
  onSaveAttempt,
  onSubmitExam,
  onExit,
}) => {
  // Current question index (0 to 149)
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // User state
  const [answers, setAnswers] = useState<Record<number, number>>(initialAttempt?.answers || {});
  const [markedForReview, setMarkedForReview] = useState<number[]>(initialAttempt?.markedForReview || []);
  const [visitedQuestions, setVisitedQuestions] = useState<number[]>(
    initialAttempt?.visitedQuestions || [1]
  );

  // Time remaining in seconds (default 150 minutes = 9000s)
  const totalSeconds = test.durationMinutes * 60;
  const [timeRemaining, setTimeRemaining] = useState<number>(
    initialAttempt && initialAttempt.timeSpentSeconds < totalSeconds 
      ? totalSeconds - initialAttempt.timeSpentSeconds 
      : totalSeconds
  );
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

  // Preferences
  const [languageMode, setLanguageMode] = useState<'bilingual' | 'hindi' | 'english'>('bilingual');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<'all' | 'core_subject' | 'art_of_teaching' | 'other_skills'>('all');
  const [paletteFilter, setPaletteFilter] = useState<'all' | 'unanswered' | 'marked'>('all');
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [showPaletteMobile, setShowPaletteMobile] = useState<boolean>(false);

  // Negative marking toggle (STET = 0, BPSC TRE = 0.25)
  const [enableTreNegative, setEnableTreNegative] = useState<boolean>(false);

  const currentQuestion = questions[currentIndex] || questions[0];

  // Track visited questions
  useEffect(() => {
    if (currentQuestion && !visitedQuestions.includes(currentQuestion.id)) {
      setVisitedQuestions(prev => [...prev, currentQuestion.id]);
    }
  }, [currentIndex, currentQuestion, visitedQuestions]);

  // Timer countdown
  useEffect(() => {
    if (isTimerPaused) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto submit
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerPaused]);

  // Periodic autosave to localStorage every 10 seconds
  useEffect(() => {
    const saveInterval = setInterval(() => {
      const timeSpent = totalSeconds - timeRemaining;
      onSaveAttempt({
        testId: test.id,
        startedAt: initialAttempt?.startedAt || Date.now(),
        timeSpentSeconds: timeSpent,
        answers,
        markedForReview,
        visitedQuestions,
        isCompleted: false,
      });
    }, 10000);

    return () => clearInterval(saveInterval);
  }, [answers, markedForReview, visitedQuestions, timeRemaining, test.id, totalSeconds]);

  // Format time mm:ss or hh:mm:ss
  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Status helper for question
  const getQuestionStatus = (qId: number): QuestionStatus => {
    const isAnswered = answers[qId] !== undefined;
    const isMarked = markedForReview.includes(qId);
    const isVisited = visitedQuestions.includes(qId);

    if (isAnswered && isMarked) return 'answered_and_marked';
    if (isAnswered) return 'answered';
    if (isMarked) return 'marked_for_review';
    if (isVisited) return 'not_answered';
    return 'not_visited';
  };

  // Status counts
  const statusCounts = useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let marked = 0;
    let answeredAndMarked = 0;
    let notVisited = 0;

    questions.forEach(q => {
      const status = getQuestionStatus(q.id);
      if (status === 'answered') answered++;
      else if (status === 'answered_and_marked') answeredAndMarked++;
      else if (status === 'marked_for_review') marked++;
      else if (status === 'not_answered') notAnswered++;
      else notVisited++;
    });

    return { answered, notAnswered, marked, answeredAndMarked, notVisited };
  }, [answers, markedForReview, visitedQuestions, questions]);

  // Handlers for question answering
  const handleSelectOption = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const handleClearResponse = () => {
    setAnswers(prev => {
      const updated = { ...prev };
      delete updated[currentQuestion.id];
      return updated;
    });
  };

  const handleToggleMarkReview = () => {
    setMarkedForReview(prev => {
      if (prev.includes(currentQuestion.id)) {
        return prev.filter(id => id !== currentQuestion.id);
      }
      return [...prev, currentQuestion.id];
    });
  };

  const handleSaveAndNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMarkAndNext = () => {
    if (!markedForReview.includes(currentQuestion.id)) {
      setMarkedForReview(prev => [...prev, currentQuestion.id]);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleJumpToQuestion = (qIndex: number) => {
    setCurrentIndex(qIndex);
    setShowPaletteMobile(false);
  };

  const handleFinalSubmit = () => {
    // Calculate final scores
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    questions.forEach(q => {
      const selected = answers[q.id];
      if (selected === undefined) {
        unattemptedCount++;
      } else if (selected === q.correctAnswer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    // Score calculation
    const negativePenalty = enableTreNegative ? incorrectCount * 0.25 : 0;
    const finalScore = Math.max(0, Number((correctCount - negativePenalty).toFixed(2)));
    const totalAttempted = correctCount + incorrectCount;
    const accuracy = totalAttempted > 0 ? (correctCount / totalAttempted) * 100 : 0;
    const timeSpent = totalSeconds - timeRemaining;

    const completedAttempt: UserAttempt = {
      testId: test.id,
      startedAt: initialAttempt?.startedAt || Date.now() - (timeSpent * 1000),
      completedAt: Date.now(),
      timeSpentSeconds: timeSpent,
      answers,
      markedForReview,
      visitedQuestions,
      score: finalScore,
      correctCount,
      incorrectCount,
      unattemptedCount,
      accuracyPercentage: accuracy,
      isCompleted: true,
    };

    onSubmitExam(completedAttempt);
  };

  // Section filtered questions
  const filteredQuestionIndices = useMemo(() => {
    return questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q }) => {
        if (selectedSectionFilter === 'all') return true;
        return q.section === selectedSectionFilter;
      })
      .map(({ idx }) => idx);
  }, [questions, selectedSectionFilter]);

  // Palette questions according to palette filter
  const paletteIndices = useMemo(() => {
    return questions.map((q, idx) => ({ q, idx })).filter(({ q }) => {
      if (paletteFilter === 'all') return true;
      const status = getQuestionStatus(q.id);
      if (paletteFilter === 'unanswered') {
        return status === 'not_answered' || status === 'not_visited';
      }
      if (paletteFilter === 'marked') {
        return status === 'marked_for_review' || status === 'answered_and_marked';
      }
      return true;
    });
  }, [questions, paletteFilter, answers, markedForReview, visitedQuestions]);

  const textSizeClass = fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : 'text-base';
  const optionTextSizeClass = fontSize === 'large' ? 'text-base' : fontSize === 'xlarge' ? 'text-lg' : 'text-sm';

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans text-black">
      {/* Top Exam Navigation Bar */}
      <div className="bg-white border-b border-black sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 py-3">
            {/* Left: Test title & back */}
            <div className="flex items-center gap-3">
              <button
                onClick={onExit}
                className="p-1.5 hover:bg-zinc-100 border border-zinc-300 transition-colors"
                title="Return to Dashboard"
              >
                <ArrowLeft className="w-4 h-4 text-black" />
              </button>
              <div>
                <h1 className="text-sm font-bold text-black flex items-center gap-2">
                  <span>{test.title}</span>
                  <span className="text-[11px] font-mono text-zinc-500 font-normal">
                    [150 Qs · 150 Marks]
                  </span>
                </h1>
                <p className="text-[11px] text-zinc-600">
                  Section: {currentQuestion.section === 'core_subject' 
                    ? 'Unit I: Core Subject (1-100)' 
                    : currentQuestion.section === 'art_of_teaching' 
                    ? 'Unit II (A): Art of Teaching (101-130)' 
                    : 'Unit II (B): Other Skills (131-150)'}
                </p>
              </div>
            </div>

            {/* Middle: Controls (Language, Font, Marking Scheme) */}
            <div className="flex items-center gap-4 text-xs">
              {/* Language Switch */}
              <div className="flex items-center border border-black bg-white">
                <button
                  onClick={() => setLanguageMode('bilingual')}
                  className={`px-2.5 py-1 text-xs font-semibold ${
                    languageMode === 'bilingual' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'
                  }`}
                >
                  Bilingual
                </button>
                <button
                  onClick={() => setLanguageMode('hindi')}
                  className={`px-2.5 py-1 text-xs font-semibold ${
                    languageMode === 'hindi' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => setLanguageMode('english')}
                  className={`px-2.5 py-1 text-xs font-semibold ${
                    languageMode === 'english' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'
                  }`}
                >
                  English
                </button>
              </div>

              {/* Font Size Adjust */}
              <div className="hidden sm:flex items-center border border-black bg-white">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 text-xs font-mono font-semibold ${fontSize === 'normal' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
                  title="Standard text"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-1 text-xs font-mono font-semibold ${fontSize === 'large' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
                  title="Larger text"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2 py-1 text-xs font-mono font-semibold ${fontSize === 'xlarge' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
                  title="Extra large text"
                >
                  A++
                </button>
              </div>

              {/* Negative Marking Mode Toggle */}
              <button
                onClick={() => setEnableTreNegative(!enableTreNegative)}
                className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 border text-xs font-medium transition-colors ${
                  enableTreNegative 
                    ? 'border-black bg-zinc-100 text-black font-semibold' 
                    : 'border-zinc-300 text-zinc-600 hover:border-black'
                }`}
                title="STET has no negative marking; BPSC TRE has 0.25 negative marking"
              >
                <span>{enableTreNegative ? 'BPSC TRE: -0.25 Neg' : 'STET: 0 Neg Mark'}</span>
              </button>
            </div>

            {/* Right: Timer & Submit */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 border border-black bg-white font-mono">
                <Clock className="w-4 h-4 text-black" />
                <span className={`font-bold text-sm tabular-nums ${timeRemaining < 300 ? 'text-rose-600 animate-pulse' : 'text-black'}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>

              <button
                onClick={() => setShowPaletteMobile(!showPaletteMobile)}
                className="lg:hidden p-2 border border-black bg-white hover:bg-zinc-100"
                title="Toggle Question Palette"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-4 py-1.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold transition-colors uppercase tracking-wider"
              >
                Submit Test
              </button>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-2 border-t border-zinc-200 text-xs">
            <span className="text-zinc-500 font-medium whitespace-nowrap">Sections:</span>
            <button
              onClick={() => setSelectedSectionFilter('all')}
              className={`px-3 py-1 font-medium whitespace-nowrap transition-colors border ${
                selectedSectionFilter === 'all'
                  ? 'bg-black text-white border-black font-semibold'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
              }`}
            >
              All (150 Qs)
            </button>
            <button
              onClick={() => {
                setSelectedSectionFilter('core_subject');
                setCurrentIndex(0);
              }}
              className={`px-3 py-1 font-medium whitespace-nowrap transition-colors border ${
                selectedSectionFilter === 'core_subject'
                  ? 'bg-black text-white border-black font-semibold'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
              }`}
            >
              Unit I: Core Subject (Q.1 - 100)
            </button>
            <button
              onClick={() => {
                setSelectedSectionFilter('art_of_teaching');
                setCurrentIndex(100);
              }}
              className={`px-3 py-1 font-medium whitespace-nowrap transition-colors border ${
                selectedSectionFilter === 'art_of_teaching'
                  ? 'bg-black text-white border-black font-semibold'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
              }`}
            >
              Unit II (A): Art of Teaching (Q.101 - 130)
            </button>
            <button
              onClick={() => {
                setSelectedSectionFilter('other_skills');
                setCurrentIndex(130);
              }}
              className={`px-3 py-1 font-medium whitespace-nowrap transition-colors border ${
                selectedSectionFilter === 'other_skills'
                  ? 'bg-black text-white border-black font-semibold'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
              }`}
            >
              Unit II (B): Other Skills (Q.131 - 150)
            </button>
          </div>
        </div>
      </div>

      {/* Main Examination Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Question & Options Display (8 cols) */}
        <div className="lg:col-span-8 bg-white border border-black p-6 flex flex-col justify-between min-h-[580px]">
          <div>
            {/* Question Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-2 py-1 bg-black text-white">
                  Q. {currentQuestion.questionNumber} / 150
                </span>
                <span className="text-xs text-zinc-600 font-mono">
                  Marks: <span className="font-semibold text-black">+1.0</span> | Neg: <span className="font-semibold text-black">{enableTreNegative ? '-0.25' : '0.0'}</span>
                </span>
                {currentQuestion.pyqReference && (
                  <span className="hidden sm:inline-block text-[11px] text-zinc-500 font-mono">
                    · {currentQuestion.pyqReference}
                  </span>
                )}
              </div>

              <button
                onClick={handleToggleMarkReview}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold border transition-colors ${
                  markedForReview.includes(currentQuestion.id)
                    ? 'border-black bg-black text-white'
                    : 'border-zinc-300 text-zinc-700 hover:border-black'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{markedForReview.includes(currentQuestion.id) ? 'Bookmarked / Marked' : 'Mark for Review'}</span>
              </button>
            </div>

            {/* Question Text */}
            <div className="space-y-4 mb-8">
              {(languageMode === 'bilingual' || languageMode === 'hindi') && (
                <div className={`font-semibold text-black leading-relaxed ${textSizeClass}`}>
                  <p>{currentQuestion.questionHindi}</p>
                </div>
              )}

              {(languageMode === 'bilingual' || languageMode === 'english') && (
                <div className={`text-zinc-800 leading-relaxed ${textSizeClass} ${languageMode === 'bilingual' ? 'pt-2 border-t border-dashed border-zinc-200' : 'font-semibold'}`}>
                  <p>{currentQuestion.questionEnglish}</p>
                </div>
              )}
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-8">
              {(['A', 'B', 'C', 'D'] as const).map((letter, optIdx) => {
                const isSelected = answers[currentQuestion.id] === optIdx;
                const optHindi = currentQuestion.optionsHindi[optIdx];
                const optEnglish = currentQuestion.optionsEnglish[optIdx];

                return (
                  <button
                    key={letter}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'border-black bg-zinc-100 ring-1 ring-black'
                        : 'border-zinc-300 hover:border-black bg-white'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                      isSelected ? 'border-black bg-black text-white' : 'border-zinc-400 text-zinc-700 bg-white'
                    }`}>
                      {letter}
                    </div>

                    <div className="flex-1 space-y-1">
                      {(languageMode === 'bilingual' || languageMode === 'hindi') && (
                        <p className={`font-medium text-black ${optionTextSizeClass}`}>
                          {optHindi}
                        </p>
                      )}
                      {(languageMode === 'bilingual' || languageMode === 'english') && (
                        <p className={`text-zinc-700 ${optionTextSizeClass} ${languageMode === 'bilingual' ? 'text-xs text-zinc-500' : 'font-medium'}`}>
                          {optEnglish}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearResponse}
                disabled={answers[currentQuestion.id] === undefined}
                className="px-3 py-2 border border-zinc-300 hover:border-black text-zinc-700 disabled:opacity-40 disabled:hover:border-zinc-300 text-xs font-medium transition-colors"
              >
                Clear Response
              </button>

              <button
                onClick={handleMarkAndNext}
                className="px-3 py-2 border border-black hover:bg-zinc-100 text-black text-xs font-semibold transition-colors"
              >
                Mark & Next
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 border border-zinc-300 hover:border-black text-black disabled:opacity-40 disabled:hover:border-zinc-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleSaveAndNext}
                disabled={currentIndex === questions.length - 1}
                className="px-5 py-2 bg-black hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Save & Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Question Palette & Candidate Summary (4 cols) */}
        <div className={`lg:col-span-4 bg-white border border-black p-5 flex flex-col justify-between ${
          showPaletteMobile ? 'fixed inset-0 z-50 p-6 overflow-y-auto' : 'hidden lg:flex'
        }`}>
          <div>
            {/* Header & close for mobile */}
            <div className="flex items-center justify-between pb-3 border-b border-black mb-4">
              <div>
                <h2 className="text-sm font-bold text-black uppercase tracking-wider">
                  Question Palette
                </h2>
                <p className="text-[11px] text-zinc-500 font-mono">150 Questions Total</p>
              </div>
              <button
                onClick={() => setShowPaletteMobile(false)}
                className="lg:hidden p-1 text-black hover:bg-zinc-100"
              >
                ✕ Close
              </button>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] mb-5 p-3 bg-zinc-50 border border-zinc-200">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-black text-white text-[10px] font-bold flex items-center justify-center font-mono">
                  {statusCounts.answered}
                </span>
                <span className="text-zinc-700">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-white border border-black text-black text-[10px] font-bold flex items-center justify-center font-mono">
                  {statusCounts.notAnswered}
                </span>
                <span className="text-zinc-700">Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-zinc-200 border border-zinc-500 text-zinc-800 text-[10px] font-bold flex items-center justify-center font-mono">
                  {statusCounts.marked}
                </span>
                <span className="text-zinc-700">Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-zinc-100 border border-zinc-300 text-zinc-400 text-[10px] font-bold flex items-center justify-center font-mono">
                  {statusCounts.notVisited}
                </span>
                <span className="text-zinc-700">Not Visited</span>
              </div>
            </div>

            {/* Filter buttons for palette */}
            <div className="flex items-center gap-1.5 mb-3 text-xs">
              <button
                onClick={() => setPaletteFilter('all')}
                className={`px-2 py-0.5 border text-[11px] font-medium ${
                  paletteFilter === 'all' ? 'bg-black text-white border-black' : 'bg-white text-zinc-700 border-zinc-300'
                }`}
              >
                All (150)
              </button>
              <button
                onClick={() => setPaletteFilter('unanswered')}
                className={`px-2 py-0.5 border text-[11px] font-medium ${
                  paletteFilter === 'unanswered' ? 'bg-black text-white border-black' : 'bg-white text-zinc-700 border-zinc-300'
                }`}
              >
                Unanswered ({statusCounts.notAnswered + statusCounts.notVisited})
              </button>
              <button
                onClick={() => setPaletteFilter('marked')}
                className={`px-2 py-0.5 border text-[11px] font-medium ${
                  paletteFilter === 'marked' ? 'bg-black text-white border-black' : 'bg-white text-zinc-700 border-zinc-300'
                }`}
              >
                Marked ({statusCounts.marked + statusCounts.answeredAndMarked})
              </button>
            </div>

            {/* 150 Question Grid */}
            <div className="max-h-[360px] overflow-y-auto pr-1">
              <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-1.5">
                {paletteIndices.map(({ q, idx }) => {
                  const status = getQuestionStatus(q.id);
                  const isCurrent = idx === currentIndex;

                  let styleClass = 'bg-zinc-100 border-zinc-300 text-zinc-500';
                  if (status === 'answered') {
                    styleClass = 'bg-black text-white border-black font-bold';
                  } else if (status === 'answered_and_marked') {
                    styleClass = 'bg-black text-white border-zinc-600 ring-2 ring-zinc-400 font-bold';
                  } else if (status === 'marked_for_review') {
                    styleClass = 'bg-zinc-200 border-zinc-600 text-black font-semibold';
                  } else if (status === 'not_answered') {
                    styleClass = 'bg-white border-black text-black font-semibold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`h-8 text-xs font-mono border flex items-center justify-center transition-all ${styleClass} ${
                        isCurrent ? 'ring-2 ring-black ring-offset-1 z-10 scale-105' : 'hover:opacity-80'
                      }`}
                      title={`Question ${q.questionNumber}: ${status}`}
                    >
                      {q.questionNumber}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Submit Test Trigger in Sidebar */}
          <div className="pt-4 border-t border-zinc-200 mt-4">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="w-full py-3 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Final Submit Test
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-black max-w-md w-full p-6 shadow-xl">
            <h3 className="text-lg font-bold text-black mb-2">
              Submit Test Confirmation
            </h3>
            <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
              Are you sure you want to finish this test? Once submitted, your score, detailed explanations, and performance analytics will be generated.
            </p>

            <div className="grid grid-cols-2 gap-3 p-3 bg-zinc-50 border border-zinc-200 text-xs mb-6 font-mono">
              <div>
                <span className="text-zinc-500">Total Questions: </span>
                <span className="font-bold text-black">150</span>
              </div>
              <div>
                <span className="text-zinc-500">Answered: </span>
                <span className="font-bold text-black">{statusCounts.answered + statusCounts.answeredAndMarked}</span>
              </div>
              <div>
                <span className="text-zinc-500">Unanswered: </span>
                <span className="font-bold text-black">{statusCounts.notAnswered + statusCounts.notVisited}</span>
              </div>
              <div>
                <span className="text-zinc-500">Marked for Review: </span>
                <span className="font-bold text-black">{statusCounts.marked}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 border border-black hover:bg-zinc-100 text-xs font-semibold text-black transition-colors"
              >
                Return to Test
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-5 py-2 bg-black hover:bg-zinc-800 text-xs font-bold text-white transition-colors"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
