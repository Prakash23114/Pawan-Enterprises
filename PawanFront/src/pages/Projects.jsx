import React from 'react';
import SideScrollButton from '../components/SideScrollButton';
import { MapPin } from 'lucide-react';

import abhilashaImg from '../assets/projects/AbhilashaTower.png';
import antarcticaImg from '../assets/projects/Antarctica.png';
import rktImg from '../assets/projects/R.K.T College.png';
import daffodilImg from '../assets/projects/Daffodil CHS.png';
import shubhImg from '../assets/projects/Shubh Vastu Devloper.jpg';
import sevaImg from '../assets/projects/Seva Sadan Trust.png';
import shivImg from '../assets/projects/Shiv Shrusti CHS.png';
import doshiImg from '../assets/projects/Doshi Industries.png';
import angloImg from '../assets/projects/Anglo Eastern College.png';
import laxmiBaugImg from '../assets/projects/Laxmi Baug.png';
import makaniImg from '../assets/projects/Makani CHS.png';
import krishnaImg from '../assets/projects/Krishna Kunj CHS.png';

export default function Projects({ scrollRef, handleSideScroll, scrollToSection, activeTab, setActiveTab }) {
  const projectsList = [
    { name: "Pidilite Industries Mahad", loc: "Mahad", cat: "Industrial", value: "300 Lac", work: "Terrace & External Coating", imgPlaceholder: "https://www.ascconline.com/blog/wp-content/uploads/2023/12/mahadindustry-1024x620.jpg" },
    { name: "Balsam Developers Pvt Ltd", loc: "Bhimashankar Hill", cat: "Commercial", value: "120 Lac", work: "Terrace & External Care", imgPlaceholder: "https://housing-images.n7net.in/4f2250e8/092d2d4c7e3544d1b31946b060933892/v2/large/balsam_bhimashankar_hills-tadwari-mumbai-balsam_builders.jpeg" },
    { name: "Abhilasha Tower", loc: "Gujarat", cat: "Residential", value: "90 Lac", work: "External Waterproofing", imgPlaceholder: abhilashaImg },
    { name: "Antarctica Dombivali", loc: "Dombivli East", cat: "Residential", value: "75 Lac", work: "Terrace & External Coating", imgPlaceholder: antarcticaImg },
    { name: "R.K.T College", loc: "Ulhasnagar", cat: "Commercial", value: "70 Lac", work: "Terrace & External Coating", imgPlaceholder: rktImg },
    { name: "Daffodil CHS", loc: "Neral", cat: "Residential", value: "60 Lac", work: "External Coating", imgPlaceholder: daffodilImg },
    { name: "Shubh Vastu Developer", loc: "Vashind", cat: "Residential", value: "60 Lac", work: "External Coating", imgPlaceholder: shubhImg },
    { name: "Laxmi Industries", loc: "Vasai", cat: "Industrial", value: "55 Lac", work: "Terrace & External Coating", imgPlaceholder: "https://assets.pidilite.com/is/image/pidilite/About%20Pidilite%20Pigments?ts=1738159561480&dpr=off"},
    { name: "Seva Sadan Trust", loc: "Ulhasnagar", cat: "Commercial", value: "40 Lac", work: "Terrace & External Coating", imgPlaceholder: sevaImg },
    { name: "Shiv Shrusti CHS", loc: "Neral", cat: "Residential", value: "35 Lac", work: "Terrace & External Coating", imgPlaceholder: shivImg },
    { name: "Doshi Industries", loc: "Vasai", cat: "Industrial", value: "60 Lac", work: "Terrace & External Coating", imgPlaceholder: doshiImg },
    { name: "Anglo Eastern College", loc: "Karjat", cat: "Commercial", value: "40 Lac", work: "Terrace & External Coating", imgPlaceholder: angloImg },
    { name: "Laxmi Baug", loc: "Dombivli East", cat: "Residential", value: "45 Lac", work: "External Wall & Coating", imgPlaceholder: laxmiBaugImg },
    { name: "Makani CHS", loc: "Peddar Road", cat: "Residential", value: "30 Lac", work: "Terrace & Parapet Wall", imgPlaceholder: makaniImg },
    { name: "Krishna Kunj CHS", loc: "Rambaugh, Kalyan West", cat: "Residential", value: "35 Lac", work: "External Wall Repair", imgPlaceholder: krishnaImg }
  ];

  return (
    <section id="projects" className="py-16 lg:py-28 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2">Track Record</div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">Our Major Projects</h2>
          </div>
          <div className="flex gap-1 overflow-x-auto pb-2 bg-slate-200/40 p-1 rounded-xl border border-slate-200 text-xs scrollbar-none max-w-full">
            {['all', 'residential', 'commercial', 'industrial'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <SideScrollButton direction="left" onClick={() => handleSideScroll(scrollRef, 'left')} />

          <div ref={scrollRef} className="flex overflow-x-auto pb-6 gap-5 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
            {projectsList
              .filter(p => activeTab === 'all' || p.cat.toLowerCase().includes(activeTab))
              .map((proj, i) => (
                <div key={i} className="min-w-[270px] sm:min-w-[330px] max-w-[330px] snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between flex-shrink-0">
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img src={proj.imgPlaceholder} alt={proj.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-slate-100 border border-slate-200 text-slate-700 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                          {proj.cat}
                        </span>
                        <span className="text-blue-600 font-bold text-xs">₹{proj.value}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1 tracking-tight">{proj.name}</h3>
                      <p className="text-slate-500 text-[11px] font-semibold flex items-center mb-2">
                        <MapPin className="w-3 h-3 mr-1 text-slate-400" /> {proj.loc}
                      </p>
                      <div className="text-[11px] text-slate-600">
                        <span className="font-semibold text-slate-800">Scope:</span> {proj.work}
                      </div>
                    </div>
                    <button onClick={() => scrollToSection('contact')} className="w-full bg-slate-950 hover:bg-blue-600 text-white font-bold py-2 rounded-xl text-xs uppercase tracking-wider transition-colors">
                      View Details
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