import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://addiesegal.com'),
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
