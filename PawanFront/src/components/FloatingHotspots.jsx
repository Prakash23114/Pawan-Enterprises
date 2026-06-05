import React from 'react';
import { MessageSquare, Phone, ChevronUp } from 'lucide-react';

export default function FloatingHotspots({ showBackToTop }) {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <a href="https://wa.me/919987937463" target="_blank" rel="noreferrer" className="bg-emerald-600 text-white p-3.5 rounded-full shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform">
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>
      <a href="tel:+919987937463" className="bg-blue-600 text-white p-3.5 rounded-full shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform">
        <Phone className="w-5 h-5" />
      </a>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className={`bg-white text-slate-800 border border-slate-200 p-3.5 rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-all ${showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}