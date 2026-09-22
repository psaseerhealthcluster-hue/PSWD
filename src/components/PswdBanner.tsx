import React from 'react';

interface PswdBannerProps {
  className?: string;
}

export const PswdBanner: React.FC<PswdBannerProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#FFF5EA] via-[#FFF9F2] to-[#FED7AA]/30 border border-orange-200/70 shadow-sm ${className}`}>
      {/* Background soft ambient elements */}
      <svg
        viewBox="0 0 900 240"
        className="w-full h-auto max-h-[190px] select-none"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="World Patient Safety Day Healthcare Team Illustration"
      >
        <defs>
          <linearGradient id="hillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#9A3412" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Gentle background rolling hill */}
        <path
          d="M -50 175 Q 450 140 950 175 L 950 250 L -50 250 Z"
          fill="url(#hillGrad)"
        />

        {/* Floating Pink Heart */}
        <g transform="translate(240, 52)">
          <path
            d="M 12,21.35 C 2,13.2 0,9.5 0,6 C 0,2.5 2.5,0 6,0 C 8.2,0 10.5,1.5 12,3.5 C 13.5,1.5 15.8,0 18,0 C 21.5,0 24,2.5 24,6 C 24,9.5 22,13.2 12,21.35 Z"
            fill="#E11D48"
            className="animate-pulse"
          />
        </g>

        {/* Teal ECG Pulse Line in center */}
        <g transform="translate(420, 32)">
          <path
            d="M 0 50 L 35 50 L 45 35 L 55 70 L 68 8 L 80 85 L 90 45 L 102 52 L 135 50"
            fill="none"
            stroke="#0D9488"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Orange Plus Sign */}
        <g transform="translate(650, 48)">
          <rect x="8" y="0" width="8" height="24" rx="3" fill="#EA580C" />
          <rect x="0" y="8" width="24" height="8" rx="3" fill="#EA580C" />
        </g>

        {/* ================= CHARACTER 1: Orange Scrubs with Stethoscope ================= */}
        <g transform="translate(130, 30)" filter="url(#shadowFilter)">
          {/* Circular halo behind head */}
          <circle cx="50" cy="80" r="62" fill="url(#haloGlow)" />

          {/* Body / Scrubs */}
          <path
            d="M 18 115 C 18 85 82 85 82 115 C 82 155 75 160 50 160 C 25 160 18 155 18 115 Z"
            fill="#EA580C"
          />
          {/* White inner V-neck collar */}
          <polygon points="50,118 41,92 59,92" fill="#FFFFFF" />

          {/* Stethoscope curve */}
          <path
            d="M 33 118 Q 50 148 67 118"
            fill="none"
            stroke="#1E293B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="133" r="3" fill="#1E293B" />

          {/* Head & Face */}
          <circle cx="50" cy="62" r="26" fill="#FED7AA" />
          {/* Hair */}
          <path
            d="M 24 60 C 24 35 76 35 76 60 C 76 68 70 70 66 65 C 55 58 45 58 34 65 C 30 70 24 68 24 60 Z"
            fill="#451A03"
          />
          {/* Eyes & Smile */}
          <circle cx="42" cy="63" r="2.5" fill="#1E293B" />
          <circle cx="58" cy="63" r="2.5" fill="#1E293B" />
          <path
            d="M 45 71 Q 50 76 55 71"
            fill="none"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Little hands */}
          <circle cx="16" cy="145" r="9" fill="#FED7AA" />
          <circle cx="84" cy="145" r="9" fill="#FED7AA" />

          {/* Legs & Shoes */}
          <rect x="36" y="158" width="10" height="20" rx="3" fill="#334155" />
          <rect x="54" y="158" width="10" height="20" rx="3" fill="#334155" />
        </g>

        {/* ================= CHARACTER 2: Teal Scrubs with Medical Clipboard ================= */}
        <g transform="translate(310, 30)" filter="url(#shadowFilter)">
          <circle cx="50" cy="80" r="62" fill="url(#haloGlow)" />

          {/* Body / Scrubs */}
          <path
            d="M 18 115 C 18 85 82 85 82 115 C 82 155 75 160 50 160 C 25 160 18 155 18 115 Z"
            fill="#0D9488"
          />
          <polygon points="50,118 41,92 59,92" fill="#FFFFFF" />

          {/* Medical Clipboard */}
          <rect x="68" y="105" width="22" height="32" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          <rect x="74" y="102" width="10" height="4" rx="1.5" fill="#64748B" />
          <line x1="72" y1="113" x2="86" y2="113" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="72" y1="119" x2="86" y2="119" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="72" y1="125" x2="82" y2="125" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

          {/* Head & Face */}
          <circle cx="50" cy="62" r="26" fill="#FED7AA" />
          <path
            d="M 24 60 C 24 35 76 35 76 60 C 76 68 70 70 66 65 C 55 58 45 58 34 65 C 30 70 24 68 24 60 Z"
            fill="#451A03"
          />
          <circle cx="42" cy="63" r="2.5" fill="#1E293B" />
          <circle cx="58" cy="63" r="2.5" fill="#1E293B" />
          <path
            d="M 45 71 Q 50 76 55 71"
            fill="none"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <circle cx="16" cy="145" r="9" fill="#FED7AA" />
          <circle cx="70" cy="145" r="9" fill="#FED7AA" />

          <rect x="36" y="158" width="10" height="20" rx="3" fill="#334155" />
          <rect x="54" y="158" width="10" height="20" rx="3" fill="#334155" />
        </g>

        {/* ================= CHARACTER 3: Purple Scrubs with Surgical Mask ================= */}
        <g transform="translate(510, 30)" filter="url(#shadowFilter)">
          <circle cx="50" cy="80" r="62" fill="url(#haloGlow)" />

          {/* Body / Scrubs */}
          <path
            d="M 18 115 C 18 85 82 85 82 115 C 82 155 75 160 50 160 C 25 160 18 155 18 115 Z"
            fill="#7C3AED"
          />
          <polygon points="50,118 41,92 59,92" fill="#FFFFFF" />

          {/* Head & Face */}
          <circle cx="50" cy="62" r="26" fill="#FED7AA" />
          <path
            d="M 24 60 C 24 35 76 35 76 60 C 76 68 70 70 66 65 C 55 58 45 58 34 65 C 30 70 24 68 24 60 Z"
            fill="#451A03"
          />
          {/* Eyes smiling (curved up) */}
          <circle cx="42" cy="61" r="2.5" fill="#1E293B" />
          <circle cx="58" cy="61" r="2.5" fill="#1E293B" />

          {/* Surgical Mask */}
          <rect x="35" y="69" width="30" height="15" rx="3" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1" />
          <line x1="35" y1="73" x2="30" y2="71" stroke="#38BDF8" strokeWidth="1" />
          <line x1="65" y1="73" x2="70" y2="71" stroke="#38BDF8" strokeWidth="1" />

          <circle cx="16" cy="145" r="9" fill="#FED7AA" />
          <circle cx="84" cy="145" r="9" fill="#FED7AA" />

          <rect x="36" y="158" width="10" height="20" rx="3" fill="#334155" />
          <rect x="54" y="158" width="10" height="20" rx="3" fill="#334155" />
        </g>

        {/* ================= CHARACTER 4: Magenta Scrubs with White Cross ================= */}
        <g transform="translate(710, 30)" filter="url(#shadowFilter)">
          <circle cx="50" cy="80" r="62" fill="url(#haloGlow)" />

          {/* Body / Scrubs */}
          <path
            d="M 18 115 C 18 85 82 85 82 115 C 82 155 75 160 50 160 C 25 160 18 155 18 115 Z"
            fill="#BE185D"
          />
          <polygon points="50,118 41,92 59,92" fill="#FFFFFF" />

          {/* White Cross on chest */}
          <rect x="47" y="125" width="6" height="18" rx="1.5" fill="#FFFFFF" />
          <rect x="41" y="131" width="18" height="6" rx="1.5" fill="#FFFFFF" />

          {/* Head & Face */}
          <circle cx="50" cy="62" r="26" fill="#FED7AA" />
          <path
            d="M 24 60 C 24 35 76 35 76 60 C 76 68 70 70 66 65 C 55 58 45 58 34 65 C 30 70 24 68 24 60 Z"
            fill="#451A03"
          />
          <circle cx="42" cy="63" r="2.5" fill="#1E293B" />
          <circle cx="58" cy="63" r="2.5" fill="#1E293B" />
          <path
            d="M 45 71 Q 50 76 55 71"
            fill="none"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <circle cx="16" cy="145" r="9" fill="#FED7AA" />
          <circle cx="84" cy="145" r="9" fill="#FED7AA" />

          <rect x="36" y="158" width="10" height="20" rx="3" fill="#334155" />
          <rect x="54" y="158" width="10" height="20" rx="3" fill="#334155" />
        </g>
      </svg>
    </div>
  );
};
