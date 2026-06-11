import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-gray border-t border-gray-300 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-text-dark mb-4">Addie Segal, OTD</h3>
            <p className="text-sm text-gray-700">
              Occupational Therapist specializing in adult ADHD using the CogFun protocol
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text-dark mb-4">Location</h4>
            <p className="text-sm text-gray-700">
              Hoboken, NJ
              <br />
              Telehealth: New Jersey & New York
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text-dark mb-4">Pages</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/" className="text-muted-blue hover:text-sage">Home</Link></li>
              <li><Link href="/services" className="text-muted-blue hover:text-sage">Services</Link></li>
              <li><Link href="/blog" className="text-muted-blue hover:text-sage">Blog</Link></li>
              <li><Link href="/about" className="text-muted-blue hover:text-sage">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Addie Segal, OTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
