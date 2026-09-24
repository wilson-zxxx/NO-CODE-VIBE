import { AiEmployee } from '../types';

export const aiEmployees: AiEmployee[] = [
  {
    id: 'ai-revenue-recovery',
    name: 'AI Revenue Recovery',
    status: 'Testing',
    statusDetails: 'Live testing on 2 field service businesses. Tracking response latency, conversation drops, and qualification accuracy.',
    problem:
      'Service businesses spend thousands on inbound ads and local SEO, but miss 30% to 42% of incoming phone calls when lines are tied up, dispatch is in transit, or calls arrive after hours. Unanswered callers immediately ring the next competitor on Google.',
    whatItDoes:
      'Instantly detects missed calls via webhooks, fires a contextual conversational SMS within 15 seconds, pre-qualifies job intent and location, coordinates scheduling or human escalation, and synchronizes full transcript context into the CRM.',
    technicalArchitecture: [
      'Twilio voice webhook interception & missed call trigger',
      'Node / serverless stateful conversational router with strict tone guardrails',
      'Multi-turn LLM intent parsing with structured function-calling schemas',
      'Bidirectional CRM sync (ServiceTitan, Jobber, GoHighLevel, HubSpot)',
      'Immediate push notification & SMS alert to human dispatch when high-ticket emergency is detected',
    ],
    currentMilestone: 'Validating real caller pickup rates under 60-second window vs standard voicemail abandonment.',
    relatedToolId: 'missed-call-calculator',
    relatedOfferRoute: '/work-with-me/ai-revenue-recovery',
    buildLogId: 'testing-ai-revenue-recovery-home-services',
  },
  {
    id: 'ai-client-revenue-recovery',
    name: 'AI Client Revenue Recovery',
    status: 'Testing',
    statusDetails: 'Pilot testing on 1 wellness clinic (non-clinical scheduling inquiries only) and 1 HVAC maintenance contractor database.',
    problem:
      'Established businesses sit on 2,000 to 10,000+ past customer records that haven’t transacted in 6–18 months. Generic bulk marketing blast emails end up in spam or get ignored, while un-segmented SMS blasts generate complaints and opt-outs.',
    whatItDoes:
      'Analyzes historical service frequencies and seasonal maintenance cycles to identify truly dormant clients. Crafts high-context, one-to-one conversational outreach, handles follow-ups, and passes interested replies directly to human staff for booking.',
    technicalArchitecture: [
      'Read-only customer ledger and booking history ingestion',
      'Recency-Frequency-Monetary (RFM) segmentation engine to eliminate active clients',
      'Dynamic prompt conditioning with past service notes and technician history',
      'Strict clinical/safety boundaries: any diagnostic or medical question immediately routes to human desk',
      'Real-time booking calendar deep-link and human handoff notification loop',
    ],
    currentMilestone: 'Evaluating response rates across 300 dormant contacts without triggering spam filters or opt-out spikes.',
    relatedToolId: 'reactivation-calculator',
    relatedOfferRoute: '/work-with-me/ai-client-revenue-recovery',
    buildLogId: 'client-reactivation-engine-segmentation-vs-blasts',
  },
  {
    id: 'ai-follow-up-rep',
    name: 'AI Follow-Up Rep',
    status: 'Researching / Building',
    statusDetails: 'Architecture stage. Designing multi-touch finite state machine and benchmarking prompt drift.',
    problem:
      'Commercial sales reps spend the majority of their day chasing sent estimates and unconfirmed proposals. After day 3, over 65% of outstanding quotes are abandoned without systematic follow-up, bleeding winnable revenue.',
    whatItDoes:
      'Monitors proposal view webhooks, initiates polite multi-channel follow-ups across email and SMS with objection triage, answers common logistical questions, and automatically halts cadence the moment a client replies.',
    technicalArchitecture: [
      'Proposal platform webhook listeners (PandaDoc, Proposify, Stripe Invoices)',
      'Time-decay follow-up scheduler with automated weekend/holiday exclusion',
      'Objection classifier (Price, Timing, Competitor, Spec clarification)',
      'Auto-pause safety latch on inbound customer communication',
    ],
    currentMilestone: 'Constructing deterministic state machine to eliminate hallucinated discount promises.',
    buildLogId: 'multi-channel-follow-up-state-machines',
  },
  {
    id: 'ai-estimator',
    name: 'AI Estimator',
    status: 'Researching',
    statusDetails: 'Early exploratory research. Benchmarking multimodal vision models against real field photo data.',
    problem:
      'Trade contractors drive 10–20 hours per week just to perform visual assessments and produce ballpark pricing, consuming immense technician time for prospective jobs that may never convert.',
    whatItDoes:
      'Allows prospective clients to submit photo and dimension data via mobile link, detects material specifications and work scope, checks local pricing rules, and outputs a draft estimate bracket requiring human sign-off.',
    technicalArchitecture: [
      'High-resolution image ingestion with EXIF verification',
      'Multimodal feature extraction (dimensions, panel type, surface wear)',
      'Deterministic price table lookup (no LLM guessing on unit prices)',
      'Contractor review dashboard with one-click adjustments before sending to homeowner',
    ],
    currentMilestone: 'Gathering benchmark dataset of 50 residential electrical and plumbing repair photos.',
  },
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist',
    status: 'Researching',
    statusDetails: 'Investigating real-time voice latency benchmarks and telephony handoff reliability.',
    problem:
      'Traditional outsourced answering services charge $1.50 to $3.00/minute, frequently garble industry terminology, put callers on lengthy holds, and cannot interface with real business booking software.',
    whatItDoes:
      'Answers inbound phone lines 24/7 with human-grade conversational voice response, clarifies caller requests, quotes standard policies, answers business FAQs, and schedules appointments directly into the calendar.',
    technicalArchitecture: [
      'Real-time streaming speech-to-text with silence detection',
      'Ultra-low-latency LLM agent with verified knowledge store',
      'Streaming neural text-to-speech with natural breathing and interruption handling',
      'SIP trunking and direct transfer to human backup lines on trigger words',
    ],
    currentMilestone: 'Testing latency floor across web telephony providers to keep turnaround under 400ms.',
  },
  {
    id: 'ai-operations-analyst',
    name: 'AI Operations Analyst',
    status: 'Researching',
    statusDetails: 'Data modeling stage. Designing cross-platform reconciliation rules.',
    problem:
      'Operations managers waste Monday mornings stitching CSV exports from payment gateways, project tracking tools, and dispatch calendars to spot missing invoices or stalled jobs.',
    whatItDoes:
      'Connects read-only to operational tools, reconciles daily completed work orders against invoiced totals, flags margin leaks or unbilled materials, and delivers an executive brief every morning at 7:00 AM.',
    technicalArchitecture: [
      'Scheduled ETL extractors for Stripe, QuickBooks, and dispatch software',
      'Discrepancy detection engine comparing work order completion vs invoice status',
      'Daily morning digest generated in Markdown and sent to Slack / Email',
      'Anomaly detection on material cost variances exceeding 15%',
    ],
    currentMilestone: 'Creating synthetic multi-system event datasets to stress-test anomaly thresholds.',
  },
  {
    id: 'ai-cfo',
    name: 'AI CFO',
    status: 'Researching',
    statusDetails: 'Researching conservative rule-based financial models and read-only accounting boundaries.',
    problem:
      'Sub-$5M companies can rarely afford a full-time strategic CFO ($150k–$250k/year), resulting in blind spots around 13-week cash runway, seasonal tax crunches, and creeping SaaS/vendor overhead.',
    whatItDoes:
      'Maintains a rolling 13-week cash flow projection, monitors working capital burn, simulates seasonal revenue dips, and alerts founders to upcoming payroll shortfalls with actionable remediation options.',
    technicalArchitecture: [
      'Read-only Plaid / accounting ledger integration (QuickBooks / Xero)',
      'Deterministic 13-week cash projection formulas (no probabilistic hallucination with money)',
      'Contract renewal crawler flagging unexpected vendor price increases',
      'Founder scenario simulator ("Can we hire 2 techs next month without dipping below 60 days reserves?")',
    ],
    currentMilestone: 'Validating mathematical determinism of the 13-week cash forecast module.',
  },
];
