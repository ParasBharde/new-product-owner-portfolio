import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_KEYWORDS,
  COPYRIGHT_NAME,
} from '@/lib/constants';

// Metadata for SEO
export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: COPYRIGHT_NAME }],
  creator: COPYRIGHT_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen text-stone-900 antialiased font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
