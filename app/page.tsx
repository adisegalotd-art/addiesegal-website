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
    'name': 'Addie Segal, OTD',
    'description': 'Occupational therapy specializing in adult ADHD using CogFun protocol',
    'url': 'https://addiesegal.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Hoboken',
      'addressLocality': 'Hoboken',
      'addressRegion': 'NJ',
      'addressCountry': 'US'
    },
    'areaServed': ['New Jersey', 'New York'],
    'serviceType': 'Occupational Therapy - Adult ADHD',
    'priceRange': '$$$'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-warm-gray to-cream flex items-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
              You know what you need to do. Starting it is the problem.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Or you start, lose focus, and somehow it is two hours later and you have been scrolling without knowing when that happened. Then something small goes wrong and you snap at someone you care about. You go to bed with the same things undone as yesterday, with that familiar feeling that you should have done better. None of that is a character flaw. That's just ADHD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#book-consultation"
                className="px-8 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-muted-blue transition-colors text-center"
              >
                Book a free consultation
              </Link>
              <Link
                href="#cogfun-section"
                className="px-8 py-3 border-2 border-sage text-sage rounded-lg font-semibold hover:bg-sage hover:text-white transition-colors text-center"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-8">More than just difficulty focusing</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Adult ADHD does not look like a child who cannot sit still. It looks like a capable, intelligent person who knows exactly what to do and still does not do it. Who works twice as hard as everyone else and still feels behind. Medication helps many people, and so do other therapies. CogFun works on a different layer entirely — the practical, daily life layer that other treatments do not directly address. It works alongside whatever you are already doing.
          </p>

          {/* Expandable Sections */}
          <div className="space-y-4">
            <ExpandableSection
              title="Task initiation"
              content="Starting things, even things you want to do, feels like pushing through concrete. This is not laziness. It is a neurological difficulty with activating the brain's launch system, especially for tasks that are not immediately rewarding."
            />
            <ExpandableSection
              title="Time blindness"
              content="Two hours disappear without warning. Deadlines arrive as a surprise. The future simply does not feel real in the same way it does for others. ADHD affects the brain's internal clock, making time management genuinely harder, not a matter of trying harder."
            />
            <ExpandableSection
              title="Inconsistency"
              content="You can do something perfectly one day and completely fail to replicate it the next. Others interpret this as laziness or not caring. It is neither. ADHD affects access to skills and focus in ways that vary depending on interest, urgency, and environment."
            />
            <ExpandableSection
              title="Emotional dysregulation"
              content="Small things hit disproportionately hard. You snap at people you care about, then spend hours replaying it. ADHD affects emotional regulation at a neurological level, making it harder to pause before reacting and harder to recover once the reaction has happened."
            />
            <ExpandableSection
              title="The guilt spiral"
              content="End of every day: the same things undone, the same feeling of falling short. Over years, this accumulates into a story about who you are. That story is not accurate. It is the result of a brain that works differently operating in a world not designed for it."
            />
            <ExpandableSection
              title="The gap between potential and daily reality"
              content="You know what you are capable of. You can see it clearly. Getting there consistently is the problem, and that gap is exhausting in a way that is hard to explain to people who have not experienced it. CogFun is specifically designed to work on that gap."
            />
          </div>
        </div>
      </section>

      {/* CogFun Section */}
      <section id="cogfun-section" className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">What is CogFun?</h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            CogFun is a structured, 25-session occupational therapy intervention developed specifically for adults with ADHD — one of the only protocols of its kind with published research behind it. It is a structured, collaborative protocol designed around how ADHD actually works, starting with your specific life, your specific patterns, and the strategies you are already using.
          </p>

          {/* Four Units */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cream p-6 rounded-lg border-l-4 border-sage">
              <h3 className="text-xl font-bold text-text-dark mb-3">1. Shared Learning</h3>
              <p className="text-gray-700">Understanding how ADHD has shaped your daily life. Building awareness of your personal ADHD profile, its biological basis, and how it shows up across your life roles. Shifting from self-blame to accurate self-knowledge.</p>
            </div>
            <div className="bg-cream p-6 rounded-lg border-l-4 border-muted-blue">
              <h3 className="text-xl font-bold text-text-dark mb-3">2. Strategy Acquisition</h3>
              <p className="text-gray-700">Examining real daily situations and experiences. Looking at the strategies you already use, identifying which ones are actually working and which are draining you, and beginning to build on what works.</p>
            </div>
            <div className="bg-cream p-6 rounded-lg border-l-4 border-warm-brown">
              <h3 className="text-xl font-bold text-text-dark mb-3">3. General Strategy Development</h3>
              <p className="text-gray-700">Expanding toward strategies that work across many situations and over time. Developing a sustainable way of functioning that fits who you actually are, including self-compassion, self-advocacy, and connecting to what genuinely matters to you.</p>
            </div>
            <div className="bg-cream p-6 rounded-lg border-l-4 border-sage">
              <h3 className="text-xl font-bold text-text-dark mb-3">4. Integration and Self-Management</h3>
              <p className="text-gray-700">Consolidating everything learned. Reassessment, planning for the future, and building the self-management foundation that lasts beyond the end of therapy.</p>
            </div>
          </div>

          {/* Research */}
          <div className="bg-cream p-6 rounded-lg border-l-4 border-sage">
            <h3 className="font-semibold text-text-dark mb-3">Research-Backed</h3>
            <p className="text-gray-700 mb-2">
              CogFun is backed by published peer-reviewed research:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>
                <a 
                  href="https://doi.org/10.5014/ajot.2022.046417" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-blue hover:text-sage underline"
                >
                  Kastner et al. AJOT 2022
                </a>
              </li>
              <li>
                <a 
                  href="https://doi.org/10.5014/ajot.2025.051045" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-blue hover:text-sage underline"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">Ready to explore if CogFun is right for you?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Schedule a free 20-minute consultation to discuss your needs and learn more about how occupational therapy can help.
          </p>
          <Link
            href="/services"
            className="px-8 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-muted-blue transition-colors inline-block"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
