import { Phone } from 'lucide-react';
import InstallButton from "../InstallButton.jsx";

export default function MobileHeader() {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200/60 flex items-center justify-between px-4 z-50 shadow-sm">
      <span className="text-slate-950 text-sm font-black tracking-tight block uppercase">PAWAN ENTERPRISES</span>
      <div className="flex items-center gap-2">
        <InstallButton />
        <a href="tel:+919987937463" className="bg-blue-600 text-white p-2 rounded-xl shadow-sm">
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}