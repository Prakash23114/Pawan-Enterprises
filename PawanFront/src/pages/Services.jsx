import React, { useState } from 'react';
import SideScrollButton from '../components/SideScrollButton';
import { Layers, Droplet, Home, Hammer, Wrench, Scissors, Shield, PaintBucket, Factory, Building2, X } from 'lucide-react';

import retrofittingVideo from '../assets/videos/Ultra_realistic_civil_construc.mp4';

import terraceImg from '../assets/services/Terrace Waterproofing.png';
import crackImg from '../assets/services/Crack Filling.png';
import MicrocontImg from "../assets/services/Micro Concrete.png";
import Corecuttingimg from "../assets/services/Core Cutting.png"
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
  // Local states to manage active modal visibility and the dynamic target video URL
  const [activeVideoUrl, setActiveVideoUrl] = useState('');
  const [activeVideoTitle, setActiveVideoTitle] = useState('');

  const services = [
    {
      title: "Terrace Waterproofing",
      count: "200+ Projects",
      icon: <Layers className="w-5 h-5" />,
      image: terraceImg,
      video: "https://www.youtube.com/embed/P_blXZSQvpg", // Replace with your actual YouTube Video IDs
      desc: "Multi-layered waterproofing systems with pond testing, crack treatment, and long-term terrace protection."
    },
    {
      title: "Bathroom Waterproofing",
      count: "350+ Projects",
      icon: <Droplet className="w-5 h-5" />,
      image: bathroomImg,
      video: "https://www.youtube.com/embed/Xicl5oVUmCk",
      desc: "Leakage control solutions for bathrooms and wet areas using elastomeric waterproofing systems."
    },
    {
      title: "External Wall Waterproofing",
      count: "150+ Projects",
      icon: <Home className="w-5 h-5" />,
      image: wallImg,
      video: "https://www.youtube.com/embed/iRf7F-Afylo",
      desc: "Exterior  wall protection against seepage, dampness, paint peeling, and fungal growth."
    },
    {
      title: "Internal Wall Waterproofing",
      count: "150+ Projects",
      icon: <Home className="w-5 h-5" />,
      image: wallImg,
      video: "https://www.youtube.com/embed/p7xAyFAr3as",
      desc: " Long-lasting protection for healthy, moisture-free indoor spaces"
    },
    {
      title: "Basement Waterproofing",
      count: "120+ Projects",
      icon: <Layers className="w-5 h-5" />,
      image: basementImg,
      video: "https://www.youtube.com/embed/1r224_AU1Dg",
      desc: "Advanced waterproofing and injection systems designed to resist groundwater pressure and seepage."
    },
    {
      title: "Water Tank Waterproofing",
      count: "90+ Projects",
      icon: <Droplet className="w-5 h-5" />,
      image: tankImg,
      video: "https://www.youtube.com/embed/m67VK5lhHvM",
      desc: "Food-grade waterproof coatings and epoxy systems for overhead and underground water tanks."
    },

    {
      title: "Crack Filling & Sealing",
      count: "400+ Projects",
      icon: <Hammer className="w-5 h-5" />,
      image: crackImg,
      video: "https://www.youtube.com/embed/sK9zywwUssQ",
      desc: "Professional crack opening, sealing, and elastomeric filling solutions for structural and non-structural cracks."
    },
    {
      title: "Micro Concrete Repairs",
      count: "180+ Projects",
      icon: <Layers className="w-5 h-5" />,
      image: MicrocontImg,
      video: "https://www.youtube.com/embed/GSf2cEYXzoc",
      desc: "High-strength micro-concrete applications for structural rehabilitation and load-bearing repairs."
    },
    {
      title: "Core Cutting & Concrete Cutting",
      count: "120+ Projects",
      icon: <Scissors className="w-5 h-5" />,
      image: Corecuttingimg,
      video: "https://www.youtube.com/embed/iyGLlQACVc8",
      desc: "Precision concrete cutting, slab cutting, wall cutting, and core drilling services."
    },

    {
      title: "Structural Repairs",
      count: "210+ Projects",
      icon: <Hammer className="w-5 h-5" />,
      image: repairImg,
      video: "https://www.youtube.com/embed/1zsD5aIL8ys",
      desc: "Concrete restoration, corrosion treatment, and rebuilding damaged RCC members for extended life."
    },
    {
      title: "RCC Jacketing",
      count: "65+ Projects",
      icon: <Shield className="w-5 h-5" />,
      image: jacketingImg,
      video: "https://www.youtube.com/embed/F0bKZxbXDyc",
      desc: "Strengthening weak columns, beams, and foundations using reinforced RCC jacketing systems."
    },
    {
      title: "Epoxy Flooring Systems",
      count: "80+ Projects",
      icon: <PaintBucket className="w-5 h-5" />,
      image: epoxyImg,
      video: "https://www.youtube.com/embed/ZTWhANZTW-I?si=vc0Q5m41u2MVCU4I",
      desc: "Industrial-grade epoxy flooring solutions offering durability, chemical resistance, and seamless finishes."
    },

    {
      title: "Retrofitting & Strengthening",
      count: "50+ Projects",
      icon: <Building2 className="w-5 h-5" />,
      image: retrofittingImg,
      video: retrofittingVideo,
      desc: "Advanced structural strengthening, anchoring, jacketing, and seismic upgrade solutions."
    },

    {
      title: "Industrial Waterproofing",
      count: "80+ Projects",
      icon: <Factory className="w-5 h-5" />,
      image: industrialImg,
      video: "https://www.youtube.com/embed/P_blXZSQvpg",
      desc: "Heavy-duty waterproofing systems for factories, warehouses, industrial roofs, and process areas."
    },
  ];

  const openVideoModal = (videoUrl, serviceTitle) => {
    setActiveVideoUrl(videoUrl);
    setActiveVideoTitle(serviceTitle);
  };

  const closeVideoModal = () => {
    setActiveVideoUrl('');
    setActiveVideoTitle('');
  };

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
                  <button
                    onClick={() => openVideoModal(srv.video, srv.title)}
                    className="w-full bg-white hover:bg-slate-950 border border-slate-200 hover:border-slate-950 text-slate-900 hover:text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
                  >
                    View Video
                  </button>
                </div>
              </div>
            ))}
          </div>

          <SideScrollButton direction="right" onClick={() => handleSideScroll(scrollRef, 'right')} />
        </div>
      </div>

      {/* DYNAMIC YOUTUBE MODAL PLAYER LIGHTBOX */}
      {activeVideoUrl && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-all">
          {/* Close structural click background boundary */}
          <div className="absolute inset-0 cursor-pointer" onClick={closeVideoModal} />

          <div className="relative bg-black w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
            {/* Native player window close target button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 bg-slate-900/60 hover:bg-slate-900 text-white p-2 rounded-xl backdrop-blur-sm transition-colors border border-white/10 z-20"
              aria-label="Close layout player window"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Responsive Iframe Frame housing targeted Youtube embed stream */}
            <iframe
              className="w-full h-full border-0"
              src={`${activeVideoUrl}?autoplay=1&rel=0&modestbranding=1`}
              title={`${activeVideoTitle} Demonstration Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}