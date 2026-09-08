import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SPECIALTIES, DOCTORS } from '../data/healthcareData';
import { DoctorCard } from '../components/DoctorCard';
import { 
  HeartPulse, 
  Brain, 
  Baby, 
  Bone, 
  Sparkles, 
  Stethoscope, 
  Smile, 
  Eye, 
  ArrowRight, 
  ShieldCheck, 
  Video, 
  Clock, 
  PhoneCall, 
  CheckCircle2,
  Calendar,
  Search
} from 'lucide-react';

const ICON_MAP = {
  HeartPulse,
  Brain,
  Baby,
  Bone,
  Sparkles,
  Stethoscope,
  Smile,
  Eye
};

export default function Home() {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorSelect = (doctor) => {
    navigate('/book-appointment', { state: { doctor } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Quick Search & Emergency Banner */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-5 sm:p-8 shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Certified Telemedicine Network
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Connect With Top Specialists &amp; Book Virtual Consultations
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              24/7 Instant access to board-certified doctors, digital health records, and prescription home delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0">
            <Link
              to="/doctors"
              className="px-5 py-3 rounded-xl bg-white text-emerald-700 font-extrabold text-xs uppercase flex items-center justify-center space-x-2 shadow-md hover:bg-emerald-50 active:scale-95 transition-all"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Find A Doctor</span>
            </Link>
            <Link
              to="/book-appointment"
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs uppercase flex items-center justify-center space-x-2 shadow-md active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties Quick Navigation Bar */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Explore Medical Specialties
          </div>
          <Link to="/doctors" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto custom-scrollbar pb-1 snap-x snap-mandatory">
          {SPECIALTIES.map((spec) => {
            const IconComp = ICON_MAP[spec.iconName] || Stethoscope;
            return (
              <Link
                key={spec.id}
                to={`/doctors?specialty=${spec.name}`}
                className="group flex flex-col items-center justify-center min-w-[95px] sm:min-w-[125px] p-3 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-slate-700/50 transition-all text-center space-y-2 flex-shrink-0 snap-start active:scale-95"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-800 dark:text-slate-200 leading-tight">
                    {spec.name}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">{spec.count} Doctors</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Doctors Section - 2 columns on Mobile */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Top Verified Medical Specialists
            </h2>
            <p className="text-xs text-slate-500">Board-certified doctors available for instant telehealth video consults</p>
          </div>
          <Link
            to="/doctors"
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>See All Specialists</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {DOCTORS.slice(0, 6).map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} onSelectDoctor={handleDoctorSelect} />
          ))}
        </div>
      </section>

      {/* Corporate Platform Reliability & HIPAA Compliance Footer Card */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-3 border border-slate-800 shadow-xl">
        <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4" /> Enterprise HIPAA &amp; Clinical Quality Standards
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">24/7 Connected Patient Telehealth Infrastructure</h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          MediPulse Healthcare Enterprise connects over 120+ accredited medical centers with encrypted HD video consultation rooms, instant e-prescriptions, and continuous vitals monitoring.
        </p>
      </section>
    </div>
  );
}
