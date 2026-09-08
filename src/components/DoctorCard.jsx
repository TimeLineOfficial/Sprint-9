import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Video, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const DoctorCard = ({ doctor, onSelectDoctor }) => {
  return (
    <div className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      {/* Profile Image & Availability Badge */}
      <div className="relative aspect-square sm:aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
          <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold rounded-full bg-emerald-600 text-white uppercase shadow-sm flex items-center gap-1">
            <Video className="w-2.5 h-2.5" /> Video &amp; Clinic
          </span>
        </div>
        <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold rounded-md bg-slate-900/80 text-white backdrop-blur-sm">
          ${doctor.fee} / Consult
        </span>
      </div>

      {/* Body Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow text-xs space-y-2">
        <div>
          <div className="text-[9px] sm:text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5 truncate">
            {doctor.specialty} • {doctor.experience}
          </div>
          <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xs sm:text-sm line-clamp-1 leading-snug">
            {doctor.name}
          </h3>
          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{doctor.title}</p>
        </div>

        {/* Rating & Hospital */}
        <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] text-slate-500">
          <span className="inline-flex items-center space-x-0.5 px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-bold">
            <span>{doctor.rating}</span>
            <Star className="w-2.5 h-2.5 fill-slate-950" />
          </span>
          <span className="truncate">({doctor.reviews} Patient Reviews)</span>
        </div>

        <div className="text-[11px] text-slate-500 flex items-center gap-1 truncate">
          <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <span className="truncate">{doctor.hospital}</span>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-2.5 border-t border-slate-100 dark:border-slate-700">
          <button
            onClick={() => onSelectDoctor && onSelectDoctor(doctor)}
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition-transform"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
};
