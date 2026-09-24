import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

interface SeoManagerProps {
  currentPath: string;
}

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  type: string;
  schema?: Record<string, unknown>;
}

export function SeoManager({ currentPath }: SeoManagerProps) {
  useEffect(() => {
    const metaConfig: Record<string, PageMeta> = {
      '/': {
        title: 'No Code Vibe | AI Employees Built in Public',
        description:
          'Real AI employees, business tools and automation systems researched, built and tested in public.',
        canonical: `${siteConfig.brand.siteUrl}/`,
        type: 'website',
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': `${siteConfig.brand.siteUrl}/#organization`,
              name: siteConfig.brand.name,
              url: siteConfig.brand.siteUrl,
              description: siteConfig.brand.positioning,
              founder: {
                '@type': 'Person',
                name: siteConfig.author.name,
                jobTitle: siteConfig.author.role,
                description: siteConfig.author.bio,
                email: siteConfig.author.email,
              },
              sameAs: [
                siteConfig.socials.x,
                siteConfig.socials.github,
                siteConfig.socials.youtube,
              ],
            },
            {
              '@type': 'WebSite',
              '@id': `${siteConfig.brand.siteUrl}/#website`,
              url: siteConfig.brand.siteUrl,
              name: siteConfig.brand.name,
              description: siteConfig.brand.tagline,
              publisher: {
                '@id': `${siteConfig.brand.siteUrl}/#organization`,
              },
            },
          ],
        },
      },
      '/ai-employees': {
        title: 'AI Employees Directory | No Code Vibe Build Lab',
        description:
          'Documenting practical AI employees: AI Revenue Recovery, Client Reactivation, Follow-Up Reps, Estimators, and Receptionists in active testing and research.',
        canonical: `${siteConfig.brand.siteUrl}/ai-employees`,
        type: 'website',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'AI Employees Build Directory',
          description:
            'A laboratory index of practical AI employees currently in research, build, and live test stages.',
          author: {
            '@type': 'Person',
            name: siteConfig.author.name,
          },
        },
      },
      '/tools': {
        title: 'Independent Revenue Calculators & Tools | No Code Vibe',
        description:
          'Quantify missed-call revenue loss and customer reactivation opportunity with our independent, standalone Vercel calculators.',
        canonical: `${siteConfig.brand.siteUrl}/tools`,
        type: 'website',
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareApplication',
              name: 'Missed Call Revenue Calculator',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'All',
              url: siteConfig.calculators.missedCall,
              description:
                'Independent financial calculator measuring monthly and annual revenue lost to unanswered business phone calls.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'SoftwareApplication',
              name: 'Customer Reactivation Revenue Calculator',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'All',
              url: siteConfig.calculators.reactivation,
              description:
                'Standalone modeling tool forecasting recovered cash flow from dormant client database re-engagement.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            },
          ],
        },
      },
      '/build-log': {
        title: 'Build Logs & Architecture Notes | No Code Vibe',
        description:
          'Transparent, first-hand technical documentation covering real AI employees: what broke, tools used, unit costs, and test results.',
        canonical: `${siteConfig.brand.siteUrl}/build-log`,
        type: 'blog',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'No Code Vibe Build Logs',
          description:
            'First-hand technical reports from the AI employee build lab documenting architecture, failures, and empirical results.',
          author: {
            '@type': 'Person',
            name: siteConfig.author.name,
          },
        },
      },
      '/work-with-me': {
        title: 'Commercial AI Implementations | No Code Vibe',
        description:
          'Deploy proven AI revenue recovery and client reactivation workflows into your business operations with hands-on systems architecture.',
        canonical: `${siteConfig.brand.siteUrl}/work-with-me`,
        type: 'website',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Revenue Systems Implementation',
          provider: {
            '@type': 'Organization',
            name: siteConfig.brand.name,
          },
          offers: {
            '@type': 'Offer',
            price: '5000',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              description: siteConfig.pricing.terms,
            },
          },
        },
      },
      '/work-with-me/ai-revenue-recovery': {
        title: 'AI Revenue Recovery Implementation | No Code Vibe',
        description:
          'You’re already paying for leads. We help recover the ones your business is losing with instant missed-call SMS triage and qualification.',
        canonical: `${siteConfig.brand.siteUrl}/work-with-me/ai-revenue-recovery`,
        type: 'website',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Revenue Recovery Implementation',
          serviceType: 'Missed Call Recovery & Inbound Triage Automation',
          provider: {
            '@type': 'Organization',
            name: siteConfig.brand.name,
          },
          offers: {
            '@type': 'Offer',
            price: '5000',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              description: siteConfig.pricing.terms,
            },
          },
        },
      },
      '/work-with-me/ai-client-revenue-recovery': {
        title: 'AI Client Revenue Recovery Implementation | No Code Vibe',
        description:
          'Your existing customer database may be worth more than you think. Safe, non-spam dormant customer reactivation and booking workflows.',
        canonical: `${siteConfig.brand.siteUrl}/work-with-me/ai-client-revenue-recovery`,
        type: 'website',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Client Revenue Recovery Implementation',
          serviceType: 'Dormant Database Segmentation & Personalized Reactivation',
          provider: {
            '@type': 'Organization',
            name: siteConfig.brand.name,
          },
          offers: {
            '@type': 'Offer',
            price: '5000',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              description: siteConfig.pricing.terms,
            },
          },
        },
      },
    };

    const current = metaConfig[currentPath] || metaConfig['/'];

    // Update document title
    document.title = current.title;

    // Helper to set meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('name', 'description', current.description);
    setMetaTag('property', 'og:title', current.title);
    setMetaTag('property', 'og:description', current.description);
    setMetaTag('property', 'og:type', current.type);
    setMetaTag('property', 'og:url', current.canonical);
    setMetaTag('name', 'twitter:title', current.title);
    setMetaTag('name', 'twitter:description', current.description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = current.canonical;

    // Structured Data JSON-LD
    const existingScript = document.getElementById('route-schema-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    if (current.schema) {
      const script = document.createElement('script');
      script.id = 'route-schema-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(current.schema, null, 2);
      document.head.appendChild(script);
    }
  }, [currentPath]);

  return null;
}
