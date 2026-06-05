import React from 'react';
import { CheckCircle, FileText } from 'lucide-react';
import certificateImg from '../assets/certificate.png';

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="absolute -inset-2 bg-slate-200/50 rounded-3xl transform rotate-1"></div>
            <div className="relative w-full bg-white rounded-3xl border border-slate-200 p-6 flex flex-col items-center shadow-sm">
              <div className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-3 text-slate-400">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-6 block">Corporate Documentation Media</span>
              <div className="relative w-full h-[280px] sm:h-[340px] bg-white border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center p-2 mb-8">
                <img src={certificateImg} alt="Pawan Enterprises Dr. Fixit L.E.A.D Certificate" className="w-full h-full object-contain rounded-lg" />
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 right-4 bg-slate-950 text-white p-4.5 rounded-2xl border border-slate-800 shadow-xl z-10">
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <h4 className="text-[11px] font-bold tracking-wider text-blue-400 uppercase">Dr. Fixit L.E.A.D. Certified Applicator</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">Successfully completed training specifications in structural engineering diagnostics.</p>
            </div>
          </div>

          <div className="lg:pl-6 mt-10 lg:mt-0">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2">Corporate Profile</div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-4">Protecting Buildings For Over 25 Years</h3>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-3">
              Operating under technical management as <strong>Pawan Enterprises</strong>, we function as an authorized applicator partner of Pidilite and Dr. Fixit waterproofing systems.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Our competencies encompass multi-layered polymer coatings, micro-concrete framework reconstructions, structural column jacketing, expansion line fillings, and core cutting routines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["25+ Years Local Trust", "500+ Projects Completed", "Premium Polymer Systems", "Expert Civil Splicing Crews", "Insured Field Labor"].map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}