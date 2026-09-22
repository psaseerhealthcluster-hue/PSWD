import React from 'react';
import { X, Printer, Award, Shield, CheckCircle, Heart } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';
import { AseerClusterLogo } from './AseerClusterLogo';
import { WPSDLogo } from './WPSDLogo';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  staffName: string;
  department: string;
  hospital: string;
  score: number;
  accuracy: number;
  language: Language;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  staffName,
  department,
  hospital,
  score,
  accuracy,
  language
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn print:p-0 print:bg-white">
      <div className="bg-white w-full max-w-3xl rounded-3xl border border-orange-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none">
        {/* Modal Controls */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-orange-600" />
            <span className="font-bold text-slate-800 text-sm">
              {t.claimCertificate[language]}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>{t.downloadPdf[language]}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Area */}
        <div className="p-6 sm:p-10 overflow-y-auto print:p-8 bg-[#FFFDF9]">
          <div className="border-8 border-double border-orange-400/80 rounded-2xl p-6 sm:p-8 relative bg-white text-center shadow-inner">
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 text-orange-400 font-mono text-xl">✦</div>
            <div className="absolute top-2 right-2 text-orange-400 font-mono text-xl">✦</div>
            <div className="absolute bottom-2 left-2 text-orange-400 font-mono text-xl">✦</div>
            <div className="absolute bottom-2 right-2 text-orange-400 font-mono text-xl">✦</div>

            {/* Top Seal & Logos */}
            <div className="flex items-center justify-between gap-4 mb-4 px-2 sm:px-6">
              <AseerClusterLogo variant="horizontal" size="sm" className="scale-90 sm:scale-100 origin-left rtl:origin-right" />
              <WPSDLogo variant="badge" size="lg" language={language} className="shadow-md ring-4 ring-orange-200" />
            </div>

            <div className="text-xs uppercase font-extrabold tracking-widest text-orange-600 mb-1">
              WORLD HEALTH ORGANIZATION • PATIENT SAFETY 2026
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
              {t.championTitle[language]}
            </h1>
            <p className="text-xs text-slate-500 font-semibold mb-6">
              {language === 'ar'
                ? 'شهادة كفاءة وتميز في سرعة اتخاذ القرارات السريرية لسلامة المرضى'
                : 'Certificate of Clinical Excellence in Rapid Decision-Making & Patient Safety'}
            </p>

            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-6" />

            <p className="text-xs sm:text-sm text-slate-600 mb-2">
              {language === 'ar' ? 'تُمنح هذه الشهادة رسمياً إلى:' : 'This certificate is proudly awarded to:'}
            </p>

            {/* Recipient Name */}
            <h2 className="text-2xl sm:text-3xl font-black text-orange-700 mb-1 border-b-2 border-orange-200 inline-block px-6 pb-1">
              {staffName || 'Healthcare Professional'}
            </h2>

            <p className="text-xs sm:text-sm font-bold text-slate-700 mt-2 mb-4">
              {department} • {hospital}
            </p>

            {/* Citation */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-6 font-medium">
              {t.certificateSubtitle[language]}
            </p>

            {/* Issue Date Badge */}
            <div className="inline-flex items-center justify-center gap-2 bg-orange-50/80 px-6 py-2.5 rounded-2xl border border-orange-200/80 mb-6">
              <span className="text-[11px] uppercase font-bold text-slate-500">
                {language === 'ar' ? 'تاريخ الإصدار:' : 'Date:'}
              </span>
              <span className="text-xs font-extrabold text-slate-800">
                {currentDate}
              </span>
            </div>

            {/* Signatures and Golden Motto */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <div className="text-center sm:text-left">
                <span className="block font-bold text-slate-800">
                  {language === 'ar' ? 'تجمع عسير الصحي' : 'Aseer Health Cluster'}
                </span>
                <span className="text-[10px]">
                  {language === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
                </span>
              </div>

              <div className="text-center font-semibold text-orange-700 italic">
                {t.patientSafetyMotto[language]}
              </div>

              <div className="text-center sm:text-right">
                <span className="block font-bold text-slate-800">
                  {language === 'ar' ? 'إدارة سلامة المرضى' : 'Patient Safety Administration'}
                </span>
                <span className="text-[10px]">World Patient Safety Day 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
