import React from 'react';
import { Calendar, Clock, Stethoscope, ArrowRight, ShieldCheck, MapPin, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { DoctorHeroGraphic } from './DentalIllustrations';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToServices: () => void;
  onNavigateToDoctors: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onNavigateToServices,
  onNavigateToDoctors,
}) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Soft Blue/Slate Healthcare Gradients */}
      <div className="absolute top-0 right-1/4 -z-10 w-[550px] h-[550px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 -z-10 w-[400px] h-[400px] rounded-full bg-indigo-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location & Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Shop No 3, The Orane · Wadgaon Sheri, Pune</span>
            </div>

            {/* Main Headline - Text-Wrap Balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] mb-6 font-display [text-wrap:balance]">
              We Care For <br />
              <span className="text-blue-600">Your Smile</span> With Complete Precision.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Experience gentle, personalized dentistry at Wadgaon Sheri’s trusted dental clinic. From painless root canal therapies and modern clear aligners to routine cleanings and dental implants, we focus on your comfort and long-term oral health.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-blue-600/25 cursor-pointer"
              >
                <span>Make an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onNavigateToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Verified Google Rating Trust Factor */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 ml-1">5.0</span>
                <span className="text-slate-500">(11+ Verified Google Reviews)</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Sterile & Autoclaved Instruments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reference UI Doctor Frame Graphic */}
          <div className="lg:col-span-5 relative">
            <DoctorHeroGraphic className="w-full max-w-md mx-auto aspect-[4/5]" />
          </div>
        </div>

        {/* Reference UI 3-Signature Floating Action Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Appointment Request */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)] hover:border-blue-300 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                Request Visit
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Directly book your preferred time slot for dental consultation, cleaning, or emergency dental ache relief.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Featured Opening Hours (Deep Royal Blue solid card as in reference image) */}
          <div className="relative group bg-blue-600 rounded-3xl p-6 sm:p-7 shadow-[0_14px_35px_rgba(30,64,175,0.25)] text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform backdrop-blur-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Opening Hours
              </h3>
              <div className="text-2xl font-black tracking-tight text-white mb-1">
                10:00 AM – 9:00 PM
              </div>
              <p className="text-xs text-blue-100 font-medium mb-4">
                Monday to Saturday
              </p>
              <div className="text-xs text-blue-100 bg-white/10 rounded-lg p-2.5 mb-6">
                Sunday: Available by Prior Appointment
              </div>
            </div>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-sm"
            >
              <span>Call: {CLINIC_INFO.phone}</span>
            </a>
          </div>

          {/* Card 3: Find Doctors & Specialties */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)] hover:border-blue-300 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                Meet Our Dentists
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Led by Dr. Mayank Bajaj (Orthodontics & Implantology) and Dr. Nandini (Dental Surgery & Restorations).
              </p>
            </div>
            <button
              type="button"
              onClick={onNavigateToDoctors}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>View Doctors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
