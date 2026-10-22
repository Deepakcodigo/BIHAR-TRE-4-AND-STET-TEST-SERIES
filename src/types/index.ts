export type SubjectCategory = 
  | 'art_of_teaching'
  | 'other_skills'
  | 'general_knowledge'
  | 'environmental_science'
  | 'mathematical_aptitude'
  | 'logical_reasoning'
  | 'core_subject';

export interface Question {
  id: number;
  questionNumber: number;
  section: 'core_subject' | 'art_of_teaching' | 'other_skills';
  category: SubjectCategory;
  questionHindi: string;
  questionEnglish: string;
  optionsHindi: [string, string, string, string];
  optionsEnglish: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3; // 0=A, 1=B, 2=C, 3=D
  explanationHindi: string;
  explanationEnglish: string;
  pyqReference?: string; // e.g., "STET 2024 Shift 1", "BPSC TRE 3.0 PYQ"
}

export interface TestSeriesInfo {
  id: string;
  testNumber: number;
  title: string;
  subtitle: string;
  paperType: 'Paper 1 (Secondary)' | 'Paper 2 (Sr Secondary)' | 'BPSC TRE 4.0 Special';
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  pyqTag: string;
  description: string;
  difficulty: 'Standard Exam Level' | 'Moderate-High' | 'High Yield PYQ';
}

export type QuestionStatus = 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_and_marked';

export interface UserAttempt {
  testId: string;
  startedAt: number;
  completedAt?: number;
  timeSpentSeconds: number;
  answers: Record<number, number>; // questionId -> selectedOptionIndex (0..3)
  markedForReview: number[]; // questionIds
  visitedQuestions: number[]; // questionIds
  score?: number;
  correctCount?: number;
  incorrectCount?: number;
  unattemptedCount?: number;
  accuracyPercentage?: number;
  isCompleted: boolean;
}

export interface CategoryScore {
  category: string;
  categoryLabelHindi: string;
  total: number;
  attempted: number;
  correct: number;
  marksObtained: number;
}
