import React, { useState } from 'react';
import { Camera, Eye, Sparkles, Shield, Maximize2, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
}

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'operatory-1',
      title: 'Main Dental Operatory',
      category: 'Treatment Suite',
      description: 'Ergonomic dental chair with quiet micro-motor handpiece and multi-angle dental light.',
      badge: 'Sterile Environment',
    },
    {
      id: 'reception-1',
      title: 'Reception & Patient Lounge',
      category: 'Clinic Interior',
      description: 'Welcoming consultation desk at The Orane, Wadgaon Sheri designed for calm arrivals.',
      badge: 'The Orane Suite',
    },
    {
      id: 'autoclave-station',
      title: 'Class-B Sterilization Station',
      category: 'Infection Control',
      description: 'Multi-stage pouch sterilization and sterile pouch storage ensuring zero cross-contamination.',
      badge: '100% Sterile Protocol',
    },
    {
      id: 'consultation-room',
      title: 'Smile Consultation Suite',
      category: 'Diagnostics',
      description: 'Intraoral digital display area where doctors explain dental health with complete clarity.',
      badge: 'Digital Imaging',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F4F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Clinic Atmosphere</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display [text-wrap:balance]">
            Inside PRECISION Dental Clinic.
          </h2>
          <p className="text-base text-slate-600 font-normal mt-3 leading-relaxed">
            Take a look at our clinical space at Shop No 3, The Orane, Wadgaon Sheri, Pune. Spotless hygiene, modern amenities, and a relaxed atmosphere.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature Item (7 Cols) */}
          <div
            onClick={() => setActivePhoto(galleryItems[0])}
            className="md:col-span-7 group relative bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 sm:p-10 min-h-[380px] flex flex-col justify-end text-white overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Architectural Grid pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80%" cy="30%" r="200" fill="#2563EB" opacity="0.3" />
                <circle cx="20%" cy="80%" r="150" fill="#3B82F6" opacity="0.2" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-blue-200 text-xs font-bold mb-4 backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                <span>{galleryItems[0].badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display mb-2">
                {galleryItems[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                {galleryItems[0].description}
              </p>
            </div>

            <div className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Right Supporting Item (5 Cols) */}
          <div
            onClick={() => setActivePhoto(galleryItems[1])}
            className="md:col-span-5 group relative bg-gradient-to-br from-blue-800 to-indigo-950 rounded-3xl p-8 min-h-[380px] flex flex-col justify-end text-white overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-blue-200 text-xs font-bold mb-4 backdrop-blur-sm">
                <span>{galleryItems[1].badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-display mb-2">
                {galleryItems[1].title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {galleryItems[1].description}
              </p>
            </div>

            <div className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Left Supporting Item (5 Cols) */}
          <div
            onClick={() => setActivePhoto(galleryItems[2])}
            className="md:col-span-5 group relative bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 min-h-[300px] flex flex-col justify-end text-white overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-4 backdrop-blur-sm">
                <Shield className="w-3 h-3" />
                <span>{galleryItems[2].badge}</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-2">
                {galleryItems[2].title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {galleryItems[2].description}
              </p>
            </div>

            <div className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Right Supporting Item (7 Cols) */}
          <div
            onClick={() => setActivePhoto(galleryItems[3])}
            className="md:col-span-7 group relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-950 rounded-3xl p-8 min-h-[300px] flex flex-col justify-end text-white overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-blue-200 text-xs font-bold mb-4 backdrop-blur-sm">
                <Eye className="w-3 h-3" />
                <span>{galleryItems[3].badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-display mb-2">
                {galleryItems[3].title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                {galleryItems[3].description}
              </p>
            </div>

            <div className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 text-white rounded-3xl p-8 border border-white/10 shadow-2xl">
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 block">
              {activePhoto.category}
            </span>
            <h3 className="text-2xl font-black font-display mb-3">
              {activePhoto.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activePhoto.description}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>PRECISION Dental Clinic · The Orane, Wadgaon Sheri</span>
              <span className="text-emerald-400 font-bold">{activePhoto.badge}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
