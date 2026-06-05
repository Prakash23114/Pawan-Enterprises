import React from 'react';
import { Home, Wrench, MessageSquare, Briefcase, Mail } from 'lucide-react';

export default function BottomNav({ activeMobileTab, scrollToSection }) {
  return (
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
  );
}