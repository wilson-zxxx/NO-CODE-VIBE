import { ToolItem } from '../types';
import { siteConfig } from '../config/siteConfig';

export const toolsData: ToolItem[] = [
  {
    id: 'missed-call-calculator',
    name: 'Missed Call Revenue Calculator',
    problemMeasured:
      'Quantifies monthly and annual lost revenue from unanswered calls by factoring weekly inbound call volume, average industry close rates, and customer lifetime/ticket value.',
    targetUser:
      'Home service contractors (plumbing, HVAC, roofing), medical & dental clinics, law firms, and high-ticket emergency dispatch businesses.',
    status: 'Live on Vercel',
    externalUrl: siteConfig.calculators.missedCall,
    isExternalVercel: true,
    notes:
      'Independent Vercel web application designed for fast, frictionless math. Runs standalone without database tracking or required registration.',
    relatedOfferRoute: '/work-with-me/ai-revenue-recovery',
  },
  {
    id: 'reactivation-calculator',
    name: 'Customer Reactivation Revenue Calculator',
    problemMeasured:
      'Models the latent revenue potential trapped inside dormant customer databases, simulating realistic conversion curves and payback horizons without paid acquisition spend.',
    targetUser:
      'Established businesses with 500+ historical customer records, recurring service companies, aesthetic clinics, and professional practice owners.',
    status: 'Live on Vercel',
    externalUrl: siteConfig.calculators.reactivation,
    isExternalVercel: true,
    notes:
      'Standalone scenario planning model built as a dedicated Vercel deployment. Does not require uploading any client records or PII.',
    relatedOfferRoute: '/work-with-me/ai-client-revenue-recovery',
  },
];
