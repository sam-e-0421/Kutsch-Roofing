import { COMPANY, SERVICES, FAQ, TESTIMONIALS, SERVICE_AREAS } from './constants';

const BASE_URL = 'https://kutschpainting.com';

// LocalBusiness Schema for the painting company
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HousePainter',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY.name,
    description:
      "Professional painting services in Nebraska. Interior & exterior painting, cabinet refinishing, deck staining, and commercial painting. Free, no-obligation estimates.",
    url: BASE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.1864,
      longitude: -97.5953,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area.name}, ${area.state}`,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    image: `${BASE_URL}/opengraph-image`,
    sameAs: [COMPANY.social.google, COMPANY.social.facebook, COMPANY.social.instagram].filter(
      (url) => url !== '#'
    ),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: TESTIMONIALS.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: TESTIMONIALS.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: testimonial.quote,
    })),
  };
}

// Service Schema for individual service pages
export function getServiceSchema(serviceSlug: string) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/services/${service.slug}`,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'HousePainter',
      '@id': `${BASE_URL}/#organization`,
      name: COMPANY.name,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area.name}, ${area.state}`,
    })),
    serviceType: service.title,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Services`,
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
        position: index + 1,
      })),
    },
  };
}

// FAQ Schema for FAQ sections
export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

// WebSite Schema for sitelinks search box
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: COMPANY.name,
    url: BASE_URL,
    publisher: {
      '@type': 'HousePainter',
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

// Helper to render schema as script tag content
export function schemaToScript(schema: object): string {
  return JSON.stringify(schema);
}
