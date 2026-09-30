import React from 'react';
import { Award, Shield, HeartHandshake, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F4F8FC] relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Staggered Floating Cards matching Reference Image */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1: Professional Doctors */}
              <div className="col-span-2 sm:col-span-1 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_10px_25px_rgba(15,23,42,0.04)] transform sm:-translate-y-4 hover:translate-y-[-6px] transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Experienced Specialists
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Care delivered by MDS Orthodontist and experienced dental surgeons with patient-first ethos.
                </p>
              </div>

              {/* Card 2: 5.0 Google Rating */}
              <div className="col-span-2 sm:col-span-1 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_10px_25px_rgba(15,23,42,0.04)] transform sm:translate-y-6 hover:translate-y-4 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  5.0 ★
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Verified Google Rating
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Based on 11+ authentic patient reviews praising hygienic care and gentle treatments.
                </p>
              </div>

              {/* Card 3: Advanced Sterilization */}
              <div className="col-span-2 sm:col-span-1 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_10px_25px_rgba(15,23,42,0.04)] transform sm:-translate-y-2 hover:translate-y-[-4px] transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Autoclave Sterility
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Strict multi-tier hospital-grade infection control and sterilized instruments for every patient.
                </p>
              </div>

              {/* Card 4: Patient Comfort & Support */}
              <div className="col-span-2 sm:col-span-1 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_10px_25px_rgba(15,23,42,0.04)] transform sm:translate-y-8 hover:translate-y-6 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Gentle Chairside Care
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Mindful pain management, empathetic communication, and transparent clinical explanations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
              Why Choose PRECISION Dental
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display [text-wrap:balance]">
              Care Designed Around You & Your Family’s Smile.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
              At PRECISION Dental Clinic in Wadgaon Sheri, we combine modern clinical techniques with genuine patient empathy. We prioritize your comfort from the moment you step through our doors at The Orane.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8 w-full">
              {[
                'Conservative dental approach: preserving your natural tooth structure whenever possible',
                'Clear, upfront treatment explanations with zero pushy sales tactics',
                'Comfortable, hygienic operatory designed to relieve dental anxiety',
                'Flexible appointment scheduling from 10:00 AM to 9:00 PM',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <span>View Google Maps Listing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
