import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CogFun ADHD Occupational Therapy | Adult ADHD Treatment NJ & NY | Addie Segal OTD',
  description: 'CogFun is a research-backed 25-session occupational therapy protocol for adult ADHD. Telehealth sessions available across New Jersey and New York.',
  keywords: 'occupational therapy ADHD, ADHD treatment, CogFun therapy, adult ADHD therapy NJ, telehealth ADHD',
  openGraph: {
    title: 'CogFun ADHD Occupational Therapy | Adult ADHD Treatment NJ & NY | Addie Segal OTD',
    description: 'CogFun is a research-backed 25-session occupational therapy protocol for adult ADHD. Telehealth sessions available across New Jersey and New York.',
    url: 'https://addiesegal.com/services',
    type: 'website',
  },
};

export default function Services() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'CogFun Occupational Therapy for Adult ADHD',
    'description': 'A structured 25-session occupational therapy protocol for adults with ADHD',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Addie Segal, OTD',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Hoboken',
        'addressRegion': 'NJ'
      }
    },
    'areaServed': ['New Jersey', 'New York'],
    'serviceType': 'Occupational Therapy'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <div className="pt-8">
        {/* Hero */}
        <section className="bg-gradient-to-b from-warm-gray to-cream py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-dark mb-6">
              CogFun Occupational Therapy for Adult ADHD — New Jersey and New York
            </h1>
          </div>
        </section>

        {/* What is CogFun */}
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-dark mb-6">What is CogFun?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              CogFun is a structured, 25-session occupational therapy intervention developed specifically for adults with ADHD. It's one of the only protocols of its kind with published research supporting its effectiveness.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike generic productivity tips or one-size-fits-all approaches, CogFun is a collaborative protocol designed around how ADHD actually works—starting with your specific life, your specific patterns, and the strategies you're already using. The goal isn't to "fix" you; it's to help you function in a way that works for your brain.
            </p>
          </div>
        </section>

        {/* Who is it for */}
        <section className="py-16 bg-warm-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-dark mb-6">Who is it for?</h2>
            <div className="space-y-4">
              <div className="bg-cream p-4 rounded-lg">
                <h3 className="font-semibold text-text-dark mb-2">Recently Diagnosed</h3>
                <p className="text-gray-700">You've just received an ADHD diagnosis and want practical strategies to manage your symptoms in daily life.</p>
              </div>
              <div className="bg-cream p-4 rounded-lg">
                <h3 className="font-semibold text-text-dark mb-2">Long-Diagnosed But Struggling</h3>
                <p className="text-gray-700">You've known about your ADHD for years but still feel stuck—you've tried strategies that didn't stick or aren't working anymore.</p>
              </div>
              <div className="bg-cream p-4 rounded-lg">
                <h3 className="font-semibold text-text-dark mb-2">On Medication but Still Struggling</h3>
                <p className="text-gray-700">Medication has helped, but there are still daily functioning challenges that aren't fully addressed by medication alone.</p>
              </div>
              <div className="bg-cream p-4 rounded-lg">
                <h3 className="font-semibold text-text-dark mb-2">In Therapy But Not Making Progress</h3>
                <p className="text-gray-700">You're working with a therapist (for anxiety, depression, or ADHD), but the practical daily life piece isn't being addressed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Four Units */}
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-dark mb-6">The Four Units of CogFun</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-warm-gray p-6 rounded-lg border-l-4 border-sage">
                <h3 className="text-xl font-bold text-text-dark mb-3">1. Shared Learning</h3>
                <p className="text-gray-700">Understanding how ADHD has shaped your daily life and building awareness of your personal ADHD profile and its biological basis.</p>
              </div>
              <div className="bg-warm-gray p-6 rounded-lg border-l-4 border-muted-blue">
                <h3 className="text-xl font-bold text-text-dark mb-3">2. Strategy Acquisition</h3>
                <p className="text-gray-700">Examining real daily situations, identifying which strategies you're already using work, and building on what's actually effective.</p>
              </div>
              <div className="bg-warm-gray p-6 rounded-lg border-l-4 border-warm-brown">
                <h3 className="text-xl font-bold text-text-dark mb-3">3. General Strategy Development</h3>
                <p className="text-gray-700">Expanding strategies that work across many situations and over time, developing a sustainable way of functioning that fits who you are.</p>
              </div>
              <div className="bg-warm-gray p-6 rounded-lg border-l-4 border-sage">
                <h3 className="text-xl font-bold text-text-dark mb-3">4. Integration and Self-Management</h3>
                <p className="text-gray-700">Consolidating what you've learned and building the self-management foundation that lasts beyond therapy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-warm-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-dark mb-6">What to Expect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text-dark mb-2 text-lg">Telehealth Sessions</h3>
                <p className="text-gray-700">All sessions are conducted via video from anywhere in New Jersey or New York. No commute, flexible scheduling, and the comfort of your own space.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-dark mb-2 text-lg">Collaborative Approach</h3>
                <p className="text-gray-700">This isn't top-down advice. We work together to understand your specific challenges, build on what's already working, and develop strategies that feel sustainable to you.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-dark mb-2 text-lg">Personalized Strategies</h3>
                <p className="text-gray-700">CogFun isn't one-size-fits-all. Your protocols and strategies are built around your life, your values, your environment, and how your ADHD specifically manifests.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-dark mb-2 text-lg">25 Structured Sessions</h3>
                <p className="text-gray-700">The CogFun protocol is 25 sessions, typically once weekly. This structure provides consistency and allows for real behavior change and integration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Differs */}
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-dark mb-6">How CogFun Differs From Other Approaches</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-4">
                <h3 className="font-semibold text-text-dark mb-2 text-lg">vs. ADHD Coaching</h3>
                <p className="text-gray-700">Coaching often focuses on motivation and accountability. CogFun is clinical occupational therapy grounded in neuroscience. It addresses the neurological barriers to executive function, not just the motivation piece.</p>
              </div>
              <div className="border-l-4 border-muted-blue pl-4">
                <h3 className="font-semibold text-text-dark mb-2 text-lg">vs. CBT for ADHD</h3>
                <p className="text-gray-700">CBT is excellent for anxiety and depression, and it can help with some ADHD challenges. But it doesn't specifically target functional daily life tasks—the concrete "I need to start this" and "I need to remember" challenges.</p>
              </div>
              <div className="border-l-4 border-warm-brown pl-4">
                <h3 className="font-semibold text-text-dark mb-2 text-lg">vs. General Therapy</h3>
                <p className="text-gray-700">Therapy is valuable for processing emotions and exploring patterns. CogFun is specifically designed to build functional strategies for the executive function challenges that ADHD causes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Telehealth */}
        <section className="py-16 bg-warm-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-dark mb-6">Telehealth Available in New Jersey and New York</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              All CogFun sessions are conducted via secure video telehealth. I work with adults across New Jersey and New York who need flexible, accessible occupational therapy for ADHD.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Telehealth means no commute, flexible scheduling, and sessions that fit into your life. Research shows that telehealth therapy for ADHD is just as effective as in-person sessions—and for many people, it's actually preferable.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Ready to start?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Schedule a free 20-minute consultation to discuss your specific challenges and see if CogFun is the right fit.
            </p>
            <Link
              href="#book-consultation"
              className="px-8 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-muted-blue transition-colors inline-block"
            >
              Book a Free 20-Minute Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
