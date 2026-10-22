import React from 'react';
import { TestSeriesInfo, UserAttempt } from '../types';
import { Play, RotateCcw, Award, CheckCircle, Printer } from 'lucide-react';

interface TestCardProps {
  test: TestSeriesInfo;
  attempt?: UserAttempt | null;
  onStart: (testId: string) => void;
  onViewResult: (testId: string) => void;
  onPrint: (testId: string) => void;
  onRetake: (testId: string) => void;
}

export const TestCard: React.FC<TestCardProps> = ({
  test,
  attempt,
  onStart,
  onViewResult,
  onPrint,
  onRetake,
}) => {
  const isCompleted = Boolean(attempt?.isCompleted);
  const isInProgress = Boolean(attempt && !attempt.isCompleted && Object.keys(attempt.answers).length > 0);
  const score = attempt?.score ?? 0;
  const isQualified = score >= 75; // Official General cut-off 50% = 75/150

  return (
    <div className="bg-white border border-black p-6 flex flex-col justify-between hover:shadow-sm transition-all duration-150 relative">
      {/* Top row metadata */}
      <div>
        <div className="flex items-center justify-between gap-2 text-xs text-zinc-600 mb-2">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="font-bold text-black uppercase tracking-wider">
              MOCK {test.testNumber < 10 ? `0${test.testNumber}` : test.testNumber}
            </span>
            <span aria-hidden="true">·</span>
            <span>{test.paperType}</span>
          </div>

          <span className="text-zinc-500 font-mono text-[11px]">
            {test.totalQuestions} Qs · {test.durationMinutes} Min
          </span>
        </div>

        <h3 className="text-base font-bold text-black mb-1 line-clamp-1">
          {test.title}
        </h3>

        <p className="text-xs text-zinc-600 mb-3 line-clamp-2 leading-relaxed">
          {test.description}
        </p>

        <div className="flex items-center gap-2 text-[11px] text-zinc-500 pb-4 border-b border-zinc-200">
          <span className="font-mono">PYQ: {test.pyqTag}</span>
          <span aria-hidden="true">·</span>
          <span>{test.difficulty}</span>
        </div>
      </div>

      {/* Attempt Status & Actions */}
      <div className="pt-4 mt-auto">
        {isCompleted ? (
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <div>
                <span className="text-zinc-500">Score: </span>
                <span className="font-bold font-mono text-black text-sm">
                  {score} / 150
                </span>
                <span className="text-zinc-500 font-mono text-[11px] ml-1">
                  ({((score / 150) * 100).toFixed(1)}%)
                </span>
              </div>
              <span className={`text-[11px] font-semibold font-mono px-2 py-0.5 border ${
                isQualified 
                  ? 'border-emerald-600 text-emerald-800 bg-emerald-50' 
                  : 'border-zinc-400 text-zinc-700 bg-zinc-100'
              }`}>
                {isQualified ? 'STET QUALIFIED' : 'TARGET PENDING'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onViewResult(test.id)}
                className="col-span-2 py-2 px-3 bg-black hover:bg-zinc-800 text-white text-xs font-semibold text-center transition-colors"
              >
                Analysis & Review
              </button>
              <button
                onClick={() => onRetake(test.id)}
                title="Retake Test"
                className="py-2 px-3 border border-black hover:bg-zinc-100 text-black text-xs font-semibold flex items-center justify-center transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : isInProgress ? (
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-zinc-600">
                Attempted: <span className="font-mono font-semibold text-black">{Object.keys(attempt!.answers).length}/150</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-500">In Progress</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onStart(test.id)}
                className="col-span-2 py-2 px-3 bg-black hover:bg-zinc-800 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Resume Test</span>
              </button>
              <button
                onClick={() => onRetake(test.id)}
                title="Reset Attempt"
                className="py-2 px-3 border border-black hover:bg-zinc-100 text-black text-xs font-semibold flex items-center justify-center transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onStart(test.id)}
              className="col-span-2 py-2 px-3 bg-black hover:bg-zinc-800 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start Test</span>
            </button>
            <button
              onClick={() => onPrint(test.id)}
              title="Print Question Paper"
              className="py-2 px-3 border border-black hover:bg-zinc-100 text-black text-xs font-semibold flex items-center justify-center transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
