import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomDatePickerProps {
  label?: string;
  value: string; // YYYY-MM-DD
  onChange: (date: string) => void;
  required?: boolean;
  error?: string;
  className?: string;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  required = false,
  error,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize view month based on selected value or current date
  const today = new Date();
  const selectedDate = value ? new Date(value + 'T00:00:00') : null;
  
  const [viewYear, setViewYear] = useState<number>(
    selectedDate ? selectedDate.getFullYear() : today.getFullYear()
  );
  const [viewMonth, setViewMonth] = useState<number>(
    selectedDate ? selectedDate.getMonth() : today.getMonth()
  );

  // Close when clicking outside
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

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Days in month
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const m = String(viewMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    const dateStr = `${viewYear}-${m}-${d}`;
    onChange(dateStr);
    setIsOpen(false);
  };

  const formatDisplayDate = (val: string) => {
    if (!val) return 'Select preferred date';
    const d = new Date(val + 'T00:00:00');
    if (isNaN(d.getTime())) return val;
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Check if a day is today or past
  const isPast = (day: number) => {
    const checkDate = new Date(viewYear, viewMonth, day, 23, 59, 59);
    return checkDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const isCurrentSelection = (day: number) => {
    if (!value) return false;
    const [y, m, d] = value.split('-').map(Number);
    return y === viewYear && m === viewMonth + 1 && d === day;
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
          <CalendarIcon className="w-4 h-4 text-blue-600 shrink-0" />
          <span className={!value ? 'text-slate-400 font-normal' : 'text-slate-800 font-medium'}>
            {formatDisplayDate(value)}
          </span>
        </span>
      </button>

      {/* Floating Calendar Sheet */}
      {isOpen && (
        <div className="absolute z-50 left-0 right-0 sm:w-80 mt-2 p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-[0_12px_32px_rgba(15,23,42,0.14)] animate-in fade-in zoom-in-95 duration-150">
          {/* Header Month / Year controls */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-sm font-bold text-slate-900">
              {monthNames[viewMonth]} {viewYear}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Next month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {daysOfWeek.map((day) => (
              <span key={day} className="text-[11px] font-semibold text-slate-400">
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const disabled = isPast(day);
              const isSelected = isCurrentSelection(day);

              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleSelectDay(day)}
                  className={`h-8 w-8 mx-auto rounded-lg text-xs font-medium flex items-center justify-center transition-colors
                    ${
                      isSelected
                        ? 'bg-blue-600 text-white font-bold shadow-sm'
                        : disabled
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer'
                    }
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Hours: 10:00 AM – 9:00 PM</span>
            <button
              type="button"
              onClick={() => {
                const todayStr = new Date().toISOString().split('T')[0];
                onChange(todayStr);
                setIsOpen(false);
              }}
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Today
            </button>
          </div>
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
};
