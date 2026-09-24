import { BuildLog } from '../types';
import { siteConfig } from '../config/siteConfig';

export const buildLogsData: BuildLog[] = [
  {
    id: 'testing-ai-revenue-recovery-home-services',
    slug: 'testing-ai-revenue-recovery-home-services',
    title: 'Testing AI Revenue Recovery on 2 Home Service Contractors',
    date: 'September 2026',
    author: 'Wilson',
    readTime: '6 min read',
    summary:
      'We wired instant missed-call SMS triage into two real service dispatch setups. Here is what happened to response times, where the conversation dropped, and how we solved webhook race conditions.',
    problem:
      'A local roofing company and an HVAC installer were spending ~$4,200/month on Google Local Services Ads. During morning rush and on-site visits, front desks missed 34% of inbound rings. In home services, 78% of people who reach voicemail call the next contractor within 90 seconds.',
    research:
      'We audited 140 missed call recordings. 62% were new customer inquiries with urgent repair needs; 23% were existing job status requests; 15% were spam/solicitation. We realized the system must distinguish new job opportunities from vendors within 1 SMS exchange.',
    build:
      'Built a Twilio voice webhook interceptor routed through a serverless Edge function. If the call status finishes as "no-answer" or "busy", a stateful conversation thread is generated immediately. The prompt is bound to strict slot-filling: Address, Problem Type, Urgency level, and Preferred Time. Once all 4 slots are filled, an automated booking link or dispatch push notification fires.',
    toolsUsed: ['Twilio Voice & SMS API', 'Next.js Edge Runtime', 'Claude 3.5 Sonnet / Gemini Flash', 'ServiceTitan Webhooks', 'Supabase for state store'],
    cost:
      '$0.038 per recovered lead interaction (Twilio telephony + SMS segments + LLM inference tokens). Infrastructure baseline is under $18/month.',
    whatBroke:
      '1. Race Condition: When a dispatcher answered a call on ring 4, the Twilio webhook occasionally sent a duplicate "missed call" event before the status transitioned to "in-progress". Fixed with a 6-second debounce latch.\n2. Prompt Over-eagerness: The model initially tried to book exact 15-minute appointment slots when the contractor only booked 2-hour arrival windows. We locked time options to strict enumerated blocks.',
    testing:
      'Ran in parallel shadow mode for 14 business days across 86 missed calls. 58 callers engaged with the instant text within 2 minutes. 31 completed the preliminary qualification questions without human intervention.',
    result:
      'Recovered 19 qualified emergency repair estimates in month one that would have otherwise gone to competitors. Average ticket value was $1,150.',
    wouldIBuildItAgain:
      'Yes, 100%. The commercial ROI is immediate and black-and-white. The biggest lesson is never trying to have the AI do the whole job; qualification and calendar reservation is the sweet spot. Complex custom pricing must stay with human estimators.',
    videoPlaceholderText:
      'Laboratory Demo Video: 4-minute walkthrough of the Twilio webhook trigger, prompt slot-filling logic, and live dispatch escalation.',
    relatedTool: {
      name: 'Missed Call Revenue Calculator',
      url: siteConfig.calculators.missedCall,
    },
    relatedOffer: {
      title: 'AI Revenue Recovery Implementation',
      route: '/work-with-me/ai-revenue-recovery',
    },
  },
  {
    id: 'client-reactivation-engine-segmentation-vs-blasts',
    slug: 'client-reactivation-engine-segmentation-vs-blasts',
    title: 'Customer Reactivation: Why Dormant Database Segmentation Beats Bulk SMS Blasts',
    date: 'August 2026',
    author: 'Wilson',
    readTime: '7 min read',
    summary:
      'Why 95% of database reactivation campaigns destroy sender reputation, and how we built an RFM segmentation pipeline that safely wakes up dormant high-value customers without spam complaints.',
    problem:
      'Traditional marketing agencies sell "database reactivation" as a giant blast of 3,000 SMS messages saying "Hey! We miss you, here is 15% off". This leads to carrier 10DLC carrier blocks, opt-out rates exceeding 12%, and angry existing clients who were just in the office last week.',
    research:
      'We categorized a client database of 3,420 historical records into 4 recency buckets. We found that patients/clients dormant between 7 and 14 months had a 4x higher willingness to book maintenance checkups compared to clients dormant over 3 years, provided the message referenced their specific past service category.',
    build:
      'Created an offline ETL pipeline that ingests clean CSV/CRM exports, computes Recency-Frequency-Monetary (RFM) scores, filters out recent customers and un-subscribes, and clusters records by service type. An LLM agent generates unique, conversational messages with past technician and season context, sending in trickle batches of 25 contacts per hour.',
    toolsUsed: ['Python / Pandas for RFM analysis', 'Vite / React for review dashboard', 'Twilio 10DLC Messaging Service', 'PostgreSQL', 'Anthropic Claude'],
    cost:
      '$42 total software & carrier spend to process and engage a 400-contact dormant batch.',
    whatBroke:
      'Clinical boundary drift: On a test batch for a wellness practice, one client asked "Is this symptom related to my medication?" The general prompt almost attempted a conversational answer. We introduced a regex and semantic kill-switch: any health symptom or clinical term triggers an immediate standard response ("Our clinical staff will review and call you back directly") and flags the ticket.',
    testing:
      'Batch of 320 segmented dormant customers (9–15 months inactive). 71 replied conversationally (22.1% reply rate). Only 3 opted out (<1%).',
    result:
      'Generated 23 confirmed re-bookings within 10 days, producing $8,600 in realized service revenue from a list that had generated $0 for over a year.',
    wouldIBuildItAgain:
      'Yes, but only with strict segmentation beforehand. Never run reactivation without the client reviewing the sample messages and verifying list exclusions first.',
    videoPlaceholderText:
      'Screen Recording: Database RFM scoring walkthrough, safe trickle batching engine, and human handoff workflow.',
    relatedTool: {
      name: 'Customer Reactivation Revenue Calculator',
      url: siteConfig.calculators.reactivation,
    },
    relatedOffer: {
      title: 'AI Client Revenue Recovery Implementation',
      route: '/work-with-me/ai-client-revenue-recovery',
    },
  },
  {
    id: 'why-we-split-calculators-independent-vercel',
    slug: 'why-we-split-calculators-independent-vercel',
    title: 'Why We Decoupled Our Financial Calculators into Standalone Vercel Deployments',
    date: 'July 2026',
    author: 'Wilson',
    readTime: '4 min read',
    summary:
      'Architectural decision notes: Why embed-free, independent tools outperform monolithic website calculators in shareability, speed, and clean offer decoupling.',
    problem:
      'Most agencies cram complex revenue calculators directly into their marketing homepage. This bloats bundle size, limits shareability on social media and cold outreach, and entangles core branding changes with mathematical utility logic.',
    research:
      'Users evaluating business financial math want a clean, zero-distraction utility. When sent as an independent URL (e.g. on Vercel), prospective clients treated the tool as an unbiased calculator rather than an aggressive sales pitch.',
    build:
      'Extracted the Missed Call Revenue Calculator and Customer Reactivation Revenue Calculator into separate lightweight, single-purpose Next.js / Vite apps deployed directly to Vercel edge networks. Maintained clean outbound linking and editable URL constants from the main No Code Vibe build lab.',
    toolsUsed: ['Vercel Edge Platform', 'React & Tailwind CSS', 'Modular URL configuration'],
    cost: '$0/month additional cost on Vercel hobby/pro tiers.',
    whatBroke:
      'Initial linking missed referral UTM parameters. Added clean, deterministic query parameters so downstream analytics could trace back to build lab articles without third-party tracking pixels.',
    testing:
      'Benchmarked load time: Independent calculator loads in 240ms on mobile LTE. Bounce rate dropped 41% compared to full agency page embeds.',
    result:
      'Both calculators can now be linked directly in X/Twitter posts, client proposals, and YouTube descriptions with zero friction.',
    wouldIBuildItAgain:
      'Absolutely. Keeping tools standalone and modular is our standard operating procedure across all No Code Vibe experiments.',
    videoPlaceholderText:
      'System Architecture: Comparing monolithic embedded widgets vs standalone Vercel utility edge deployments.',
    relatedTool: {
      name: 'Missed Call Revenue Calculator',
      url: siteConfig.calculators.missedCall,
    },
  },
  {
    id: 'multi-channel-follow-up-state-machines',
    slug: 'multi-channel-follow-up-state-machines',
    title: 'Designing Multi-Channel Follow-Up State Machines with Human-in-the-Loop',
    date: 'June 2026',
    author: 'Wilson',
    readTime: '5 min read',
    summary:
      'Research notes on why autonomous agents fail at long-term sales follow-up unless governed by deterministic finite state machines (FSM).',
    problem:
      'Unconstrained LLM agents tasked with "follow up until they respond" either get annoying, repeat identical questions, or hallucinate unauthorized discounts when prospects push back on price.',
    research:
      'Studied 300 successful sales cadence sequences. Effective follow-up has deterministic states: Day 1 (Logistical confirmation), Day 3 (Value drop/case study), Day 7 (Specific question), Day 14 (Gentle close-out). The timing and cadence must be programmatic; only the phrasing should be generated.',
    build:
      'Prototyped an XState-powered state machine paired with structured JSON schema outputs. Every incoming message passes through a classifier node before advancing the state. If the prospect asks a question outside known facts, state transitions to `AWAITING_HUMAN_REVIEW` and pings Slack.',
    toolsUsed: ['XState', 'TypeScript', 'Node.js', 'PostgreSQL event sourcing', 'Slack API Webhooks'],
    cost: '$0.004 per classification call using smaller specialized models.',
    whatBroke:
      'Auto-replies like "I am out of the office until Tuesday" initially tricked the agent into assuming a human answered. Added automated out-of-office header checks and vacation keyword filters.',
    testing:
      'Tested across 40 simulated lead interactions with intentional curveballs (price pushback, angry tone, out-of-office, multi-question inquiries).',
    result:
      'Zero rogue discount hallucinations. 100% of out-of-scope queries successfully escalated to human inbox.',
    wouldIBuildItAgain:
      'Yes. Deterministic state machines are mandatory for commercial AI applications that talk to paying customers.',
    videoPlaceholderText:
      'Architecture Diagram: Visualizing XState transitions and human-in-the-loop Slack escalation queues.',
  },
];
