
import { Shield } from 'lucide-react';
import InstallButton from "../InstallButton.jsx";

export default function Navbar({ scrollToSection }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 hidden md:block">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-sm px-6 sm:px-8 h-20 flex items-center justify-between transition-all">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="bg-slate-950 p-2.5 rounded-xl text-white shadow-sm">
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
  );
}