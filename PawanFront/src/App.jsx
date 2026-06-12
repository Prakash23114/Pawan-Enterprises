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
import Login from './pages/Login'; 

// Re-import the exact Lucide icons needed for your premium multi-column footer layout
import { Shield, Phone, MapPin, Settings } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [activeMobileTab, setActiveMobileTab] = useState('home');

  // Track hidden administrative dashboard states
  const [showAdminPortal, setShowAdminPortal] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const servicesScrollRef = useRef(null);
  const projectsScrollRef = useRef(null);
  const stepsScrollRef = useRef(null);

  useEffect(() => {
    // Check if an administrative authorization token exists locally on boot
    const token = localStorage.getItem('pawan_admin_token');
    if (token) {
      setIsAdminAuthenticated(true);
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdminLogout = () => {
    localStorage.removeItem('pawan_admin_token');
    setIsAdminAuthenticated(false);
    setShowAdminPortal(false);
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setShowAdminPortal(false); // Instantly shut down the admin view overlay if main menu links are active
    setActiveMobileTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 🔥 RESTORED SCROLL HANDLER: Powers your left and right sliders!
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
      
      {/* ─── ADMINISTRATIVE VIEW TOGGLE CHECKPOINT ─── */}
      {showAdminPortal && !isAdminAuthenticated ? (
        <Login onLoginSuccess={() => setIsAdminAuthenticated(true)} />
      ) : showAdminPortal && isAdminAuthenticated ? (
        // Admin Dashboard Workspace Dashboard Content
        <div className="py-32 text-center min-h-[65vh] bg-white max-w-md mx-auto my-12 border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full mb-3">
            <Shield className="w-6 h-6 fill-emerald-600/10" />
          </div>
          <h2 className="text-xl font-black text-slate-950 tracking-tight">Administrative Session Active</h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">Your verified incoming customer inspection tickets and dashboard leads will synchronize here.</p>
          <div className="mt-8 space-y-3">
            <button 
              onClick={() => setShowAdminPortal(false)} 
              className="w-full bg-blue-600 hover:bg-blue-700 font-bold py-2.5 rounded-xl text-xs text-white transition-all shadow-sm"
            >
              Return to Live Site
            </button>
            <button 
              onClick={handleAdminLogout} 
              className="w-full border border-slate-200 hover:bg-red-50 hover:border-red-200 text-slate-700 hover:text-red-600 font-bold py-2.5 rounded-xl text-xs transition-all"
            >
              Exit Session (Logout)
            </button>
          </div>
        </div>
      ) : (
        // ─── ORIGINAL WEB PRESENTATION GRID LAYOUT (100% RESTORED PUBLIC PATHWAY) ───
        <main>
          <Hero scrollToSection={scrollToSection} />
          
          {/* Fixed scroll parameters passing here */}
          <Services 
            scrollRef={servicesScrollRef} 
            handleSideScroll={handleSideScroll} 
            scrollToSection={scrollToSection} 
          />
          
          <About />
          <WhyChooseUs />
          
          {/* Fixed missing state attributes passing to power your project filters */}
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
      )}

      {/* ─── YOUR ORIGINAL PREMIUM MULTI-COLUMN DESIGN FOOTER (100% SYNCED) ─── */}
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
              
              {/* Discrete button to open the login portal workspace view without breaking customer tracking patterns */}
              <button 
                type="button"
                onClick={() => setShowAdminPortal(!showAdminPortal)} 
                className="flex items-center space-x-1 text-[10px] text-slate-700 hover:text-blue-500 transition-colors uppercase font-bold tracking-widest pt-2 focus:outline-none"
              >
                <Settings className="w-3 h-3" />
                <span>{showAdminPortal ? "View Main Website" : "Staff Gateway"}</span>
              </button>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Quick Navigation</h4>
              <ul className="grid grid-cols-2 gap-2 text-[11px]">
                {['Services', 'About', 'Projects', 'Contact'].map((l) => (
                  <li key={l}>
                    <button onClick={() => scrollToSection(l.toLowerCase())} className="hover:text-white transition-colors text-left focus:outline-none">
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
                  src="https://maps.google.com/maps?q=Sai%20Satyam%20Residency,%20Khadakpada,%20Kalyan%20West&t=&z=13&ie=UTF8&iwloc=&output=embed" 
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