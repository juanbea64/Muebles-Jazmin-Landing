/**
 * SEO utilities and metadata helpers
 * Centralizes SEO configuration and provides helpers for generating metadata
 */

import type { Metadata } from 'next';

// Base site configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mueblesjazmin.com';
const SITE_NAME = 'Muebles Jazmín';
const SITE_DESCRIPTION = 'Muebles hechos a medida con materiales seleccionados y acabados premium. Más de 20 años de experiencia transformando espacios.';

// Default metadata shared across all pages
export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'muebles a medida',
    'muebles personalizados',
    'carpintería',
    'fabricación de muebles',
    'muebles premium',
    'diseño de interiores',
    'muebles exclusivos',
    'MDF',
    'melamina',
    'herrajes',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/logo.png`],
  },
};

/**
 * Generates page-specific metadata
 * Use this helper function for consistent metadata across pages
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/images/logo.png`;

  return {
    title,
    description,
    keywords: [...(DEFAULT_METADATA.keywords as string[]), ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...DEFAULT_METADATA.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...DEFAULT_METADATA.twitter,
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Generates structured data (JSON-LD) for local business
 * Improves local SEO and rich snippets in search results
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: '+573142018144',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CO',
    },
    priceRange: '$$',
  };
}
