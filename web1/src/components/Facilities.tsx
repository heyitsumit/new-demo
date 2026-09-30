import React from 'react';
import { ShieldAlert, Sparkles, Stethoscope, Eye, CheckCircle2 } from 'lucide-react';

export const Facilities: React.FC = () => {
  const highlights = [
    {
      title: 'Class-B Autoclave Sterilization',
      desc: 'All instruments undergo ultrasonic cleaning and high-pressure steam sterilization in compliance with strict clinical hygiene protocols.',
      icon: ShieldAlert,
    },
    {
      title: 'Digital Dental Chair Operatory',
      desc: 'Ergonomic dental chair unit equipped with soft LED shadowless illumination and quiet rotary handpieces to reduce vibration and stress.',
      icon: Stethoscope,
    },
    {
      title: 'High-Resolution Intraoral Imaging',
      desc: 'See exactly what your dentist sees. Clear digital visuals help you make informed decisions about your dental health with complete transparency.',
      icon: Eye,
    },
    {
      title: 'Comfortable & Calm Ambience',
      desc: 'Thoughtfully designed interior with soothing colors, air purification, and a relaxing waiting area to ensure a calm visit for patients of all ages.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Sterility & Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-2 mb-6 font-display [text-wrap:balance]">
              Modern Clinic Standards Designed For Safety & Comfort.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              At PRECISION Dental Clinic, patient safety is foundational. We adhere strictly to standardized sterilization routines and maintain a clean, welcoming environment at our Wadgaon Sheri clinic.
            </p>

            <div className="space-y-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-200 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Visual Card Layout */}
          <div className="lg:col-span-6">
            <div className="relative bg-gradient-to-tr from-blue-900 to-slate-900 rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-6 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Orane · Wadgaon Sheri Practice</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black mb-4 font-display">
                  Sterility First Protocol
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                  Every handpiece, bur, and clinical surface is sanitized between patients. Disposable barriers and sealed autoclaved pouches are opened in front of you.
                </p>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  {[
                    '100% Autoclaved surgical and examination sets',
                    'Single-use sterile suction tips, gloves & bibs',
                    'Intraoral camera with real-time chairside screen',
                    'Daily chemical surface disinfection routine',
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Pune Municipal Corporation Compliant</span>
                  <span className="text-blue-300 font-semibold">Strict Infection Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
