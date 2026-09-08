import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import Home from './pages/Home';
import Doctors from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';
import PatientPortal from './pages/PatientPortal';
import Pharmacy from './pages/Pharmacy';

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/patient-portal" element={<PatientPortal />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}
