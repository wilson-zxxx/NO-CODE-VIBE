/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SeoManager } from './components/SeoManager';
import { ApplyModal } from './components/ApplyModal';
import { GeoExperimentModal } from './components/GeoExperimentModal';
import { EmployeeDetailModal } from './components/EmployeeDetailModal';
import { BuildLogDetailModal } from './components/BuildLogDetailModal';

import { HomePage } from './views/HomePage';
import { AiEmployeesPage } from './views/AiEmployeesPage';
import { ToolsPage } from './views/ToolsPage';
import { BuildLogPage } from './views/BuildLogPage';
import { WorkWithMePage } from './views/WorkWithMePage';
import { AiRevenueRecoveryPage } from './views/AiRevenueRecoveryPage';
import { AiClientRevenueRecoveryPage } from './views/AiClientRevenueRecoveryPage';

import { AiEmployee, BuildLog } from './types';
import { buildLogsData } from './data/buildLogs';
import { aiEmployees } from './data/aiEmployees';

export default function App() {
  // Normalize current path from window.location
  const normalizePath = (path: string): string => {
    if (!path || path === '/') return '/';
    const clean = path.split('?')[0].split('#')[0];
    if (clean.length > 1 && clean.endsWith('/')) {
      return clean.slice(0, -1);
    }
    return clean || '/';
  };

  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    return normalizePath(window.location.pathname);
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyDefaultOffer, setApplyDefaultOffer] = useState<
    'ai-revenue-recovery' | 'ai-client-revenue-recovery' | 'general'
  >('general');
  const [geoModalOpen, setGeoModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<AiEmployee | null>(null);
  const [selectedBuildLog, setSelectedBuildLog] = useState<BuildLog | null>(null);

  // Sync with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    const target = normalizePath(path);
    if (target !== currentPath) {
      window.history.pushState({}, '', target);
      setCurrentPath(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenApply = (
    offer: 'ai-revenue-recovery' | 'ai-client-revenue-recovery' | 'general' = 'general'
  ) => {
    setApplyDefaultOffer(offer);
    setApplyModalOpen(true);
  };

  // Route router selector
  const renderCurrentView = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={navigateTo}
            onSelectEmployee={setSelectedEmployee}
            onSelectBuildLog={setSelectedBuildLog}
            onOpenApply={() => handleOpenApply('general')}
          />
        );
      case '/ai-employees':
        return (
          <AiEmployeesPage
            onNavigate={navigateTo}
            onSelectEmployee={setSelectedEmployee}
          />
        );
      case '/tools':
        return <ToolsPage onNavigate={navigateTo} />;
      case '/build-log':
        return (
          <BuildLogPage
            onNavigate={navigateTo}
            onSelectBuildLog={setSelectedBuildLog}
          />
        );
      case '/work-with-me':
        return (
          <WorkWithMePage
            onNavigate={navigateTo}
            onOpenApply={handleOpenApply}
          />
        );
      case '/work-with-me/ai-revenue-recovery':
        return (
          <AiRevenueRecoveryPage
            onNavigate={navigateTo}
            onOpenApply={() => handleOpenApply('ai-revenue-recovery')}
          />
        );
      case '/work-with-me/ai-client-revenue-recovery':
        return (
          <AiClientRevenueRecoveryPage
            onNavigate={navigateTo}
            onOpenApply={() => handleOpenApply('ai-client-revenue-recovery')}
          />
        );
      default:
        // Graceful fallback for unknown sub-paths
        return (
          <div className="py-20 text-center space-y-4">
            <h1 className="text-3xl font-mono font-bold text-zinc-100">404 - Laboratory Page Not Found</h1>
            <p className="text-sm text-zinc-400 font-mono">The requested route does not exist in the No Code Vibe index.</p>
            <button
              onClick={() => navigateTo('/')}
              className="px-4 py-2 bg-amber-500 text-zinc-950 font-semibold text-xs rounded-lg font-mono"
            >
              Return to Overview
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Dynamic SEO, OpenGraph and Schema.org JSON-LD manager */}
      <SeoManager currentPath={currentPath} />

      {/* Primary Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenApply={() => handleOpenApply('general')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenGeoModal={() => setGeoModalOpen(true)}
        onOpenApply={() => handleOpenApply('general')}
      />

      {/* Modals & Inspectors */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultOffer={applyDefaultOffer}
      />

      <GeoExperimentModal
        isOpen={geoModalOpen}
        onClose={() => setGeoModalOpen(false)}
      />

      <EmployeeDetailModal
        employee={selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
        onNavigate={navigateTo}
        onOpenApply={() => handleOpenApply('general')}
      />

      <BuildLogDetailModal
        log={selectedBuildLog}
        onClose={() => setSelectedBuildLog(null)}
        onNavigate={navigateTo}
      />
    </div>
  );
}
