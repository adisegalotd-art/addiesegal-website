import type { Metadata } from 'next';
import Link from 'next/link';
import ExpandableSection from './components/ExpandableSection';

export const metadata: Metadata = {
  title: 'ADHD Therapist NJ | Occupational Therapy for Adult ADHD | Addie Segal OTD',
  description: 'Dr. Addie Segal is an occupational therapist specializing in adult ADHD using CogFun, a structured 25-session protocol. Telehealth ADHD therapy in NJ and NY.',
  keywords: 'ADHD therapist NJ, occupational therapy ADHD, adult ADHD treatment, CogFun therapy, ADHD specialist New Jersey',
  alternates: {
    canonical: 'https://addiesegal.com',
  },
  openGraph: {
    title: 'ADHD Therapist NJ | Occupational Therapy for Adult ADHD | Addie Segal OTD',
    description: 'Dr. Addie Segal is an occupational therapist specializing in adult ADHD using CogFun, a structured 25-session protocol. Telehealth ADHD therapy in NJ and NY.',
    url: 'https://addiesegal.com',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ADHD Therapist NJ | Occupational Therapy for Adult ADHD | Addie Segal OTD',
    description: 'Dr. Addie Segal is an occupational therapist specializing in adult ADHD using CogFun, a structured 25-session protocol. Telehealth ADHD therapy in NJ and NY.',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://addiesegal.com/#business',
        name: 'Addie Segal, OTD',
        description: 'Occupational therapy for adult ADHD using the CogFun protocol, available via telehealth across New Jersey and New York.',
        url: 'https://addiesegal.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hoboken',
          addressRegion: 'NJ',
          addressCountry: 'US',
        },
        areaServed: [
          { '@type': 'State', name: 'New Jersey' },
          { '@type': 'State', name: 'New York' },
        ],
        medicalSpecialty: 'Occupational Therapy',
        priceRange: '$$$',
        employee: { '@id': 'https://addiesegal.com/#person' },
      },
      {
        '@type': 'Person',
        '@id': 'https://addiesegal.com/#person',
        name: 'Addie Segal',
        honorificSuffix: 'OTD',
        jobTitle: 'Occupational Therapist',
        url: 'https://addiesegal.com/about',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Boston University',
        },
        worksFor: { '@id': 'https://addiesegal.com/#business' },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-surface to-cream flex flex-col justify-start pt-6 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-6">
            <p className="text-sm font-sans font-medium tracking-widest uppercase text-muted mb-6">
              Occupational therapy for adult ADHD using CogFun, an evidence-based approach.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-forest mb-6 leading-tight">
              You know what you need to do. Getting started is the problem.
            </h1>
            <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed max-w-3xl mx-auto">
              You see the work, you care about it, and still you don&apos;t start, or you start and lose focus, and before you know it it&apos;s the end of the day and you didn&apos;t do most of what you planned. You find yourself snapping at someone you care about. The guilt cycle continues. This is where CogFun can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendar.app.google/HzfuieaR3hG5nWSX8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors text-center"
              >
                Book a free 15-minute consultation
              </Link>
              <Link
                href="#cogfun-section"
                className="px-8 py-3 border-2 border-forest text-forest rounded-full font-semibold hover:bg-forest-soft hover:text-forest-dark transition-colors text-center"
              >
                Learn about CogFun for ADHD
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#more-section"
          aria-label="Scroll to next section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted/60 hover:text-muted transition-colors animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* More Than Just Difficulty Focusing */}
      <section id="more-section" className="pt-6 pb-10 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-forest mb-3">Occupational therapy for adult ADHD in New Jersey and New York.</h2>
          <p className="text-xl font-semibold text-forest mb-6">More than just difficulty focusing</p>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            Adult ADHD often looks like an intelligent, capable person who knows what needs to happen and still can&apos;t get started. It&apos;s knowing you have massive potential but struggling to fulfill it. It&apos;s shining with creative tasks but struggling with the mundane, necessary ones. CogFun therapy focuses on the daily functioning layer that is sometimes missing in other types of treatment.
          </p>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Medication helps a lot of people manage focus and impulsivity, but knowing what to do and actually doing it consistently is the part that is still missing for a lot of adults with ADHD, and that is exactly where CogFun comes in.
          </p>

          <div className="space-y-4">
            <ExpandableSection
              title="Task initiation"
              content="Starting things can feel like pushing through concrete. The brain&apos;s reward system works differently with ADHD, especially when the work feels boring or uncertain. The challenge is real, and it responds to the right strategies."
            />
            <ExpandableSection
              title="Time blindness"
              content="Two hours disappear without warning. Deadlines arrive as a surprise. The future simply does not feel real in the same way it does for others. ADHD changes how your internal clock works, not how responsible you are."
            />
            <ExpandableSection
              title="Inconsistency"
              content="You can do something perfectly one day and completely fail to replicate it the next. Others may interpret this as a character issue. ADHD affects access to skills and focus depending on interest, urgency, and environment."
            />
            <ExpandableSection
              title="Emotional dysregulation"
              content="Small things hit disproportionately hard. You snap at people you care about, then replay it for hours. ADHD changes emotional regulation, which makes reactions harder to pause and recovery harder to manage."
            />
            <ExpandableSection
              title="The guilt spiral"
              content="End of day, the same tasks are still there and the same story repeats. Over time that becomes a narrative about your worth. That story is the result of a brain that works differently in a world not built for it."
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
              <p className="text-muted">We analyze daily situations and interactions, identifying the strategies you&apos;re already using, which ones work, and which ones take too much energy.</p>
            </div>
            <div className="bg-cream p-6 rounded-3xl border-l-4 border-forest shadow-soft">
              <h3 className="text-xl font-semibold text-forest mb-3">3. General Strategy Development</h3>
              <p className="text-muted">We take what works in one moment and help you use it across many situations. The focus is on sustainable, real-life systems, not one-off hacks.</p>
            </div>
            <div className="bg-cream p-6 rounded-3xl border-l-4 border-forest shadow-soft">
              <h3 className="text-xl font-semibold text-forest mb-3">4. Integration and Self-Management</h3>
              <p className="text-muted">We review everything and build a plan to last beyond the sessions.</p>
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

          <p className="mt-8 text-muted">
            Ready to take the next step?{' '}
            <Link href="/contact" className="text-forest hover:text-forest-dark underline">
              Contact me directly.
            </Link>
          </p>

          <div className="mt-6 pt-6 border-t border-surface-strong">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">Learn more</p>
            <ul className="space-y-2">
              <li>
                <Link href="/executive-function-adults" className="text-forest hover:text-forest-dark underline text-sm">
                  Executive function support for adults with ADHD
                </Link>
              </li>
              <li>
                <Link href="/adhd-medication-not-enough" className="text-forest hover:text-forest-dark underline text-sm">
                  When ADHD medication might not be enough
                </Link>
              </li>
              <li>
                <Link href="/adhd-therapy-nj" className="text-forest hover:text-forest-dark underline text-sm">
                  Adult ADHD therapy in New Jersey (telehealth)
                </Link>
              </li>
              <li>
                <Link href="/adhd-therapy-ny" className="text-forest hover:text-forest-dark underline text-sm">
                  Adult ADHD therapy in New York (telehealth)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-forest mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free 15-minute intro call and we&apos;ll talk through what you&apos;re dealing with and whether CogFun is a good fit.
          </p>
          <Link
            href="https://calendar.app.google/HzfuieaR3hG5nWSX8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors inline-block"
          >
            Book a Call
          </Link>
        </div>
      </section>


    </>
  );
}
