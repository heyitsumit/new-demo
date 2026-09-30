import React, { useState } from 'react';
import { ArrowRight, Sparkles, Smile, ShieldCheck, Activity, Zap, HeartHandshake } from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { DentalService } from '../types/clinic';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ToothIcon, BracesIcon, ImplantIcon } from './DentalIllustrations';

interface ServicesProps {
  onSelectServiceForBooking: (service: DentalService) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'preventive', label: 'Preventive' },
    { id: 'orthodontics', label: 'Aligners & Braces' },
    { id: 'surgical', label: 'Implants' },
    { id: 'restorative', label: 'Root Canal' },
    { id: 'cosmetic', label: 'Cosmetic' },
  ];

  const filteredServices = selectedCategoryId === 'all'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter((s) => s.category === selectedCategoryId);

  const renderServiceIcon = (iconName: string, isFeatured: boolean) => {
    const iconClass = isFeatured ? 'w-8 h-8 text-white' : 'w-8 h-8 text-blue-600';
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Smile':
        return <Smile className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Activity':
        return <Activity className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      default:
        return <ToothIcon className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Specialized Dental Care
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 font-display [text-wrap:balance]">
            Comprehensive Dental Treatments In Wadgaon Sheri.
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Every procedure is performed with precision diagnostics, hygienic sterilization standards, and patient comfort as our primary focus.
          </p>

          {/* Interactive Filter Tabs adhering to Skill's Segmented Control Rules */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100/80 rounded-2xl max-w-xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer
                  ${
                    selectedCategoryId === cat.id
                      ? 'bg-white text-blue-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid matching the Reference UI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            // Emulate the reference UI's signature featured blue card for the 2nd/3rd item or index 1
            const isFeatured = index === 1;

            return (
              <div
                key={service.id}
                className={`relative group rounded-3xl p-7 flex flex-col justify-between transition-all duration-300
                  ${
                    isFeatured
                      ? 'bg-blue-600 text-white shadow-[0_20px_40px_rgba(30,64,175,0.22)]'
                      : 'bg-white border border-slate-200/90 text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)] hover:border-blue-300'
                  }
                `}
              >
                <div>
                  {/* Service Index & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105
                        ${isFeatured ? 'bg-white/15 backdrop-blur-sm' : 'bg-blue-50'}
                      `}
                    >
                      {renderServiceIcon(service.iconName, isFeatured)}
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider font-mono
                        ${isFeatured ? 'text-blue-100' : 'text-slate-400'}
                      `}
                    >
                      {service.index}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`text-xl font-bold mb-3 font-display
                      ${isFeatured ? 'text-white' : 'text-slate-900'}
                    `}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 font-normal
                      ${isFeatured ? 'text-blue-100' : 'text-slate-600'}
                    `}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-current/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className={`text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer
                      ${
                        isFeatured
                          ? 'text-white hover:text-blue-100'
                          : 'text-blue-600 hover:text-blue-800'
                      }
                    `}
                  >
                    <span>Learn Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForBooking(service)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer
                      ${
                        isFeatured
                          ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-sm'
                          : 'bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white'
                      }
                    `}
                  >
                    Book Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Treatment Safety Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Notice: Dental treatments are tailored to individual clinical diagnosis. Exact procedure duration, plan, and requirements are determined during comprehensive in-clinic examination.
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookService={onSelectServiceForBooking}
      />
    </section>
  );
};
