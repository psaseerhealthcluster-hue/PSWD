import React from 'react';

interface WPSDLogoProps {
  variant?: 'emblem' | 'full' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  language?: 'ar' | 'en';
}

export const WPSDLogo: React.FC<WPSDLogoProps> = ({
  variant = 'emblem',
  className = '',
  size = 'md',
  language = 'ar'
}) => {
  // Dimension presets
  const sizeMap = {
    sm: {
      emblem: 'w-7 h-7',
      badge: 'w-8 h-8',
      full: 'h-8'
    },
    md: {
      emblem: 'w-9 h-9',
      badge: 'w-10 h-10',
      full: 'h-10'
    },
    lg: {
      emblem: 'w-12 h-12',
      badge: 'w-14 h-14',
      full: 'h-14'
    },
    xl: {
      emblem: 'w-16 h-16',
      badge: 'w-20 h-20',
      full: 'h-20'
    }
  };

  // High-fidelity SVG vector representation of the official World Patient Safety Day (WHO WPSD) logo
  const EmblemSvg = ({ className: svgClass = 'w-full h-full' }: { className?: string }) => (
    <svg
      viewBox="0 0 120 120"
      className={svgClass}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="World Patient Safety Day Logo - اليوم العالمي لسلامة المرضى"
    >
      {/* 1. Adult Patient/Caregiver Figure (Deep Royal Blue: #1A5FA5) */}
      {/* Circular Head */}
      <circle cx="44" cy="24" r="10" fill="#1A5FA5" />
      {/* Torso with protective arm extending to the right over the child */}
      <path
        d="M 33 41
           C 28 44, 23 54, 22 70
           C 26 68, 32 64, 38 60
           C 38 66, 40 73, 43 78
           C 49 71, 52 61, 52 48
           C 58 47, 68 51, 75 57
           C 78 54, 77 49, 72 46
           C 62 40, 52 38, 44 39
           C 39 39, 35 40, 33 41 Z"
        fill="#1A5FA5"
      />

      {/* 2. Smaller Patient Figure (Vibrant Sky/Cyan Blue: #2BA4E2) */}
      {/* Circular Head */}
      <circle cx="83" cy="32" r="9" fill="#2BA4E2" />
      {/* Torso leaning gently inward */}
      <path
        d="M 73 48
           C 68 53, 67 61, 69 76
           C 73 81, 79 86, 83 89
           C 90 79, 95 65, 94 53
           C 89 49, 80 46, 73 48 Z"
        fill="#2BA4E2"
      />

      {/* 3. Supporting Protective Hand (Official WPSD Warm Orange: #F27A00) */}
      <path
        d="M 12 76
           C 16 73, 30 68, 44 69
           C 49 64, 55 63, 59 63
           C 55 67, 49 72, 42 74
           C 56 72, 76 77, 95 82
           C 101 83, 107 81, 109 80
           C 106 84, 98 90, 87 93
           C 67 98, 41 99, 24 86
           C 17 88, 13 83, 12 76 Z"
        fill="#F27A00"
      />
    </svg>
  );

  // Badge variant: placed inside a clean rounded container with subtle border
  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl bg-white border border-orange-200/80 shadow-xs ring-1 ring-orange-100 hover:ring-orange-300 transition-all p-1 shrink-0 ${sizeMap[size].badge} ${className}`}
        title={language === 'ar' ? 'اليوم العالمي لسلامة المرضى 2026' : 'World Patient Safety Day 2026'}
      >
        <EmblemSvg className="w-full h-full" />
      </div>
    );
  }

  // Pure emblem
  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${sizeMap[size].emblem} ${className}`}>
        <EmblemSvg />
      </div>
    );
  }

  // Full variant with the Arabic/English calligraphy matching WHOPSD2026AR.png
  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${sizeMap[size].full} ${className}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col justify-center leading-tight">
        {language === 'ar' ? (
          <>
            <span className="font-black text-[#1A5FA5] text-xs sm:text-sm tracking-tight leading-snug">
              اليوم العالمي
            </span>
            <span className="font-black text-[#1A5FA5] text-xs sm:text-sm tracking-tight leading-snug">
              لسلامة المرضى
            </span>
            <span className="font-bold text-[#2BA4E2] text-[10px] sm:text-[11px] mt-0.5">
              17 أيلول/سبتمبر 2026
            </span>
          </>
        ) : (
          <>
            <span className="font-black text-[#1A5FA5] text-xs sm:text-sm tracking-tight leading-snug">
              World Patient
            </span>
            <span className="font-black text-[#1A5FA5] text-xs sm:text-sm tracking-tight leading-snug">
              Safety Day
            </span>
            <span className="font-bold text-[#2BA4E2] text-[10px] sm:text-[11px] mt-0.5">
              17 September 2026
            </span>
          </>
        )}
      </div>

      <div className={`shrink-0 ${sizeMap[size].emblem}`}>
        <EmblemSvg />
      </div>
    </div>
  );
};
