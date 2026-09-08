import React from 'react';
import { ShieldCheck, HeartPulse, PhoneCall, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700 pb-6">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
              <HeartPulse className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-slate-900 dark:text-white">MEDIPULSE HEALTHCARE</div>
              <div className="text-[10px] text-slate-400">Integrated Digital Health &amp; Telemedicine Enterprise</div>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-[11px] font-medium">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> HIPAA Compliant</span>
            <span className="flex items-center gap-1"><PhoneCall className="w-3.5 h-3.5 text-emerald-500" /> 24/7 Virtual Care</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-emerald-500" /> 120+ Partner Hospitals</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div>
            © 2026 MediPulse Healthcare Systems. All Rights Reserved. Emergency Hotline: +1 (800) 555-PULSE
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-emerald-600 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-emerald-600 cursor-pointer">Telehealth Terms</span>
            <span>•</span>
            <span className="hover:text-emerald-600 cursor-pointer">Medical Accreditation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
