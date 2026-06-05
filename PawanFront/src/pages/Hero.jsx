
import heroVideo from '../assets/Video Project.mp4';

export default function Hero({ scrollToSection }) {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "30+", label: "Major Corporate Sites" },
    { value: "100%", label: "Dr. Fixit Certified" }
  ];

  return (
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:py-44 flex flex-col justify-end h-full z-10 w-full min-h-screen">
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
  );
}