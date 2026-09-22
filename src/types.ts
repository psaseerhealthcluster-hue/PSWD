export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface PatientVitals {
  hr: string;
  bp: string;
  rr: string;
  spo2: string;
  temp?: string;
  extra?: {
    label: LocalizedString;
    value: string;
  };
}

export interface CaseOption {
  id: string;
  text: LocalizedString;
  isCorrect: boolean;
  isPrematureReporting?: boolean;
  feedback: LocalizedString;
}

export interface MedicalCase {
  id: number;
  category: LocalizedString;
  department: LocalizedString;
  title: LocalizedString;
  patientInfo: {
    age: number;
    gender: LocalizedString;
    room: string;
  };
  vitals: PatientVitals;
  scenario: LocalizedString;
  question: LocalizedString;
  options: CaseOption[];
  rationale: {
    goldenRule: LocalizedString;
    immediateAction: LocalizedString;
    reportingStep: LocalizedString;
  };
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  department: string;
  hospital?: string;
  email?: string;
  phone?: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  date: string;
  badge: 'Gold' | 'Silver' | 'Bronze' | 'Participant';
  isCurrentUser?: boolean;
}

export type GameState = 'welcome' | 'register' | 'playing' | 'case_result' | 'summary' | 'leaderboard';
