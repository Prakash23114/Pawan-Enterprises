import React, { useState, useEffect, useRef } from 'react';
import InstallButton from "./InstallButton.jsx";
import {
  Phone,
  MessageSquare,
  ChevronUp,
  CheckCircle,
  Shield,
  Clock,
  MapPin,
  Mail,
  Hammer,
  Droplet,
  Home,
  Wrench,
  TrendingUp,
  Award,
  ChevronRight,
  ChevronLeft,
  Factory,
  Building2,
  PaintBucket,
  Layers,
  Briefcase,
  FileText
} from 'lucide-react';

// LOCAL VIDEO & STATIC GRAPHICS IMPORTS MATCHING YOUR FOLDER STRUCTURE
import heroVideo from './assets/Video Project.mp4';
import certificateImg from './assets/certificate.png';

// Services Directory Mapping
import terraceImg from './assets/services/Terrace Waterproofing.png';
import bathroomImg from './assets/services/Bathroom Waterproofing.png';
import wallImg from './assets/services/Wall Waterproofing.png';
import basementImg from './assets/services/Basement Waterproofing.png';
import tankImg from './assets/services/Water Tank Waterproofing.png';
import repairImg from './assets/services/Structural Repair.png';
import jacketingImg from './assets/services/RCC Jacketing.png';
import epoxyImg from './assets/services/Epoxy Flooring.png';
import industrialImg from './assets/services/Industrial Waterproofing.png';
import retrofittingImg from './assets/services/Retrofitting.png';

// Projects Directory Mapping
import abhilashaImg from './assets/projects/AbhilashaTower.png';
import antarcticaImg from './assets/projects/Antarctica.png';
import rktImg from './assets/projects/R.K.T College.png';
import daffodilImg from './assets/projects/Daffodil CHS.png';
import shubhImg from './assets/projects/Shubh Vastu Devloper.jpg';
import sevaImg from './assets/projects/Seva Sadan Trust.png';
import shivImg from './assets/projects/Shiv Shrusti CHS.png';
import doshiImg from './assets/projects/Doshi Industries.png';
import angloImg from './assets/projects/Anglo Eastern College.png';
import laxmiBaugImg from './assets/projects/Laxmi Baug.png';
import makaniImg from './assets/projects/Makani CHS.png';
import krishnaImg from './assets/projects/Krishna Kunj CHS.png';

