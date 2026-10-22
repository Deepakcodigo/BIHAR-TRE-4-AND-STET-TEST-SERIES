import React, { useState } from 'react';
import { Question, TestSeriesInfo } from '../types';
import { ArrowLeft, Printer, BookOpen } from 'lucide-react';

interface PrintPaperViewProps {
  test: TestSeriesInfo;
  questions: Question[];
  onBack: () => void;
}

export const PrintPaperView: React.FC<PrintPaperViewProps> = ({ test, questions, onBack }) => {
  const [includeExplanations, setIncludeExplanations] = useState<boolean>(true);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Non-print control bar */}
      <div className="no-print bg-zinc-900 text-white border-b border-black py-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="px-3 py-1.5 border border-zinc-600 hover:bg-zinc-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <span className="text-xs font-mono font-bold">
              PRINT / PDF EXPORT: {test.title}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeExplanations}
                onChange={e => setIncludeExplanations(e.target.checked)}
                className="w-4 h-4 text-black border-zinc-400 focus:ring-0"
              />
              <span>Include Answer Key & Explanations</span>
            </label>

            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white text-black hover:bg-zinc-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print or Save as PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Printable Test Paper Container */}
      <div className="max-w-4xl mx-auto p-6 sm:p-10">
        {/* Official Paper Header */}
        <div className="border-2 border-black p-6 mb-8 text-center space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-600">
            BIHAR SECONDARY TEACHERS ELIGIBILITY TEST (STET) & BPSC TRE 4.0
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-black">
            {test.title}
          </h1>
          <p className="text-xs font-mono text-zinc-700">
            Time Allowed: 150 Minutes (2.5 Hours) | Maximum Marks: 150 Marks | Total Questions: 150
          </p>
          <div className="pt-2 border-t border-black text-[11px] text-zinc-600 flex justify-between">
            <span>Question Paper Series: A</span>
            <span>Language: Bilingual (Hindi & English)</span>
            <span>No Negative Marking for STET (+1 per question)</span>
          </div>
        </div>

        {/* Candidate Fill-in Box */}
        <div className="border border-black p-4 mb-8 text-xs font-mono grid grid-cols-2 gap-4">
          <div>Candidate Name: ____________________________________</div>
          <div>Roll Number: _______________________</div>
          <div>Examination Center: _______________________________</div>
          <div>Date: _____________________________</div>
        </div>

        {/* Important Instructions */}
        <div className="border border-zinc-300 p-4 mb-8 text-xs leading-relaxed">
          <h4 className="font-bold uppercase mb-2">Instructions for Candidates:</h4>
          <ol className="list-decimal list-inside space-y-1 text-zinc-800">
            <li>This booklet contains 150 multiple choice questions divided into two sections.</li>
            <li>Unit I (Questions 1 to 100): Core Subject Domain (100 Marks).</li>
            <li>Unit II (Questions 101 to 150): Art of Teaching (30 Marks) & Other Skills (20 Marks).</li>
            <li>Each question carries 1 mark. Fill exactly one option bubble on your OMR sheet.</li>
            <li>Curated by Deepak (https://www.linkedin.com/in/deepak03-in).</li>
          </ol>
        </div>

        {/* Section 1 Header */}
        <div className="bg-black text-white p-2 font-mono text-xs font-bold uppercase tracking-wider mb-6">
          Unit I: Specified Subject / Core Domain (Questions 1 to 100)
        </div>

        {/* Questions Stream */}
        <div className="space-y-6">
          {questions.map((q, idx) => {
            const isArtOfTeachingStart = idx === 100;
            const isOtherSkillsStart = idx === 130;

            return (
              <React.Fragment key={q.id}>
                {isArtOfTeachingStart && (
                  <div className="bg-black text-white p-2 font-mono text-xs font-bold uppercase tracking-wider my-8 print-page-break">
                    Unit II (A): Art of Teaching (शिक्षण कला) (Questions 101 to 130)
                  </div>
                )}

                {isOtherSkillsStart && (
                  <div className="bg-black text-white p-2 font-mono text-xs font-bold uppercase tracking-wider my-8">
                    Unit II (B): Other Skills (GK, EVS, Aptitude, Reasoning) (Questions 131 to 150)
                  </div>
                )}

                <div className="border-b border-zinc-200 pb-5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-bold font-mono text-sm text-black">
                      Q.{q.questionNumber}.
                    </span>
                    <div className="flex-1 text-sm">
                      <p className="font-semibold text-black mb-1">{q.questionHindi}</p>
                      <p className="text-zinc-700 text-xs">{q.questionEnglish}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pl-6 mt-3">
                    {(['(A)', '(B)', '(C)', '(D)'] as const).map((label, optIdx) => (
                      <div key={label} className="flex items-start gap-2">
                        <span className="font-mono font-bold text-zinc-800">{label}</span>
                        <div>
                          <p className="text-black">{q.optionsHindi[optIdx]}</p>
                          <p className="text-zinc-500 text-[11px]">{q.optionsEnglish[optIdx]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Answer Key & Explanations if enabled */}
        {includeExplanations && (
          <div className="print-page-break mt-12 pt-8 border-t-2 border-black">
            <div className="bg-black text-white p-3 font-mono text-center font-bold text-sm uppercase tracking-wider mb-6">
              Official Answer Key & Detailed Explanations
            </div>

            {/* Compact 150-Answer Table Grid */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase font-mono mb-3">150 Questions Answer Key Grid:</h4>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 text-xs font-mono">
                {questions.map(q => {
                  const letter = ['A', 'B', 'C', 'D'][q.correctAnswer];
                  return (
                    <div key={q.id} className="p-1 border border-zinc-300 text-center">
                      <span className="text-[10px] text-zinc-500 block">{q.questionNumber}</span>
                      <span className="font-bold text-black">{letter}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Explanations */}
            <h4 className="text-xs font-bold uppercase font-mono mb-4">Detailed Pedagogical & Technical Explanations:</h4>
            <div className="space-y-4 text-xs leading-relaxed">
              {questions.map(q => (
                <div key={q.id} className="border border-zinc-200 p-3 bg-zinc-50">
                  <div className="font-bold text-black mb-1">
                    Q.{q.questionNumber}: Correct Answer: {['(A)', '(B)', '(C)', '(D)'][q.correctAnswer]}
                  </div>
                  <p className="text-zinc-800 mb-1">{q.explanationHindi}</p>
                  <p className="text-zinc-600 text-[11px]">{q.explanationEnglish}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Print Footer */}
        <div className="mt-12 pt-6 border-t border-black text-center text-xs font-mono text-zinc-600">
          Curated & Created by <span className="font-bold text-black">Deepak</span> | LinkedIn: https://www.linkedin.com/in/deepak03-in
        </div>
      </div>
    </div>
  );
};
