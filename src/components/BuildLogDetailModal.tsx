import { X, ExternalLink, ArrowRight, Play, AlertTriangle, CheckCircle2, DollarSign, Wrench, Shield, Repeat } from 'lucide-react';
import { BuildLog } from '../types';

interface BuildLogDetailModalProps {
  log: BuildLog | null;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export function BuildLogDetailModal({ log, onClose, onNavigate }: BuildLogDetailModalProps) {
  if (!log) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto space-y-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="space-y-3 border-b border-zinc-800/80 pb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-amber-400 font-semibold uppercase tracking-wider">Build Log</span>
            <span>·</span>
            <span className="text-zinc-200">{log.author}</span>
            <span>·</span>
            <span>{log.date}</span>
            <span>·</span>
            <span>{log.readTime}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
            {log.title}
          </h2>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {log.summary}
          </p>
        </div>

        {/* Video / Screen Recording Container */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/90 p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700/80 flex items-center justify-center mx-auto text-amber-400 shadow-inner">
            <Play className="w-5 h-5 ml-0.5" />
          </div>
          <div>
            <div className="text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
              Laboratory Screen Recording & Telephony Traces
            </div>
            <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto">
              {log.videoPlaceholderText || 'Walkthrough recording demonstrating webhook payload lifecycle and edge cases.'}
            </p>
          </div>
        </div>

        {/* Detailed Sections: Problem & Research */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              01. The Problem
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
              {log.problem}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              02. Research & Discovery
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
              {log.research}
            </p>
          </div>
        </div>

        {/* Build & Architecture */}
        <div className="p-5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
            03. The Build & Architecture
          </span>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
            {log.build}
          </p>

          <div className="pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
              Tools Used:
            </span>
            <div className="flex flex-wrap gap-2">
              {log.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cost & What Broke */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              <DollarSign className="w-3.5 h-3.5" />
              <span>04. Unit Economics & Cost</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {log.cost}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400/90 font-semibold">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>05. What Broke & Failed</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
              {log.whatBroke}
            </p>
          </div>
        </div>

        {/* Testing & Empirical Result */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              06. Field Testing
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {log.testing}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>07. Measured Result</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {log.result}
            </p>
          </div>
        </div>

        {/* Would I Build It Again? */}
        <div className="p-5 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
            <Repeat className="w-3.5 h-3.5" />
            <span>08. Would I Build It Again?</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {log.wouldIBuildItAgain}
          </p>
        </div>

        {/* Related Tool & Offer */}
        <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            {log.relatedTool && (
              <a
                href={log.relatedTool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded transition-colors"
              >
                <span>Related Tool: {log.relatedTool.name}</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </a>
            )}
            {log.relatedOffer && (
              <button
                onClick={() => {
                  onClose();
                  onNavigate(log.relatedOffer!.route);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold rounded transition-colors"
              >
                <span>Related Offer: {log.relatedOffer.title}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-200"
          >
            Close Log
          </button>
        </div>
      </div>
    </div>
  );
}
