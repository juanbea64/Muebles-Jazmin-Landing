/**
 * Root Layout
 * Main layout component with metadata and global providers
 * Server Component
 */

import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DEFAULT_METADATA, generateLocalBusinessSchema } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data for SEO
  const structuredData = generateLocalBusinessSchema();

  return (
    <html lang="es">
      <head>
        {/* Structured data for local business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
