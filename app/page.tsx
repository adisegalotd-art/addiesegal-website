import type { Metadata } from 'next';
import Link from 'next/link';
import ExpandableSection from './components/ExpandableSection';

export const metadata: Metadata = {
  title: 'ADHD Therapist NJ | Occupational Therapy for Adult ADHD | Addie Segal OTD',
  description: 'Dr. Addie Segal is an occupational therapist specializing in adult ADHD using CogFun, a structured 25-session protocol. Telehealth ADHD therapy in NJ and NY.',
  keywords: 'ADHD therapist NJ, occupational therapy ADHD, adult ADHD treatment, CogFun therapy, ADHD specialist New Jersey',
  openGraph: {
    title: 'ADHD Therapist NJ | Occupational Therapy for Adult ADHD | Addie Segal OTD',
    description: 'Dr. Addie Segal is an occupational therapist specializing in adult ADHD using CogFun, a structured 25-session protocol. Telehealth ADHD therapy in NJ and NY.',
    url: 'https://addiesegal.com',
    type: 'website',
  },
};

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Addie Segal, OTD',
    description: 'Occupational therapy specializing in adult ADHD using CogFun protocol',
    url: 'https://addiesegal.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hoboken',
      addressLocality: 'Hoboken',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
    areaServed: ['New Jersey', 'New York'],
    serviceType: 'Occupational Therapy - Adult ADHD',
    priceRange: '$$$',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-surface to-cream flex items-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-forest mb-6 leading-tight">
              You know what you need to do. Starting it is the problem.
            </h1>
            <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed max-w-3xl mx-auto">
              You can see the work, you can care about it, and still your brain stalls, the hours disappear, and the guilt returns. That is not a character flaw. That is ADHD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#book-consultation"
                className="px-8 py-3 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors text-center"
              >
                Book a free consultation
              </Link>
              <Link
                href="#cogfun-section"
                className="px-8 py-3 border-2 border-forest text-forest rounded-full font-semibold hover:bg-forest-soft hover:text-forest-dark transition-colors text-center"
              >
                Learn about CogFun
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More Than Just Difficulty Focusing */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-forest mb-8">More than just difficulty focusing</h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Adult ADHD often looks like an intelligent, capable person who knows what needs to happen and still can’t get started. Medication helps many people. Other therapies help some pieces. CogFun works on the daily functioning layer that is usually missing.
          </p>

          <div className="space-y-4">
            <ExpandableSection
              title="Task initiation"
              content="Starting things can feel like pushing through concrete. This is not laziness. It is a real difficulty with activating the brain's launch system, especially when the work feels boring or uncertain."
            />
            <ExpandableSection
              title="Time blindness"
              content="Two hours disappear without warning. Deadlines arrive as a surprise. The future simply does not feel real in the same way it does for others. ADHD changes how your internal clock works, not how responsible you are."
            />
            <ExpandableSection
              title="Inconsistency"
              content="You can do something perfectly one day and completely fail to replicate it the next. Others interpret this as laziness or not caring. It is neither. ADHD affects access to skills and focus depending on interest, urgency, and environment."
            />
            <ExpandableSection
              title="Emotional dysregulation"
              content="Small things hit disproportionately hard. You snap at people you care about, then replay it for hours. ADHD changes emotional regulation, which makes reactions harder to pause and recovery harder to manage."
            />
            <ExpandableSection
              title="The guilt spiral"
              content="End of day, the same tasks are still there and the same story repeats. Over time that becomes a narrative about your worth. That story is not accurate. It is the result of a brain that works differently in a world not built for it."
            />
            <ExpandableSection
              title="The gap between potential and daily reality"
              content="You know what you are capable of. The problem is getting there consistently. That gap is exhausting in a way that is hard to explain to people who have not experienced it. CogFun is built to help close it."
            />
          </div>
        </div>
      </section>

      {/* CogFun Section */}
      <section id="cogfun-section" className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-forest mb-6">What is CogFun?</h2>
          <p className="text-lg text-muted mb-12 leading-relaxed">
            CogFun is a structured, 25-session occupational therapy protocol created for adults with ADHD. It is one of the few approaches backed by peer-reviewed research and designed to solve real daily-life problems rather than just describe them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cream p-6 rounded-3xl border-l-4 border-forest shadow-soft">
              <h3 className="text-xl font-semibold text-forest mb-3">1. Shared Learning</h3>
              <p className="text-muted">We build an honest picture of how ADHD appears in your life, without blame. This is the moment work stops being about failure and starts being about accurate understanding.</p>
            </div>
            <div className="bg-cream p-6 rounded-3xl border-l-4 border-forest-dark shadow-soft">
              <h3 className="text-xl font-semibold text-forest mb-3">2. Strategy Acquisition</h3>
              <p className="text-muted">We identify which strategies you already use, keep what works, and discard what drains you. The goal is not a new you. The goal is a better way of using the you you already are.</p>
            </div>
            <div className="bg-cream p-6 rounded-3xl border-l-4 border-forest-soft shadow-soft">
              <h3 className="text-xl font-semibold text-forest mb-3">3. General Strategy Development</h3>
              <p className="text-muted">We take what works in one moment and help you use it across many situations. The focus is on sustainable, real-life systems, not one-off hacks.</p>
            </div>
            <div className="bg-cream p-6 rounded-3xl border-l-4 border-forest shadow-soft">
              <h3 className="text-xl font-semibold text-forest mb-3">4. Integration and Self-Management</h3>
              <p className="text-muted">We build a plan that lasts beyond the sessions so you can keep moving forward on your own terms.</p>
            </div>
          </div>

          <div className="bg-cream p-6 rounded-3xl border-l-4 border-forest shadow-soft">
            <h3 className="text-xl font-semibold text-forest mb-3">Research-Backed</h3>
            <p className="text-muted mb-2">CogFun is supported by published research in peer-reviewed journals:</p>
            <ul className="space-y-2 list-disc list-inside text-muted">
              <li>
                <a
                  href="https://doi.org/10.5014/ajot.2022.046417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest hover:text-forest-dark underline"
                >
                  Kastner et al. AJOT 2022
                </a>
              </li>
              <li>
                <a
                  href="https://doi.org/10.5014/ajot.2025.051045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest hover:text-forest-dark underline"
                >
                  Budman, Maeir et al. AJOT 2025
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book-consultation" className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-forest mb-6">Ready to explore if CogFun is right for you?</h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Schedule a free 20-minute consultation to discuss your needs and learn more about how occupational therapy can help.
          </p>
          <Link
            href="/services"
            className="px-8 py-3 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors inline-block"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
