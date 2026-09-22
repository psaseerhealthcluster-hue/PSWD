import React, { useState } from 'react';
import { Trophy, Search, Filter, X, Award, Clock, CheckCircle2, User } from 'lucide-react';
import { LeaderboardEntry, Language } from '../types';
import { t } from '../data/translations';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  entries: LeaderboardEntry[];
  language: Language;
  currentUserId?: string;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  entries,
  language,
  currentUserId
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('ALL');

  if (!isOpen) return null;

  // Extract unique departments for filter
  const departments = ['ALL', ...Array.from(new Set(entries.map((e) => e.department)))];

  const filteredEntries = entries.filter((entry) => {
    const matchesSearch =
      entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (entry.hospital && entry.hospital.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDept = selectedDept === 'ALL' || entry.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-3xl border border-orange-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
                  {t.leaderboard[language]}
                </h2>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>
              <p className="text-xs text-orange-100 font-medium">
                {language === 'ar'
                  ? 'ترتيب ممارسي الرعاية الصحية حسب أسرع وأدق القرارات السريرية'
                  : 'Ranking medical staff by fastest and most accurate safety interventions'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute top-3 left-3 rtl:left-auto rtl:right-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchStaff[language]}
                className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Department Dropdown */}
            <div className="relative sm:w-56">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              >
                <option value="ALL">
                  {language === 'ar' ? 'جميع الأقسام' : 'All Departments'}
                </option>
                {departments
                  .filter((d) => d !== 'ALL')
                  .map((dept, idx) => (
                    <option key={idx} value={dept}>
                      {dept}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Entries List / Table */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm font-medium">
                {language === 'ar' ? 'لا توجد نتائج مطابقة' : 'No staff found matching criteria'}
              </p>
            </div>
          ) : (
            filteredEntries.map((entry, idx) => {
              const isCurrentUser = entry.isCurrentUser || entry.id === currentUserId;
              const rank = idx + 1;

              return (
                <div
                  key={entry.id}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                    isCurrentUser
                      ? 'bg-orange-50 border-orange-300 ring-2 ring-orange-200 shadow-xs'
                      : rank === 1
                      ? 'bg-amber-50/60 border-amber-200'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  {/* Left: Rank & Staff Details */}
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Rank Badge */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0 font-mono shadow-xs ${
                        rank === 1
                          ? 'bg-amber-400 text-amber-950 ring-2 ring-amber-300'
                          : rank === 2
                          ? 'bg-slate-200 text-slate-800'
                          : rank === 3
                          ? 'bg-amber-700 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`}
                    </div>

                    {/* Name & Dept */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm sm:text-base text-slate-900 truncate">
                          {entry.name}
                        </span>
                        {isCurrentUser && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-orange-600 text-white shrink-0">
                            {language === 'ar' ? 'أنت' : 'YOU'}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 font-medium truncate flex items-center gap-1.5 mt-0.5">
                        <span className="text-orange-700 font-semibold">{entry.department}</span>
                        {entry.hospital && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500">{entry.hospital}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Score, Accuracy, Time */}
                  <div className="text-right shrink-0 flex items-center gap-3 sm:gap-5">
                    {/* Accuracy Badge */}
                    <div className="hidden sm:block text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        {t.accuracy[language]}
                      </span>
                      <span className="text-xs font-bold text-slate-700 font-mono">
                        {entry.correctAnswers}/{entry.totalQuestions}
                      </span>
                    </div>

                    {/* Time */}
                    <div className="hidden md:block text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        {t.timeTaken[language]}
                      </span>
                      <span className="text-xs font-bold text-slate-700 font-mono">
                        {entry.timeSpentSeconds}s
                      </span>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-orange-600 block leading-none">
                        {t.points[language]}
                      </span>
                      <span className="text-base sm:text-lg font-black text-slate-900 font-mono">
                        {entry.score.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>
            {language === 'ar'
              ? 'تُحدث لوحة الصدارة تلقائياً عند إكمال أي ممارس للتحدي'
              : 'Leaderboard updates automatically upon challenge completion'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors"
          >
            {t.close[language]}
          </button>
        </div>
      </div>
    </div>
  );
};
