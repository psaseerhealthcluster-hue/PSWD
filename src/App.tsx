import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { RegistrationView } from './components/RegistrationView';
import { GameScreen } from './components/GameScreen';
import { ResultsView } from './components/ResultsView';
import { LeaderboardModal } from './components/LeaderboardModal';
import { CertificateModal } from './components/CertificateModal';
import { MEDICAL_CASES } from './data/cases';
import { getLeaderboard, saveLeaderboardEntry } from './data/leaderboardData';
import { soundManager } from './utils/sound';
import { AseerClusterLogo } from './components/AseerClusterLogo';
import { WPSDLogo } from './components/WPSDLogo';
import { Language, GameState, LeaderboardEntry } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic as requested by Aseer Health Cluster context, with instant EN toggle
  const [isMuted, setIsMuted] = useState(false);
  const [gameState, setGameState] = useState<GameState>('register');

  // User Profile
  const [staffName, setStaffName] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [staffPhone, setStaffPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [hospital, setHospital] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');

  // Game Progress
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [totalTimeSeconds, setTotalTimeSeconds] = useState(0);
  const [currentRank, setCurrentRank] = useState(1);

  // Leaderboard data
  const [leaderboardEntries, setLeaderboardEntries] = useState<LeaderboardEntry[]>([]);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Load leaderboard on initial render
  useEffect(() => {
    const data = getLeaderboard();
    setLeaderboardEntries(data);
  }, []);

  // Update HTML dir and lang attributes when language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleToggleSound = () => {
    setIsMuted((prev) => {
      const next = !prev;
      soundManager.setMuted(next);
      return next;
    });
  };

  const handleStartGame = (name: string, dept: string, hosp: string, email?: string, phone?: string) => {
    setStaffName(name);
    setDepartment(dept);
    setHospital(hosp);
    setStaffEmail(email || '');
    setStaffPhone(phone || '');
    const newId = `user-${Date.now()}`;
    setCurrentUserId(newId);

    // Reset game stats
    setCurrentCaseIndex(0);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setUserAnswers([]);
    setTotalTimeSeconds(0);

    setGameState('playing');
  };

  const handleAnswerSubmitted = (isCorrect: boolean, earnedPoints: number, timeSpentSec: number) => {
    if (isCorrect) {
      setScore((prev) => prev + earnedPoints);
      setStreak((prev) => prev + 1);
      setCorrectCount((prev) => prev + 1);
    } else {
      setStreak(0);
    }
    setUserAnswers((prev) => [...prev, isCorrect]);
    setTotalTimeSeconds((prev) => prev + timeSpentSec);
  };

  const handleNextCase = () => {
    if (currentCaseIndex < MEDICAL_CASES.length - 1) {
      setCurrentCaseIndex((prev) => prev + 1);
    } else {
      // Finished all 5 cases!
      finalizeGame();
    }
  };

  const finalizeGame = () => {
    const accuracy = correctCount;
    const finalScore = score;
    const finalDuration = totalTimeSeconds;

    // Create leaderboard entry
    const newEntry: LeaderboardEntry = {
      id: currentUserId || `user-${Date.now()}`,
      name: staffName || 'Healthcare Provider',
      department: department || 'General Medicine',
      hospital: hospital || 'Health Cluster',
      email: staffEmail,
      phone: staffPhone,
      score: finalScore,
      correctAnswers: accuracy,
      totalQuestions: MEDICAL_CASES.length,
      timeSpentSeconds: finalDuration,
      date: new Date().toISOString().split('T')[0],
      badge: accuracy === 5 ? 'Gold' : accuracy >= 4 ? 'Silver' : 'Bronze',
      isCurrentUser: true
    };

    // Save and re-sort leaderboard
    const updated = saveLeaderboardEntry(newEntry);
    setLeaderboardEntries(updated);

    // Determine rank
    const userRankIndex = updated.findIndex((e) => e.id === newEntry.id || (e.isCurrentUser && e.score === finalScore));
    setCurrentRank(userRankIndex !== -1 ? userRankIndex + 1 : 1);

    setGameState('summary');
  };

  const handlePlayAgain = () => {
    setCurrentCaseIndex(0);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setUserAnswers([]);
    setTotalTimeSeconds(0);
    setGameState('playing');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-900 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navigation Bar */}
      <Header
        language={language}
        onToggleLanguage={handleToggleLanguage}
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        currentScore={score}
        streak={streak}
        isPlaying={gameState === 'playing'}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {gameState === 'register' && (
          <RegistrationView
            language={language}
            onStartGame={handleStartGame}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
          />
        )}

        {gameState === 'playing' && MEDICAL_CASES[currentCaseIndex] && (
          <GameScreen
            key={MEDICAL_CASES[currentCaseIndex].id}
            currentCase={MEDICAL_CASES[currentCaseIndex]}
            caseIndex={currentCaseIndex}
            totalCases={MEDICAL_CASES.length}
            language={language}
            score={score}
            streak={streak}
            onAnswerSubmitted={handleAnswerSubmitted}
            onNextCase={handleNextCase}
            isLastCase={currentCaseIndex === MEDICAL_CASES.length - 1}
          />
        )}

        {gameState === 'summary' && (
          <ResultsView
            score={score}
            correctCount={correctCount}
            totalCases={MEDICAL_CASES.length}
            totalTimeSeconds={totalTimeSeconds}
            rank={currentRank}
            staffName={staffName}
            department={department}
            hospital={hospital}
            staffEmail={staffEmail}
            staffPhone={staffPhone}
            language={language}
            cases={MEDICAL_CASES}
            userAnswers={userAnswers}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
          />
        )}
      </main>

      {/* Modals */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        entries={leaderboardEntries}
        language={language}
        currentUserId={currentUserId}
      />

      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        staffName={staffName}
        department={department}
        hospital={hospital}
        score={score}
        accuracy={Math.round((correctCount / MEDICAL_CASES.length) * 100)}
        language={language}
      />

      {/* Footer */}
      <footer className="py-6 border-t border-orange-200/60 bg-white/80 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AseerClusterLogo variant="horizontal" size="sm" />
            <div className="hidden sm:block w-px h-6 bg-slate-200" />
            <div className="flex items-center gap-2 text-slate-600 font-semibold">
              <WPSDLogo variant="emblem" size="sm" className="w-5 h-5" />
              <span>
                {language === 'ar'
                  ? 'اليوم العالمي لسلامة المرضى ٢٠٢٦م'
                  : 'World Patient Safety Day 2026'}
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-center sm:text-right rtl:sm:text-left font-medium">
            {language === 'ar'
              ? 'إدارة سلامة المرضى'
              : 'Patient Safety Administration'}
          </p>
        </div>
      </footer>
    </div>
  );
}
