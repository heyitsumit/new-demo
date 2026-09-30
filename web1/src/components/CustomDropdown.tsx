import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface DropdownOption {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

interface CustomDropdownProps {
  label?: string;
  placeholder?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  id?: string;
  helperText?: string;
  className?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  error,
  id,
  helperText,
  className = '',
}) => {
  const generatedId = useId();
  const dropdownId = id || generatedId;
  const listboxId = `${dropdownId}-listbox`;
  
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

  // Keep highlighted index in sync with selected value when opened
  useEffect(() => {
    if (isOpen) {
      const idx = options.findIndex((opt) => opt.value === value);
      setHighlightedIndex(idx >= 0 ? idx : 0);
    }
  }, [isOpen, value, options]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex >= 0) {
      const activeEl = listRef.current.children[highlightedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen) {
          if (highlightedIndex >= 0 && highlightedIndex < options.length) {
            onChange(options[highlightedIndex].value);
            setIsOpen(false);
            triggerRef.current?.focus();
          }
        } else {
          setIsOpen(true);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
        }
        break;
      default:
        break;
    }
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className={`relative w-full text-left ${className}`} ref={containerRef}>
      {label && (
        <label
          id={`${dropdownId}-label`}
          htmlFor={dropdownId}
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
        >
          {label} {required && <span className="text-blue-600">*</span>}
        </label>
      )}

      {/* Custom Trigger Button - 100% Custom, Zero Native Select */}
      <button
        id={dropdownId}
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-labelledby={label ? `${dropdownId}-label ${dropdownId}` : undefined}
        aria-required={required}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-white text-sm font-medium transition-all duration-200 outline-none
          ${
            disabled
              ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'hover:border-blue-400 focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-100 cursor-pointer'
          }
          ${
            error
              ? 'border-red-300 text-red-900 focus-visible:border-red-500 focus-visible:ring-red-100'
              : isOpen
              ? 'border-blue-600 ring-2 ring-blue-100 shadow-sm'
              : 'border-slate-200/90 text-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.02)]'
          }
        `}
      >
        <span className="flex items-center gap-2.5 truncate">
          {selectedOption?.icon && (
            <span className="shrink-0 text-blue-600">{selectedOption.icon}</span>
          )}
          <span className={`truncate ${!selectedOption ? 'text-slate-400 font-normal' : 'text-slate-800 font-medium'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>

        <span className="shrink-0 flex items-center text-slate-400 pointer-events-none">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 text-slate-500 ${
              isOpen ? 'rotate-180 text-blue-600' : ''
            }`}
          />
        </span>
      </button>

      {/* Floating Options Panel */}
      {isOpen && (
        <div
          className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-xl border border-slate-200/80 shadow-[0_12px_32px_rgba(15,23,42,0.12)] overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-64 overflow-y-auto overscroll-contain"
        >
          <ul
            id={listboxId}
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={label ? `${dropdownId}-label` : undefined}
            className="p-1.5 space-y-0.5"
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isHighlighted = highlightedIndex === index;

              return (
                <li
                  key={option.value}
                  id={`${dropdownId}-opt-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => handleSelect(option.value)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm transition-colors cursor-pointer select-none
                    ${
                      isSelected
                        ? 'bg-blue-50/90 text-blue-700 font-semibold'
                        : isHighlighted
                        ? 'bg-slate-50 text-slate-900 font-medium'
                        : 'text-slate-700 hover:bg-slate-50'
                    }
                  `}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    {option.icon && (
                      <span className={`shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`}>
                        {option.icon}
                      </span>
                    )}
                    <div className="truncate">
                      <div className="truncate">{option.label}</div>
                      {option.sublabel && (
                        <div className="text-xs text-slate-400 font-normal truncate mt-0.5">
                          {option.sublabel}
                        </div>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {error ? (
        <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
};
