import { LeaderboardEntry } from '../types';

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: 'staff-1',
    name: 'Dr. Sarah Al-Ghamdi',
    department: 'Emergency Medicine (ER)',
    hospital: 'Aseer Central Hospital',
    score: 8420,
    correctAnswers: 5,
    totalQuestions: 5,
    timeSpentSeconds: 48,
    date: '2026-09-17',
    badge: 'Gold'
  },
  {
    id: 'staff-2',
    name: 'RN Mohammed Al-Shehri',
    department: 'Intensive Care Unit (ICU)',
    hospital: 'Khamis Mushait General Hospital',
    score: 8190,
    correctAnswers: 5,
    totalQuestions: 5,
    timeSpentSeconds: 54,
    date: '2026-09-17',
    badge: 'Gold'
  },
  {
    id: 'staff-3',
    name: 'Pharm. Reem Al-Qahtani',
    department: 'Clinical Pharmacy',
    hospital: 'Aseer Health Cluster',
    score: 7950,
    correctAnswers: 5,
    totalQuestions: 5,
    timeSpentSeconds: 61,
    date: '2026-09-17',
    badge: 'Gold'
  },
  {
    id: 'staff-4',
    name: 'Dr. Khalid Al-Asmari',
    department: 'Surgical Department',
    hospital: 'Aseer Central Hospital',
    score: 7420,
    correctAnswers: 5,
    totalQuestions: 5,
    timeSpentSeconds: 72,
    date: '2026-09-17',
    badge: 'Gold'
  },
  {
    id: 'staff-5',
    name: 'RN Fatima Al-Zahrani',
    department: 'Quality & Patient Safety',
    hospital: 'Directorate of Health Affairs',
    score: 6980,
    correctAnswers: 4,
    totalQuestions: 5,
    timeSpentSeconds: 58,
    date: '2026-09-17',
    badge: 'Silver'
  },
  {
    id: 'staff-6',
    name: 'Dr. Tariq Al-Amri',
    department: 'Internal Medicine',
    hospital: 'Abha Maternity & Children',
    score: 6710,
    correctAnswers: 4,
    totalQuestions: 5,
    timeSpentSeconds: 64,
    date: '2026-09-17',
    badge: 'Silver'
  },
  {
    id: 'staff-7',
    name: 'RN Noura Al-Otaibi',
    department: 'Pediatric ICU',
    hospital: 'Maternity & Children Hospital',
    score: 6350,
    correctAnswers: 4,
    totalQuestions: 5,
    timeSpentSeconds: 76,
    date: '2026-09-17',
    badge: 'Silver'
  },
  {
    id: 'staff-8',
    name: 'Pharm. Hisham Al-Garni',
    department: 'Inpatient Pharmacy',
    hospital: 'Khamis Mushait Hospital',
    score: 5500,
    correctAnswers: 3,
    totalQuestions: 5,
    timeSpentSeconds: 82,
    date: '2026-09-17',
    badge: 'Bronze'
  }
];

const STORAGE_KEY = 'pswd_challenge_leaderboard_v1';

export function getLeaderboard(): LeaderboardEntry[] {
  if (typeof window === 'undefined') return INITIAL_LEADERBOARD;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADERBOARD));
      return INITIAL_LEADERBOARD;
    }
    const parsed: LeaderboardEntry[] = JSON.parse(raw);
    return parsed.sort((a, b) => b.score - a.score);
  } catch {
    return INITIAL_LEADERBOARD;
  }
}

export function saveLeaderboardEntry(entry: LeaderboardEntry): LeaderboardEntry[] {
  if (typeof window === 'undefined') return [entry, ...INITIAL_LEADERBOARD];
  try {
    const current = getLeaderboard();
    // Check if entry already exists (by name or current id), or add new
    const updated = [entry, ...current.filter(e => !e.isCurrentUser)];
    updated.sort((a, b) => b.score - a.score);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [entry, ...INITIAL_LEADERBOARD];
  }
}
