import { ArrowRight, ExternalLink, Activity, Terminal, ShieldAlert, Cpu, Wrench } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { aiEmployees } from '../data/aiEmployees';
import { toolsData } from '../data/tools';
import { buildLogsData } from '../data/buildLogs';
import { AiEmployee, BuildLog } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectEmployee: (emp: AiEmployee) => void;
  onSelectBuildLog: (log: BuildLog) => void;
  onOpenApply: () => void;
}

export function HomePage({
  onNavigate,
  onSelectEmployee,
  onSelectBuildLog,
  onOpenApply,
}: HomePageProps) {
  const testingEmployees = aiEmployees.filter((e) => e.status === 'Testing');
  const recentLogs = buildLogsData.slice(0, 3);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-12 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Independent Build Laboratory</span>
            <span className="text-zinc-600">·</span>
            <span>By Wilson</span>
            <span className="text-zinc-600">·</span>
            <span className="text-amber-400/90">2 Systems in Live Testing</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-100 font-mono">
            {siteConfig.brand.name}
            <span className="block text-2xl sm:text-4xl font-normal text-amber-400 mt-2 font-sans tracking-normal">
              {siteConfig.brand.tagline}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            I research, build, test and document practical AI employees and business tools — then take the ones that work to real businesses.
          </p>

          {/* Quick Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('/ai-employees')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Explore AI Employees</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/work-with-me')}
              className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-lg text-sm font-medium transition-colors"
            >
              View Commercial Implementations
            </button>
            <button
              onClick={() => onNavigate('/tools')}
              className="px-4 py-2.5 border border-zinc-800/80 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg text-sm font-mono transition-colors"
            >
              Independent Tools
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: What No Code Vibe Is */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <span>01</span>
          <span className="text-zinc-600">/</span>
          <span>Positioning</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
          What No Code Vibe Is
        </h2>
        <div className="p-6 sm:p-8 bg-zinc-900/50 border border-zinc-800/90 rounded-xl space-y-5">
          <p className="text-zinc-200 text-base leading-relaxed">
            No Code Vibe is an independent build lab documenting practical AI employees, business tools, automation systems, and AI-search experiments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-400 pt-2 border-t border-zinc-800/60">
            <div className="space-y-1.5">
              <div className="font-semibold text-zinc-200 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>Not a Generic Agency</span>
              </div>
              <p>
                We do not sell vaporware retainers, repackaged generic chatbots, or vague "AI transformation" slide decks. Every system is built and benchmarked hands-on.
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="font-semibold text-zinc-200 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-emerald-400" />
                <span>Transparent & Commercially Real</span>
              </div>
              <p>
                We document unit costs ($/run), what breaks in real telephony/CRM setups, latency limits, and the exact criteria required before a system is deployed to paying businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Philosophy Lifecycle */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <span>02</span>
          <span className="text-zinc-600">/</span>
          <span>Methodology</span>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
            RESEARCH → BUILD → TEST → DOCUMENT → SELL
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Every AI employee and tool adheres to this linear, transparent validation pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            {
              step: '01. RESEARCH',
              desc: 'Audit real operational bottlenecks, missed call logs, and customer database decay curves.',
              tag: 'Problem Validation',
            },
            {
              step: '02. BUILD',
              desc: 'Engineer deterministic finite-state webhooks, strict function calling, and CRM synchronizers.',
              tag: 'Architecture',
            },
            {
              step: '03. TEST',
              desc: 'Deploy in shadow mode on real client lines to observe edge cases and dropped conversations.',
              tag: 'Empirical Rigor',
            },
            {
              step: '04. DOCUMENT',
              desc: 'Publish exact unit costs, failures, prompt adjustments, and architecture trade-offs publicly.',
              tag: 'Public Log',
            },
            {
              step: '05. SELL',
              desc: 'Package only the hardened, verified workflows as commercial implementations for businesses.',
              tag: 'Commercial Offer',
            },
          ].map((stage, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/80 space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-amber-400">{stage.step}</div>
                <div className="text-[11px] text-zinc-400 font-mono mt-0.5">{stage.tag}</div>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Current AI Employee Builds */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <span>03</span>
              <span className="text-zinc-600">/</span>
              <span>Laboratory Index</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono mt-1">
              Current AI Employee Builds
            </h2>
            <p className="text-sm text-zinc-400 mt-0.5">
              Live status across the laboratory. Never claiming production readiness unless documented.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/ai-employees')}
            className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 shrink-0"
          >
            <span>View All (7)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {aiEmployees.slice(0, 3).map((emp) => (
            <div
              key={emp.id}
              className="p-5 sm:p-6 bg-zinc-900/60 border border-zinc-800/90 rounded-xl space-y-4 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-zinc-100 font-mono">{emp.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{emp.status}</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-zinc-400">
                  {emp.statusDetails.split('.')[0]}.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-mono text-zinc-400 uppercase tracking-wider text-[10px] block mb-1">
                    Problem
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{emp.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-zinc-400 uppercase tracking-wider text-[10px] block mb-1">
                    What It Does
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{emp.whatItDoes}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectEmployee(emp)}
                  className="text-xs font-mono text-zinc-200 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>View Build Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {emp.relatedOfferRoute && (
                  <button
                    onClick={() => onNavigate(emp.relatedOfferRoute!)}
                    className="text-xs font-mono text-amber-400/90 hover:text-amber-300 transition-colors"
                  >
                    View Commercial Offer →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Independent Tools */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <span>04</span>
              <span className="text-zinc-600">/</span>
              <span>Standalone Calculators</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono mt-1">
              Independent Tools
            </h2>
            <p className="text-sm text-zinc-400 mt-0.5">
              Dedicated Vercel tools to quantify revenue opportunities. Zero embed bloat, fast & standalone.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/tools')}
            className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 shrink-0"
          >
            <span>All Tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="p-5 sm:p-6 bg-zinc-900/60 border border-zinc-800/90 rounded-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{tool.status}</span>
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">Standalone App</span>
                </div>
                <h3 className="text-base font-bold text-zinc-100 font-mono">{tool.name}</h3>
                <div className="text-xs space-y-2 text-zinc-300">
                  <div>
                    <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider block">
                      Problem Measured:
                    </span>
                    <p className="mt-0.5">{tool.problemMeasured}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider block">
                      Target User:
                    </span>
                    <p className="mt-0.5 text-zinc-400">{tool.targetUser}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                <a
                  href={tool.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded text-xs font-mono transition-colors"
                >
                  <span>Open Tool</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
                <button
                  onClick={() => onNavigate(tool.relatedOfferRoute)}
                  className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Offer Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Latest Build Logs */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <span>05</span>
              <span className="text-zinc-600">/</span>
              <span>Laboratory Documentation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono mt-1">
              Latest Build Logs
            </h2>
            <p className="text-sm text-zinc-400 mt-0.5">
              Honest field notes: unit economics, webhook race conditions, and test results.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/build-log')}
            className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 shrink-0"
          >
            <span>View All Logs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          {recentLogs.map((log) => (
            <article
              key={log.id}
              className="p-5 sm:p-6 bg-zinc-900/50 border border-zinc-800/80 rounded-xl space-y-3 hover:border-zinc-700 transition-colors cursor-pointer"
              onClick={() => onSelectBuildLog(log)}
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono">
                <span className="text-zinc-300 font-semibold">{log.author}</span>
                <span>·</span>
                <span>{log.date}</span>
                <span>·</span>
                <span>{log.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                {log.title}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                {log.summary}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 inline-flex items-center gap-1">
                  <span>Read full breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-zinc-400 text-[11px]">Cost: {log.cost.split('(')[0]}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 6: Work With Me */}
      <section className="max-w-4xl mx-auto space-y-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <span>06</span>
          <span className="text-zinc-600">/</span>
          <span>Commercial Systems</span>
        </div>
        <div className="p-6 sm:p-8 bg-zinc-900/70 border border-zinc-800 rounded-xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
              Work With Me: Practical Commercial Deployments
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
              We take the tested, hardened AI employee architectures and implement them custom inside established businesses with real lead volume.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400">Offer 01</div>
                <h3 className="font-bold text-zinc-100 text-base mt-1">AI Revenue Recovery</h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Missed-call recovery, lead follow-up, qualification, booking/escalation, human handoff, and revenue tracking.
                </p>
                <div className="text-xs font-mono text-zinc-300 mt-2">
                  {siteConfig.pricing.implementationFee} implementation ({siteConfig.pricing.depositToStart} start / {siteConfig.pricing.launchPayment} launch)
                </div>
              </div>
              <button
                onClick={() => onNavigate('/work-with-me/ai-revenue-recovery')}
                className="mt-3 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors text-left inline-flex items-center gap-1"
              >
                <span>Read Offer Specification</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400">Offer 02</div>
                <h3 className="font-bold text-zinc-100 text-base mt-1">AI Client Revenue Recovery</h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Database analysis, segmentation, dormant customer identification, personalized reactivation, AI follow-up, and booking.
                </p>
                <div className="text-xs font-mono text-zinc-300 mt-2">
                  {siteConfig.pricing.implementationFee} implementation ({siteConfig.pricing.depositToStart} start / {siteConfig.pricing.launchPayment} launch)
                </div>
              </div>
              <button
                onClick={() => onNavigate('/work-with-me/ai-client-revenue-recovery')}
                className="mt-3 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors text-left inline-flex items-center gap-1"
              >
                <span>Read Offer Specification</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              <span className="text-zinc-300 font-semibold block">Engineering Standard:</span>
              <span>We do not promise guaranteed revenue. We engineer verifiable systems that capture real demand.</span>
            </div>
            <button
              onClick={onOpenApply}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg text-xs font-semibold shrink-0 transition-colors"
            >
              Apply for an Implementation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
