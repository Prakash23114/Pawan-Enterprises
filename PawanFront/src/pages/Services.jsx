import React from 'react';
import SideScrollButton from '../components/SideScrollButton';
import { Layers, Droplet, Home, Hammer, Shield, PaintBucket, Factory, Building2 } from 'lucide-react';

import terraceImg from '../assets/services/Terrace Waterproofing.png';
import bathroomImg from '../assets/services/Bathroom Waterproofing.png';
import wallImg from '../assets/services/Wall Waterproofing.png';
import basementImg from '../assets/services/Basement Waterproofing.png';
import tankImg from '../assets/services/Water Tank Waterproofing.png';
import repairImg from '../assets/services/Structural Repair.png';
import jacketingImg from '../assets/services/RCC Jacketing.png';
import epoxyImg from '../assets/services/Epoxy Flooring.png';
import industrialImg from '../assets/services/Industrial Waterproofing.png';
import retrofittingImg from '../assets/services/Retrofitting.png';

export default function Services({ scrollRef, handleSideScroll, scrollToSection }) {
  const services = [
    { title: "Terrace Waterproofing", count: "200+ Projects", icon: <Layers className="w-5 h-5" />, image: terraceImg, desc: "Multi-layered waterproofing systems with pond testing, crack treatment, and long-term terrace protection." },
    { title: "Bathroom Waterproofing", count: "350+ Projects", icon: <Droplet className="w-5 h-5" />, image: bathroomImg, desc: "Leakage control solutions for bathrooms and wet areas using elastomeric waterproofing systems." },
    { title: "Wall Waterproofing", count: "150+ Projects", icon: <Home className="w-5 h-5" />, image: wallImg, desc: "Exterior and interior wall protection against seepage, dampness, paint peeling, and fungal growth." },
    { title: "Basement Waterproofing", count: "120+ Projects", icon: <Layers className="w-5 h-5" />, image: basementImg, desc: "Advanced waterproofing and injection systems designed to resist groundwater pressure and seepage." },
    { title: "Water Tank Waterproofing", count: "90+ Projects", icon: <Droplet className="w-5 h-5" />, image: tankImg, desc: "Food-grade waterproof coatings and epoxy systems for overhead and underground water tanks." },
    { title: "Structural Repairs", count: "210+ Projects", icon: <Hammer className="w-5 h-5" />, image: repairImg, desc: "Concrete restoration, corrosion treatment, and rebuilding damaged RCC members for extended life." },
    { title: "RCC Jacketing", count: "65+ Projects", icon: <Shield className="w-5 h-5" />, image: jacketingImg, desc: "Strengthening weak columns, beams, and foundations using reinforced RCC jacketing systems." },
    { title: "Epoxy Flooring Systems", count: "80+ Projects", icon: <PaintBucket className="w-5 h-5" />, image: epoxyImg, desc: "Industrial-grade epoxy flooring solutions offering durability, chemical resistance, and seamless finishes." },
    { title: "Industrial Waterproofing", count: "80+ Projects", icon: <Factory className="w-5 h-5" />, image: industrialImg, desc: "Heavy-duty waterproofing systems for factories, warehouses, industrial roofs, and process areas." },
    { title: "Retrofitting & Strengthening", count: "50+ Projects", icon: <Building2 className="w-5 h-5" />, image: retrofittingImg, desc: "Advanced structural strengthening, anchoring, jacketing, and seismic upgrade solutions." }
  ];

  return (
    <section id="services" className="py-16 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-10 lg:mb-16">
          <div className="inline-block bg-slate-100 text-slate-800 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2">Scope of Operations</div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">Our Waterproofing Services</h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">We specialise in long-lasting waterproofing treatments for terraces, bathrooms and walls.</p>
        </div>

        <div className="relative">
          <SideScrollButton direction="left" onClick={() => handleSideScroll(scrollRef, 'left')} />

          <div ref={scrollRef} className="flex overflow-x-auto pb-6 gap-5 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
            {services.map((srv, i) => (
              <div key={i} className="min-w-[270px] sm:min-w-[330px] max-w-[330px] snap-start bg-[#fafafa] rounded-2xl border border-slate-200/60 p-5 flex flex-col justify-between flex-shrink-0 group hover:border-slate-300 hover:bg-white transition-all duration-200">
                <div>
                  <div className="relative h-44 overflow-hidden rounded-xl bg-slate-100 mb-5">
                    <img src={srv.image} alt={srv.title} className="w-full h-full object-cover filter brightness-95" />
                    <div className="absolute top-3 left-3 bg-white border border-slate-200 p-2 rounded-xl text-blue-600 shadow-sm">
                      {srv.icon}
                    </div>
                  </div>
                  <div className="px-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base font-bold text-slate-950 tracking-tight">{srv.title}</h3>
                      <span className="text-[10px] font-semibold text-slate-500">{srv.count}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">{srv.desc}</p>
                  </div>
                </div>
                <div className="pt-5 px-1">
                  <button onClick={() => scrollToSection('contact')} className="w-full bg-white hover:bg-slate-950 border border-slate-200 hover:border-slate-950 text-slate-900 hover:text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors duration-200">
                    View Photos
                  </button>
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