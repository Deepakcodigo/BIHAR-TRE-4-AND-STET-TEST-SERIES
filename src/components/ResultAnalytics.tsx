import React, { useState, useMemo } from 'react';
import { Question, TestSeriesInfo, UserAttempt } from '../types';
import { 
  Award, CheckCircle2, XCircle, MinusCircle, Clock, 
  RotateCcw, ArrowLeft, Printer, Filter, Check, X, BookOpen, ChevronDown
} from 'lucide-react';

interface ResultAnalyticsProps {
  test: TestSeriesInfo;
  questions: Question[];
  attempt: UserAttempt;
  onRetake: () => void;
  onBackToDashboard: () => void;
  onPrintReport: () => void;
}

export const ResultAnalytics: React.FC<ResultAnalyticsProps> = ({
  test,
  questions,
  attempt,
  onRetake,
  onBackToDashboard,
  onPrintReport,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'correct' | 'incorrect' | 'skipped'>('all');
  const [languageMode, setLanguageMode] = useState<'bilingual' | 'hindi' | 'english'>('bilingual');
  const [sectionFilter, setSectionFilter] = useState<'all' | 'core_subject' | 'art_of_teaching' | 'other_skills'>('all');

  const score = attempt.score ?? 0;
  const correctCount = attempt.correctCount ?? 0;
  const incorrectCount = attempt.incorrectCount ?? 0;
  const unattemptedCount = attempt.unattemptedCount ?? 0;
  const accuracy = attempt.accuracyPercentage ?? (correctCount / (correctCount + incorrectCount || 1)) * 100;
  
  // Cut-off threshold evaluations
  const isGeneralPassed = score >= 75;
  const isBcPassed = score >= 68.25;
  const isEbcPassed = score >= 63.75;
  const isScStWomenPassed = score >= 60;

  // Format time
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s}s`;
  };

  // Section breakdown
  const sectionStats = useMemo(() => {
    const stats = {
      core: { total: 0, attempted: 0, correct: 0, marks: 0 },
      art: { total: 0, attempted: 0, correct: 0, marks: 0 },
      skills: { total: 0, attempted: 0, correct: 0, marks: 0 },
    };

    questions.forEach(q => {
      const userAns = attempt.answers[q.id];
      const isAtt = userAns !== undefined;
      const isCorr = userAns === q.correctAnswer;

      if (q.section === 'core_subject') {
        stats.core.total++;
        if (isAtt) stats.core.attempted++;
        if (isCorr) {
          stats.core.correct++;
          stats.core.marks += 1;
        }
      } else if (q.section === 'art_of_teaching') {
        stats.art.total++;
        if (isAtt) stats.art.attempted++;
        if (isCorr) {
          stats.art.correct++;
          stats.art.marks += 1;
        }
      } else {
        stats.skills.total++;
        if (isAtt) stats.skills.attempted++;
        if (isCorr) {
          stats.skills.correct++;
          stats.skills.marks += 1;
        }
      }
    });

    return stats;
  }, [questions, attempt]);

  // Questions matching current filters
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const userAns = attempt.answers[q.id];
      const isAtt = userAns !== undefined;
      const isCorr = userAns === q.correctAnswer;

      if (sectionFilter !== 'all' && q.section !== sectionFilter) return false;

      if (filterMode === 'correct') return isAtt && isCorr;
      if (filterMode === 'incorrect') return isAtt && !isCorr;
      if (filterMode === 'skipped') return !isAtt;
      return true;
    });
  }, [questions, attempt, filterMode, sectionFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black font-sans">
      {/* Top Header Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black mb-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToDashboard}
            className="p-2 border border-black hover:bg-zinc-100 transition-colors"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-4 h-4 text-black" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-black tracking-tight">
              Test Performance & Solution Analysis
            </h1>
            <p className="text-xs text-zinc-600 font-mono">
              {test.title} · Exam ID: {test.id}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrintReport}
            className="px-3.5 py-2 border border-black hover:bg-zinc-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Report / Paper</span>
          </button>
          <button
            onClick={onRetake}
            className="px-4 py-2 bg-black hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Test</span>
          </button>
        </div>
      </div>

      {/* Main Scorecard Banner */}
      <div className="bg-white border-2 border-black p-6 sm:p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {/* Main Score Block */}
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-zinc-200 pb-6 md:pb-0 md:pr-6">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1">
              Final Examination Score
            </span>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-black">
                {score.toFixed(2)}
              </span>
              <span className="text-lg font-mono text-zinc-500 font-semibold">
                / 150 Marks
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className={`text-xs font-bold font-mono px-2.5 py-1 border ${
                isGeneralPassed 
                  ? 'border-emerald-600 text-emerald-800 bg-emerald-50' 
                  : 'border-zinc-500 text-zinc-800 bg-zinc-100'
              }`}>
                {isGeneralPassed ? 'QUALIFIED FOR STET (UR / General)' : 'UR TARGET PENDING (Req: 75)'}
              </span>
              <span className="text-xs font-mono text-zinc-500">
                · Accuracy: {accuracy.toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-zinc-50 border border-zinc-200">
              <span className="text-[11px] font-mono text-zinc-500 block">Correct</span>
              <span className="text-lg font-bold font-mono text-emerald-700">
                {correctCount}
              </span>
            </div>

            <div className="p-3 bg-zinc-50 border border-zinc-200">
              <span className="text-[11px] font-mono text-zinc-500 block">Incorrect</span>
              <span className="text-lg font-bold font-mono text-rose-700">
                {incorrectCount}
              </span>
            </div>

            <div className="p-3 bg-zinc-50 border border-zinc-200">
              <span className="text-[11px] font-mono text-zinc-500 block">Skipped</span>
              <span className="text-lg font-bold font-mono text-zinc-700">
                {unattemptedCount}
              </span>
            </div>

            <div className="p-3 bg-zinc-50 border border-zinc-200">
              <span className="text-[11px] font-mono text-zinc-500 block">Time Spent</span>
              <span className="text-xs font-bold font-mono text-black leading-6">
                {formatTime(attempt.timeSpentSeconds)}
              </span>
            </div>
          </div>
        </div>

        {/* Official Category Cut-off Breakdown */}
        <div className="mt-6 pt-6 border-t border-zinc-200">
          <p className="text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-3">
            Official Bihar STET Qualifying Threshold Check:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className={`p-2.5 border ${isGeneralPassed ? 'border-emerald-600 bg-emerald-50/50' : 'border-zinc-300'}`}>
              <div className="text-zinc-500 text-[11px]">General / UR (50%)</div>
              <div className="font-bold text-black">75.0 Marks</div>
              <div className="text-[10px] mt-1">{isGeneralPassed ? '✓ Cleared' : '✗ Need ' + (75 - score).toFixed(1) + ' more'}</div>
            </div>

            <div className={`p-2.5 border ${isBcPassed ? 'border-emerald-600 bg-emerald-50/50' : 'border-zinc-300'}`}>
              <div className="text-zinc-500 text-[11px]">BC (45.5%)</div>
              <div className="font-bold text-black">68.25 Marks</div>
              <div className="text-[10px] mt-1">{isBcPassed ? '✓ Cleared' : '✗ Need ' + (68.25 - score).toFixed(1) + ' more'}</div>
            </div>

            <div className={`p-2.5 border ${isEbcPassed ? 'border-emerald-600 bg-emerald-50/50' : 'border-zinc-300'}`}>
              <div className="text-zinc-500 text-[11px]">EBC (42.5%)</div>
              <div className="font-bold text-black">63.75 Marks</div>
              <div className="text-[10px] mt-1">{isEbcPassed ? '✓ Cleared' : '✗ Need ' + (63.75 - score).toFixed(1) + ' more'}</div>
            </div>

            <div className={`p-2.5 border ${isScStWomenPassed ? 'border-emerald-600 bg-emerald-50/50' : 'border-zinc-300'}`}>
              <div className="text-zinc-500 text-[11px]">SC/ST/PwD/Women (40%)</div>
              <div className="font-bold text-black">60.0 Marks</div>
              <div className="text-[10px] mt-1">{isScStWomenPassed ? '✓ Cleared' : '✗ Need ' + (60 - score).toFixed(1) + ' more'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-Wise Diagnostic Breakdown */}
      <div className="bg-white border border-black p-6 mb-8">
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
          Section-Wise Diagnostic Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-zinc-200 p-4">
            <div className="text-xs text-zinc-500 font-mono mb-1">Unit I (1-100)</div>
            <div className="text-sm font-bold text-black mb-2">Core Subject Domain</div>
            <div className="text-xs space-y-1 font-mono text-zinc-700">
              <div className="flex justify-between">
                <span>Score:</span>
                <span className="font-bold text-black">{sectionStats.core.marks} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Attempted:</span>
                <span>{sectionStats.core.attempted} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span>{sectionStats.core.attempted > 0 ? ((sectionStats.core.correct / sectionStats.core.attempted) * 100).toFixed(1) : 0}%</span>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 p-4">
            <div className="text-xs text-zinc-500 font-mono mb-1">Unit II (A) (101-130)</div>
            <div className="text-sm font-bold text-black mb-2">Art of Teaching (शिक्षण कला)</div>
            <div className="text-xs space-y-1 font-mono text-zinc-700">
              <div className="flex justify-between">
                <span>Score:</span>
                <span className="font-bold text-black">{sectionStats.art.marks} / 30</span>
              </div>
              <div className="flex justify-between">
                <span>Attempted:</span>
                <span>{sectionStats.art.attempted} / 30</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span>{sectionStats.art.attempted > 0 ? ((sectionStats.art.correct / sectionStats.art.attempted) * 100).toFixed(1) : 0}%</span>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 p-4">
            <div className="text-xs text-zinc-500 font-mono mb-1">Unit II (B) (131-150)</div>
            <div className="text-sm font-bold text-black mb-2">Other Skills (GK, EVS, Aptitude)</div>
            <div className="text-xs space-y-1 font-mono text-zinc-700">
              <div className="flex justify-between">
                <span>Score:</span>
                <span className="font-bold text-black">{sectionStats.skills.marks} / 20</span>
              </div>
              <div className="flex justify-between">
                <span>Attempted:</span>
                <span>{sectionStats.skills.attempted} / 20</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span>{sectionStats.skills.attempted > 0 ? ((sectionStats.skills.correct / sectionStats.skills.attempted) * 100).toFixed(1) : 0}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question By Question Detailed Review */}
      <div className="bg-white border border-black p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black mb-6">
          <div>
            <h3 className="text-base font-bold text-black">
              Detailed Question Solutions & Key Concepts
            </h3>
            <p className="text-xs text-zinc-500 font-mono">
              Showing {filteredQuestions.length} of 150 questions
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Answer Filter */}
            <div className="flex items-center border border-black text-xs font-semibold">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 ${filterMode === 'all' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
              >
                All (150)
              </button>
              <button
                onClick={() => setFilterMode('correct')}
                className={`px-3 py-1.5 ${filterMode === 'correct' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
              >
                Correct ({correctCount})
              </button>
              <button
                onClick={() => setFilterMode('incorrect')}
                className={`px-3 py-1.5 ${filterMode === 'incorrect' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
              >
                Incorrect ({incorrectCount})
              </button>
              <button
                onClick={() => setFilterMode('skipped')}
                className={`px-3 py-1.5 ${filterMode === 'skipped' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
              >
                Skipped ({unattemptedCount})
              </button>
            </div>

            {/* Language Filter */}
            <div className="flex items-center border border-black text-xs font-semibold">
              <button
                onClick={() => setLanguageMode('bilingual')}
                className={`px-2.5 py-1.5 ${languageMode === 'bilingual' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
              >
                Bilingual
              </button>
              <button
                onClick={() => setLanguageMode('hindi')}
                className={`px-2.5 py-1.5 ${languageMode === 'hindi' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLanguageMode('english')}
                className={`px-2.5 py-1.5 ${languageMode === 'english' ? 'bg-black text-white' : 'text-black hover:bg-zinc-100'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Solutions List */}
        <div className="space-y-6">
          {filteredQuestions.map(q => {
            const userChoice = attempt.answers[q.id];
            const isAnswered = userChoice !== undefined;
            const isCorrect = userChoice === q.correctAnswer;

            return (
              <div
                key={q.id}
                className="border border-zinc-300 p-5 hover:border-black transition-colors"
              >
                {/* Question Item Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs px-2 py-0.5 bg-black text-white">
                      Q.{q.questionNumber}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      Category: {q.category.replace('_', ' ')}
                    </span>
                  </div>

                  <div>
                    {isCorrect ? (
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 border border-emerald-600 text-emerald-800 bg-emerald-50">
                        ✓ Correct (+1.0)
                      </span>
                    ) : isAnswered ? (
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 border border-rose-600 text-rose-800 bg-rose-50">
                        ✗ Incorrect
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 border border-zinc-400 text-zinc-700 bg-zinc-100">
                        ○ Not Attempted
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <div className="space-y-2 mb-4">
                  {(languageMode === 'bilingual' || languageMode === 'hindi') && (
                    <p className="font-semibold text-black text-sm leading-relaxed">
                      {q.questionHindi}
                    </p>
                  )}
                  {(languageMode === 'bilingual' || languageMode === 'english') && (
                    <p className="text-zinc-700 text-sm leading-relaxed">
                      {q.questionEnglish}
                    </p>
                  )}
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {(['A', 'B', 'C', 'D'] as const).map((letter, optIdx) => {
                    const isUserPick = userChoice === optIdx;
                    const isActualCorrect = q.correctAnswer === optIdx;

                    let badgeClass = 'border-zinc-200 bg-white text-zinc-800';
                    if (isActualCorrect) {
                      badgeClass = 'border-emerald-500 bg-emerald-50/70 text-emerald-900 font-medium ring-1 ring-emerald-400';
                    } else if (isUserPick) {
                      badgeClass = 'border-rose-400 bg-rose-50/70 text-rose-900 ring-1 ring-rose-400';
                    }

                    return (
                      <div
                        key={letter}
                        className={`p-2.5 border text-xs flex items-start gap-2.5 ${badgeClass}`}
                      >
                        <span className={`w-5 h-5 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 border ${
                          isActualCorrect 
                            ? 'bg-emerald-700 text-white border-emerald-700' 
                            : isUserPick 
                            ? 'bg-rose-700 text-white border-rose-700' 
                            : 'bg-zinc-100 text-zinc-700 border-zinc-300'
                        }`}>
                          {letter}
                        </span>

                        <div className="flex-1">
                          <p>{q.optionsHindi[optIdx]}</p>
                          <p className="text-[11px] text-zinc-500">{q.optionsEnglish[optIdx]}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Explanation */}
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-xs">
                  <div className="font-bold text-black mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Detailed Solution & Exam Concept:</span>
                  </div>
                  <p className="text-zinc-800 leading-relaxed mb-1">
                    {q.explanationHindi}
                  </p>
                  <p className="text-zinc-600 leading-relaxed text-[11px]">
                    {q.explanationEnglish}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
