import React from 'react';

interface AseerClusterLogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AseerClusterLogo: React.FC<AseerClusterLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md'
}) => {
  // Dimension presets
  const sizeClasses = {
    sm: variant === 'icon' ? 'w-8 h-8' : variant === 'horizontal' ? 'h-8' : 'h-12',
    md: variant === 'icon' ? 'w-11 h-11' : variant === 'horizontal' ? 'h-10' : 'h-16',
    lg: variant === 'icon' ? 'w-16 h-16' : variant === 'horizontal' ? 'h-14' : 'h-24'
  };

  // 5-pointed star emblem of Aseer Health Cluster
  const Emblem = ({ emblemClass = 'w-full h-full' }: { emblemClass?: string }) => (
    <svg
      viewBox="0 0 200 200"
      className={emblemClass}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Aseer Health Cluster Emblem"
    >
      <defs>
        <linearGradient id="aseerBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="aseerCyanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="saudiMapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* 5 Petals of the Star arranged symmetrically at 0°, 72°, 144°, 216°, 288° */}
      {[0, 72, 144, 216, 288].map((angle, idx) => (
        <g key={idx} transform={`rotate(${angle} 100 100)`}>
          {/* Main outer droplet loop */}
          <path
            d="M 100 12 C 114 42 134 68 126 94 C 122 108 112 114 100 114 C 88 114 78 108 74 94 C 66 68 86 42 100 12 Z"
            fill="url(#aseerBlueGrad)"
          />
          {/* Inner intertwining loop cutout / inner wave */}
          <path
            d="M 100 35 C 109 54 120 72 115 88 C 112 96 106 100 100 100 C 94 100 88 96 85 88 C 80 72 91 54 100 35 Z"
            fill="#FFFFFF"
          />
          {/* Inner dynamic ribbon curve */}
          <path
            d="M 100 46 C 105 60 112 74 109 84 C 107 90 103 92 100 92 C 97 92 93 90 91 84 C 88 74 95 60 100 46 Z"
            fill="url(#aseerCyanGrad)"
          />
          {/* Decorative twist accent line */}
          <path
            d="M 94 65 C 100 78 106 78 112 65"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Central Circular White Core */}
      <circle cx="100" cy="100" r="32" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3" />

      {/* Stylized Saudi Arabia Map silhouette inside the circle */}
      <g transform="translate(74, 73) scale(0.52)">
        {/* Saudi Map boundary contour */}
        <path
          d="M 15 15 C 25 10 45 8 65 12 C 78 15 88 28 92 40 C 95 55 90 70 82 82 C 75 92 65 98 50 96 C 38 94 28 88 20 78 C 12 68 8 52 10 38 C 11 26 12 18 15 15 Z"
          fill="#F8FAFC"
        />
        {/* Vertical lined barcode/striped map representation matching official logo */}
        <clipPath id="mapClip">
          <path d="M 15 15 C 25 10 45 8 65 12 C 78 15 88 28 92 40 C 95 55 90 70 82 82 C 75 92 65 98 50 96 C 38 94 28 88 20 78 C 12 68 8 52 10 38 C 11 26 12 18 15 15 Z" />
        </clipPath>
        <g clipPath="url(#mapClip)">
          {[12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90].map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x}
              y2="105"
              stroke="url(#saudiMapGrad)"
              strokeWidth="2.5"
            />
          ))}
        </g>
      </g>
    </svg>
  );

  // Icon only
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}>
        <Emblem />
      </div>
    );
  }

  // Horizontal layout (Emblem on left/right + Arabic and English text)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
        <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0">
          <Emblem />
        </div>
        <div className="flex flex-col justify-center text-left rtl:text-right leading-tight">
          <span className="font-extrabold text-[#0088CC] text-sm sm:text-base tracking-normal">
            تجمع عسير الصحي
          </span>
          <span className="font-bold text-[#0088CC] text-[11px] sm:text-xs tracking-tight">
            Aseer Health Cluster
          </span>
        </div>
      </div>
    );
  }

  // Full stacked layout (Emblem above + Arabic & English typography)
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 drop-shadow-sm">
        <Emblem />
      </div>
      <div className="flex flex-col items-center justify-center leading-none">
        <span className="font-black text-[#0088CC] text-lg sm:text-xl tracking-normal mb-1">
          تجمع عسير الصحي
        </span>
        <span className="font-extrabold text-[#0088CC] text-xs sm:text-sm tracking-tight">
          Aseer Health Cluster
        </span>
      </div>
    </div>
  );
};
