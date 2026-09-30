import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, UserPlus } from 'lucide-react';
import { Doctor } from '../types/clinic';

interface ClinicEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctors: Doctor[];
  onSaveDoctors: (updated: Doctor[]) => void;
  onResetDefaults: () => void;
}

export const ClinicEditorModal: React.FC<ClinicEditorModalProps> = ({
  isOpen,
  onClose,
  doctors,
  onSaveDoctors,
  onResetDefaults,
}) => {
  const [localDoctors, setLocalDoctors] = useState<Doctor[]>(doctors);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleUpdateField = (id: string, field: keyof Doctor, value: string) => {
    setLocalDoctors((prev) =>
      prev.map((doc) => {
        if (doc.id === id) {
          if (field === 'specialties') {
            return {
              ...doc,
              specialties: value.split(',').map((s) => s.trim()).filter(Boolean),
            };
          }
          return { ...doc, [field]: value };
        }
        return doc;
      })
    );
  };

  const handleSave = () => {
    onSaveDoctors(localDoctors);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Live Clinic Profile Customizer
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5 font-display">
              Edit Clinician Details & Placeholders
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Update doctor names, qualifications, or add visiting consultants as per clinic requirements.
            </p>
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
        <div className="p-6 overflow-y-auto space-y-6">
          {localDoctors.map((doc, idx) => (
            <div
              key={doc.id}
              className={`p-5 rounded-2xl border transition-all ${
                !doc.isVerified
                  ? 'border-blue-300 bg-blue-50/20'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {doc.name}
                  </span>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    doc.isVerified
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  {doc.isVerified ? 'Verified Doctor' : 'Editable Slot'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Doctor Name
                  </label>
                  <input
                    type="text"
                    value={doc.name}
                    onChange={(e) => handleUpdateField(doc.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:border-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Clinical Role / Designation
                  </label>
                  <input
                    type="text"
                    value={doc.role}
                    onChange={(e) => handleUpdateField(doc.id, 'role', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:border-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Qualifications (e.g. BDS, MDS)
                  </label>
                  <input
                    type="text"
                    value={doc.qualifications}
                    onChange={(e) => handleUpdateField(doc.id, 'qualifications', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:border-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Specialties (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={doc.specialties.join(', ')}
                    onChange={(e) => handleUpdateField(doc.id, 'specialties', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:border-blue-600 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Doctor Biography
                  </label>
                  <textarea
                    rows={2}
                    value={doc.bio}
                    onChange={(e) => handleUpdateField(doc.id, 'bio', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:border-blue-600 outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onResetDefaults}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Verified Clinic Defaults</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Apply Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
