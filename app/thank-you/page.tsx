'use client';

import { useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', { send_to: 'AW-18232634963/LABEL' });
    }
  }, []);

  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream pt-16 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-6">Thank You</h1>
          <p className="text-lg text-muted mb-10">
            Thanks for reaching out, I&apos;ll get back to you soon.
          </p>
          <Link
            href="/"
            className="inline-flex rounded-full bg-forest px-8 py-3 text-white font-semibold hover:bg-forest-dark transition-colors"
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
