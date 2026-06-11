import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-surface-strong mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-forest mb-4">Addie Segal | Cog-Fun for ADHD | NY, NJ & Telehealth</h3>
          </div>
          <div>
            <h4 className="font-semibold text-forest mb-4">Location</h4>
            <p className="text-sm text-muted">
              Hoboken, NJ
              <br />
              Telehealth across New Jersey & New York
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-forest mb-4">Pages</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/" className="text-forest hover:text-forest-dark">Home</Link></li>
              <li><Link href="/services" className="text-forest hover:text-forest-dark">Services</Link></li>
              <li><Link href="/blog" className="text-forest hover:text-forest-dark">Blog</Link></li>
              <li><Link href="/about" className="text-forest hover:text-forest-dark">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-surface-strong pt-8 text-center text-sm text-muted">
          <p>&copy; {currentYear} Addie Segal, OTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
