import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare, CheckCircle, Clock, MapPin, Send, AlertCircle, Copy, Check } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES, INITIAL_DOCTORS } from '../data/clinicData';
import { CustomDropdown, DropdownOption } from './CustomDropdown';
import { CustomDatePicker } from './CustomDatePicker';
import { CustomTimePicker } from './CustomTimePicker';
import { AppointmentFormData, DentalService, Doctor } from '../types/clinic';

interface AppointmentSectionProps {
  preselectedService?: DentalService | null;
  preselectedDoctor?: Doctor | null;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedService,
  preselectedDoctor,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceId: preselectedService?.id || 'preventive-cleaning',
    serviceName: preselectedService?.title || 'Preventive Care & Dental Cleaning',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    preferredTime: '11:00 AM',
    preferredDoctor: preselectedDoctor?.name || 'Dr. Mayank Bajaj (Orthodontics & Implants)',
    appointmentType: 'consultation',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    referenceId: string;
    details: AppointmentFormData;
  } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Sync preselected props if changed
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceId: preselectedService.id,
        serviceName: preselectedService.title,
      }));
    }
  }, [preselectedService]);

  React.useEffect(() => {
    if (preselectedDoctor) {
      setFormData((prev) => ({
        ...prev,
        preferredDoctor: `${preselectedDoctor.name} (${preselectedDoctor.role})`,
      }));
    }
  }, [preselectedDoctor]);

  // Options for custom dropdowns (Requirement 19 - Zero native selects)
  const serviceOptions: DropdownOption[] = CLINIC_SERVICES.map((s) => ({
    value: s.id,
    label: s.title,
    sublabel: s.shortDesc,
  }));

  const doctorOptions: DropdownOption[] = INITIAL_DOCTORS.map((d) => ({
    value: d.name,
    label: d.name,
    sublabel: d.role,
  }));

  const appointmentTypeOptions: DropdownOption[] = [
    { value: 'consultation', label: 'First-time Dental Consultation', sublabel: 'Comprehensive checkup & evaluation' },
    { value: 'cleaning', label: 'Hygiene & Teeth Cleaning', sublabel: 'Ultrasonic scaling & polishing' },
    { value: 'urgent', label: 'Dental Ache / Urgent Attention', sublabel: 'Fast-track slot for pain relief' },
    { value: 'aligners', label: 'Orthodontics & Braces Assessment', sublabel: 'Clear aligner or braces discussion' },
    { value: 'implants', label: 'Dental Implant Consultation', sublabel: 'Fixed tooth replacement planning' },
    { value: 'follow-up', label: 'Treatment Follow-Up', sublabel: 'Review for ongoing procedure' },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber.replace(/[\s-+]/g, '').slice(-10))) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.serviceId) {
      errs.serviceId = 'Please select a dental service.';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred date.';
    }
    if (!formData.preferredTime) {
      errs.preferredTime = 'Please select a preferred time.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable frontend scheduling pipeline
    setTimeout(() => {
      const refId = `PDC-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedBooking({
        referenceId: refId,
        details: { ...formData },
      });
      setIsSubmitting(false);
    }, 700);
  };

  // Direct WhatsApp Booking Handler
  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello PRECISION Dental Clinic,\n\nI would like to request an appointment:\n- Patient: ${formData.fullName || 'Patient'}\n- Phone: ${formData.phoneNumber || 'Provided via WhatsApp'}\n- Service: ${formData.serviceName}\n- Preferred Date: ${formData.preferredDate}\n- Preferred Time: ${formData.preferredTime}\n\nClinic: Shop No 3, The Orane, Wadgaon Sheri, Pune.`
    );
    window.open(`https://wa.me/918830135771?text=${text}`, '_blank');
  };

  const handleCopyRef = (refId: string) => {
    navigator.clipboard.writeText(refId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-[#F8FAFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Hours & Direct WhatsApp Booking */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Seamless Scheduling
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-2 mb-6 font-display [text-wrap:balance]">
                Schedule Your Visit At PRECISION Dental.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Reserve your consultation with our experienced dental team in Wadgaon Sheri, Pune. We respect your time with minimal waiting.
              </p>

              {/* Clinic Timings & Fast Response Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Consultation Hours
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Monday to Saturday: <strong>10:00 AM – 9:00 PM</strong>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Sunday: Available by Prior Appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Clinic Location
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Shop No 3, The Orane, Anjali English School Lane, Wadgaon Sheri, Pune 411014
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Telephone Helpline
                    </h4>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    Instant WhatsApp Assistance
                  </h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Prefer messaging? Chat directly with the clinic reception.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shrink-0 shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Form with ZERO Native Select Controls (Requirement 19) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Appointment Request Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below. You will receive an immediate confirmation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Full Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-medium transition-all duration-200 outline-none
                        ${
                          errors.fullName
                            ? 'border-red-300 ring-2 ring-red-50 text-red-900'
                            : 'border-slate-200/90 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }
                      `}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Phone Number <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-medium transition-all duration-200 outline-none
                        ${
                          errors.phoneNumber
                            ? 'border-red-300 ring-2 ring-red-50 text-red-900'
                            : 'border-slate-200/90 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }
                      `}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-600">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                {/* Email (Optional) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Email Address <span className="text-slate-400 font-normal">(Optional for confirmation receipt)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. rahul.sharma@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/90 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white text-sm font-medium transition-all duration-200 outline-none"
                  />
                </div>

                {/* Custom Dropdown: Preferred Service (Requirement 19 - Zero Native Selects) */}
                <CustomDropdown
                  id="preferred-service-dropdown"
                  label="Preferred Dental Service"
                  required
                  options={serviceOptions}
                  value={formData.serviceId}
                  onChange={(val) => {
                    const matched = CLINIC_SERVICES.find((s) => s.id === val);
                    setFormData({
                      ...formData,
                      serviceId: val,
                      serviceName: matched ? matched.title : val,
                    });
                  }}
                  error={errors.serviceId}
                />

                {/* Custom Date & Time Controls (Requirement 20 - Custom accessible controls) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CustomDatePicker
                    label="Preferred Date"
                    required
                    value={formData.preferredDate}
                    onChange={(date) => {
                      setFormData({ ...formData, preferredDate: date });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                    }}
                    error={errors.preferredDate}
                  />

                  <CustomTimePicker
                    label="Preferred Time Slot"
                    required
                    value={formData.preferredTime}
                    onChange={(time) => {
                      setFormData({ ...formData, preferredTime: time });
                      if (errors.preferredTime) setErrors({ ...errors, preferredTime: '' });
                    }}
                    error={errors.preferredTime}
                  />
                </div>

                {/* Custom Dropdown: Appointment Type & Preferred Doctor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CustomDropdown
                    id="appointment-type-dropdown"
                    label="Appointment Type"
                    options={appointmentTypeOptions}
                    value={formData.appointmentType}
                    onChange={(val) => setFormData({ ...formData, appointmentType: val })}
                  />

                  <CustomDropdown
                    id="preferred-doctor-dropdown"
                    label="Preferred Doctor"
                    options={doctorOptions}
                    value={formData.preferredDoctor}
                    onChange={(val) => setFormData({ ...formData, preferredDoctor: val })}
                  />
                </div>

                {/* Patient Notes */}
                <div>
                  <label
                    htmlFor="patientNotes"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Any specific symptoms or questions? <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="patientNotes"
                    rows={2}
                    placeholder="e.g. Sensitivity to cold water on lower left tooth..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/90 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white text-sm font-medium transition-all duration-200 outline-none resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-150 shadow-md shadow-blue-600/30 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Reserving Slot...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Appointment Request</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Book via WhatsApp</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>
                    Our reception staff will confirm your slot via call or WhatsApp. No advance payment required online.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-7 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="text-center mb-6">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Appointment Requested Successfully
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 font-display">
                Thank You, {confirmedBooking.details.fullName}!
              </h3>
              <p className="text-xs text-slate-600 mt-2">
                We have received your appointment request for PRECISION Dental Clinic.
              </p>
            </div>

            {/* Reference Number Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Reference Code
                </span>
                <div className="text-base font-black text-slate-900 font-mono">
                  {confirmedBooking.referenceId}
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopyRef(confirmedBooking.referenceId)}
                className="p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-200/50 transition-colors"
                title="Copy Reference Code"
              >
                {copiedRef ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Appointment Summary */}
            <div className="space-y-2.5 text-xs text-slate-700 bg-blue-50/50 p-4 rounded-2xl border border-blue-100 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <strong className="text-slate-900">{confirmedBooking.details.serviceName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Date:</span>
                <strong className="text-slate-900">{confirmedBooking.details.preferredDate}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time Slot:</span>
                <strong className="text-slate-900">{confirmedBooking.details.preferredTime}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Clinic:</span>
                <strong className="text-slate-900">Shop No 3, The Orane, Wadgaon Sheri</strong>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                className="w-full sm:w-auto py-3 px-6 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
