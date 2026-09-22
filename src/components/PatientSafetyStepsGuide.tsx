import React, { useState } from 'react';
import {
  Activity,
  BellRing,
  FileText,
  Users,
  Search,
  ShieldAlert,
  LineChart,
  Scale,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { PATIENT_SAFETY_CORRECTION_STEPS, SUMMARY_TIMELINE } from '../data/patientSafetySteps';

interface PatientSafetyStepsGuideProps {
  language: Language;
  defaultExpanded?: boolean;
}

export const PatientSafetyStepsGuide: React.FC<PatientSafetyStepsGuideProps> = ({
  language,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-4 h-4 text-emerald-600" />;
      case 'BellRing':
        return <BellRing className="w-4 h-4 text-orange-600" />;
      case 'FileText':
        return <FileText className="w-4 h-4 text-sky-600" />;
      case 'Users':
        return <Users className="w-4 h-4 text-indigo-600" />;
      case 'SearchCheck':
        return <Search className="w-4 h-4 text-amber-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4 text-rose-600" />;
      case 'LineChart':
        return <LineChart className="w-4 h-4 text-teal-600" />;
      case 'Scale':
        return <Scale className="w-4 h-4 text-purple-600" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-orange-600" />;
    }
  };

  return (
    <div className="mt-5 rounded-2xl border-2 border-orange-200 bg-gradient-to-b from-orange-50/70 via-white to-amber-50/40 p-4 sm:p-5 shadow-xs overflow-hidden">
      {/* Header with toggle */}
      <div
        className="flex items-center justify-between cursor-pointer select-none pb-2 border-b border-orange-200/70"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shadow-xs shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
              {language === 'ar'
                ? 'الدليل المعتمد لتصحيح خطوات التعامل مع الحوادث'
                : 'Step-by-Step Incident Management Protocol'}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
              {language === 'ar'
                ? 'البروتوكول المعياري لتسلسل الاستجابة والتوثيق والتحليل والوقاية'
                : 'Core protocol for stabilization, internal notification, disclosure, RCA & prevention'}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="p-1.5 rounded-lg bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {/* Summary Timeline First */}
          <div className="bg-white rounded-xl p-3 sm:p-4 border border-orange-200 shadow-xs">
            <div className="flex items-center gap-2 mb-2.5 text-xs font-extrabold text-orange-950 uppercase tracking-wide">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>
                {language === 'ar' ? 'المخطط الزمني الشامل للاستجابة (Summary Timeline)' : 'Summary Timeline'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {SUMMARY_TIMELINE.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-800">
                      {item.phase[language]}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-orange-500 text-white font-mono">
                      {item.timeframe}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug font-medium">
                    {item.action[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 8 Core Categorized Protocol Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {PATIENT_SAFETY_CORRECTION_STEPS.map((step, index) => (
              <div
                key={step.id}
                className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:border-orange-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-slate-100 shrink-0">
                      {getStepIcon(step.iconName)}
                    </div>
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      {index + 1}. {step.category[language]}
                    </span>
                  </div>
                  {step.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                      {step.badge[language]}
                    </span>
                  )}
                </div>

                <ul className="space-y-1.5">
                  {step.points[language].map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
