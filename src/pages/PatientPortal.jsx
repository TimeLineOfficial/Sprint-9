import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Droplet, 
  Thermometer, 
  Calendar, 
  FileText, 
  Video, 
  Download, 
  CheckCircle2, 
  User, 
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function PatientPortal() {
  const upcomingAppointments = [
    {
      id: 'APT-849201',
      doctor: 'Dr. Sarah Jenkins, MD',
      specialty: 'Cardiology',
      date: 'Today, 02:30 PM',
      type: 'HD Video Telehealth',
      status: 'CONFIRMED'
    }
  ];

  const pastConsultations = [
    {
      id: 'APT-710293',
      doctor: 'Dr. David Miller, MD',
      specialty: 'General Medicine',
      date: 'August 28, 2026',
      prescription: 'Rx_Amoxicillin_500mg.pdf',
      labReport: 'Complete_Blood_Panel.pdf'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Patient Profile Banner */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
            JD
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase mb-1">
              <ShieldCheck className="w-3 h-3" /> Active Patient Account
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              John Doe (Patient #P-9021)
            </h1>
            <p className="text-xs text-slate-500">Age: 38 • Blood Group: O+ Positive • Primary Care: Dr. David Miller</p>
          </div>
        </div>

        <Link
          to="/book-appointment"
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase flex items-center justify-center space-x-1.5 shadow-sm transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>New Appointment</span>
        </Link>
      </div>

      {/* Health Vitals Tracker Cards */}
      <section className="space-y-3">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Real-Time Health Vitals Sync
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-rose-500">
              <Heart className="w-5 h-5" />
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600">NORMAL</span>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">72 <span className="text-xs font-semibold text-slate-400">BPM</span></div>
              <div className="text-[11px] text-slate-500 mt-0.5">Resting Heart Rate</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-blue-500">
              <Activity className="w-5 h-5" />
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600">OPTIMAL</span>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">120/80 <span className="text-xs font-semibold text-slate-400">mmHg</span></div>
              <div className="text-[11px] text-slate-500 mt-0.5">Blood Pressure</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-emerald-500">
              <Droplet className="w-5 h-5" />
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600">99% SpO2</span>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">99% <span className="text-xs font-semibold text-slate-400">O2</span></div>
              <div className="text-[11px] text-slate-500 mt-0.5">Blood Oxygen Saturation</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-amber-500">
              <Thermometer className="w-5 h-5" />
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-600">FASTING</span>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">95 <span className="text-xs font-semibold text-slate-400">mg/dL</span></div>
              <div className="text-[11px] text-slate-500 mt-0.5">Blood Glucose Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Appointments & Records */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 space-y-4 shadow-sm text-xs">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white border-b pb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-600" /> Upcoming Consultations
          </h3>

          {upcomingAppointments.map((apt) => (
            <div key={apt.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-emerald-600">{apt.id}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">
                  {apt.status}
                </span>
              </div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">{apt.doctor}</div>
              <div className="text-slate-500 text-[11px]">{apt.specialty} • {apt.date}</div>
              <div className="pt-2 flex gap-2">
                <a
                  href={`https://telehealth.medipulse.org/room/${apt.id.toLowerCase()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
                >
                  <Video className="w-3.5 h-3.5" /> Join Video Call Room
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 space-y-4 shadow-sm text-xs">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white border-b pb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" /> Digital Prescriptions &amp; Lab Reports
          </h3>

          {pastConsultations.map((past) => (
            <div key={past.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white">{past.doctor}</span>
                <span className="text-[10px] text-slate-400">{past.date}</span>
              </div>
              <div className="text-slate-500 text-[11px]">{past.specialty}</div>
              <div className="pt-2 flex flex-wrap gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 border border-blue-200 dark:border-blue-800 font-bold text-[11px] flex items-center gap-1.5">
                  <Download className="w-3 h-3" /> {past.prescription}
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 border border-emerald-200 dark:border-emerald-800 font-bold text-[11px] flex items-center gap-1.5">
                  <Download className="w-3 h-3" /> {past.labReport}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
