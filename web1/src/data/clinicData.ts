import { ClinicInfo, DentalService, Doctor, GoogleReview } from '../types/clinic';

export const CLINIC_INFO: ClinicInfo = {
  name: 'PRECISION Dental Clinic',
  tagline: 'Modern, Gentle & Precise Dental Care',
  address: 'Shop No 3, The Orane, Anjali English School Lane, Next to Mithaiwala Shop',
  landmark: 'Next to Mithaiwala Shop, Anjali English School Lane',
  locality: 'Ram Nagar, Sainikwadi, Wadgaon Sheri',
  city: 'Pune',
  state: 'Maharashtra',
  pincode: '411014',
  phone: '+91 88301 35771',
  phoneRaw: '+918830135771',
  googleRating: 5.0,
  totalReviews: 11,
  openingHours: [
    { days: 'Monday – Saturday', hours: '10:00 AM – 9:00 PM' },
    { days: 'Sunday', hours: 'By Prior Appointment' },
  ],
  googleMapsUrl: 'https://maps.app.goo.gl/ixWVRB69U1t29ro46',
  emergencyPhone: '+91 88301 35771',
};

export const CLINIC_SERVICES: DentalService[] = [
  {
    id: 'preventive-cleaning',
    index: '01',
    title: 'Preventive Care & Dental Cleaning',
    shortDesc: 'Ultrasonic scaling, enamel polishing, and comprehensive oral health assessment.',
    fullDesc: 'Routine hygiene check-ups and ultrasonic cleanings remove stubborn plaque and tartar deposits that regular brushing cannot reach. Helps prevent gingivitis, tooth decay, and freshen breath.',
    category: 'preventive',
    benefits: [
      'Gentle ultrasonic scaling technique',
      'Early detection of cavities and gum inflammation',
      'Personalized oral hygiene counseling',
      'Stain removal and enamel polishing'
    ],
    duration: '30 – 45 mins',
    iconName: 'Sparkles',
  },
  {
    id: 'orthodontics-aligners',
    index: '02',
    title: 'Orthodontics & Clear Aligners',
    shortDesc: 'Modern orthodontic solutions including clear aligners and traditional braces for all ages.',
    fullDesc: 'Comprehensive orthodontic evaluation and treatment planning to align crooked teeth, correct bite irregularities, and improve chewing function and aesthetic symmetry.',
    category: 'orthodontics',
    benefits: [
      'Customized digital alignment treatment plans',
      'Discreet clear aligner options',
      'Effective correction of overcrowding and gaps',
      'Guided by specialized orthodontic consultation'
    ],
    duration: '45 – 60 mins (Consultation)',
    iconName: 'Smile',
  },
  {
    id: 'dental-implants',
    index: '03',
    title: 'Dental Implants & Restorations',
    shortDesc: 'Biocompatible titanium implants and ceramic crowns to restore missing teeth permanently.',
    fullDesc: 'Fixed, natural-looking replacement for missing single or multiple teeth. Dental implants integrate securely with your jawbone, restoring strong chewing power and facial structure.',
    category: 'surgical',
    benefits: [
      'High-grade biocompatible titanium fixtures',
      'Restores 100% natural chewing efficiency',
      'Preserves neighboring healthy natural teeth',
      'Precise surgical placement protocol'
    ],
    duration: '60 – 90 mins',
    iconName: 'ShieldCheck',
  },
  {
    id: 'root-canal',
    index: '04',
    title: 'Root Canal Treatment (RCT)',
    shortDesc: 'Single-sitting rotary endodontics designed for quick pain relief and tooth preservation.',
    fullDesc: 'Advanced rotary endodontic therapy cleans and seals infected pulp tissue deep inside the tooth root canal, eliminating pain and infection while preserving your natural tooth.',
    category: 'restorative',
    benefits: [
      'Targeted local anesthesia for high comfort',
      'Modern digital apex locators & rotary files',
      'Saves natural tooth from extraction',
      'Completed with high-strength protective ceramic crown'
    ],
    duration: '45 – 60 mins',
    iconName: 'Activity',
  },
  {
    id: 'cosmetic-whitening',
    index: '05',
    title: 'Teeth Whitening & Smile Design',
    shortDesc: 'Professional chairside whitening, composite bonding, and ceramic veneers.',
    fullDesc: 'Safe, medically supervised teeth whitening removes deep food, tea, and coffee stains, lifting enamel shades safely without damaging tooth structure.',
    category: 'cosmetic',
    benefits: [
      'Safe enamel-friendly brightening agents',
      'Even shade enhancement across the smile line',
      'Custom treatment options for sensitive teeth',
      'Immediate, radiant confidence boost'
    ],
    duration: '45 – 60 mins',
    iconName: 'Zap',
  },
  {
    id: 'pediatric-family',
    index: '06',
    title: 'Pediatric & Family Dentistry',
    shortDesc: 'Gentle, friendly dental care tailored for children, teens, and adults.',
    fullDesc: 'A warm, stress-free environment designed to make young patients feel secure. Includes fluoride applications, dental sealants, habit breaking appliances, and preventative dental education.',
    category: 'pediatric',
    benefits: [
      'Patience-driven child-friendly chairside manner',
      'Protective pit and fissure sealants',
      'Cavity prevention and dietary advice',
      'Instills lifelong positive oral healthcare habits'
    ],
    duration: '30 – 45 mins',
    iconName: 'HeartHandshake',
  },
];

