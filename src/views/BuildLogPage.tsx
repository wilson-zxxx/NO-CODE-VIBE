import { useState } from 'react';
import { ArrowRight, ExternalLink, Play, DollarSign, Wrench, AlertTriangle, CheckCircle, Repeat } from 'lucide-react';
import { buildLogsData } from '../data/buildLogs';
import { BuildLog } from '../types';

interface BuildLogPageProps {
  onNavigate: (path: string) => void;
  onSelectBuildLog: (log: BuildLog) => void;
}

export function BuildLogPage({ onNavigate, onSelectBuildLog }: BuildLogPageProps) {
  const [selectedLog, setSelectedLog] = useState<BuildLog | null>(null);

  const openLog = (log: BuildLog) => {
    setSelectedLog(log);
    onSelectBuildLog(log);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <span>Laboratory Logs</span>
          <span className="text-zinc-600">/</span>
          <span>Technical Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 font-mono">
          Build Log & Failure Reports
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed max-w-2xl">
          Unfiltered engineering notes: architecture decisions, real API costs per run, webhook race conditions, test metrics, and what broke in production.
        </p>
      </section>

      {/* Build Log Cards */}
      <div className="space-y-6">
        {buildLogsData.map((log) => (
          <article
            key={log.id}
            className="p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800/90 rounded-xl space-y-6 hover:border-zinc-700 transition-colors cursor-pointer"
            onClick={() => openLog(log)}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/60 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-zinc-200 font-semibold">{log.author}</span>
                <span>·</span>
                <span>{log.date}</span>
                <span>·</span>
                <span>{log.readTime}</span>
              </div>
              <div className="text-xs font-mono text-amber-400/90">
                Cost: {log.cost.split('(')[0]}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 font-mono">
                {log.title}
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {log.summary}
              </p>
            </div>

            {/* Quick Teaser Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 space-y-1">
                <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider block">
                  Problem Addressed
                </span>
                <p className="text-zinc-300 line-clamp-3 leading-relaxed">
                  {log.problem}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 space-y-1">
                <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider block text-amber-400/90">
                  What Broke & Failed
                </span>
                <p className="text-zinc-300 line-clamp-3 leading-relaxed">
                  {log.whatBroke}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 space-y-1">
                <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider block text-emerald-400/90">
                  Empirical Result
                </span>
                <p className="text-zinc-300 line-clamp-3 leading-relaxed">
                  {log.result}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-zinc-400">Tools:</span>
                {log.toolsUsed.slice(0, 3).map((tool, idx) => (
                  <span key={idx} className="text-zinc-300">
                    {tool}
                    {idx < 2 && idx < log.toolsUsed.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>

              <span className="text-amber-400 font-medium inline-flex items-center gap-1.5 hover:text-amber-300">
                <span>View Full Build Notes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
