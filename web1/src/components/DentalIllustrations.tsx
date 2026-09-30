import React from 'react';

export const ToothIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2C7.5 2 4 4.5 4 8c0 3.5 1.5 6.5 2 11 .3 2.5 2.5 3 4 3 1.5 0 2-.5 2-2s.5-2 2-2 2 .5 2 2 .5 2 2 2c1.5 0 3.7-.5 4-3 .5-4.5 2-7.5 2-11 0-3.5-3.5-6-8-6Z" />
  </svg>
);

export const BracesIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12h18" />
    <path d="M7 8v8" />
    <path d="M12 7v10" />
    <path d="M17 8v8" />
    <rect x="5.5" y="10" width="3" height="4" rx="0.5" fill="currentColor" fillOpacity="0.2" />
    <rect x="10.5" y="9.5" width="3" height="5" rx="0.5" fill="currentColor" fillOpacity="0.2" />
    <rect x="15.5" y="10" width="3" height="4" rx="0.5" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const ImplantIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 4h10v3a5 5 0 0 1-10 0V4Z" />
    <path d="M9 11h6" />
    <path d="M10 14h4" />
    <path d="M11 17h2" />
    <path d="M12 17v4" />
  </svg>
);

export const DoctorHeroGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Decorative Royal Blue Geometric Frame from Reference Image */}
      <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-2 translate-x-3 translate-y-3 opacity-90 transition-transform duration-500 group-hover:rotate-0" />
      
      {/* Primary Card Container */}
      <div className="relative z-10 w-full h-full bg-gradient-to-b from-blue-50/80 via-white to-slate-50 rounded-3xl border border-blue-200/80 shadow-[0_20px_50px_rgba(30,64,175,0.15)] overflow-hidden flex flex-col justify-end p-6">
        {/* Modern Medical Background Architecture Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#2563EB" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Doctor Silhouette & Medical Stethoscope Illustration */}
        <div className="relative z-10 flex flex-col items-center pt-8 pb-4">
          <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 p-1 shadow-lg shadow-blue-500/20">
            <div className="w-full h-full rounded-2xl bg-slate-900/5 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-end relative">
              {/* Doctor Portrait SVG Composition */}
              <svg viewBox="0 0 200 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background glow */}
                <circle cx="100" cy="90" r="70" fill="#DBEAFE" />
                {/* Doctor Head & Hair */}
                <path d="M70 70C70 45 82 30 100 30C118 30 130 45 130 70V80H70V70Z" fill="#1E293B" />
                <ellipse cx="100" cy="85" rx="30" ry="34" fill="#F8D3B4" />
                <path d="M90 75C90 75 95 80 100 80C105 80 110 75 110 75" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="90" cy="72" rx="3" ry="3" fill="#0F172A" />
                <ellipse cx="110" cy="72" rx="3" ry="3" fill="#0F172A" />
                <path d="M92 98C96 102 104 102 108 98" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                {/* White Medical Coat & Collar */}
                <path d="M40 220L55 125L85 135L75 220H40Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                <path d="M160 220L145 125L115 135L125 220H160Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                <path d="M75 135L100 160L125 135V220H75V135Z" fill="#F1F5F9" />
                {/* Medical Tie & Shirt */}
                <path d="M92 125L100 135L108 125V110H92V125Z" fill="#2563EB" />
                <path d="M96 135L100 170L104 135Z" fill="#1D4ED8" />
                {/* Medical Stethoscope */}
                <path d="M72 135C72 165 90 185 100 185C110 185 128 165 128 135" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="100" cy="190" r="9" fill="#94A3B8" stroke="#334155" strokeWidth="3" />
                {/* Clinical Clipboard in hand */}
                <rect x="135" y="160" width="35" height="50" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
                <line x1="142" y1="172" x2="162" y2="172" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                <line x1="142" y1="182" x2="162" y2="182" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                <line x1="142" y1="192" x2="155" y2="192" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Doctor Details Badge & Google Rating Verified Pill */}
        <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-blue-100 shadow-md">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Precision Dental Clinical Team
              </div>
              <div className="text-base font-bold text-slate-900">
                Dr. Mayank Bajaj & Dr. Nandini
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Orthodontics · Implantology · General Dentistry
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-end">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                ★ 5.0 Rating
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">11+ Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
