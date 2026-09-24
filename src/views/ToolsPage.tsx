import { ExternalLink, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { toolsData } from '../data/tools';
import { siteConfig } from '../config/siteConfig';

interface ToolsPageProps {
  onNavigate: (path: string) => void;
}

export function ToolsPage({ onNavigate }: ToolsPageProps) {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <span>Standalone Utilities</span>
          <span className="text-zinc-600">/</span>
          <span>External Deployments</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 font-mono">
          Independent Revenue Tools
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed max-w-2xl">
          Stand-alone mathematical modeling tools built to quantify revenue leaks before investing in automation.
        </p>

        {/* Architectural Note */}
        <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg text-xs text-zinc-300 space-y-2">
          <div className="flex items-center gap-2 font-mono text-amber-400 font-semibold">
            <Cpu className="w-4 h-4 shrink-0" />
            <span>Decoupled Architecture: Independent Vercel Projects</span>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            These calculators are not embedded into the main website codebase. They are deployed as independent, lightweight Vercel edge applications. This ensures zero script bloat, instant mobile load times, and clean mathematical transparency without sales popups or mandatory sign-ups.
          </p>
        </div>
      </section>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toolsData.map((tool) => (
          <div
            key={tool.id}
            className="p-6 sm:p-7 bg-zinc-900/60 border border-zinc-800/90 rounded-xl space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{tool.status}</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">Standalone App</span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zinc-100 font-mono">{tool.name}</h2>
                <p className="text-xs text-zinc-400 font-mono mt-1">{tool.notes}</p>
              </div>

              <div className="space-y-3 pt-2 border-t border-zinc-800/60 text-xs text-zinc-300">
                <div>
                  <span className="font-mono text-zinc-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    Problem Measured:
                  </span>
                  <p className="leading-relaxed text-zinc-200">{tool.problemMeasured}</p>
                </div>

                <div>
                  <span className="font-mono text-zinc-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    Target User:
                  </span>
                  <p className="leading-relaxed text-zinc-400">{tool.targetUser}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 space-y-3">
              <a
                href={tool.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs rounded-lg transition-colors shadow-sm"
              >
                <span>Open Tool</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-1">
                <span>Direct Vercel URL</span>
                <button
                  onClick={() => onNavigate(tool.relatedOfferRoute)}
                  className="hover:text-amber-400 text-zinc-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Related Implementation</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy note */}
      <section className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl space-y-2 text-xs text-zinc-400">
        <div className="text-zinc-200 font-mono font-semibold uppercase tracking-wider text-[11px]">
          Why do we keep tools independent?
        </div>
        <p className="leading-relaxed">
          When calculators are embedded into agency marketing pages, they get weighed down by analytics scripts, tracking cookies, and high-pressure lead capture gates. By maintaining separate Vercel deployments at configurable endpoints, clients and partners can freely calculate their exact numbers without giving up their phone number or email.
        </p>
      </section>
    </div>
  );
}
