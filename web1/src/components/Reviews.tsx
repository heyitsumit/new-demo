import React from 'react';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';
import { GOOGLE_REVIEWS, CLINIC_INFO } from '../data/clinicData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F4F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Verified Patient Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
              Google Reviews & Ratings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Authentic reviews from patients who experienced our gentle dental care at The Orane, Wadgaon Sheri.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="text-center pr-4 border-r border-slate-100">
              <div className="text-3xl font-black text-slate-900 tracking-tight font-display">
                5.0
              </div>
              <div className="flex text-amber-400 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                Google Verified Rating
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Based on 11+ Google Reviews
              </div>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 mt-1"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                      {review.authorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {review.authorName}
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        {review.timeAgo}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Google
                  </span>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Treatment Mentioned */}
                {review.treatmentMentioned && (
                  <div className="text-[11px] font-semibold text-blue-700 bg-blue-50/70 px-2.5 py-1 rounded-md inline-block mb-3">
                    {review.treatmentMentioned}
                  </div>
                )}

                {/* Review Text */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{review.reviewText}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Patient</span>
                <span className="text-emerald-600 font-medium">★ 5.0 Star</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Callout to Google Maps */}
        <div className="mt-10 text-center">
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <span>Write a Review on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
