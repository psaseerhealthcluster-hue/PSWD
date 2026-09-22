import React from 'react';
import { Volume2, VolumeX, Trophy, Globe } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';
import { AseerClusterLogo } from './AseerClusterLogo';
import { WPSDLogo } from './WPSDLogo';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
  onOpenLeaderboard: () => void;
  currentScore?: number;
  streak?: number;
  isPlaying?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  isMuted,
  onToggleSound,
  onOpenLeaderboard,
  currentScore = 0,
  streak = 0,
  isPlaying = false,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-orange-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Brand & Aseer Health Cluster Logo */}
        <div className="flex items-center gap-3">
          {/* Official Aseer Health Cluster Logo */}
          <AseerClusterLogo variant="horizontal" size="sm" className="hidden sm:inline-flex" />

          {/* Vertical divider */}
          <div className="hidden sm:block w-px h-8 bg-slate-200" />

          {/* WPSD Badge & Title */}
          <div className="flex items-center gap-2">
            <WPSDLogo variant="badge" size="md" language={language} />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-tight">
                  {t.appTitle[language]}
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-orange-700 border border-orange-200">
                  17 SEP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Score/Streak during game */}
        {isPlaying && (
          <div className="flex items-center gap-2 bg-orange-50/80 px-3 py-1.5 rounded-xl border border-orange-200">
            <div className="text-right sm:text-center">
              <span className="text-[10px] uppercase font-bold text-orange-600 block leading-none">
                {t.currentScore[language]}
              </span>
              <span className="text-sm sm:text-base font-extrabold text-orange-950 font-mono">
                {currentScore.toLocaleString()}
              </span>
            </div>
            {streak > 1 && (
              <div className="pl-2 border-l border-orange-200 flex items-center gap-1">
                <span className="text-xs">🔥</span>
                <span className="text-xs font-bold text-orange-700 font-mono">x{(1 + (streak - 1) * 0.2).toFixed(1)}</span>
              </div>
            )}
          </div>
        )}

        {/* Controls: Sound, Leaderboard, Language Switcher */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            className="p-2 rounded-xl text-slate-600 hover:text-orange-600 hover:bg-orange-50 border border-slate-200/80 transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-orange-600" />}
          </button>

          {/* Leaderboard Button */}
          <button
            type="button"
            onClick={onOpenLeaderboard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-100/70 hover:bg-orange-100 text-orange-800 text-xs font-bold border border-orange-200 transition-colors"
          >
            <Trophy className="w-3.5 h-3.5 text-orange-600" />
            <span className="hidden sm:inline">{t.leaderboard[language]}</span>
          </button>

          {/* Bilingual Language Switcher */}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-colors"
            title="Toggle English / العربية"
          >
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
