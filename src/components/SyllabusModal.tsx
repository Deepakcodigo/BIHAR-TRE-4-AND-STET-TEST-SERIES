import React from 'react';
import { X, CheckCircle, BookOpen, FileText } from 'lucide-react';
import { OFFICIAL_EXAM_PATTERN } from '../data/testsData';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border-2 border-black max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-black hover:bg-zinc-100 transition-colors"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pb-4 border-b border-black">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Official Examination Blueprint
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
            Bihar STET & BPSC TRE 4.0 Exam Pattern
          </h2>
          <p className="text-xs text-zinc-600 mt-1">
            Conducting Body: Bihar School Examination Board (BSEB) & Bihar Public Service Commission (BPSC)
          </p>
        </div>

        {/* Key Parameters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
          <div className="p-3 border border-black bg-zinc-50">
            <span className="text-zinc-500 block text-[11px]">Total Marks</span>
            <span className="font-bold text-black text-sm">150 Marks</span>
          </div>
          <div className="p-3 border border-black bg-zinc-50">
            <span className="text-zinc-500 block text-[11px]">Total Questions</span>
            <span className="font-bold text-black text-sm">150 Questions</span>
          </div>
          <div className="p-3 border border-black bg-zinc-50">
            <span className="text-zinc-500 block text-[11px]">Exam Duration</span>
            <span className="font-bold text-black text-sm">150 Minutes</span>
          </div>
          <div className="p-3 border border-black bg-zinc-50">
            <span className="text-zinc-500 block text-[11px]">Negative Marking</span>
            <span className="font-bold text-black text-sm">None (STET)</span>
          </div>
        </div>

        {/* Section Distribution */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">
            Section-Wise Distribution & Marks
          </h3>
          <div className="space-y-3">
            {OFFICIAL_EXAM_PATTERN.sectionBreakdown.map(sec => (
              <div key={sec.section} className="p-4 border border-zinc-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-bold text-black text-sm">{sec.section}</h4>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-black text-white">
                    {sec.questions} · {sec.marks}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {sec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Qualifying Marks */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">
            Official Qualifying Marks By Category
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {OFFICIAL_EXAM_PATTERN.qualifyingMarks.map(item => (
              <div key={item.category} className="p-3 border border-zinc-300 flex items-center justify-between">
                <div>
                  <span className="font-bold text-black block">{item.category}</span>
                  <span className="text-zinc-500 text-[11px]">Qualifying: {item.percentage}</span>
                </div>
                <span className="font-bold text-sm text-black">{item.marks}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pedagogy Syllabus Points */}
        <div className="p-4 bg-zinc-50 border border-zinc-200 text-xs mb-6">
          <h4 className="font-bold text-black uppercase mb-2">High-Yield Art of Teaching Topics:</h4>
          <ul className="list-disc list-inside space-y-1 text-zinc-700">
            <li>Teaching Objectives & Bloom's Taxonomy (Cognitive, Affective, Psychomotor)</li>
            <li>Methods of Teaching: Inductive, Deductive, Project, Problem Solving, Lecture-Demonstration</li>
            <li>Herbartian Lesson Plan 5 Steps & Micro-teaching 36-Minute Indian Cycle</li>
            <li>Edgar Dale's Cone of Experience & Audio-Visual Teaching Aids (TLM)</li>
            <li>Continuous and Comprehensive Evaluation (CCE) & Diagnostic-Remedial Teaching</li>
            <li>National Education Policy 2020 (5+3+3+4), NCF 2005 & NCF-SE 2023</li>
            <li>RTE Act 2009 & Inclusive Classroom Management</li>
          </ul>
        </div>

        <div className="flex justify-end pt-4 border-t border-zinc-200">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
