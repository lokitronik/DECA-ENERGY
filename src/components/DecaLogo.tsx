import React from 'react';

interface DecaLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const DecaLogo: React.FC<DecaLogoProps> = ({
  className = '',
  theme = 'dark',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const whiteOrDark = isLight ? '#0F172A' : '#FFFFFF';

  // Dimension heights
  const heightClasses = {
    sm: 'h-8 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
    '2xl': 'h-32 sm:h-40',
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 1000 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses} w-auto`}
      >
        <defs>
          <linearGradient id="decaGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="30%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>

          <linearGradient id="decaSun" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>

        {/* ================= D E C A (ROW 1) ================= */}
        
        {/* --- D --- */}
        <g id="char-D" transform="translate(60, 20)">
          {/* Main D body */}
          <path
            d="M20 20 H90 C145 20 185 55 185 110 C185 165 145 200 90 200 H20 V20 Z"
            stroke={whiteOrDark}
            strokeWidth="32"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Sun in bottom-left */}
          <path
            d="M 22 200 A 46 46 0 0 1 68 200 Z"
            fill="url(#decaSun)"
          />
          {/* Sun Rays */}
          {/* Ray 1 (vertical up) */}
          <rect x="22" y="105" width="12" height="30" rx="6" fill="#F59E0B" />
          {/* Ray 2 (diagonal ~35 deg) */}
          <rect x="44" y="118" width="12" height="30" rx="6" transform="rotate(32 44 118)" fill="#F59E0B" />
          {/* Ray 3 (diagonal ~65 deg) */}
          <rect x="74" y="145" width="12" height="30" rx="6" transform="rotate(62 74 145)" fill="#F59E0B" />
          {/* Ray 4 (horizontal right) */}
          <rect x="85" y="186" width="30" height="12" rx="6" fill="#F59E0B" />
        </g>

        {/* --- E --- */}
        <g id="char-E" transform="translate(300, 20)">
          {/* Top white bar */}
          <rect x="10" y="20" width="145" height="32" rx="4" fill={whiteOrDark} />
          {/* Middle green bar */}
          <rect x="10" y="94" width="145" height="34" rx="4" fill="url(#decaGreen)" />
          {/* Bottom white bar */}
          <rect x="10" y="168" width="145" height="32" rx="4" fill={whiteOrDark} />
        </g>

        {/* --- C --- */}
        <g id="char-C" transform="translate(500, 20)">
          <path
            d="M 165 65 C 145 35 115 20 80 20 C 35 20 0 58 0 110 C 0 162 35 200 80 200 C 115 200 145 185 165 155"
            stroke={whiteOrDark}
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* --- A --- */}
        <g id="char-A" transform="translate(730, 20)">
          {/* Outer chevron A */}
          <path
            d="M 10 200 L 95 20 L 180 200"
            stroke={whiteOrDark}
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Green filled triangle inside */}
          <polygon
            points="95,95 55,178 135,178"
            fill="url(#decaGreen)"
          />
        </g>

        {/* ================= E N E R G Y (ROW 2) ================= */}
        <g id="text-energy" transform="translate(0, 250)">
          <text
            x="500"
            y="70"
            textAnchor="middle"
            fill="url(#decaGreen)"
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="78"
            letterSpacing="0.48em"
          >
            ENERGY
          </text>
        </g>
      </svg>
    </div>
  );
};
