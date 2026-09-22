import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Heart,
  Activity,
  Wind,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Flame,
  Award,
  ShieldAlert
} from 'lucide-react';
import { MedicalCase, Language, CaseOption } from '../types';
import { t } from '../data/translations';
import { soundManager } from '../utils/sound';
import { PatientSafetyStepsGuide } from './PatientSafetyStepsGuide';

interface GameScreenProps {
  currentCase: MedicalCase;
  caseIndex: number;
  totalCases: number;
  language: Language;
  score: number;
  streak: number;
  onAnswerSubmitted: (isCorrect: boolean, earnedPoints: number, timeSpentSec: number) => void;
  onNextCase: () => void;
  isLastCase: boolean;
}

const QUESTION_TIME_SECONDS = 90;

export const GameScreen: React.FC<GameScreenProps> = ({
  currentCase,
  caseIndex,
  totalCases,
  language,
  score,
  streak,
  onAnswerSubmitted,
  onNextCase,
  isLastCase
}) => {
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_SECONDS);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset state on each new case
  useEffect(() => {
    setTimeLeft(QUESTION_TIME_SECONDS);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setEarnedPoints(0);
  }, [currentCase.id]);

  // Countdown timer interval
  useEffect(() => {
    if (isAnswered) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return 0;
        }
        if (prev <= 6) {
          soundManager.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isAnswered, currentCase.id]);

  // Safely trigger timeout after render when timeLeft hits 0
  useEffect(() => {
    if (timeLeft === 0 && !isAnswered) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setIsAnswered(true);
      soundManager.playWrong();
      onAnswerSubmitted(false, 0, QUESTION_TIME_SECONDS);
    }
  }, [timeLeft, isAnswered, onAnswerSubmitted]);

  const handleSelectOption = (option: CaseOption) => {
    if (isAnswered) return;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setIsAnswered(true);
    setSelectedOptionId(option.id);

    const timeSpent = QUESTION_TIME_SECONDS - timeLeft;

    if (option.isCorrect) {
      soundManager.playCorrect();
      // Calculate speed bonus: 25 points per second remaining
      const speedBonus = timeLeft * 25;
      const basePoints = 1000;
      // Multiplier based on current streak
      const multiplier = 1 + streak * 0.2;
      const totalEarned = Math.round((basePoints + speedBonus) * multiplier);
      setEarnedPoints(totalEarned);
      onAnswerSubmitted(true, totalEarned, timeSpent);
    } else {
      soundManager.playWrong();
      setEarnedPoints(0);
      onAnswerSubmitted(false, 0, timeSpent);
    }
  };

  const progressPercent = ((caseIndex + 1) / totalCases) * 100;
  const timePercent = (timeLeft / QUESTION_TIME_SECONDS) * 100;
  const isTimeCritical = timeLeft <= 15;

  const currentMultiplier = (1 + streak * 0.2).toFixed(1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-5 sm:py-7">
      {/* Top Meta Bar: Case Index, Progress, Timer & Score */}
      <div className="bg-white rounded-2xl border border-orange-200 shadow-xs p-4 mb-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          {/* Case badge & Category */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-extrabold text-xs">
              {t.caseNumber[language]} {caseIndex + 1} {t.of[language]} {totalCases}
            </span>
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
              {currentCase.category[language]}
            </span>
          </div>

          {/* Timer and Speed Bonus Display */}
          <div className="flex items-center gap-3">
            {!isAnswered ? (
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl font-mono font-extrabold text-xs sm:text-sm border transition-all ${
                  isTimeCritical
                    ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse ring-2 ring-rose-200'
                    : 'bg-orange-50 border-orange-200 text-orange-700'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {timeLeft} {t.secondsRemaining[language]}
                </span>
                <span className="text-[10px] text-orange-600/80 font-sans hidden sm:inline">
                  (+{timeLeft * 25} pts)
                </span>
              </div>
            ) : (
              <div className="text-xs font-bold px-3 py-1 rounded-xl bg-slate-100 text-slate-600">
                {language === 'ar' ? 'تم قفل الإجابة' : 'Choice Locked'}
              </div>
            )}

            {/* Streak Multiplier */}
            {streak > 0 && (
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-300 text-amber-800 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>x{currentMultiplier}</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-500 to-amber-500 h-1.5 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Timer countdown line */}
        {!isAnswered && (
          <div className="w-full bg-transparent h-1 mt-1 overflow-hidden">
            <div
              className={`h-1 transition-all duration-1000 ${
                isTimeCritical ? 'bg-rose-500' : 'bg-orange-400'
              }`}
              style={{ width: `${timePercent}%` }}
            />
          </div>
        )}
      </div>

      {/* Bedside Patient Monitor Card */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 mb-5 shadow-md border border-slate-800 relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Monitor Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
              {t.patientMonitor[language]}
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs font-medium text-slate-300">
              {currentCase.patientInfo.age} {language === 'ar' ? 'سنة' : 'yo'}{' '}
              {currentCase.patientInfo.gender[language]} • {currentCase.patientInfo.room}
            </span>
          </div>
          <div className="text-xs font-semibold text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded-md border border-orange-800">
            {currentCase.department[language]}
          </div>
        </div>

        {/* Vitals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
          {/* Heart Rate */}
          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
            <div className="flex items-center justify-between text-rose-400 mb-1">
              <span className="text-[11px] font-sans font-bold">HR (BPM)</span>
              <Heart className="w-3.5 h-3.5 fill-rose-400 animate-pulse" />
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white leading-tight">
              {currentCase.vitals.hr}
            </div>
          </div>

          {/* Blood Pressure */}
          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
            <div className="flex items-center justify-between text-sky-400 mb-1">
              <span className="text-[11px] font-sans font-bold">BP (mmHg)</span>
              <Activity className="w-3.5 h-3.5" />
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white leading-tight">
              {currentCase.vitals.bp}
            </div>
          </div>

          {/* Respiratory Rate */}
          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
            <div className="flex items-center justify-between text-emerald-400 mb-1">
              <span className="text-[11px] font-sans font-bold">RR (/min)</span>
              <Wind className="w-3.5 h-3.5" />
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white leading-tight">
              {currentCase.vitals.rr}
            </div>
          </div>

          {/* SpO2 */}
          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
            <div className="flex items-center justify-between text-amber-400 mb-1">
              <span className="text-[11px] font-sans font-bold">SpO2 (%)</span>
              <span className="text-[10px] font-sans text-slate-400">O2 Sat</span>
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white leading-tight">
              {currentCase.vitals.spo2}
            </div>
          </div>
        </div>

        {/* Extra Clinical Metric if available */}
        {currentCase.vitals.extra && (
          <div className="mt-3 pt-2.5 border-t border-slate-800/70 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-sans">
              {currentCase.vitals.extra.label[language]}:
            </span>
            <span className="text-amber-300 font-bold font-mono">
              {currentCase.vitals.extra.value}
            </span>
          </div>
        )}
      </div>

      {/* Clinical Scenario Narrative */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-orange-200/90 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-2 text-xs font-bold text-orange-700 uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-orange-600" />
          <span>{t.clinicalScenario[language]}</span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 leading-snug">
          {currentCase.title[language]}
        </h3>

        <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          {currentCase.scenario[language]}
        </div>

        {/* The Golden Question */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">
              ?
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-950 leading-snug">
                {t.immediateActionQuestion[language]}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.selectChoicePrompt[language]}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Interactive Option Cards */}
        <div className="space-y-3 mt-4">
          {currentCase.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let cardStyle =
              'border-slate-200 hover:border-orange-400 hover:bg-orange-50/40 bg-white text-slate-800';

            if (isAnswered) {
              if (option.isCorrect) {
                cardStyle = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 ring-2 ring-emerald-300';
              } else if (isSelected && !option.isCorrect) {
                cardStyle = 'border-rose-500 bg-rose-50/90 text-rose-950 ring-2 ring-rose-300';
              } else {
                cardStyle = 'border-slate-200 bg-slate-50/60 opacity-60 text-slate-500';
              }
            }

            return (
              <button
                key={option.id}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectOption(option)}
                className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base font-medium transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${cardStyle}`}
              >
                {/* Option Letter Badge */}
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    isAnswered
                      ? option.isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isSelected
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-orange-500 group-hover:text-white'
                  }`}
                >
                  {isAnswered && option.isCorrect ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : isAnswered && isSelected && !option.isCorrect ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    option.id
                  )}
                </div>

                <div className="flex-1 leading-snug">
                  <span>{option.text[language]}</span>
                  {/* Feedback line after answering */}
                  {isAnswered && (isSelected || option.isCorrect) && (
                    <p
                      className={`text-xs mt-2 pt-2 border-t font-semibold ${
                        option.isCorrect ? 'text-emerald-800 border-emerald-200' : 'text-rose-800 border-rose-200'
                      }`}
                    >
                      {option.feedback[language]}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Golden Rule & Clinical Protocol Breakdown after answering */}
        {isAnswered && (
          <div className="mt-6 pt-5 border-t border-slate-200 animate-fadeIn">
            {/* Banner outcome */}
            <div
              className={`p-4 rounded-2xl mb-4 border flex items-center justify-between gap-3 ${
                earnedPoints > 0
                  ? 'bg-emerald-500/10 border-emerald-300 text-emerald-900'
                  : 'bg-rose-500/10 border-rose-300 text-rose-900 ring-2 ring-rose-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {earnedPoints > 0 ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
                )}
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base">
                    {earnedPoints > 0
                      ? t.correctChoiceBadge[language]
                      : t.incorrectChoiceBadge[language]}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold mt-0.5 opacity-95">
                    {earnedPoints > 0
                      ? language === 'ar'
                        ? `حصلت على ${earnedPoints.toLocaleString()} نقطة (بما في ذلك مكافأة سرعة الاستجابة)!`
                        : `Awarded ${earnedPoints.toLocaleString()} points (including speed & combo bonus)!`
                      : language === 'ar'
                      ? 'إدارة سلامة المرضى: التدخل السريري الفوري وتثبيت المريض يأتي كأولوية قصوى قبل توثيق وكتابة البلاغات!'
                      : 'Patient Safety Administration: Immediate patient stabilization takes absolute priority before incident documentation!'}
                  </p>
                </div>
              </div>

              {earnedPoints > 0 && (
                <div className="text-right">
                  <span className="text-lg sm:text-xl font-extrabold text-emerald-700 font-mono">
                    +{earnedPoints.toLocaleString()}
                  </span>
                </div>
              )}
            </div>

            {/* Rationale explanation box */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 text-slate-800">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 uppercase tracking-wide mb-2">
                <Award className="w-4 h-4 text-amber-700" />
                <span>{t.goldenRuleTitle[language]}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-3 leading-relaxed">
                "{currentCase.rationale.goldenRule[language]}"
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 bg-white/90 rounded-xl border border-amber-200/80">
                  <h5 className="font-extrabold text-orange-950 mb-1">
                    {t.immediateActionHeader[language]}
                  </h5>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {currentCase.rationale.immediateAction[language]}
                  </p>
                </div>

                <div className="p-3 bg-white/90 rounded-xl border border-slate-200">
                  <h5 className="font-extrabold text-slate-900 mb-1">
                    {t.reportingStepHeader[language]}
                  </h5>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {currentCase.rationale.reportingStep[language]}
                  </p>
                </div>
              </div>
            </div>

            {/* Patient Safety Steps Guide (Specially requested for Case 1 correction) */}
            {caseIndex === 0 && (
              <PatientSafetyStepsGuide language={language} defaultExpanded={true} />
            )}

            {/* Next Button */}
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={onNextCase}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>{isLastCase ? t.viewResults[language] : t.nextCase[language]}</span>
                {language === 'ar' ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
