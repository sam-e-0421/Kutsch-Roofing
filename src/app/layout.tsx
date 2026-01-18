import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { COMPANY } from '@/lib/constants';
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
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Licensed & insured roofing services in Nebraska. Roof repair, installation, replacement, siding, and gutters. Free, no-obligation estimates.',
  keywords: [
    'roofing',
    'Nebraska roofing',
    'roof repair',
    'roof replacement',
    'siding',
    'gutters',
    'Stromsburg',
    'storm damage',
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description:
      'Licensed & insured roofing services in Nebraska. Free, no-obligation estimates.',
    url: 'https://kutschroofing.com',
    siteName: COMPANY.name,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
