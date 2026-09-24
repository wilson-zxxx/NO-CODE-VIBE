import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, PhoneMissed, MessageSquare, Calendar, UserCheck, BarChart3, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface AiRevenueRecoveryPageProps {
  onNavigate: (path: string) => void;
  onOpenApply: () => void;
}

export function AiRevenueRecoveryPage({ onNavigate, onOpenApply }: AiRevenueRecoveryPageProps) {
  const workflowSteps = [
    {
      step: '01',
      title: 'Missed Call',
      desc: 'Inbound line rings during job rush or after hours. Customer disconnects without leaving voicemail.',
      icon: PhoneMissed,
    },
    {
      step: '02',
      title: 'Lead Capture',
      desc: 'Instant Twilio webhook triggers within 15 seconds: "Hi, this is dispatch with [Company]. We just missed your call — how can we help?"',
      icon: MessageSquare,
    },
    {
      step: '03',
      title: 'Follow-Up',
      desc: 'Engages in human-grade conversational text to gather job address, emergency level, and requested timeframe.',
      icon: MessageSquare,
    },
    {
      step: '04',
      title: 'Qualification',
      desc: 'Validates service area eligibility and job type against your business rules before offering time slots.',
      icon: CheckCircle2,
    },
    {
      step: '05',
      title: 'Booking / Escalation',
      desc: 'Schedules directly into your booking software or pings on-call technician for urgent high-ticket repairs.',
      icon: Calendar,
    },
    {
      step: '06',
      title: 'Revenue Tracking',
      desc: 'Tags the customer record in your CRM to track recovered job revenue against total ad spend.',
      icon: BarChart3,
    },
  ];

  const faqs = [
    {
      q: 'Will customers know it is an AI system?',
      a: 'The tone is configured to be helpful, transparent, and direct (e.g. "This is our dispatch assistant with [Company]"). Callers care about one thing: getting their problem solved before they have to call someone else.',
    },
    {
      q: 'What if a caller asks an unexpected or technical question?',
      a: 'The system operates on strict slot-filling state machines. If a question falls outside approved bounds, it immediately responds: "Let me have our lead technician call you back directly in 10 minutes" and alerts your staff.',
    },
    {
      q: 'What CRMs and phone systems do you integrate with?',
      a: 'We integrate with Twilio, ServiceTitan, Jobber, GoHighLevel, HubSpot, Zapier webhooks, and standard VoIP SIP trunks.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
        <button onClick={() => onNavigate('/work-with-me')} className="hover:text-zinc-200">
          Work With Me
        </button>
        <span>/</span>
        <span className="text-amber-400">AI Revenue Recovery</span>
      </div>

      {/* Hero Section */}
      <section className="space-y-6 max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
          Commercial Offer
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 font-mono leading-tight">
          You’re Already Paying for Leads. We Help Recover the Ones Your Business Is Losing.
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
          Most home service and local high-ticket companies lose 30% or more of inbound call volume to busy lines and after-hours delays. We implement an automated, conversational recovery system that recaptures callers before they move on to your competitors.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.calculators.missedCall}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-lg text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>Calculate My Missed-Call Opportunity</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenApply}
            className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-lg text-sm font-semibold transition-colors"
          >
            Apply for an Implementation
          </button>
        </div>
      </section>

      {/* Implementation Workflow */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Automated Architecture
          </div>
          <h2 className="text-2xl font-bold text-zinc-100 font-mono mt-1">
            The Recovery Workflow
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Missed Call → Lead Capture → Follow-Up → Qualification → Booking / Human Escalation → Revenue Tracking
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400">{step.step}</span>
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <h3 className="font-bold text-zinc-100 text-base font-mono">{step.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Implementation Structure & Pricing */}
      <section className="p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/90 space-y-6 max-w-4xl">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
            Investment Structure
          </span>
          <h2 className="text-2xl font-bold text-zinc-100 font-mono">
            Current Implementation Structure
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Transparent milestones with clear engineering accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-lg space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              Total Project Fee
            </span>
            <div className="text-2xl font-bold text-zinc-100 font-mono">
              {siteConfig.pricing.implementationFee}
            </div>
            <p className="text-xs text-zinc-400 pt-1">
              Complete turnkey setup, prompt tuning, integration, and 30-day post-launch optimization.
            </p>
          </div>

          <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-lg space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
              Milestone 1: Discovery
            </span>
            <div className="text-2xl font-bold text-amber-300 font-mono">
              {siteConfig.pricing.depositToStart}
            </div>
            <p className="text-xs text-zinc-400 pt-1">
              To start project. Credited toward total. Covers telephony audit, state machine architecture, and prompt engineering.
            </p>
          </div>

          <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-lg space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              Milestone 2: Production
            </span>
            <div className="text-2xl font-bold text-zinc-100 font-mono">
              {siteConfig.pricing.launchPayment}
            </div>
            <p className="text-xs text-zinc-400 pt-1">
              Due before production launch, after shadow-mode testing proves reliability and guardrail enforcement.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-zinc-400 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
          <span>
            Note: Ongoing carrier telephony and SMS costs (typically $0.02–$0.04 per interaction) are billed directly by Twilio or your provider. We do not markup infrastructure usage.
          </span>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6 max-w-4xl">
        <h2 className="text-2xl font-bold text-zinc-100 font-mono">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800/80 space-y-2"
            >
              <h3 className="font-semibold text-zinc-100 text-sm font-mono">{faq.q}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="p-8 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 text-center space-y-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
          Check Your Real Numbers First
        </h2>
        <p className="text-sm text-zinc-300 max-w-xl mx-auto">
          Before requesting an implementation, use our independent calculator to see how much revenue your current missed call rate is actually costing your business each month.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.calculators.missedCall}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-lg text-sm transition-colors inline-flex items-center gap-2"
          >
            <span>Calculate My Missed-Call Opportunity</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenApply}
            className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-semibold transition-colors"
          >
            Apply for an Implementation
          </button>
        </div>
      </section>
    </div>
  );
}
