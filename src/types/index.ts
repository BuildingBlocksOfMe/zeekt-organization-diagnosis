export interface Option {
  id: string;
  text: string;
  abilityScore: number; // -5 ~ +5
  actionScore: number;  // -5 ~ +5
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export type DiagnosisType = 'staff' | 'commander' | 'soldier' | 'danger';

export interface DiagnosisResult {
  type: DiagnosisType;
  title: string;
  description: string;
  advice: string[];
  abilityScore: number;
  actionScore: number;
}

export interface TypeInfo {
  type: DiagnosisType;
  name: string;
  title: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  color: string;
}

export interface Answer {
  questionId: number;
  optionId: string;
}


