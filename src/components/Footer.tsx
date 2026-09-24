import { Mail, ArrowUpRight, Radio, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenGeoModal: () => void;
  onOpenApply: () => void;
}

export function Footer({ onNavigate, onOpenGeoModal, onOpenApply }: FooterProps) {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 mt-20 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono font-bold text-zinc-100 text-lg tracking-tight">
                {siteConfig.brand.name}
              </span>
              <span className="text-zinc-600 font-mono text-xs">/</span>
              <span className="text-amber-400 font-mono text-xs">{siteConfig.brand.tagline}</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
              {siteConfig.brand.positioning}
            </p>
            <div className="pt-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Core Philosophy:
              </div>
              <div className="text-xs font-mono text-zinc-200 mt-1">
                RESEARCH → BUILD → TEST → DOCUMENT → SELL
              </div>
            </div>
            <div className="pt-2 flex items-center gap-3 text-xs font-mono">
              <button
                onClick={onOpenGeoModal}
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4 decoration-emerald-500/30"
              >
                <Radio className="w-3.5 h-3.5" />
                <span>GEO & AI-Search Architecture Inspector</span>
              </button>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Laboratory
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-zinc-100 transition-colors text-left"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/ai-employees')}
                  className="hover:text-zinc-100 transition-colors text-left"
                >
                  AI Employees
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tools')}
                  className="hover:text-zinc-100 transition-colors text-left"
                >
                  Independent Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/build-log')}
                  className="hover:text-zinc-100 transition-colors text-left"
                >
                  Build Logs
                </button>
              </li>
            </ul>
          </div>

          {/* Commercial Offers */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Commercial Systems
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/work-with-me')}
                  className="hover:text-zinc-100 transition-colors text-left"
                >
                  Work With Me Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/work-with-me/ai-revenue-recovery')}
                  className="hover:text-zinc-100 transition-colors text-left"
                >
                  AI Revenue Recovery ($5k)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/work-with-me/ai-client-revenue-recovery')}
                  className="hover:text-zinc-100 transition-colors text-left"
                >
                  AI Client Revenue Recovery ($5k)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenApply}
                  className="text-amber-400 hover:text-amber-300 transition-colors text-left font-medium inline-flex items-center gap-1"
                >
                  <span>Apply for an Implementation</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Builder Contact */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Builder Contact
            </div>
            <div className="text-xs space-y-1.5">
              <div className="text-zinc-300 font-medium">{siteConfig.author.name}</div>
              <div className="text-[11px] text-zinc-400">{siteConfig.author.role}</div>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors pt-1 font-mono text-[11px]"
              >
                <Mail className="w-3 h-3" />
                <span>{siteConfig.author.email}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-1.5 text-xs">
              <a
                href={siteConfig.calculators.missedCall}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-200 text-[11px] font-mono transition-colors"
              >
                <span>Missed Call Calc</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={siteConfig.calculators.reactivation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-200 text-[11px] font-mono transition-colors"
              >
                <span>Reactivation Calc</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800/60 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.brand.name}. All builds and laboratory documentation released in public.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-400">No guaranteed revenue claims</span>
            <span>·</span>
            <span>Real systems only</span>
            <span>·</span>
            <button
              onClick={onOpenGeoModal}
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              AI-Search Ready Schema
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
