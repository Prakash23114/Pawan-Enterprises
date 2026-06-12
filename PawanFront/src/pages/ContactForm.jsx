import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Calendar, MessageSquare, Upload, X, ImageIcon } from 'lucide-react';

export default function ContactForm() {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'Terrace Waterproofing',
    address: '',
    notes: ''
  });

  // Track the raw file binary and its dynamic object URL preview path string
  const [leakageImage, setLeakageImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Process the selected file buffer input safely with clear threshold checks
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB Limit restriction rule check
        setStatus({ loading: false, success: false, message: 'Image size must be smaller than 5MB.' });
        return;
      }
      setLeakageImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeSelectedImage = () => {
    setLeakageImage(null);
    setImagePreview('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    // 1. Check for the administrative token before proceeding
    const token = localStorage.getItem('pawan_admin_token');
    if (!token) {
      setStatus({
        loading: false,
        success: false,
        message: "Access Denied: You must be logged in to submit an inspection request."
      });
      return;
    }

    try {
      const submissionPayload = new FormData();

      submissionPayload.append('fullName', formData.fullName);
      submissionPayload.append('phone', formData.phone);
      submissionPayload.append('email', formData.email);
      submissionPayload.append('serviceType', formData.serviceType);
      submissionPayload.append('address', formData.address);
      submissionPayload.append('notes', formData.notes);

      if (leakageImage) {
        submissionPayload.append('leakageImage', leakageImage);
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "https://pawan-enterprises.onrender.com"}/api/request-inspection`,
        {
          method: "POST",
          headers: {
            // 2. Attach the JWT securely using standard Bearer formatting
            'Authorization': `Bearer ${token}`
          },
          body: submissionPayload
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          data.errors?.map(err => err.msg).join(", ") ||
          "Failed to submit inspection request."
        );
      }

      setStatus({
        loading: false,
        success: true,
        message: "Your inspection request and leakage report have been uploaded successfully. Our team will contact you shortly."
      });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        serviceType: "Terrace Waterproofing",
        address: "",
        notes: ""
      });
      removeSelectedImage();

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "Unable to submit your request. Please try again later."
      });
    }
  };

  return (
    <>
      <section id="contact" className="py-16 lg:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Information Side Block */}
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

            {/* Interactive Form Display Interface */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
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
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none" />
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

                {/* VISUAL IMAGE UPLOAD ELEMENT LAYER */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Upload Leakage Image (Optional)</label>

                  <input
                    type="file"
                    ref={fileInputRef}
                    name="leakageImage"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {!imagePreview ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-slate-200 hover:border-blue-500 bg-slate-50/50 hover:bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 select-none group"
                    >
                      <Upload className="w-6 h-6 text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" />
                      <span className="text-xs font-bold text-slate-700">Click to upload photo</span>
                      <span className="text-[10px] text-slate-400 mt-1">JPEG, PNG up to 5MB</span>
                    </div>
                  ) : (
                    <div className="relative border border-slate-200 bg-slate-50 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <div className="w-14 h-14 rounded-lg overflow-hidden border border-slate-200 bg-white flex-shrink-0">
                          <img src={imagePreview} alt="Leakage sample preview" className="w-full h-full object-cover" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold text-slate-800 truncate">{leakageImage?.name}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{(leakageImage?.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeSelectedImage}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Notes / Scope Details</label>
                  <textarea rows="3" name="notes" value={formData.notes} onChange={handleChange} placeholder="Outline damp spots or active leakage pathways..." className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-all focus:outline-none resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full font-bold py-3.5 rounded-xl transition-all duration-300 ${status.loading ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white`}
                >
                  {status.loading ? "Submitting Request..." : "Submit Inspection Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NEED WATERPROOFING SOLUTIONS ROW BANNER */}
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
    </>
  );
}