import { useState } from 'react';
import { ArrowRight, ExternalLink, ShieldCheck, Cpu, Code2, AlertTriangle, Layers } from 'lucide-react';
import { aiEmployees } from '../data/aiEmployees';
import { AiEmployee } from '../types';

interface AiEmployeesPageProps {
  onNavigate: (path: string) => void;
  onSelectEmployee: (emp: AiEmployee) => void;
}

export function AiEmployeesPage({ onNavigate, onSelectEmployee }: AiEmployeesPageProps) {
  const [filter, setFilter] = useState<'All' | 'Testing' | 'Researching / Building' | 'Researching'>('All');

  const filtered = filter === 'All' ? aiEmployees : aiEmployees.filter((e) => e.status === filter);

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <span>Laboratory Index</span>
          <span className="text-zinc-600">/</span>
          <span>7 Active Projects</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 font-mono">
          AI Employees in Public
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed max-w-2xl">
          An ongoing index of practical AI employees researched, architected, and stress-tested in the No Code Vibe laboratory.
        </p>

        {/* Builder Rigor Notice */}
        <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg text-xs text-zinc-300 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-zinc-200">Laboratory Standard: </span>
            <span className="text-zinc-400">
              We never imply production readiness unless documented with real empirical test data. Systems marked as "Testing" or "Researching" are actively undergoing edge-case evaluation.
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs (Interactive controls) */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-zinc-800/80 pb-4">
        {(['All', 'Testing', 'Researching / Building', 'Researching'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === tab
                ? 'bg-zinc-100 text-zinc-950 font-semibold'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            {tab} {tab === 'All' ? `(${aiEmployees.length})` : `(${aiEmployees.filter((e) => e.status === tab).length})`}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filtered.map((emp) => {
          const isTesting = emp.status === 'Testing';
          const isBuilding = emp.status === 'Researching / Building';

          return (
            <article
              key={emp.id}
              className="p-6 sm:p-7 bg-zinc-900/60 border border-zinc-800/90 rounded-xl space-y-6 hover:border-zinc-700 transition-colors"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-zinc-100 font-mono">{emp.name}</h2>
                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isTesting
                            ? 'bg-amber-400 animate-pulse'
                            : isBuilding
                            ? 'bg-blue-400'
                            : 'bg-zinc-500'
                        }`}
                      />
                      <span
                        className={
                          isTesting
                            ? 'text-amber-400 font-medium'
                            : isBuilding
                            ? 'text-blue-400 font-medium'
                            : 'text-zinc-400'
                        }
                      >
                        {emp.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-1">
                    {emp.statusDetails}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onSelectEmployee(emp)}
                    className="px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View Build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {emp.relatedOfferRoute && (
                    <button
                      onClick={() => onNavigate(emp.relatedOfferRoute!)}
                      className="px-3.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono rounded-lg transition-colors inline-flex items-center gap-1"
                    >
                      <span>Commercial Offer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Problem & What It Does */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-zinc-800/60">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    The Problem
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {emp.problem}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    What It Does
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {emp.whatItDoes}
                  </p>
                </div>
              </div>

              {/* Technical Architecture bullets */}
              <div className="pt-2 border-t border-zinc-800/40 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Technical Architecture Components:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  {emp.technicalArchitecture.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-600">↳</span>
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Milestone footer */}
              <div className="pt-3 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <div>
                  <span className="text-zinc-400">Active Milestone: </span>
                  <span className="text-zinc-300">{emp.currentMilestone}</span>
                </div>
                {emp.buildLogId && (
                  <button
                    onClick={() => onNavigate('/build-log')}
                    className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 text-left"
                  >
                    <span>Read related build log</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
