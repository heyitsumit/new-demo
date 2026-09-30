import React, { useState } from 'react';
import { ShieldCheck, Calendar, ArrowRight, UserCheck, Edit3 } from 'lucide-react';
import { Doctor } from '../types/clinic';

interface DoctorsProps {
  doctors: Doctor[];
  onBookWithDoctor: (doctor: Doctor) => void;
  onOpenEditor: () => void;
}

export const Doctors: React.FC<DoctorsProps> = ({
  doctors,
  onBookWithDoctor,
  onOpenEditor,
}) => {
  const [selectedDoctorModal, setSelectedDoctorModal] = useState<Doctor | null>(null);

  return (
    <section id="dentists" className="py-20 sm:py-28 bg-[#F8FAFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Reference UI "Our Doctors" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
              <UserCheck className="w-4 h-4" />
              <span>Dental Specialists</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
              Meet Our Doctors
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Qualified dental professionals dedicated to precise diagnosis, conservative care, and patient comfort.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenEditor}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
              title="Edit Clinician Details or Add Visiting Doctor"
            >
              <Edit3 className="w-3.5 h-3.5 text-blue-600" />
              <span>Edit Clinician Info</span>
            </button>
          </div>
        </div>

        {/* Doctors Grid matching the Reference UI's 3 arched card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => {
            const isPlaceholder = !doctor.isVerified;

            return (
              <div
                key={doctor.id}
                className={`relative group bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between
                  ${
                    isPlaceholder
                      ? 'border-dashed border-blue-300/80 bg-blue-50/20'
                      : 'border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)] hover:border-blue-300'
                  }
                `}
              >
                <div>
                  {/* Portrait Container - Arched frame inspired by Reference UI */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-blue-100/70 via-blue-50 to-white flex items-center justify-center mb-6 p-4 border border-blue-100">
                    {/* Architectural Arched Backdrop */}
                    <div className="w-36 h-40 rounded-t-full bg-blue-600/10 border border-blue-200 flex flex-col items-center justify-end pb-2 relative overflow-hidden">
                      {/* Doctor Icon Representation */}
                      <svg viewBox="0 0 100 120" className="w-28 h-28" fill="none">
                        <circle cx="50" cy="40" r="22" fill="#3B82F6" fillOpacity="0.8" />
                        <path
                          d="M20 110C20 85 32 70 50 70C68 70 80 85 80 110H20Z"
                          fill="#1E40AF"
                        />
                        <path
                          d="M44 70L50 82L56 70"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        <circle cx="50" cy="92" r="3" fill="#E2E8F0" />
                      </svg>
                    </div>

                    {/* Verified vs Placeholder Badge */}
                    <div className="absolute top-3 right-3">
                      {doctor.isVerified ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Verified</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300">
                          <Edit3 className="w-3 h-3" />
                          <span>Editable Slot</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1 uppercase tracking-wider">
                      {doctor.role}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {doctor.qualifications}
                    </p>
                    {doctor.experienceYears && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {doctor.experienceYears}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {doctor.bio}
                  </p>

                  {/* Specialties List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {doctor.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Trigger */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onBookWithDoctor(doctor)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
