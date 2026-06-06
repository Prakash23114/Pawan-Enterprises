import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import MobileHeader from './components/MobileHeader';
import BottomNav from './components/BottomNav';
import FloatingHotspots from './components/FloatingHotspots';

import Hero from './pages/Hero';
import Services from './pages/Services';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import Projects from './pages/Projects';
import Workflow from './pages/Workflow';
import ContactForm from './pages/ContactForm';


import { Shield, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [activeMobileTab, setActiveMobileTab] = useState('home');

  const servicesScrollRef = useRef(null);
  const projectsScrollRef = useRef(null);
  const stepsScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setActiveMobileTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSideScroll = (ref, direction) => {
    if (ref.current) {
      const offset = direction === 'left' ? -340 : 340;
      ref.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1e293b] font-sans antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      <Navbar scrollToSection={scrollToSection} />
      <MobileHeader />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Services 
          scrollRef={servicesScrollRef} 
          handleSideScroll={handleSideScroll} 
          scrollToSection={scrollToSection} 
        />
        <About />
        <WhyChooseUs />
        <Projects 
          scrollRef={projectsScrollRef} 
          handleSideScroll={handleSideScroll} 
          scrollToSection={scrollToSection} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Workflow 
          scrollRef={stepsScrollRef} 
          handleSideScroll={handleSideScroll} 
        />
        <ContactForm />
      </main>

      {/* FIXED GLOBAL FOOTER LAYER */}
      <footer className="bg-slate-900 text-slate-400 pt-12 pb-10 border-t border-slate-800 text-xs relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="bg-blue-600 p-1.5 rounded-xl text-white">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-white font-black text-sm tracking-wider uppercase">Pawan Enterprises</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Authorized applicator associates of Pidilite and Dr. Fixit chemical lines registered formally under corporate title Pawan Enterprises.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Quick Navigation</h4>
              <ul className="grid grid-cols-2 gap-2 text-[11px]">
                {['Services', 'About', 'Projects', 'Contact'].map((l) => (
                  <li key={l}>
                    <button onClick={() => scrollToSection(l.toLowerCase())} className="hover:text-white transition-colors text-left">
                      {l} Index
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Contact Desk</h4>
              <ul className="space-y-2.5 text-[11px] text-slate-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-300 font-bold">+91 998 793 7463</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Sai Satyam Residency, Khadakpada, Kalyan West, MH</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Our Location Map</h4>
              <div className="w-full h-28 rounded-xl overflow-hidden border border-slate-800 shadow-md">
                <iframe 
                  title="Pawan Enterprises Office Map" 
                  src="https://maps.google.com/maps?q=19.2620407,73.1244955&z=18&output=embed" 
                  className="w-full h-full border-0 filter grayscale invert opacity-75 contrast-110" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <p>© {new Date().getFullYear()} Pawan Enterprises. All rights reserved.</p>
            <p className="uppercase tracking-widest font-bold text-slate-600 text-[9px]">Premium Structural Protection</p>
          </div>
        </div>
      </footer>

      <FloatingHotspots showBackToTop={showBackToTop} scrollToSection={scrollToSection} />
      <BottomNav activeMobileTab={activeMobileTab} scrollToSection={scrollToSection} />
    </div>
  );
}
