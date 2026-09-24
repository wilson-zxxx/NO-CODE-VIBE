import { X, ArrowRight, ExternalLink, Terminal, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { AiEmployee } from '../types';
import { siteConfig } from '../config/siteConfig';

interface EmployeeDetailModalProps {
  employee: AiEmployee | null;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onOpenApply: () => void;
}

export function EmployeeDetailModal({
  employee,
  onClose,
  onNavigate,
  onOpenApply,
}: EmployeeDetailModalProps) {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Status */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <span>Laboratory Spec</span>
            <span>·</span>
            <span className="text-amber-400">{employee.status}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
            {employee.name}
          </h2>
          <p className="text-xs text-zinc-400 font-mono">
            {employee.statusDetails}
          </p>
        </div>

        {/* Problem Breakdown */}
        <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-lg space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
            Target Problem
          </span>
          <p className="text-sm text-zinc-200 leading-relaxed">
            {employee.problem}
          </p>
        </div>

        {/* What It Does */}
        <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-lg space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
            Automated Capability
          </span>
          <p className="text-sm text-zinc-200 leading-relaxed">
            {employee.whatItDoes}
          </p>
        </div>

        {/* Technical Architecture */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
            Technical Stack & State Orchestration
          </span>
          <div className="space-y-2">
            {employee.technicalArchitecture.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs font-mono text-zinc-300 p-2.5 rounded bg-zinc-950/40 border border-zinc-800/60"
              >
                <Terminal className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone */}
        <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 text-xs text-zinc-300 space-y-1">
          <div className="font-semibold text-amber-300 font-mono">Active Verification Milestone:</div>
          <div className="text-zinc-400 leading-relaxed">{employee.currentMilestone}</div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {employee.relatedOfferRoute && (
              <button
                onClick={() => {
                  onClose();
                  onNavigate(employee.relatedOfferRoute!);
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Commercial Offer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono rounded-lg transition-colors"
            >
              Inquire About Implementation
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-200"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
}
