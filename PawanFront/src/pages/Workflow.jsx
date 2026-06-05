import React from 'react';
import SideScrollButton from '../components/SideScrollButton';

import step1Img from '../assets/workFlow/Site Inspection & Testing.png';
import step2Img from '../assets/workFlow/Problem Diagnosis.png';
import step3Img from '../assets/workFlow/Surface Prep & Grinding.png';
import step4Img from '../assets/workFlow/Waterproofing Treatment.png';
import step5Img from '../assets/workFlow/Quality Pond Testing.png';
import step6Img from '../assets/workFlow/Warranty & Handover.png';

export default function Workflow({ scrollRef, handleSideScroll }) {
  const steps = [
    { title: "Site Inspection & Testing", desc: "Performing physical sound tracking across concrete surfaces using structural hammers.", imgPlaceholder: step1Img },
    { title: "Problem Diagnosis", desc: "Marking hollow plaster layers, active leakage traces, and tracking shifting expansion joints.", imgPlaceholder: step2Img },
    { title: "Surface Prep & Grinding", desc: "Routinely cleaning areas using high-pressure jet wash machines and grinding open dynamic cracks.", imgPlaceholder: step3Img },
    { title: "Waterproofing Treatment", desc: "Meticulously laying Dr. Fixit Primeseal primers followed by multiple coats of New Coat or Rain Coat polymers.", imgPlaceholder: step4Img },
    { title: "Quality Pond Testing", desc: "Filling completed structural terrace floors with standing water layers to verify barrier performance.", imgPlaceholder: step5Img },
    { title: "Warranty & Handover", desc: "Delivering fully signed certified assurance files ensuring decades of stress-free structural safety.", imgPlaceholder: step6Img }
  ];

  return (
    <section className="py-16 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2">Technical Procedure</div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">How We Work</h2>
          <div className="w-10 h-0.5 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="relative px-1">
          <SideScrollButton direction="left" onClick={() => handleSideScroll(scrollRef, 'left')} />

          <div ref={scrollRef} className="flex overflow-x-auto pb-6 gap-5 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
            {steps.map((step, i) => (
              <div key={i} className="min-w-[270px] sm:min-w-[330px] max-w-[330px] snap-start bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden relative flex flex-col justify-between shadow-sm flex-shrink-0">
                <div>
                  <div className="h-36 w-full bg-slate-900 overflow-hidden relative border-b border-slate-200">
                    <img src={step.imgPlaceholder} alt={step.title} className="w-full h-full object-cover opacity-90" />
                    <span className="absolute top-3 right-3 text-2xl font-black text-white/30">0{i + 1}</span>
                  </div>
                  <div className="p-5">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-md">
                      {i + 1}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1.5 tracking-tight">{step.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SideScrollButton direction="right" onClick={() => handleSideScroll(scrollRef, 'right')} />
        </div>
      </div>
    </section>
  );
}