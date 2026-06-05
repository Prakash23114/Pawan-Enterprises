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

      <FloatingHotspots showBackToTop={showBackToTop} scrollToSection={scrollToSection} />
      <BottomNav activeMobileTab={activeMobileTab} scrollToSection={scrollToSection} />
    </div>
  );
}