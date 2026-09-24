import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenApply: () => void;
}

export function Navbar({ currentPath, onNavigate, onOpenApply }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', path: '/' },
    { label: 'AI Employees', path: '/ai-employees' },
    { label: 'Tools', path: '/tools' },
    { label: 'Build Log', path: '/build-log' },
    { label: 'Work With Me', path: '/work-with-me' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLinkActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-amber-400 group-hover:border-amber-400/60 transition-colors">
            NC
          </div>
          <div>
            <div className="font-extrabold tracking-tight text-zinc-100 text-sm sm:text-base font-mono group-hover:text-amber-300 transition-colors">
              {siteConfig.brand.name}
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 font-mono tracking-tight hidden sm:block">
              {siteConfig.brand.tagline}
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors rounded-md ${
                  active
                    ? 'text-amber-400 bg-zinc-900 border border-zinc-800 font-medium'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors px-2.5 py-1.5"
          >
            Contact Wilson
          </a>
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg text-xs font-semibold transition-colors shadow-sm"
          >
            <span>Apply for Implementation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg border border-zinc-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-3 pb-5 space-y-2">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`block w-full text-left px-3 py-2 text-sm font-mono rounded-lg transition-colors ${
                    active
                      ? 'text-amber-400 bg-zinc-900 border border-zinc-800 font-medium'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-2.5 bg-amber-500 text-zinc-950 rounded-lg text-xs font-semibold text-center"
            >
              Apply for Implementation
            </button>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="w-full py-2 border border-zinc-800 text-zinc-300 rounded-lg text-xs font-mono text-center hover:bg-zinc-900"
            >
              Contact Wilson ({siteConfig.author.email})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
