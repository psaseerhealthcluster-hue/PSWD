import React, { useState } from 'react';
import { Play, AlertCircle, Award, Clock, ShieldCheck, Mail, Phone, Building2 } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';
import { PswdBanner } from './PswdBanner';
import { AseerClusterLogo } from './AseerClusterLogo';
import { WPSDLogo } from './WPSDLogo';

interface RegistrationViewProps {
  language: Language;
  onStartGame: (staffName: string, department: string, hospital: string, email?: string, phone?: string) => void;
  onOpenLeaderboard: () => void;
}

export const RegistrationView: React.FC<RegistrationViewProps> = ({
  language,
  onStartGame,
  onOpenLeaderboard
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // القسم أو الوحدة السريرية فارغ للكتابة أو التعديل
  const [department, setDepartment] = useState('');
  const [hospital, setHospital] = useState(
    language === 'ar' ? 'تجمع عسير الصحي' : 'Aseer Health Cluster'
  );
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(true);
      return;
    }
    const resolvedDept = department.trim() || (language === 'ar' ? 'الخدمات السريرية' : 'Clinical Services');
    onStartGame(name.trim(), resolvedDept, hospital.trim(), email.trim(), phone.trim());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
      {/* Visual Header Banner matching PSWD.png */}
      <PswdBanner className="mb-6" />

      {/* Main Card */}
      <div className="bg-white rounded-3xl border border-orange-200/90 shadow-sm p-6 sm:p-8 relative overflow-hidden">
        {/* Top Organization Header: Aseer Health Cluster & WPSD 2026 */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-orange-100">
          <AseerClusterLogo variant="horizontal" size="md" />
          <div className="flex items-center gap-2">
            <WPSDLogo variant="badge" size="md" language={language} />
            <div className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              {language === 'ar' ? 'تحدي اتخاذ القرار السريري' : 'Clinical Decision Challenge'}
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.appTitle[language]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium max-w-2xl">
          {t.tagline[language]}
        </p>

        {/* 4 Feature highlight pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-orange-50/70 border border-orange-100">
            <div className="p-2 rounded-xl bg-orange-500 text-white shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-orange-950 uppercase tracking-wide">
                {language === 'ar' ? '5 حالات سريرية واقعية' : '5 Realistic Clinical Cases'}
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                {language === 'ar' ? 'اختبار مهارات احتواء المخاطر الدوائية ونقل الدم والتسكين والسقوط' : 'High-alert medications, blood transfusion, PCA opioids, hypoglycemia, and falls.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100">
            <div className="p-2 rounded-xl bg-teal-600 text-white shrink-0">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-teal-950 uppercase tracking-wide">
                {language === 'ar' ? 'أولويات اتخاذ القرار' : 'Clinical Priority Axiom'}
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                {language === 'ar' ? 'اختبر قدرتك على تحديد الإجراء الفوري الأصح عند مواجهة الحوادث العارضة' : 'Identify the most crucial immediate intervention during bedside adverse events.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100">
            <div className="p-2 rounded-xl bg-amber-600 text-white shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                {language === 'ar' ? 'مكافأة السرعة والتركيز' : 'Speed & Accuracy Bonus'}
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                {language === 'ar' ? 'كل ثانية إضافية تمنحك نقاطاً أعلى في لوحة الصدارة المباشرة' : 'Fast and correct clinical choices maximize your points and combo multiplier.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
            <div className="p-2 rounded-xl bg-purple-600 text-white shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-purple-950 uppercase tracking-wide">
                {language === 'ar' ? 'اعتماد وإرسال شهادات التميز للفائزين' : 'Finalist Verification & Certificate Dispatch'}
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                {language === 'ar'
                  ? 'ستقوم إدارة سلامة المرضى بمراجعة واختبار الفائزين بالمراتب الأولى وإرسال الشهادات لهم مباشرة عبر البريد والجوال المسجل أدناه. (المحاولة واحدة فقط)'
                  : 'The Patient Safety Administration will evaluate and test top scorers, dispatching official certificates directly to the registered email and phone. (Single attempt only)'}
              </p>
            </div>
          </div>
        </div>

        {/* Staff Registration Form */}
        <form onSubmit={handleSubmit} className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200">
          <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>{t.enterDetails[language]}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label htmlFor="staff-name-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.fullName[language]} <span className="text-rose-500">*</span>
              </label>
              <input
                id="staff-name-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError(false);
                }}
                placeholder={t.fullNamePlaceholder[language]}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? 'border-rose-400 focus:ring-rose-200 ring-1 ring-rose-300'
                    : 'border-slate-300 focus:border-orange-500 focus:ring-orange-200'
                }`}
              />
              {error && (
                <p className="text-[11px] font-semibold text-rose-600 mt-1">
                  {language === 'ar' ? 'يرجى كتابة الاسم للمتابعة ولوحة الصدارة' : 'Please enter your name to register your score.'}
                </p>
              )}
            </div>

            {/* Official Work Email */}
            <div>
              <label htmlFor="staff-email-input" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.officialEmail[language]}</span>
              </label>
              <input
                id="staff-email-input"
                type="email"
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.officialEmailPlaceholder[language]}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-left"
              />
            </div>

            {/* Mobile Phone Number */}
            <div>
              <label htmlFor="staff-phone-input" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.phoneNumber[language]}</span>
              </label>
              <input
                id="staff-phone-input"
                type="tel"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.phoneNumberPlaceholder[language]}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-left"
              />
            </div>

            {/* Department / Clinical Unit (Empty for free typing or editing) */}
            <div>
              <label htmlFor="dept-input" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.department[language]}</span>
              </label>
              <input
                id="dept-input"
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder={t.departmentPlaceholder[language]}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              />
            </div>

            {/* Hospital / Health Cluster */}
            <div>
              <label htmlFor="hospital-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.hospital[language]}
              </label>
              <input
                id="hospital-input"
                type="text"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{t.readyToStart[language]}</span>
            </button>

            <button
              type="button"
              onClick={onOpenLeaderboard}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-sm border border-slate-300 transition-all"
            >
              {t.viewLeaderboard[language]}
            </button>
          </div>

          {/* Single attempt reminder */}
          <p className="w-full text-center text-[11px] text-slate-500 font-medium pt-2.5">
            {language === 'ar'
              ? '🔒 تنبيه: المحاولة واحدة فقط لكل ممارس صحي ولا يمكن إعادة الاختبار بعد الإرسال لضمان عدالة التقييم'
              : '🔒 Notice: Only one official attempt is permitted per participant. Retries are disabled.'}
          </p>
        </form>
      </div>
    </div>
  );
};
