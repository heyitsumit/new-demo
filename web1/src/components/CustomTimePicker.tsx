import React, { useState, useRef, useEffect } from 'react';
import { Clock, Check } from 'lucide-react';

interface CustomTimePickerProps {
  label?: string;
  value: string;
  onChange: (time: string) => void;
  required?: boolean;
  error?: string;
  className?: string;
}

const MORNING_SLOTS = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
];

const EVENING_SLOTS = [
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
];

export const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  label,
  value,
  onChange,
  required = false,
  error,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (slot: string) => {
    onChange(slot);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full text-left ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          {label} {required && <span className="text-blue-600">*</span>}
        </label>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-white text-sm font-medium transition-all duration-200 outline-none
          ${
            isOpen
              ? 'border-blue-600 ring-2 ring-blue-100 shadow-sm'
              : 'border-slate-200/90 text-slate-800 hover:border-blue-400'
          }
          ${error ? 'border-red-300 text-red-900' : ''}
        `}
      >
        <span className="flex items-center gap-2.5 truncate">
          <Clock className="w-4 h-4 text-blue-600 shrink-0" />
          <span className={!value ? 'text-slate-400 font-normal' : 'text-slate-800 font-medium'}>
            {value || 'Select consultation time'}
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-50 left-0 right-0 sm:w-96 mt-2 p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-[0_12px_32px_rgba(15,23,42,0.14)] animate-in fade-in zoom-in-95 duration-150">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Morning Slots (10:00 AM – 1:30 PM)
          </div>
          <div className="grid grid-cols-3 gap-1.5 mb-3.5">
            {MORNING_SLOTS.map((slot) => {
              const isSelected = value === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => handleSelect(slot)}
                  className={`px-2.5 py-2 text-xs font-medium rounded-lg border transition-all flex items-center justify-center gap-1
                    ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700'
                    }
                  `}
                >
                  {isSelected && <Check className="w-3 h-3 shrink-0" />}
                  <span>{slot}</span>
                </button>
              );
            })}
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Evening Slots (4:30 PM – 9:00 PM)
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {EVENING_SLOTS.map((slot) => {
              const isSelected = value === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => handleSelect(slot)}
                  className={`px-2.5 py-2 text-xs font-medium rounded-lg border transition-all flex items-center justify-center gap-1
                    ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700'
                    }
                  `}
                >
                  {isSelected && <Check className="w-3 h-3 shrink-0" />}
                  <span>{slot}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
};
