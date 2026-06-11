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
    name: 'CogFun Occupational Therapy for Adult ADHD',
    description: 'A structured 25-session occupational therapy protocol for adults with ADHD',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Addie Segal, OTD',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hoboken',
        addressRegion: 'NJ',
      },
    },
    areaServed: ['New Jersey', 'New York'],
    serviceType: 'Occupational Therapy',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="pt-8">
        <section className="bg-gradient-to-b from-surface to-cream py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-6">
              CogFun Occupational Therapy for Adult ADHD — New Jersey and New York
            </h1>
            <p className="text-lg text-muted max-w-3xl">
              A practical, research-backed occupational therapy protocol for adults with ADHD. Telehealth sessions are available across New Jersey and New York.
            </p>
          </div>
        </section>

        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-forest mb-6">What is CogFun?</h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              CogFun is a structured, 25-session occupational therapy protocol designed specifically for adults with ADHD. It is built around daily life, real challenges, and evidence-based practical strategies.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              This approach is not a generic productivity program. It helps adults with ADHD understand how their brain works and build functional routines that fit their values, energy, and environment.
            </p>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-forest mb-6">Who is it for?</h2>
            <div className="space-y-6">
              <div className="bg-cream p-6 rounded-3xl shadow-soft">
                <h3 className="font-semibold text-forest mb-2">Recently Diagnosed</h3>
                <p className="text-muted">We build an accurate picture of your ADHD profile — how ADHD has shaped your daily life, how you've been managing it, and where it's had the biggest impact. The work starts in the right place: with you, not a generic checklist.</p>
              </div>
              <div className="bg-cream p-6 rounded-3xl shadow-soft">
                <h3 className="font-semibold text-forest mb-2">Long-Diagnosed But Still Struggling</h3>
                <p className="text-muted">You've been living with ADHD for a while, but some of the strategies you're using may actually be draining you. CogFun helps you identify what's working, let go of what isn't, and build on strategies that transfer across different situations and environments.</p>
              </div>
              <div className="bg-cream p-6 rounded-3xl shadow-soft">
                <h3 className="font-semibold text-forest mb-2">On Medication but Still Struggling</h3>
                <p className="text-muted">Medication can help symptoms, but everyday functioning often needs targeted occupational therapy support too.</p>
              </div>
              <div className="bg-cream p-6 rounded-3xl shadow-soft">
                <h3 className="font-semibold text-forest mb-2">In Therapy but Not Making Progress</h3>
                <p className="text-muted">The emotional work is valuable, but it may not address the practical, executive function side of your ADHD.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-forest mb-6">The Four Units of CogFun</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface p-6 rounded-3xl shadow-soft border-l-4 border-forest">
                <h3 className="text-xl font-semibold text-forest mb-3">1. Shared Learning</h3>
                <p className="text-muted">We build an accurate picture of how ADHD shows up in your life, so your work begins in the right place.</p>
              </div>
              <div className="bg-surface p-6 rounded-3xl shadow-soft border-l-4 border-forest-dark">
                <h3 className="text-xl font-semibold text-forest mb-3">2. Strategy Acquisition</h3>
                <p className="text-muted">We identify what already helps and what drains energy, then build on the strategies that really work for you.</p>
              </div>
              <div className="bg-surface p-6 rounded-3xl shadow-soft border-l-4 border-forest-soft">
                <h3 className="text-xl font-semibold text-forest mb-3">3. General Strategy Development</h3>
                <p className="text-muted">We develop strategies that transfer across tasks, roles, and environments, instead of one-off fixes.</p>
              </div>
              <div className="bg-surface p-6 rounded-3xl shadow-soft border-l-4 border-forest">
                <h3 className="text-xl font-semibold text-forest mb-3">4. Integration and Self-Management</h3>
                <p className="text-muted">We create a plan you can continue after therapy ends, so the progress lasts.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-forest mb-6">What to Expect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-forest mb-2 text-lg">Telehealth Sessions</h3>
                <p className="text-muted">All sessions are conducted securely by video, so you can meet from anywhere in New Jersey or New York.</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-2 text-lg">Collaborative Approach</h3>
                <p className="text-muted">You are the expert on your life. My role is to help you translate your experience into strategies that actually work.</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-2 text-lg">Personalized Strategies</h3>
                <p className="text-muted">Rather than pre-packaged solutions, your plan is built around your habits, priorities, and needs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-2 text-lg">25 Structured Sessions</h3>
                <p className="text-muted">The CogFun protocol is 25 sessions, typically weekly, giving you the consistency needed for lasting change.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-forest mb-6">How CogFun Differs From Other Approaches</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-forest pl-4">
                <h3 className="font-semibold text-forest mb-2 text-lg">vs. ADHD Coaching</h3>
                <p className="text-muted">Coaching often focuses on motivation. CogFun is occupational therapy that also targets the functional barriers behind executive function.</p>
              </div>
              <div className="border-l-4 border-forest-dark pl-4">
                <h3 className="font-semibold text-forest mb-2 text-lg">vs. CBT for ADHD</h3>
                <p className="text-muted">CBT is valuable, but it may not address the concrete day-to-day problems of starting and staying on task.</p>
              </div>
              <div className="border-l-4 border-forest-soft pl-4">
                <h3 className="font-semibold text-forest mb-2 text-lg">vs. General Therapy</h3>
                <p className="text-muted">Therapy is important for emotions. CogFun is designed specifically to build practical strategies for ADHD-related daily functioning.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-forest mb-6">Telehealth Available in New Jersey and New York</h2>
            <p className="text-muted leading-relaxed mb-6">Secure telehealth sessions make therapy accessible and convenient, without the need to commute.</p>
            <p className="text-muted leading-relaxed">For many adults with ADHD, telehealth is not just easier—it is a more consistent way to keep progress moving forward.</p>
          </div>
        </section>

        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-forest mb-6">Ready to start?</h2>
            <p className="text-lg text-muted mb-8">Schedule a free 15-minute consultation to discuss your specific challenges and see if CogFun is the right fit.</p>
            <Link
              href="/services"
              className="px-8 py-3 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors inline-block"
            >
              Book a Free 15-Minute Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
