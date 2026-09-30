import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello PRECISION Dental Clinic, I would like to inquire about an appointment.'
    );
    window.open(`https://wa.me/918830135771?text=${text}`, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
          <span className="text-[10px] font-bold">Call Clinic</span>
        </a>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
