export const SPECIALTIES = [
  { id: 'cardiology', name: 'Cardiology', desc: 'Heart care & cardiovascular system', iconName: 'HeartPulse', count: 18 },
  { id: 'neurology', name: 'Neurology', desc: 'Brain, spine & nervous system', iconName: 'Brain', count: 14 },
  { id: 'pediatrics', name: 'Pediatrics', desc: 'Child health & adolescent care', iconName: 'Baby', count: 22 },
  { id: 'orthopedics', name: 'Orthopedics', desc: 'Bones, joints & spine surgery', iconName: 'Bone', count: 16 },
  { id: 'dermatology', name: 'Dermatology', desc: 'Skin, hair & allergy treatment', iconName: 'Sparkles', count: 19 },
  { id: 'general', name: 'General Medicine', desc: 'Primary health & disease prevention', iconName: 'Stethoscope', count: 30 },
  { id: 'psychiatry', name: 'Psychiatry', desc: 'Mental health & wellness support', iconName: 'Smile', count: 12 },
  { id: 'ophthalmology', name: 'Ophthalmology', desc: 'Eye care & vision correction', iconName: 'Eye', count: 15 }
];

export const DOCTORS = [
  {
    id: 'DOC-101',
    name: 'Dr. Sarah Jenkins, MD',
    title: 'Senior Consultant Cardiologist',
    specialty: 'Cardiology',
    hospital: 'MediPulse Heart & Vascular Institute',
    experience: '16 Years Experience',
    rating: 4.9,
    reviews: 340,
    fee: 120,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    availableToday: true,
    availableSlots: ['09:30 AM', '11:00 AM', '02:30 PM', '04:15 PM'],
    languages: ['English', 'Spanish'],
    about: 'Dr. Sarah Jenkins is a board-certified cardiologist specializing in preventive cardiology, echocardiography, and non-invasive coronary management.'
  },
  {
    id: 'DOC-102',
    name: 'Dr. Robert Chen, MD',
    title: 'Chief Neurologist & Brain Specialist',
    specialty: 'Neurology',
    hospital: 'NeuroCare Academic Hospital',
    experience: '20 Years Experience',
    rating: 4.95,
    reviews: 512,
    fee: 150,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    availableToday: true,
    availableSlots: ['10:00 AM', '01:30 PM', '03:00 PM', '05:30 PM'],
    languages: ['English', 'Mandarin'],
    about: 'Dr. Robert Chen leads neuro-diagnostic research and specializes in headache management, stroke prevention, and peripheral nerve disorders.'
  },
  {
    id: 'DOC-103',
    name: 'Dr. Emily Al-Mansoor, MBBS, DCH',
    title: 'Consultant Pediatrician',
    specialty: 'Pediatrics',
    hospital: 'MediPulse Children’s Wellness Center',
    experience: '12 Years Experience',
    rating: 4.88,
    reviews: 289,
    fee: 90,
    image: 'https://images.unsplash.com/photo-1594824813571-2153349aed06?auto=format&fit=crop&w=400&q=80',
    availableToday: false,
    availableSlots: ['Tomorrow 10:30 AM', 'Tomorrow 02:00 PM'],
    languages: ['English', 'Arabic'],
    about: 'Dr. Emily specializes in infant growth monitoring, childhood immunization, and pediatric respiratory conditions.'
  },
  {
    id: 'DOC-104',
    name: 'Dr. Marcus Vance, MS, FRCS',
    title: 'Orthopedic & Joint Surgeon',
    specialty: 'Orthopedics',
    hospital: 'Spine & Joint Surgery Institute',
    experience: '18 Years Experience',
    rating: 4.92,
    reviews: 420,
    fee: 140,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    availableToday: true,
    availableSlots: ['11:30 AM', '03:30 PM', '06:00 PM'],
    languages: ['English'],
    about: 'Expert orthopedic surgeon specializing in robotic joint replacement, sports injury rehab, and minimally invasive arthroscopy.'
  },
  {
    id: 'DOC-105',
    name: 'Dr. Aisha Patel, MD',
    title: 'Consultant Dermatologist & Cosmetologist',
    specialty: 'Dermatology',
    hospital: 'Skin & Allergy Care Clinic',
    experience: '11 Years Experience',
    rating: 4.85,
    reviews: 210,
    fee: 100,
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80',
    availableToday: true,
    availableSlots: ['10:00 AM', '12:30 PM', '04:00 PM'],
    languages: ['English', 'Hindi'],
    about: 'Specializes in medical dermatology, eczema management, laser therapy, and personalized skin health regimens.'
  },
  {
    id: 'DOC-106',
    name: 'Dr. David Miller, MD',
    title: 'Senior General Physician',
    specialty: 'General Medicine',
    hospital: 'MediPulse Primary Health Clinic',
    experience: '22 Years Experience',
    rating: 4.97,
    reviews: 640,
    fee: 80,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    availableToday: true,
    availableSlots: ['08:30 AM', '10:15 AM', '01:00 PM', '05:00 PM'],
    languages: ['English'],
    about: 'Comprehensive primary health specialist for chronic illness management, diabetes control, hypertension, and annual health screenings.'
  }
];

export const PHARMACY_ITEMS = [
  { id: 'MED-201', name: 'ProPulse Multivitamin Complex 60s', category: 'Supplements', price: 28, discount: '15% OFF', rating: 4.8, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80' },
  { id: 'MED-202', name: 'Digital Blood Pressure Monitor Pro', category: 'Medical Devices', price: 45, discount: '20% OFF', rating: 4.9, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80' },
  { id: 'MED-203', name: 'Fingertip Pulse Oximeter SpO2', category: 'Medical Devices', price: 24, discount: '10% OFF', rating: 4.7, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80' },
  { id: 'MED-204', name: 'Omega-3 Triple Strength Fish Oil', category: 'Supplements', price: 32, discount: '12% OFF', rating: 4.85, image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=400&q=80' }
];

export const DIAGNOSTIC_LABS = [
  { id: 'LAB-301', name: 'Comprehensive Full Body Checkup (72 Parameters)', originalPrice: 150, price: 79, discount: '47% OFF', reportTime: '12 Hours', fasting: 'Required (10 Hours)' },
  { id: 'LAB-302', name: 'Cardiac Risk Profile & Lipid Panel', originalPrice: 90, price: 49, discount: '45% OFF', reportTime: '8 Hours', fasting: 'Required (12 Hours)' },
  { id: 'LAB-303', name: 'Complete Diabetes Assessment & HbA1c', originalPrice: 60, price: 35, discount: '41% OFF', reportTime: '6 Hours', fasting: 'Required' },
  { id: 'LAB-304', name: 'Thyroid Profile Total (T3, T4, TSH)', originalPrice: 45, price: 25, discount: '44% OFF', reportTime: '6 Hours', fasting: 'Not Required' }
];
