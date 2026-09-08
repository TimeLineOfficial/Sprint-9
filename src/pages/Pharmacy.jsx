import React, { useState } from 'react';
import { PHARMACY_ITEMS, DIAGNOSTIC_LABS } from '../data/healthcareData';
import { Pill, Activity, ShieldCheck, ShoppingCart, CheckCircle2, Clock, FileText } from 'lucide-react';

export default function Pharmacy() {
  const [cart, setCart] = useState([]);
  const [bookedLab, setBookedLab] = useState(null);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-[10px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Certified Prescription Pharmacy &amp; Diagnostic Labs
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Pharmacy &amp; Diagnostic Health Checkups
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <div className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase flex items-center space-x-1.5 shadow-sm">
            <ShoppingCart className="w-4 h-4" />
            <span>Pharmacy Cart ({cart.length})</span>
          </div>
        </div>
      </div>

      {/* Diagnostic Lab Packages */}
      <section className="space-y-3">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Activity className="w-4 h-4 text-emerald-600" /> Popular Diagnostic Health Packages
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DIAGNOSTIC_LABS.map((lab) => (
            <div key={lab.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 space-y-3 shadow-sm text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-extrabold text-[10px] uppercase">
                    {lab.discount}
                  </span>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm mt-1">{lab.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-slate-900 dark:text-white">${lab.price}</div>
                  <div className="text-[10px] text-slate-400 line-through">${lab.originalPrice}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-500" /> Report in {lab.reportTime}</span>
                <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5 text-emerald-500" /> Fasting: {lab.fasting}</span>
              </div>

              <button
                onClick={() => setBookedLab(lab)}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase shadow-sm active:scale-95 transition-all"
              >
                {bookedLab?.id === lab.id ? 'Lab Test Scheduled ✓' : 'Book Home Sample Collection'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pharmacy Items */}
      <section className="space-y-3">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Pill className="w-4 h-4 text-emerald-600" /> Essential Health Devices &amp; Supplements
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PHARMACY_ITEMS.map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden p-3 space-y-2 shadow-sm text-xs flex flex-col justify-between">
              <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden p-2">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mx-auto" />
              </div>
              <div>
                <span className="text-[9px] font-bold text-emerald-600 uppercase">{item.category}</span>
                <h4 className="font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">{item.name}</h4>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">${item.price}</div>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-emerald-600 hover:text-white font-bold text-xs transition-colors"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
