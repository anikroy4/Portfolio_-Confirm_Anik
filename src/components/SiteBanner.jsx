import React, { useState } from 'react';

export default function SiteBanner({ text }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-[60] w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md animate-in slide-in-from-top duration-500">
      
      {/* Container */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        
        {/* Invisible spacer to perfectly center the text using flexbox */}
        <div className="w-6 sm:w-8 shrink-0"></div>

        {/* Banner Content */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide">
          {/* Pulsing "Live" Indicator */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          
          <p className="text-center">
            {text || 'Open to work • Available for freelance & full-time roles'}
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Dismiss banner"
        >
          <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>
  );
}