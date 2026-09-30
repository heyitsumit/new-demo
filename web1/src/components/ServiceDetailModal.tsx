import React from 'react';
import { X, CheckCircle, Calendar, Clock, AlertCircle } from 'lucide-react';
import { DentalService } from '../types/clinic';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
  onBookService: (service: DentalService) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-slate-100 bg-slate-50/50">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Service {service.index} · Precision Dental Clinic
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
              {service.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Clinical Overview
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Advantages / What to Expect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Treatment Highlights & Advantages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100/60 text-xs font-medium text-slate-800"
                >
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Duration & Safety Note */}
          <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Estimated Session Time:{' '}
                <strong className="text-slate-900">{service.duration}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-500">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Personalized diagnosis determined upon clinical examination.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Have questions? Call us at{' '}
            <strong className="text-slate-800">+91 88301 35771</strong>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onBookService(service);
                onClose();
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Service</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
