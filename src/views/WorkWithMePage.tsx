import { ArrowRight, CheckCircle2, ShieldCheck, Mail, ArrowUpRight, DollarSign, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface WorkWithMePageProps {
  onNavigate: (path: string) => void;
  onOpenApply: (offer?: 'ai-revenue-recovery' | 'ai-client-revenue-recovery' | 'general') => void;
}

export function WorkWithMePage({ onNavigate, onOpenApply }: WorkWithMePageProps) {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <span>Commercial Implementations</span>
          <span className="text-zinc-600">/</span>
          <span>By Wilson</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 font-mono">
          Work With Me
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
          We implement hardened, battle-tested AI employee architectures directly into your existing business operations. No generic SaaS dashboards or vaporware retainers.
        </p>

        {/* Engineering Standard Notice */}
        <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg text-xs text-zinc-300 space-y-2">
          <div className="flex items-center gap-2 font-mono text-amber-400 font-semibold">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Honest Commercial Commitment</span>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            We do not promise guaranteed revenue. We engineer deterministic capture systems that prevent inbound lead leakage and systematically reactivate dormant buyers. Your conversion numbers depend on your pricing, market demand, and service reputation.
          </p>
        </div>
      </section>

      {/* Commercial Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Offer 1: AI Revenue Recovery */}
        <div className="p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800/90 rounded-xl space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-amber-400 font-semibold">SYSTEM 01</span>
              <span className="text-zinc-400">Inbound Operations</span>
            </div>

            <h2 className="text-2xl font-bold text-zinc-100 font-mono">
              AI Revenue Recovery
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Stop losing high-intent callers to the competitor down the street. We capture missed calls in seconds, qualify job urgency, book appointments, and escalate high-value jobs to your dispatchers.
            </p>

            <div className="pt-2 border-t border-zinc-800/60 space-y-2 text-xs">
              <span className="font-mono text-zinc-400 uppercase tracking-wider text-[11px] block">
                Included Workflows:
              </span>
              <ul className="space-y-1.5 text-zinc-300 font-mono">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Missed-call webhook interception & instant SMS trigger</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Multi-turn lead follow-up & intent qualification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Automated calendar booking & schedule coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Human handoff with full transcript in your CRM</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Closed-loop revenue tracking on recovered jobs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/60 space-y-4">
            <div className="text-xs font-mono text-zinc-300">
              <span className="text-zinc-400 block text-[11px]">Investment:</span>
              <span className="text-sm font-bold text-zinc-100">{siteConfig.pricing.implementationFee} implementation</span>
              <span className="text-zinc-400 block text-[11px] mt-0.5">{siteConfig.pricing.terms}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => onNavigate('/work-with-me/ai-revenue-recovery')}
                className="flex-1 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Read Full Offer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenApply('ai-revenue-recovery')}
                className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono rounded-lg transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Offer 2: AI Client Revenue Recovery */}
        <div className="p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800/90 rounded-xl space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-amber-400 font-semibold">SYSTEM 02</span>
              <span className="text-zinc-400">Database Monetization</span>
            </div>

            <h2 className="text-2xl font-bold text-zinc-100 font-mono">
              AI Client Revenue Recovery
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Unlock the hidden value sitting in your past customer database. We segment dormant contacts by service history and launch safe, 1-to-1 conversational outreach that books jobs without spamming.
            </p>

            <div className="pt-2 border-t border-zinc-800/60 space-y-2 text-xs">
              <span className="font-mono text-zinc-400 uppercase tracking-wider text-[11px] block">
                Included Workflows:
              </span>
              <ul className="space-y-1.5 text-zinc-300 font-mono">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Customer database analysis & hygiene clean-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Recency-Frequency-Monetary (RFM) segmentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Dormant customer identification & exclusion rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Contextual 1-to-1 personalized reactivation & AI follow-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Immediate human staff handoff on replies & revenue reporting</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/60 space-y-4">
            <div className="text-xs font-mono text-zinc-300">
              <span className="text-zinc-400 block text-[11px]">Investment:</span>
              <span className="text-sm font-bold text-zinc-100">{siteConfig.pricing.implementationFee} implementation</span>
              <span className="text-zinc-400 block text-[11px] mt-0.5">{siteConfig.pricing.terms}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => onNavigate('/work-with-me/ai-client-revenue-recovery')}
                className="flex-1 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Read Full Offer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenApply('ai-client-revenue-recovery')}
                className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono rounded-lg transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Process Roadmap */}
      <section className="p-6 sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
            Phase Breakdown
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 font-mono">
            How An Implementation Works
          </h2>
          <p className="text-xs text-zinc-400">
            A straightforward 3-week sprint designed to get you running safely without disrupting current operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-lg space-y-2">
            <div className="text-xs font-mono text-amber-400 font-bold">Week 1: Audit & Discovery</div>
            <div className="text-xs text-zinc-300">
              $1,000 project deposit. We inspect your phone routing, CRM webhooks, and past job logs. We map out tone guidelines, edge cases, and human escalation rules.
            </div>
          </div>

          <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-lg space-y-2">
            <div className="text-xs font-mono text-amber-400 font-bold">Week 2: Build & Shadow Mode</div>
            <div className="text-xs text-zinc-300">
              We wire the webhook state machine and run shadow simulations on test leads. We test objection handling and verify zero hallucination guardrails.
            </div>
          </div>

          <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-lg space-y-2">
            <div className="text-xs font-mono text-amber-400 font-bold">Week 3: Launch & Training</div>
            <div className="text-xs text-zinc-300">
              $4,000 launch milestone. We go live on real traffic with staff alerts enabled. We monitor every transcript for 14 days and tune edge cases.
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            Have questions before applying? Email Wilson directly.
          </div>
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs font-mono rounded-lg transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Wilson</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </section>
    </div>
  );
}
