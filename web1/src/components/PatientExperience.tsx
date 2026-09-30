import React from 'react';
import { ArrowRight, MessageSquareText, Search, FileSpreadsheet, Sparkles, SmilePlus } from 'lucide-react';

export const PatientExperience: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Listening',
      desc: 'We start by understanding your concerns, dental history, and comfort preferences in a relaxed, non-rushed conversation.',
      icon: MessageSquareText,
    },
    {
      num: '02',
      title: 'Digital Examination',
      desc: 'Intraoral visual check and high-resolution imaging to evaluate teeth, gums, and bone structure with precision.',
      icon: Search,
    },
    {
      num: '03',
      title: 'Transparent Treatment Plan',
      desc: 'You receive clear clinical options, expected timeline, and transparent cost estimates before any treatment begins.',
      icon: FileSpreadsheet,
    },
    {
      num: '04',
      title: 'Gentle, Precise Care',
      desc: 'Treatment performed using modern rotary tools and gentle anesthesia techniques to ensure high patient comfort.',
      icon: Sparkles,
    },
    {
      num: '05',
      title: 'Post-Care & Guidance',
      desc: 'Clear post-operative instructions and preventative tips to help protect your oral health for the long term.',
      icon: SmilePlus,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Patient Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-2 font-display [text-wrap:balance]">
            What To Expect During Your Dental Visit.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            A structured, calming, and transparent five-step process designed to eliminate dental anxiety and deliver predictable clinical results.
          </p>
        </div>

        {/* Step Cards Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-blue-600 font-mono">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Ready for your routine hygiene checkup or consultation?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Appointments available Monday to Saturday between 10:00 AM and 9:00 PM.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
          >
            Book An Appointment
          </button>
        </div>
      </div>
    </section>
  );
};
