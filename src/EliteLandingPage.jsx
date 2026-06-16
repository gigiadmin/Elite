import React, { useState } from 'react';

// SVG Icons as standalone components for easy React/Vite use
const ShieldCheckIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export default function EliteLandingPage() {
  const [lead, setLead] = useState({ name: '', email: '', firm: '', phone: '', industry: 'Legal' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '31679ee4-ff23-4b4b-bf44-79a8e592bf8b',
          subject: `New Elite Audit Request — ${lead.firm || lead.name}`,
          from_name: lead.name,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          firm: lead.firm,
          industry: lead.industry,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              GIGITEK<span className="text-white">AI</span>
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              ELITE
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+17273826909" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
              (727) 382-6909
            </a>
            <a 
              href="#audit-form" 
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 border border-indigo-400/20"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px] -z-10" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-500/10 blur-[80px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-6">
                Now Live in Tampa Bay
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
                Security-First Managed IT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-emerald-300">
                  + Governed AI
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Deploy Microsoft 365 Copilot and Custom AI Agents with total confidence. We provide the governance, security, and local support your healthcare or legal firm needs to automate operations without risking compliance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#audit-form" 
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold transition-all duration-200 shadow-xl shadow-indigo-500/20 border border-indigo-400/20"
                >
                  Schedule Your Free AI Audit
                </a>
                <a 
                  href="#learn-more" 
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold border border-slate-800 transition-all duration-200"
                >
                  See How It Works
                </a>
              </div>
            </div>

            {/* Hero Image/Mockup Placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square w-full max-w-[450px] mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
                {/* Abstract Tech Graphic */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-transparent blur-2xl" />
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs text-indigo-400 font-mono">active_monitoring.sys</span>
                </div>
                <div className="space-y-4 my-6 font-mono text-xs sm:text-sm text-slate-400">
                  <p className="text-emerald-400">{"[SYSTEM] Secure tenant boundary active."}</p>
                  <p>{"[AI_AGENT] Automated document filing: Complete (3.4s)"}</p>
                  <p className="text-indigo-400">{"[GOVERNANCE] Blocked unauthorized ChatGPT export."}</p>
                  <p>{"[COMPLIANCE] HIPAA audit log written."}</p>
                </div>
                <div className="border-t border-slate-800 pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Uptime: 99.9%</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-800/80 bg-slate-900/30 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Trusted by Tampa Bay’s Most Regulated SMBs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <span className="text-md sm:text-lg font-bold text-slate-400 tracking-wider">HIPAA COMPLIANT</span>
            <span className="text-md sm:text-lg font-bold text-slate-400 tracking-wider">NIST ALIGNED</span>
            <span className="text-md sm:text-lg font-bold text-slate-400 tracking-wider">ZERO TRUST READY</span>
            <span className="text-md sm:text-lg font-bold text-slate-400 tracking-wider">MICROSOFT PARTNER</span>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 relative" id="learn-more">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
              Your employees are already using AI. <br />
              <span className="text-rose-500">Is your client data safe?</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              In legal, healthcare, and construction firms, "Shadow AI" is the new hidden liability. If your team is pasting client data, medical history, or internal contracts into public AI models, your compliance is already compromised.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-rose-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                <AlertIcon />
              </div>
              <h3 className="text-xl font-bold mb-4">Shadow AI Leaks</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Staff uploading sensitive contracts, HIPAA-protected records, or financial files into free tools that train on your data.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-rose-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                <AlertIcon />
              </div>
              <h3 className="text-xl font-bold mb-4">Permission Sprawl</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Copilot indexes everything a user has access to. If internal folder permissions are messy, employees can query Copilot for payroll or strategic data they shouldn't see.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-rose-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                <AlertIcon />
              </div>
              <h3 className="text-xl font-bold mb-4">Untrained Output</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI hallucinations passed off as real facts in legal briefs, client correspondence, or medical summaries without human-in-the-loop verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest mb-4 block">The Elite Tier Solution</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                The Security-First AI Workforce
              </h2>
              <p className="text-slate-400 text-md leading-relaxed mb-8">
                We don't just "turn on" Microsoft Copilot. We configure the tenant boundaries, secure your data labels, and train your staff. Your data never leaves your environment, and your operations speed up tenfold.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1">
                    <ShieldCheckIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">M365 Copilot Governance</h4>
                    <p className="text-slate-400 text-sm">Automated data classification and sensitive info blocking so Copilot stays within its lane.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1">
                    <CpuIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">AI Agents as Employees</h4>
                    <p className="text-slate-400 text-sm">Intelligent automations that handle document filing, onboarding, and report generation in seconds.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1">
                    <UserGroupIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Mandatory Staff Training</h4>
                    <p className="text-slate-400 text-sm">We train your team on secure prompt engineering and manual validation to ensure zero hallucination risk.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature visual / Dashboard */}
            <div className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
              <h4 className="text-md font-bold mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                Live Governance Logs
              </h4>
              <div className="space-y-4 text-xs font-mono text-slate-400">
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-indigo-400">User: paralegal_01</span>
                  <span>10:42:15 AM</span>
                </div>
                <p className="text-slate-300">Queried: "Summarize the Smith deposition files."</p>
                <p className="text-emerald-400">Result: Copilot processed 4 restricted files within tenant boundaries. PHI redacted.</p>
                
                <div className="flex justify-between border-b border-slate-800/80 pt-4 pb-2">
                  <span className="text-rose-400">User: assistant_nurse</span>
                  <span>10:45:30 AM</span>
                </div>
                <p className="text-slate-300">Queried: "Export patient chart to external public model."</p>
                <p className="text-rose-500">Result: EXPORT BLOCKED. Flagged for compliance review. No data leakage detected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form / Lead Capture Section */}
      <section className="py-24 relative" id="audit-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                Get Your Free 15-Minute <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  AI Security Audit
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Most Tampa SMBs have at least 3 active "Shadow AI" leaks right now. Let our security engineers run a quick diagnostic of your M365 environment and show you exactly where your risks (and automation opportunities) are.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-slate-300 text-sm">Find Shadow AI usage in your staff.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-slate-300 text-sm">Analyze Copilot readiness and access sprawl.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-slate-300 text-sm">Identify 3 workflows to automate with AI agents.</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                    <ShieldCheckIcon />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Audit Scheduled!</h3>
                  <p className="text-slate-400 text-sm">
                    Thank you! We have received your request and will reach out to schedule your 15-minute diagnostic within one business hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <p className="text-rose-400 text-sm text-center bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3">
                      Something went wrong. Please try again or call (727) 382-6909.
                    </p>
                  )}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 outline-none"
                      placeholder="e.g. Harry Santiago"
                      value={lead.name}
                      onChange={(e) => setLead({ ...lead, name: e.target.value })}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Work Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 outline-none"
                        placeholder="e.g. harry@gigitekai.com"
                        value={lead.email}
                        onChange={(e) => setLead({ ...lead, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 outline-none"
                        placeholder="(727) 382-6909"
                        value={lead.phone}
                        onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Firm / Company Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 outline-none"
                        placeholder="e.g. GigitekAI"
                        value={lead.firm}
                        onChange={(e) => setLead({ ...lead, firm: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Industry</label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 outline-none"
                        value={lead.industry}
                        onChange={(e) => setLead({ ...lead, industry: e.target.value })}
                      >
                        <option>Legal</option>
                        <option>Healthcare</option>
                        <option>Construction</option>
                        <option>Other Regulated Industry</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold transition-all duration-200 shadow-xl shadow-indigo-500/20 border border-indigo-400/20"
                  >
                    Request Free Diagnostic
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © 2026 GigitekAI. Security-First Managed IT with AI done safely. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="https://gigitekai.com/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://gigitekai.com/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
