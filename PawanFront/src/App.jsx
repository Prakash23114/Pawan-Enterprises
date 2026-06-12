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
import Login from './pages/Login'; // 1. Import new login page module

import { Shield, Phone, MapPin, LogOut } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [activeMobileTab, setActiveMobileTab] = useState('home');
  
  // 2. Setup auth state monitoring based on local cache validation tokens
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const servicesScrollRef = useRef(null);
  const projectsScrollRef = useRef(null);
  const stepsScrollRef = useRef(null);

  useEffect(() => {
    // Check if token exists on app mount initialization
    const token = localStorage.getItem('pawan_admin_token');
    if (token) {
      setIsAuthenticated(true);
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('pawan_admin_token');
    setIsAuthenticated(false);
    setActiveMobileTab('home');
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setActiveMobileTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-blue-600 selection:text-white">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* 3. CONDITIONAL ROUTING HOOK: Render login if not authenticated */}
      {!isAuthenticated ? (
        <Login onLoginSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <main>
          <Hero scrollToSection={scrollToSection} />
          <Services scrollRef={servicesScrollRef} activeTab={activeTab} setActiveTab={setActiveTab} />
          <About />
          <WhyChooseUs />
          <Projects scrollRef={projectsScrollRef} />
          <Workflow scrollRef={stepsScrollRef} />
          <ContactForm />
        </main>
      )}

      <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 lg:pb-12 border-t border-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-white">
                <Shield className="w-5 h-5 text-blue-500 fill-blue-500/10" />
                <span className="font-black text-sm uppercase tracking-wider">Pawan Enterprises</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-500">
                Authorized applicators delivering precision engineering waterproofing coatings and comprehensive structural rehabilitation treatments live.
              </p>
              {/* Add Logout Utility trigger when logged into system context */}
              {isAuthenticated && (
                <button 
                  onClick={handleLogout}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-red-500 hover:text-red-400 transition-colors pt-2 uppercase tracking-wider"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Exit Session</span>
                </button>
              )}
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Contact Gateway</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span className="text-slate-300 font-bold">+91 998 793 7463</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-600 mt-0.5 flex-shrink-0" />
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

      {isAuthenticated && (
        <>
          <FloatingHotspots showBackToTop={showBackToTop} scrollToSection={scrollToSection} />
          <BottomNav activeMobileTab={activeMobileTab} scrollToSection={scrollToSection} />
        </>
      )}
    </div>
  );
}