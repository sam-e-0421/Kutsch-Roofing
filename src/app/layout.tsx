import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { COMPANY } from '@/lib/constants';
import { getLocalBusinessSchema, getWebSiteSchema, schemaToScript } from '@/lib/schema';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kutschpainting.com'),
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Professional painting services in Nebraska. Interior & exterior painting, cabinet refinishing, deck staining, and commercial painting. Free, no-obligation estimates.',
  keywords: [
    'painting',
    'Nebraska painting',
    'interior painting',
    'exterior painting',
    'cabinet refinishing',
    'deck staining',
    'house painting',
    'Stromsburg',
    'painting contractor Nebraska',
    'commercial painting',
    'residential painting',
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description:
      'Professional painting services in Nebraska. Free, no-obligation estimates.',
    url: 'https://kutschpainting.com',
    siteName: COMPANY.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description:
      'Professional painting services in Nebraska. Free, no-obligation estimates.',
  },
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
  alternates: {
    canonical: 'https://kutschpainting.com',
  },
  other: {
    'geo.region': 'US-NE',
    'geo.placename': 'Stromsburg',
    'geo.position': '41.1864;-97.5953',
    ICBM: '41.1864, -97.5953',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaToScript(getLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaToScript(getWebSiteSchema()),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
