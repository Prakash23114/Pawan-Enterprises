import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SideScrollButton({ direction, onClick }) {
  const isLeft = direction === 'left';
  return (
    <button
      onClick={onClick}
      className={`hidden md:flex absolute ${isLeft ? '-left-5' : '-right-5'} top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-xl border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-slate-50 shadow-sm transition-all`}
    >
      {isLeft ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
    </button>
  );
}