'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-surface shadow-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-serif text-forest hover:text-forest-dark text-lg">
            Addie Segal Occupational Therapy Doctorate
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/" className="hover:text-forest-dark">
              Home
            </Link>
            <Link href="/services" className="hover:text-forest-dark">
              Services
            </Link>
            <Link href="/blog" className="hover:text-forest-dark">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-forest-dark">
              FAQ
            </Link>
            <Link href="/about" className="hover:text-forest-dark">
              About
            </Link>
            <Link href="/contact" className="hover:text-forest-dark">
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-forest text-white rounded-full text-sm font-semibold hover:bg-forest-dark transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
