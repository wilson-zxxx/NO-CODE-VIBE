/**
 * Central Configuration for No Code Vibe
 * All external tool URLs, contact endpoints, pricing models, and author metadata
 * are configured here for easy editing and extraction.
 */

export const siteConfig = {
  brand: {
    name: 'NO CODE VIBE',
    tagline: 'AI Employees Built in Public.',
    positioning:
      'No Code Vibe is an independent build lab documenting practical AI employees, business tools, automation systems, and AI-search experiments.',
    philosophy: 'RESEARCH → BUILD → TEST → DOCUMENT → SELL',
    siteUrl: 'https://nocodevibe.com',
  },
  author: {
    name: 'Wilson',
    role: 'Independent Systems Builder & Founder',
    email: 'wilson@nocodevibe.com',
    bio: 'Researches, builds, tests, and documents practical AI employees and automation systems in public — then deploys the proven ones into real operations.',
    avatarAlt: 'Wilson, Founder of No Code Vibe',
  },
  calculators: {
    // Independent external Vercel projects (not embedded into this repo)
    missedCall: 'https://missed-call-calculator.vercel.app',
    reactivation: 'https://reactivation-calculator.vercel.app',
  },
  socials: {
    x: 'https://x.com/nocodevibe',
    github: 'https://github.com/nocodevibe',
    youtube: 'https://youtube.com/@nocodevibe',
  },
  pricing: {
    implementationFee: '$5,000',
    depositToStart: '$1,000',
    launchPayment: '$4,000',
    terms: '$1,000 to start (credited toward project), $4,000 before production launch.',
  },
  routes: {
    home: '/',
    aiEmployees: '/ai-employees',
    tools: '/tools',
    buildLog: '/build-log',
    workWithMe: '/work-with-me',
    revenueRecoveryOffer: '/work-with-me/ai-revenue-recovery',
    clientReactivationOffer: '/work-with-me/ai-client-revenue-recovery',
  },
};
