import React from 'react';
import { Award, Shield, Clock, Wrench, CheckCircle, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const whyChooseUs = [
    { title: "Authorized Dr. Fixit Applicators", desc: "Formally certified through the elite Dr. Fixit L.E.A.D. training program.", icon: <Award className="w-5 h-5" /> },
    { title: "Premium Pidilite Materials", desc: "We exclusively install genuine high-grade polymers, 101LW, Raincoat, and Newcoat lines.", icon: <Shield className="w-5 h-5" /> },
    { title: "25+ Years Experience", desc: "Operating proudly across Kalyan and the wider Mumbai Metropolitan region for over 25 years.", icon: <Clock className="w-5 h-5" /> },
    { title: "Proven Civil Expertise", desc: "Fully qualified in advanced micro-concrete repair, core cutting, polymer coatings, and plumbing.", icon: <Wrench className="w-5 h-5" /> },
    { title: "Insured Workforces", desc: "Backed by valid Employees Compensation Insurance from The New India Assurance Co. Ltd.", icon: <CheckCircle className="w-5 h-5" /> },
    { title: "Verified Success Record", desc: "A robust portfolio tracking residential societies, hospitals, and major chemical plants.", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
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
  );
}