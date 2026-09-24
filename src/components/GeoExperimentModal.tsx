import { useState } from 'react';
import { X, Check, Copy } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface GeoExperimentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GeoExperimentModal({ isOpen, onClose }: GeoExperimentModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'schema' | 'robots' | 'sitemap'>('architecture');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: siteConfig.brand.name,
        url: siteConfig.brand.siteUrl,
        founder: {
          '@type': 'Person',
          name: siteConfig.author.name,
          jobTitle: siteConfig.author.role,
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Missed Call Revenue Calculator',
        applicationCategory: 'BusinessApplication',
        url: siteConfig.calculators.missedCall,
      },
      {
        '@type': 'TechArticle',
        headline: 'Testing AI Revenue Recovery on 2 Home Service Contractors',
        author: {
          '@type': 'Person',
          name: 'Wilson',
        },
      },
    ],
  };

  const robotsTxt = `# No Code Vibe - Robots Configuration
User-agent: *
Allow: /

# Canonical Sitemap
Sitemap: ${siteConfig.brand.siteUrl}/sitemap.xml
`;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteConfig.brand.siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteConfig.brand.siteUrl}/ai-employees</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteConfig.brand.siteUrl}/tools</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteConfig.brand.siteUrl}/build-log</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteConfig.brand.siteUrl}/work-with-me</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteConfig.brand.siteUrl}/work-with-me/ai-revenue-recovery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${siteConfig.brand.siteUrl}/work-with-me/ai-client-revenue-recovery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider font-mono text-emerald-400">Future Experiment Prep</span>
          <h2 className="text-2xl font-bold text-zinc-100 mt-1">AI Search & GEO Architecture Foundation</h2>
          <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
            This site is architected from the baseline to be technically friendly to upcoming generative engine optimization (GEO) and AI-search experiments. No premature ranking claims — just clean semantic foundations.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-zinc-800 gap-6 text-xs font-mono mb-6">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 transition-colors border-b-2 -mb-px ${
              activeTab === 'architecture'
                ? 'border-emerald-400 text-emerald-300 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            01. Baseline Checklist
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`pb-2.5 transition-colors border-b-2 -mb-px ${
              activeTab === 'schema'
                ? 'border-emerald-400 text-emerald-300 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            02. JSON-LD Schemas
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`pb-2.5 transition-colors border-b-2 -mb-px ${
              activeTab === 'robots'
                ? 'border-emerald-400 text-emerald-300 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            03. robots.txt
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`pb-2.5 transition-colors border-b-2 -mb-px ${
              activeTab === 'sitemap'
                ? 'border-emerald-400 text-emerald-300 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            04. sitemap.xml
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'architecture' && (
          <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
            <div className="p-4 rounded-lg bg-zinc-950/70 border border-zinc-800">
              <div className="font-semibold text-zinc-100 text-sm mb-2">Upcoming Public Build Log:</div>
              <p className="text-zinc-400 italic">
                “I made No Code Vibe AI-search ready — here is what changed.”
              </p>
              <p className="mt-2 text-zinc-400">
                To test how LLM search agents (SearchGPT, Perplexity, Gemini Grounding) cite technical builders, the site has zero fluff, zero synthetic spam, and first-hand empirical build data.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-100">Strict Semantic HTML Hierarchy:</span>
                  <span className="text-zinc-400 block">Single H1 per route, logical H2/H3 breakdown, article tags for build logs, clean landmark elements.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-100">Dynamic Route Metadata & OpenGraph:</span>
                  <span className="text-zinc-400 block">Unique descriptive page titles, canonical tags, and OpenGraph social descriptors injected per route.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-100">Entity Grounding & Author Attribution:</span>
                  <span className="text-zinc-400 block">Identifiable author person entity (Wilson), verified organization schema, and first-hand build attribution.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-100">SoftwareApplication & TechArticle Types:</span>
                  <span className="text-zinc-400 block">Standalone tool cards and build logs mapped to Schema.org standards for crawler parsing.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Active JSON-LD Graph Template</span>
              <button
                onClick={() => copyToClipboard(JSON.stringify(sampleSchema, null, 2))}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>
            <pre className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-[11px] font-mono text-zinc-300 overflow-x-auto max-h-72">
              {JSON.stringify(sampleSchema, null, 2)}
            </pre>
          </div>
        )}

        {activeTab === 'robots' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>robots.txt (AI Crawlers Allowed)</span>
              <button
                onClick={() => copyToClipboard(robotsTxt)}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300 overflow-x-auto">
              {robotsTxt}
            </pre>
          </div>
        )}

        {activeTab === 'sitemap' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>sitemap.xml (Public Routes)</span>
              <button
                onClick={() => copyToClipboard(sitemapXml)}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-[11px] font-mono text-zinc-300 overflow-x-auto max-h-72">
              {sitemapXml}
            </pre>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
          <span>Technical experiment status: Pre-launch instrumentation</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
