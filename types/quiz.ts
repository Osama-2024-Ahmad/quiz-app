export interface Question {
  question: string;
  options: string[];
  correct: number;
}

export interface Quiz {
  id?: string;
  name: string;
  icon: string;
  questions: Question[];
}

export interface QuizData {
  [key: string]: Quiz;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  passed: boolean;
  percentage: number;
  id?: string;
}
