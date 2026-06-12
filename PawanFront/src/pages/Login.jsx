import React, { useState } from 'react';
import { Lock, Mail, ShieldAlert } from 'lucide-react';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "https://pawan-enterprises.onrender.com"}/api/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed.');
      }

      // Save token string securely in the browser session storage memory
      localStorage.setItem('pawan_admin_token', data.token);
      
      setStatus({ loading: false, success: true, message: 'Authentication verified!' });
      
      // Notify parent component to update UI state right away
      if (onLoginSuccess) onLoginSuccess();

    } catch (error) {
      setStatus({ loading: false, success: false, message: error.message });
    }
  };

  return (
    <section className="py-20 bg-slate-50 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-950 tracking-tight">Portal Authentication</h3>
            <p className="text-xs text-slate-500 mt-1">Sign in to access your dashboard workspace</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {status.message && (
              <div className={`p-3 rounded-xl text-xs font-bold border flex items-center gap-2 ${status.success ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                {!status.success && <ShieldAlert className="w-4 h-4 flex-shrink-0" />}
                <span>{status.message}</span>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Email ID</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@pawan.com" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Security Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className={`w-full font-bold py-3 rounded-xl text-xs uppercase tracking-widest text-white transition-all duration-300 ${status.loading ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-sm"}`}
            >
              {status.loading ? "Verifying..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}