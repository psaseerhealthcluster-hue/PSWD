import React, { useEffect } from 'react';
import {
  Trophy,
  Award,
  Clock,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  Mail,
  Phone,
  Building2,
  Lock
} from 'lucide-react';
import { Language, MedicalCase } from '../types';
import { t } from '../data/translations';
import { soundManager } from '../utils/sound';
import { PswdBanner } from './PswdBanner';
import { AseerClusterLogo } from './AseerClusterLogo';
import { WPSDLogo } from './WPSDLogo';

interface ResultsViewProps {
  score: number;
  correctCount: number;
  totalCases: number;
  totalTimeSeconds: number;
  rank: number;
  staffName: string;
  department: string;
  hospital: string;
  staffEmail?: string;
  staffPhone?: string;
  language: Language;
  cases: MedicalCase[];
  userAnswers: boolean[];
  onOpenLeaderboard: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  score,
  correctCount,
  totalCases,
  totalTimeSeconds,
  rank,
  staffName,
  department,
  hospital,
  staffEmail,
  staffPhone,
  language,
  cases,
  userAnswers,
  onOpenLeaderboard
}) => {
  useEffect(() => {
    soundManager.playFanfare();
  }, []);

  const accuracyPercent = Math.round((correctCount / totalCases) * 100);

  const getRankBadge = () => {
    if (rank === 1) return { title: '1st Place • Hospital Gold Champion', color: 'from-amber-400 to-amber-600', icon: '🥇' };
    if (rank === 2) return { title: '2nd Place • Hospital Silver Hero', color: 'from-slate-300 to-slate-500', icon: '🥈' };
    if (rank === 3) return { title: '3rd Place • Hospital Bronze Hero', color: 'from-amber-600 to-amber-800', icon: '🥉' };
    return { title: `Rank #${rank} • Patient Safety Advocate`, color: 'from-orange-500 to-orange-600', icon: '🎖️' };
  };

  const badgeInfo = getRankBadge();

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
      {/* Visual celebration banner */}
      <PswdBanner className="mb-6" />

      {/* Main Results Card */}
      <div className="bg-white rounded-3xl border border-orange-200 shadow-sm p-6 sm:p-8 text-center relative overflow-hidden">
        {/* Organization Brand */}
        <div className="flex justify-center mb-4">
          <AseerClusterLogo variant="horizontal" size="sm" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-extrabold mb-4 border border-orange-200">
          <span>{badgeInfo.icon}</span>
          <span>{badgeInfo.title}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.congratulations[language]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto mb-6">
          {staffName} ({department}) • {hospital}
        </p>

        {/* Big Total Score Highlight */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white max-w-md mx-auto mb-8 shadow-lg ring-4 ring-orange-200">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-100 block mb-1">
            {t.yourFinalScore[language]}
          </span>
          <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight">
            {score.toLocaleString()}
          </div>
          <p className="text-xs text-orange-100 mt-2">
            {language === 'ar'
              ? 'مجموع النقاط يشمل الدقة السريرية + مكافأة سرعة احتواء الخطر'
              : 'Includes base clinical points + speed hazard containment bonus'}
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          {/* Accuracy */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex items-center justify-center gap-1.5 text-orange-600 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{t.accuracy[language]}</span>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 font-mono">
              {correctCount} / {totalCases}
            </div>
            <span className="text-xs text-slate-500 font-semibold">{accuracyPercent}% Score</span>
          </div>

          {/* Time Taken */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex items-center justify-center gap-1.5 text-orange-600 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{t.timeTaken[language]}</span>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 font-mono">
              {totalTimeSeconds}s
            </div>
            <span className="text-xs text-slate-500 font-semibold">
              {language === 'ar' ? 'استجابة سريعة' : 'Rapid Response'}
            </span>
          </div>

          {/* Live Leaderboard Rank */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex items-center justify-center gap-1.5 text-orange-600 mb-1">
              <Trophy className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{t.rankAchieved[language]}</span>
            </div>
            <div className="text-2xl font-extrabold text-orange-600 font-mono">
              #{rank}
            </div>
            <span className="text-xs text-slate-500 font-semibold">
              {language === 'ar' ? 'على مستوى المستشفى' : 'Hospital Leaderboard'}
            </span>
          </div>
        </div>

        {/* 5 Cases Recap List */}
        <div className="text-left max-w-2xl mx-auto mb-8">
          <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
            {language === 'ar' ? 'ملخص الحالات السريرية الـ 5:' : '5-Case Clinical Recap:'}
          </h2>
          <div className="space-y-2.5">
            {cases.map((c, idx) => {
              const isPass = userAnswers[idx];
              return (
                <div
                  key={c.id}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 text-xs sm:text-sm ${
                    isPass
                      ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/70 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {isPass ? (
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                    <div>
                      <span className="font-bold block sm:inline">
                        {t.caseNumber[language]} {idx + 1}:
                      </span>{' '}
                      <span className="font-medium text-slate-800">{c.category[language]}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-md font-bold text-[11px] shrink-0 ${
                      isPass ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
                    }`}
                  >
                    {isPass
                      ? language === 'ar'
                        ? 'مستقر ومثبت'
                        : 'Stabilized'
                      : language === 'ar'
                      ? 'خطأ في الأولوية'
                      : 'Priority Pitfall'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Official Submission & Certificate Delivery Notice */}
        <div className="bg-gradient-to-b from-orange-50/90 to-amber-50/70 border-2 border-orange-200 rounded-3xl p-5 sm:p-6 max-w-2xl mx-auto mb-6 text-right rtl:text-right ltr:text-left shadow-xs">
          <div className="flex items-start gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                  {language === 'ar'
                    ? 'تم تسجيل نتيجتك واعتماد استجابتك السريرية بنجاح'
                    : 'Response & Score Officially Recorded'}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-200/80 text-orange-900 text-[10px] font-extrabold shrink-0">
                  <Lock className="w-3 h-3" />
                  {language === 'ar' ? 'محاولة واحدة فقط' : 'Single Attempt'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {language === 'ar'
                  ? 'لضمان العدالة والشفافية السريرية، لا يُتاح إعادة المحاولة أو تحسين النتيجة. ستقوم إدارة سلامة المرضى بمراجعة واختبار الفائزين بالمراتب الأولى، وإرسال شهادات التميز والتكريم المعتمدة مباشرة إلى بيانات التواصل المسجلة أدناه'
                  : 'To uphold clinical integrity, re-attempts and score modifications are disabled. The Patient Safety Administration will review top scorers, conduct finalist verification, and dispatch official Certificates of Excellence directly to the contact info below.'}
              </p>
            </div>
          </div>

          {/* Registered Contact Information Summary */}
          <div className="bg-white rounded-2xl p-4 border border-orange-200/80 space-y-2 text-xs">
            <div className="font-bold text-slate-900 border-b border-orange-100 pb-2 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span>
                {language === 'ar'
                  ? 'بيانات الممارس المسجلة لإرسال الشهادة والتواصل:'
                  : 'Registered Participant Details for Certificate Dispatch:'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-700">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="font-semibold text-slate-900">{hospital}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">{department}</span>
              </div>

              {staffEmail ? (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="font-mono text-slate-800">{staffEmail}</span>
                </div>
              ) : null}

              {staffPhone ? (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="font-mono text-slate-800 dir-ltr">{staffPhone}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Action Button: Only View Live Leaderboard */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOpenLeaderboard}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{t.viewLeaderboard[language]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
