export interface DentalService {
  id: string;
  index: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'preventive' | 'restorative' | 'orthodontics' | 'cosmetic' | 'surgical' | 'pediatric';
  benefits: string[];
  duration: string;
  iconName: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experienceYears?: string;
  bio: string;
  specialties: string[];
  isVerified: boolean;
  avatarSeed: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  rating: number;
  timeAgo: string;
  reviewText: string;
  treatmentMentioned?: string;
  verifiedOnGoogle: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  preferredDoctor: string;
  appointmentType: string;
  notes: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  address: string;
  landmark: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  phoneRaw: string;
  googleRating: number;
  totalReviews: number;
  openingHours: {
    days: string;
    hours: string;
  }[];
  googleMapsUrl: string;
  emergencyPhone: string;
}