// Workflow Directory Mapping
import step1Img from './assets/workFlow/Site Inspection & Testing.png';
import step2Img from './assets/workFlow/Problem Diagnosis.png';
import step3Img from './assets/workFlow/Surface Prep & Grinding.png';
import step4Img from './assets/workFlow/Waterproofing Treatment.png';
import step5Img from './assets/workFlow/Quality Pond Testing.png';
import step6Img from './assets/workFlow/Warranty & Handover.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [activeMobileTab, setActiveMobileTab] = useState('home');

  // References for horizontal scroll containers
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

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "30+", label: "Major Corporate Sites" },
    { value: "100%", label: "Dr. Fixit Certified" }
  ];

  const badges = [
    "Authorized Dr. Fixit Applicator",
    "Pidilite Certified Partner",
    "25+ Years Local Trust",
    "Dr. Fixit L.E.A.D Certified",
    "Premium Polymers Only",
    "Structural Jacketing Experts"
  ];

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

  const whyChooseUs = [
    { title: "Authorized Dr. Fixit Applicators", desc: "Formally certified through the elite Dr. Fixit L.E.A.D. training program.", icon: <Award className="w-5 h-5" /> },
    { title: "Premium Pidilite Materials", desc: "We exclusively install genuine high-grade polymers, 101LW, Raincoat, and Newcoat lines.", icon: <Shield className="w-5 h-5" /> },
    { title: "25+ Years Experience", desc: "Operating proudly across Kalyan and the wider Mumbai Metropolitan region for over 25 years.", icon: <Clock className="w-5 h-5" /> },
    { title: "Proven Civil Expertise", desc: "Fully qualified in advanced micro-concrete repair, core cutting, polymer coatings, and plumbing.", icon: <Wrench className="w-5 h-5" /> },
    { title: "Insured Workforces", desc: "Backed by valid Employees Compensation Insurance from The New India Assurance Co. Ltd.", icon: <CheckCircle className="w-5 h-5" /> },
    { title: "Verified Success Record", desc: "A robust portfolio tracking residential societies, hospitals, and major chemical plants.", icon: <TrendingUp className="w-5 h-5" /> }
  ];

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

  const steps = [
    { title: "Site Inspection & Testing", desc: "Performing physical sound tracking across concrete surfaces using structural hammers.", imgPlaceholder: step1Img },
    { title: "Problem Diagnosis", desc: "Marking hollow plaster layers, active leakage traces, and tracking shifting expansion joints.", imgPlaceholder: step2Img },
    { title: "Surface Prep & Grinding", desc: "Routinely cleaning areas using high-pressure jet wash machines and grinding open dynamic cracks.", imgPlaceholder: step3Img },
    { title: "Waterproofing Treatment", desc: "Meticulously laying Dr. Fixit Primeseal primers followed by multiple coats of New Coat or Rain Coat polymers.", imgPlaceholder: step4Img },
    { title: "Quality Pond Testing", desc: "Filling completed structural terrace floors with standing water layers to verify barrier performance.", imgPlaceholder: step5Img },
    { title: "Warranty & Handover", desc: "Delivering fully signed certified assurance files ensuring decades of stress-free structural safety.", imgPlaceholder: step6Img }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1e293b] font-sans antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-0">

      {/* TOP DESKTOP NAVIGATION HUB */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 hidden md:block">
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-sm px-6 sm:px-8 h-20 flex items-center justify-between transition-all">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-sm">
              <Shield className="w-5 h-5 fill-white/5" />
            </div>
            <div>
              <span className="text-slate-950 text-lg font-black tracking-tight block uppercase">PAWAN ENTERPRISES</span>
              <span className="text-slate-500 text-[10px] font-bold tracking-widest block uppercase mt-0.5">Contracting Excellence</span>
            </div>
          </div>

          <nav className="flex items-center space-x-8">
            {['Services', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-600 hover:text-slate-950 text-sm font-semibold tracking-wide relative py-1 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <InstallButton />
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
            >
              Get Free Inspection
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE TOPBAR BRANDING */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200/60 flex items-center justify-between px-4 z-50 shadow-sm">
        <span className="text-slate-950 text-sm font-black tracking-tight block uppercase">PAWAN ENTERPRISES</span>
        <div className="flex items-center gap-2">
          <InstallButton />
          <a href="tel:+919987937463" className="bg-blue-600 text-white p-2 rounded-xl shadow-sm">
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* HERO HERO CONTAINER */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            className="w-full h-full object-cover filter contrast-105 brightness-75"
            poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-900/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-end h-full z-10 w-full min-h-screen">
          <div className="max-w-3xl mb-12 sm:mb-20 mt-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 backdrop-blur-md px-3.5 py-1 rounded-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-slate-200 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">Premium Protective Contracting</span>
            </div>
            <p className="text-white/80 text-xs sm:text-base font-medium uppercase tracking-wider mb-2">Protected for the</p>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-5">Future.</h1>
            <p className="text-slate-300 text-xs sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              We bring over two decades of proven expertise in building protection. From terraces to basements, we deliver precision-engineered waterproofing solutions using premium materials, skilled workmanship, and industry-tested techniques.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-sm mx-auto sm:max-w-full">
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl text-center transition-all">
                Book Your Order
              </button>
              <button onClick={() => scrollToSection('projects')} className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm text-center transition-all">
                Explore Our Project
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-xl sm:text-4xl font-black text-white tracking-tight mb-0.5">{stat.value}</p>
                <p className="text-[10px] font-bold tracking-wide text-slate-400 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS ROW */}
      <section className="bg-white border-b border-slate-200 py-6 text-slate-700 overflow-x-auto whitespace-nowrap scrollbar-none relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-8 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-6 sm:space-x-0">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center space-x-2.5 font-semibold text-xs tracking-wide text-slate-800 flex-shrink-0">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WATERPROOFING SERVICES INDEX */}
      <section id="services" className="py-16 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl mb-10 lg:mb-16">
            <div className="inline-block bg-slate-100 text-slate-800 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2">Scope of Operations</div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">Our Waterproofing Services</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">We specialise in long-lasting waterproofing treatments for terraces, bathrooms and walls.</p>
          </div>

          <div className="relative">
            <button
              onClick={() => handleSideScroll(servicesScrollRef, 'left')}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-xl border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div ref={servicesScrollRef} className="flex overflow-x-auto pb-6 gap-5 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
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

            <button
              onClick={() => handleSideScroll(servicesScrollRef, 'right')}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-xl border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT TECHNICAL PROFILE BLOCK */}
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

              <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto bg-slate-950 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm text-center">
                Consult Our Estimators
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC EDGE VALUES */}
      <section className="py-16 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-2">Strategic Edge</div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">Why People Trust Us</h2>
            <div className="w-10 h-0.5 bg-blue-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whyChooseUs.map((reason, i) => (
              <div key={i} className="group bg-slate-50/70 border border-slate-200/60 p-6 sm:p-8 rounded-2xl shadow-sm hover:border-slate-300 hover:bg-white transition-all duration-200 flex flex-col items-start">
                <div className="bg-white border border-slate-200/80 w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-5 group-hover:bg-blue-50/20 transition-colors">
                  {reason.icon}
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-1.5 tracking-tight">{reason.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAJOR PROVEN TRACK PORTFOLIO */}
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
            <button
              onClick={() => handleSideScroll(projectsScrollRef, 'left')}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-xl border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div ref={projectsScrollRef} className="flex overflow-x-auto pb-6 gap-5 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
              {projectsList
                .filter(p => activeTab === 'all' || p.cat.toLowerCase().includes(activeTab))
                .map((proj, i) => (
                  <div key={i} className="min-w-[270px] sm:min-w-[330px] max-w-[330px] snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between flex-shrink-0">
                    <div className="relative h-44 w-full bg-slate-100 border-b border-slate-100 overflow-hidden">
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

            <button
              onClick={() => handleSideScroll(projectsScrollRef, 'right')}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-xl border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* TECHNICAL PROCEDURES ROW */}
      <section className="py-16 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2">Technical Procedure</div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">How We Work</h2>
            <div className="w-10 h-0.5 bg-blue-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="relative">
            <button
              onClick={() => handleSideScroll(stepsScrollRef, 'left')}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-xl border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div ref={stepsScrollRef} className="flex overflow-x-auto pb-6 gap-5 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
              {steps.map((step, i) => (
                <div key={i} className="min-w-[270px] sm:min-w-[330px] max-w-[330px] snap-start bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden relative flex flex-col justify-between shadow-sm flex-shrink-0">
                  <div>
                    <div className="h-36 w-full bg-slate-900 overflow-hidden relative border-b border-slate-200">
                      <img src={step.imgPlaceholder} alt={step.title} className="w-full h-full object-cover opacity-90" />
                      <span className="absolute top-3 right-3 text-2xl font-black text-white/30">0{i + 1}</span>
                    </div>
                    <div className="p-5">
                      <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-sm">
                        {i + 1}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1.5 tracking-tight">{step.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleSideScroll(stepsScrollRef, 'right')}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-xl border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ESTIMATION REQUEST EVALUATION FORM */}
      <section id="contact" className="py-16 lg:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div>
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2">On-Site Evaluation</div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-3">Request An Inspection</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Get in touch with the Pawan Enterprises estimator engineers to arrange specialized structural diagnosis checks at your property site.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="bg-blue-600 text-white p-2 rounded-lg"><Phone className="w-3.5 h-3.5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Phone Lines</h4>
                    <p className="text-slate-700 text-xs font-bold mt-0.5">+91 998 793 7463</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="bg-blue-600 text-white p-2 rounded-lg"><Mail className="w-3.5 h-3.5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Email Id</h4>
                    <p className="text-slate-700 text-xs font-bold mt-0.5 break-all">mandalnageshwar4@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 sm:col-span-2 lg:col-span-1">
                  <div className="bg-blue-600 text-white p-2 rounded-lg"><MapPin className="w-3.5 h-3.5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Registered Office</h4>
                    <p className="text-slate-700 text-xs font-bold mt-0.5 leading-relaxed">F-103, Sai Satyam Residency, Khadakpada, Kalyan West, MH - 421301</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name</label>
                    <input type="text" required placeholder="Contact name" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Phone Number</label>
                    <input type="tel" required placeholder="e.g. +91 9987937463" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Email Address</label>
                    <input type="email" placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Service Type</label>
                    <select className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none">
                      <option>Terrace Waterproofing</option>
                      <option>External Wall Coating</option>
                      <option>Bathroom Moisture Treatment</option>
                      <option>RCC Jacketing Maintenance</option>
                      <option>Crack Filling Layouts</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Site Address Location</label>
                  <input type="text" placeholder="Building name or details" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Notes / Scope Details</label>
                  <textarea rows="3" placeholder="Outline damp spots or active leakage pathways..." className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest py-3.5 rounded-xl text-xs shadow-sm transition-all">
                  Submit Inspection Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CONNECT CTA COMPONENT ROW */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">Need Waterproofing Solutions?</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Book your free layout inspection checking routine today. Defend your structural concrete framework safely before structural paint peels activate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-sm mx-auto sm:max-w-full">
            <a href="tel:+919987937463" className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition-all text-center">
              Call Office
            </a>
            <a href="https://wa.me/919987937463" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all">
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-12 pb-10 border-t border-slate-800 text-xs relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
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
                    <button onClick={() => scrollToSection(l.toLowerCase())} className="hover:text-white transition-colors">
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
                <iframe title="Pawan Enterprises Office Map" src="https://maps.google.com/maps?q=19.2620407,73.1244955&z=18&output=embed" className="w-full h-full border-0 filter grayscale invert opacity-75 contrast-110" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <p>© {new Date().getFullYear()} Pawan Enterprises. All rights reserved.</p>
            <p className="uppercase tracking-widest font-bold text-slate-600 text-[9px]">Premium Structural Protection</p>
          </div>
        </div>
      </footer>

      {/* DESKTOP STICKY LINKS DESK */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <a href="https://wa.me/919987937463" target="_blank" rel="noreferrer" className="bg-emerald-600 text-white p-3.5 rounded-full shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform">
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>
        <a href="tel:+919987937463" className="bg-blue-600 text-white p-3.5 rounded-full shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform">
          <Phone className="w-5 h-5" />
        </a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`bg-white text-slate-800 border border-slate-200 p-3.5 rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-all ${showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}>
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      {/* MOBILE HUD OVERLAY (NATIVE PWA STRIP) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200/80 flex items-center justify-around px-2 z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
        <button onClick={() => scrollToSection('home')} className={`flex flex-col items-center gap-1 transition-colors ${activeMobileTab === 'home' ? 'text-blue-600' : 'text-slate-400'}`}>
          <Home className="w-5 h-5" />
          <span className="text-[9px] font-bold">Home</span>
        </button>
        <button onClick={() => scrollToSection('services')} className={`flex flex-col items-center gap-1 transition-colors ${activeMobileTab === 'services' ? 'text-blue-600' : 'text-slate-400'}`}>
          <Wrench className="w-5 h-5" />
          <span className="text-[9px] font-bold">Services</span>
        </button>

        <a href="https://wa.me/919987937463" target="_blank" rel="noreferrer" className="bg-emerald-600 text-white p-3 rounded-full -translate-y-4 shadow-lg shadow-emerald-600/30 active:scale-95 transition-transform flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>

        <button onClick={() => scrollToSection('projects')} className={`flex flex-col items-center gap-1 transition-colors ${activeMobileTab === 'projects' ? 'text-blue-600' : 'text-slate-400'}`}>
          <Briefcase className="w-5 h-5" />
          <span className="text-[9px] font-bold">Projects</span>
        </button>
        <button onClick={() => scrollToSection('contact')} className={`flex flex-col items-center gap-1 transition-colors ${activeMobileTab === 'contact' ? 'text-blue-600' : 'text-slate-400'}`}>
          <Mail className="w-5 h-5" />
          <span className="text-[9px] font-bold">Contact</span>
        </button>
      </div>

    </div>
  );
}