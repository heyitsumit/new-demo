import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Copy, Check, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const full = `${CLINIC_INFO.name}, ${CLINIC_INFO.address}, ${CLINIC_INFO.locality}, ${CLINIC_INFO.city}, ${CLINIC_INFO.state} ${CLINIC_INFO.pincode}`;
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display [text-wrap:balance]">
            Find PRECISION Dental In Wadgaon Sheri.
          </h2>
          <p className="text-base text-slate-600 font-normal mt-3 leading-relaxed">
            Conveniently located at The Orane building, right next to the Mithaiwala shop on Anjali English School lane.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Full Address & Hours Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-[#F8FAFD] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    Clinic Address
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-display">
                  {CLINIC_INFO.name}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {CLINIC_INFO.address},<br />
                  {CLINIC_INFO.locality},<br />
                  {CLINIC_INFO.city}, {CLINIC_INFO.state} – {CLINIC_INFO.pincode}
                </p>

                {/* Landmark Tip */}
                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 text-xs text-slate-700 mb-6">
                  <strong className="text-blue-900 block mb-1">Landmark Directions:</strong>
                  Located on the ground commercial floor of The Orane building, adjacent to Mithaiwala shop along Anjali English School lane, Sainikwadi, Wadgaon Sheri.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/80">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Hours Table */}
            <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Operating Timings</span>
              </div>

              <div className="space-y-3">
                {CLINIC_INFO.openingHours.map((slot, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-slate-200/60 last:border-none"
                  >
                    <span className="font-semibold text-slate-700">{slot.days}</span>
                    <span className="font-bold text-blue-700 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Preview Box */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 flex flex-col justify-between p-6 sm:p-8">
              {/* Map Graphic Styling / Preview */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CBD5E1" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  {/* Road lines emulation */}
                  <path d="M 0 150 Q 200 120 400 200 T 800 250" stroke="#94A3B8" strokeWidth="8" fill="none" />
                  <path d="M 250 0 L 250 600" stroke="#94A3B8" strokeWidth="6" fill="none" />
                  <path d="M 100 300 L 600 100" stroke="#94A3B8" strokeWidth="4" fill="none" />
                </svg>
              </div>

              {/* Pin Indicator */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-600/20 rounded-full animate-ping pointer-events-none" />
                  <div className="relative w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/30">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>

                <div className="mt-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200 shadow-lg text-center max-w-sm">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Google Maps Verified Location
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    PRECISION Dental Clinic
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    The Orane · Wadgaon Sheri, Pune
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Listing (Rating 5.0 ★ · 11+ Reviews)</span>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
