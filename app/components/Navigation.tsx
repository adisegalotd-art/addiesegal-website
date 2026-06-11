'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-warm-gray shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-text-dark hover:text-sage transition-colors text-lg">
            Addie Segal, OTD
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/" className="text-sm hover:text-sage transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm hover:text-sage transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-sm hover:text-sage transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm hover:text-sage transition-colors">
              About
            </Link>
            <Link 
              href="#book-consultation" 
              className="px-4 py-2 bg-sage text-white rounded-lg text-sm font-semibold hover:bg-muted-blue transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