export const INITIAL_DOCTORS: Doctor[] = [
  {
    id: 'dr-mayank-bajaj',
    name: 'Dr. Mayank Bajaj',
    role: 'Orthodontist & Implantologist',
    qualifications: 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)',
    experienceYears: '10+ Years Dedicated Practice',
    bio: 'Specialist in modern orthodontics, clear aligners, and dental implant placement. Dedicated to delivering precise alignment and functional bite correction with gentle chairside technique.',
    specialties: ['Clear Aligners', 'Orthodontic Braces', 'Dental Implants', 'Smile Designing'],
    isVerified: true,
    avatarSeed: 'mayank',
  },
  {
    id: 'dr-nandini',
    name: 'Dr. Nandini',
    role: 'Dental Surgeon & Aesthetic Specialist',
    qualifications: 'BDS (Dental Surgery & Conservative Dentistry)',
    experienceYears: '8+ Years Clinical Practice',
    bio: 'Experienced dental surgeon focused on restorative dentistry, painless root canal procedures, and comprehensive preventative care for adults and children.',
    specialties: ['Restorative Dentistry', 'Root Canal Therapy', 'Pediatric Care', 'Teeth Whitening'],
    isVerified: true,
    avatarSeed: 'nandini',
  },
  {
    id: 'dr-placeholder',
    name: '[CLINICAL SPECIALIST / EDITABLE]',
    role: 'Visiting Consultant / Associate Dentist',
    qualifications: '[QUALIFICATION: BDS / MDS / EDITABLE]',
    experienceYears: '[YEARS OF PRACTICE: EDITABLE]',
    bio: 'Editable clinician slot for clinic leadership to customize with additional visiting consultants or medical staff credentials.',
    specialties: ['General Dentistry', 'Oral Surgery', 'Periodontics'],
    isVerified: false,
    avatarSeed: 'placeholder',
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    authorName: 'Rohan Sharma',
    rating: 5,
    timeAgo: '2 months ago',
    reviewText: 'Visited PRECISION Dental Clinic for tooth pain and cleaning. The clinic is extremely clean, hygienic and well maintained. Doctor explained the treatment patiently and the procedure was completely comfortable. Highly recommended in Wadgaon Sheri!',
    treatmentMentioned: 'Dental Cleaning & Consultation',
    verifiedOnGoogle: true,
  },
  {
    id: 'rev-2',
    authorName: 'Pooja Kulkarni',
    rating: 5,
    timeAgo: '3 months ago',
    reviewText: 'Best dental clinic in Sainikwadi area. Dr. Mayank and team are very skilled and gentle. They never suggest unnecessary treatments and charge reasonably. The location at The Orane is very convenient.',
    treatmentMentioned: 'Root Canal & Crown',
    verifiedOnGoogle: true,
  },
  {
    id: 'rev-3',
    authorName: 'Amit Deshmukh',
    rating: 5,
    timeAgo: '4 months ago',
    reviewText: 'Outstanding experience for my daughter’s dental checkup. The doctors were very caring and made sure she felt calm throughout. Truly 5-star standard dental care in Pune.',
    treatmentMentioned: 'Pediatric Dental Checkup',
    verifiedOnGoogle: true,
  },
  {
    id: 'rev-4',
    authorName: 'Neha Verma',
    rating: 5,
    timeAgo: '5 months ago',
    reviewText: 'Got my teeth whitening and filling done here. Very modern equipment and spotless sterilization. Doctor answered all my queries with complete transparency. 5/5 stars!',
    treatmentMentioned: 'Teeth Whitening & Fillings',
    verifiedOnGoogle: true,
  }
];

export const CLINIC_PHILOSOPHY_POINTS = [
  {
    id: 'hygiene',
    title: 'Hospital-Grade Sterilization',
    description: 'Multi-stage autoclave sterilization protocols and single-use disposable barriers for uncompromising patient safety and infection control.',
  },
  {
    id: 'comfort',
    title: 'Gentle & Patient-First Care',
    description: 'We believe dental visits should be relaxing and stress-free. Every procedure is explained step-by-step with mindful comfort management.',
  },
  {
    id: 'transparency',
    title: 'Transparent Diagnosis & Honest Guidance',
    description: 'Zero pushy recommendations. We provide high-resolution intraoral imaging so you clearly understand your dental health before making decisions.',
  },
  {
    id: 'convenience',
    title: 'Prime Wadgaon Sheri Location',
    description: 'Easily accessible at Shop No 3, The Orane, on Anjali English School Lane with convenient parking and evening consultation hours.',
  },
];
