import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenEditor?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenEditor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Dentists', href: '#dentists' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark adhering to Top Bar Contract */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-xl sm:text-2xl font-black tracking-tight text-slate-900 group"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-base shadow-sm shadow-blue-500/30 group-hover:bg-blue-700 transition-colors">
              P
            </span>
            <span className="font-extrabold font-display">
              PRECISION<span className="text-blue-600">.</span>
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
              title="Call Clinic Directly"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-150 shadow-sm shadow-blue-600/30 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 md:hidden hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
                {onOpenEditor && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEditor();
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 py-1"
                  >
                    Edit Clinic Details
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
