import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Shield } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'Terrace Waterproofing',
    address: '',
    notes: ''
  });

  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "https://pawan-enterprises.onrender.com"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to submit request.");

      setStatus({
        loading: false,
        success: true,
        message: "Your inspection request has been submitted successfully! We will contact you shortly."
      });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        serviceType: "Terrace Waterproofing",
        address: "",
        notes: ""
      });

    } catch (error) {
      setStatus({ 
        loading: false, 
        success: false, 
        message: error.message || "Something went wrong. Please try again." 
      });
    }
  };

  return (
    <>
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

            <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100/30">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {status.message && (
                  <div className={`p-4 rounded-xl text-sm font-medium border ${status.success ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                    {status.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name</label>
                    <input type="text" required name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Contact name" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Phone Number</label>
                    <input type="tel" required name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +91 9987937463" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Email Address</label>
                    <input type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Service Type</label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none">
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
                  <input type="text" required name="address" value={formData.address} onChange={handleChange} placeholder="Building name or details" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Notes / Scope Details</label>
                  <textarea rows="3" name="notes" value={formData.notes} onChange={handleChange} placeholder="Outline damp spots or active leakage pathways..." className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none resize-none"></textarea>
                </div>

                <button type="submit" disabled={status.loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest py-3.5 rounded-xl text-xs shadow-sm transition-all disabled:bg-slate-300">
                  {status.loading ? "Submitting Request..." : "Submit Inspection Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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

      <footer className="bg-slate-900 text-slate-400 pt-12 pb-10 border-t border-slate-800 text-xs relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
            <div className="space-y-3">
              <div className="flex items-center space-x-2.5 cursor-pointer">
                <div className="bg-blue-600 p-1.5 rounded-xl text-white"><Shield className="w-4 h-4" /></div>
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
                    <span className="text-slate-400 font-medium select-none">{l} Index</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Contact Desk</h4>
              <ul className="space-y-2.5 text-[11px] text-slate-400">
                <li className="flex items-center space-x-2"><Phone className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span className="text-slate-300 font-bold">+91 998 793 7463</span></li>
                <li className="flex items-start space-x-2"><MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" /><span className="leading-relaxed">Sai Satyam Residency, Khadakpada, Kalyan West, MH</span></li>
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
    </>
  );
}