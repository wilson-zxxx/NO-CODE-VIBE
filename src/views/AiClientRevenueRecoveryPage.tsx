import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Database, Filter, UserCheck, MessageSquare, Calendar, BarChart3, AlertOctagon } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface AiClientRevenueRecoveryPageProps {
  onNavigate: (path: string) => void;
  onOpenApply: () => void;
}

export function AiClientRevenueRecoveryPage({
  onNavigate,
  onOpenApply,
}: AiClientRevenueRecoveryPageProps) {
  const workflowSteps = [
    {
      step: '01',
      title: 'Customer Database',
      desc: 'Ingest historical client records securely from your CRM or booking software with complete transaction timestamps.',
      icon: Database,
    },
    {
      step: '02',
      title: 'Segmentation',
      desc: 'Score records by recency, service history, and seasonality. Exclude active clients, recent inquiries, and unsubscribes.',
      icon: Filter,
    },
    {
      step: '03',
      title: 'Dormant Customers',
      desc: 'Isolate prime re-engagement candidates (typically 6–18 months inactive) grouped by service type or equipment category.',
      icon: UserCheck,
    },
    {
      step: '04',
      title: 'Personalized Outreach',
      desc: 'Generate unique, 1-to-1 conversational messages referencing past service details. Sent in safe, low-volume trickle batches.',
      icon: MessageSquare,
    },
    {
      step: '05',
      title: 'Human Handoff',
      desc: 'When a customer responds with interest or specific questions, your human team is alerted instantly with full context.',
      icon: UserCheck,
    },
    {
      step: '06',
      title: 'Booking & Revenue',
      desc: 'Confirm appointment in your calendar and measure realized cash flow generated strictly from previously dormant records.',
      icon: BarChart3,
    },
  ];

  const safetyGuardrails = [
    {
      title: 'Not Mass SMS Blasting',
      desc: 'We never blast 3,000 messages at once. We send in controlled trickle batches of 15–25 messages per hour to protect your carrier reputation and ensure staff can handle replies attentively.',
    },
    {
      title: 'No Clinical or Treatment Recommendations',
      desc: 'For clinics and wellness practices, all medical, symptom, or treatment questions immediately trigger a human routing alert: "Our clinical staff will review your file and call you directly."',
    },
    {
      title: 'Full Exclusion Lists & Opt-Outs',
      desc: 'Customers who have visited recently, filed a support complaint, or requested no contact are automatically excluded before any campaign triggers.',
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
        <span className="text-amber-400">AI Client Revenue Recovery</span>
      </div>

      {/* Hero Section */}
      <section className="space-y-6 max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
          Commercial Offer
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 font-mono leading-tight">
          Your Existing Customer Database May Be Worth More Than You Think.
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
          Most established businesses have thousands of past customers who simply drifted away without any bad experience. We engineer personalized, non-spam reactivation pipelines that generate repeat bookings without paying for new customer acquisition ads.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.calculators.reactivation}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-lg text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>Calculate My Reactivation Opportunity</span>
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

      {/* Safety & Compliance Rigor */}
      <section className="p-6 sm:p-7 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
          <AlertOctagon className="w-4 h-4 shrink-0" />
          <span>Operational Safety Standards</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {safetyGuardrails.map((rule, idx) => (
            <div key={idx} className="space-y-1.5 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
              <span className="font-semibold text-zinc-200 block font-mono">{rule.title}</span>
              <p className="text-zinc-400 leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Automated Architecture
          </div>
          <h2 className="text-2xl font-bold text-zinc-100 font-mono mt-1">
            The Reactivation Workflow
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Customer Database → Segmentation → Dormant Customers → Personalized Outreach → Human Handoff → Booking → Revenue Tracking
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
              Database sanitation, RFM scoring models, template approvals, campaign execution, and staff training.
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
              To start project. Credited toward total. Covers database hygiene audit, customer segmentation, and exclusion criteria.
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
              Due before launching first batch, after you review and approve sample messages and staff notification routes.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-zinc-400 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
          <span>
            Note: We do not promise guaranteed revenue. Past results vary based on customer satisfaction history, offer relevance, and local service pricing.
          </span>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="p-8 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 text-center space-y-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
          Model Your Database Value
        </h2>
        <p className="text-sm text-zinc-300 max-w-xl mx-auto">
          Test realistic reactivation scenarios using our standalone mathematical calculator before initiating an implementation.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.calculators.reactivation}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-lg text-sm transition-colors inline-flex items-center gap-2"
          >
            <span>Calculate My Reactivation Opportunity</span>
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
