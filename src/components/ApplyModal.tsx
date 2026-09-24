import { useState } from 'react';
import { X, CheckCircle, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOffer?: 'ai-revenue-recovery' | 'ai-client-revenue-recovery' | 'general';
}

export function ApplyModal({ isOpen, onClose, defaultOffer = 'general' }: ApplyModalProps) {
  const [offer, setOffer] = useState(defaultOffer);
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [crm, setCrm] = useState('');
  const [volume, setVolume] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real local submission state & prepare mailto fallback
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const mailtoLink = `mailto:${siteConfig.author.email}?subject=${encodeURIComponent(
    `Implementation Application: ${businessName || 'New Inquiry'}`
  )}&body=${encodeURIComponent(
    `Hi Wilson,\n\nI'm interested in an implementation for ${businessName}.\n\nOffer: ${offer}\nContact: ${contactName}\nEmail: ${email}\nPhone: ${phone}\nCurrent CRM: ${crm}\nMonthly Volume: ${volume}\nNotes: ${notes}\n\nLet me know your availability for an initial review.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider font-mono text-amber-400">Implementation Application</span>
              <h2 className="text-2xl font-bold text-zinc-100 mt-1">Apply for a Production Implementation</h2>
              <p className="text-sm text-zinc-400 mt-1.5">
                We take on a limited number of custom builds each month to maintain high engineering standards.
                Pricing is {siteConfig.pricing.terms}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                  Target System
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOffer('ai-revenue-recovery')}
                    className={`text-left p-3 rounded-lg border text-xs transition-all ${
                      offer === 'ai-revenue-recovery'
                        ? 'border-amber-500/80 bg-amber-500/10 text-amber-200'
                        : 'border-zinc-800 bg-zinc-950/50 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="font-semibold text-zinc-200">AI Revenue Recovery</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">Missed calls, inbound triage, scheduling</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOffer('ai-client-revenue-recovery')}
                    className={`text-left p-3 rounded-lg border text-xs transition-all ${
                      offer === 'ai-client-revenue-recovery'
                        ? 'border-amber-500/80 bg-amber-500/10 text-amber-200'
                        : 'border-zinc-800 bg-zinc-950/50 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="font-semibold text-zinc-200">AI Client Reactivation</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">Dormant database segmentation & 1-to-1 outreach</div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Jane Miller"
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/80 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Apex Mechanical / Pure Dental"
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/80 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@apexmechanical.com"
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/80 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Direct Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 234-5678"
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/80 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Primary CRM / Software</label>
                  <input
                    type="text"
                    value={crm}
                    onChange={(e) => setCrm(e.target.value)}
                    placeholder="e.g. ServiceTitan, Jobber, GHL, HubSpot"
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/80 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Est. Monthly Volume / Past Contacts</label>
                  <input
                    type="text"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder="e.g. 150 missed calls/mo or 3,500 contacts"
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/80 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Current Bottleneck / Notes</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Briefly describe what happens today when a call is missed or how you currently treat past customers..."
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/80 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors text-center shadow-sm"
                >
                  Submit Application for Review
                </button>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 text-xs font-mono transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Wilson Directly</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-100">Application Received</h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
                Thanks, {contactName || 'there'}. Wilson personally reviews all architecture applications within 24 business hours to determine if your software stack and lead volume are a strong technical fit.
              </p>
            </div>

            <div className="bg-zinc-950/70 border border-zinc-800 rounded-lg p-4 text-left text-xs space-y-1.5 text-zinc-400 max-w-md mx-auto">
              <div className="font-mono text-zinc-300 uppercase tracking-wider text-[11px] mb-1">What Happens Next:</div>
              <div>1. System compatibility check against your CRM & telephony provider.</div>
              <div>2. If aligned, Wilson will send a 20-minute architecture review invite.</div>
              <div>3. If approved, project begins with the $1,000 initial discovery sprint.</div>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send copy via your email client</span>
              </a>
              <button
                onClick={handleReset}
                className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
