import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenEditor?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenEditor }) => {
  return (
    <footer className="bg-[#0A2540] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand & Clinic Statement */}
          <div className="lg:col-span-4">
            <a href="#hero" className="inline-block text-2xl font-black tracking-tight text-white mb-4 font-display">
              PRECISION<span className="text-blue-400">.</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              Dedicated to compassionate, modern dental care at Wadgaon Sheri, Pune. Backed by verified 5.0 Google ratings and patient satisfaction.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-blue-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Verified Dental Practice · Wadgaon Sheri</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#dentists" className="hover:text-white transition-colors">Our Dentists</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Clinic Location</a>
              </li>
            </ul>
          </div>

          {/* Clinical Specialties */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
              Core Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Preventive Care & Dental Scaling</li>
              <li>Orthodontic Braces & Clear Aligners</li>
              <li>Single-Sitting Root Canal Therapy</li>
              <li>Permanent Dental Implants</li>
              <li>Teeth Whitening & Smile Design</li>
              <li>Pediatric & Family Dentistry</li>
            </ul>
          </div>

          {/* Contact Details & Direct Actions */}
          <div className="lg:col-span-3 space-y-3.5 text-xs text-slate-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
              Contact & Visit
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                Shop No 3, The Orane, Anjali English School Lane, Next to Mithaiwala Shop, Wadgaon Sheri, Pune 411014
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-white transition-colors font-bold text-white">
                {CLINIC_INFO.phone}
              </a>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Mon – Sat: 10:00 AM – 9:00 PM</span>
            </div>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors"
              >
                <span>View Google Maps Listing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
          </div>

          <div className="text-[11px] text-slate-400 max-w-xl text-center sm:text-right">
            Medical Disclaimer: Content is provided for patient educational purposes only and does not replace professional dental diagnosis. Consult our dental surgeons for personalized treatment.
          </div>

          {onOpenEditor && (
            <button
              type="button"
              onClick={onOpenEditor}
              className="text-[11px] text-slate-500 hover:text-slate-300 underline cursor-pointer"
            >
              Clinic Admin Mode
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
