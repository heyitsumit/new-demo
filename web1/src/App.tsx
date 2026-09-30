import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Facilities } from './components/Facilities';
import { PatientExperience } from './components/PatientExperience';
import { Doctors } from './components/Doctors';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ClinicEditorModal } from './components/ClinicEditorModal';
import { INITIAL_DOCTORS } from './data/clinicData';
import { DentalService, Doctor } from './types/clinic';

export default function App() {
  const [doctors, setDoctors] = useState<Doctor[]>(() => {
    const saved = localStorage.getItem('precision_dental_doctors');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved doctors', e);
      }
    }
    return INITIAL_DOCTORS;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<DentalService | null>(null);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<Doctor | null>(null);

  const handleOpenBooking = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToDoctors = () => {
    const el = document.getElementById('dentists');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (service: DentalService) => {
    setSelectedServiceForBooking(service);
    handleOpenBooking();
  };

  const handleBookWithDoctor = (doctor: Doctor) => {
    setSelectedDoctorForBooking(doctor);
    handleOpenBooking();
  };

  const handleSaveDoctors = (updated: Doctor[]) => {
    setDoctors(updated);
    localStorage.setItem('precision_dental_doctors', JSON.stringify(updated));
  };

  const handleResetDefaults = () => {
    setDoctors(INITIAL_DOCTORS);
    localStorage.removeItem('precision_dental_doctors');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col antialiased selection:bg-blue-600 selection:text-white pb-14 md:pb-0">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Signature Reference Cards */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onNavigateToServices={handleNavigateToServices}
          onNavigateToDoctors={handleNavigateToDoctors}
        />

        {/* Why Choose Us matching reference asymmetrical floating cards */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* Specialized Dental Services with Custom Modals */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Hospital-Grade Sterilization & Equipment */}
        <Facilities />

        {/* Patient Experience 5-Step Journey */}
        <PatientExperience onOpenBooking={handleOpenBooking} />

        {/* Verified & Editable Dental Doctors */}
        <Doctors
          doctors={doctors}
          onBookWithDoctor={handleBookWithDoctor}
          onOpenEditor={() => setIsEditorOpen(true)}
        />

        {/* Verified 5.0 Google Reviews & Ratings */}
        <Reviews />

        {/* Inside Clinic Atmosphere & Gallery */}
        <Gallery />

        {/* Appointment Booking with 100% Custom Dropdowns & Date/Time pickers */}
        <AppointmentSection
          preselectedService={selectedServiceForBooking}
          preselectedDoctor={selectedDoctorForBooking}
        />

        {/* Verified Location at The Orane, Wadgaon Sheri */}
        <LocationSection />
      </main>

      {/* Royal Blue Editorial Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Mobile Floating Quick Contact Bar */}
      <MobileQuickBar onOpenBooking={handleOpenBooking} />

      {/* Clinician Profile Customizer / Placeholder Editor */}
      <ClinicEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        doctors={doctors}
        onSaveDoctors={handleSaveDoctors}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
