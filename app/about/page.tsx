import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Addie Segal OTD | ADHD Occupational Therapist NJ | CogFun',
  description: 'Dr. Addie Segal is an occupational therapist and the only CogFun-certified OT for adults in the US. Telehealth ADHD therapy across New Jersey and New York.',
  keywords: 'Addie Segal OTD, occupational therapist, ADHD specialist NJ, CogFun therapist',
  openGraph: {
    title: 'About Addie Segal OTD | ADHD Occupational Therapist NJ | CogFun',
    description: 'Dr. Addie Segal is an occupational therapist and the only CogFun-certified OT for adults in the US. Telehealth ADHD therapy across New Jersey and New York.',
    url: 'https://addiesegal.com/about',
    type: 'website',
  },
};

export default function About() {
  return (
    <div className="pt-8">
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-gray to-cream py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-dark mb-6">
            About Addie Segal, OTD
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-4">Occupational Therapist, Clinical Doctorate</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm an occupational therapist with a clinical doctorate (OTD), specializing in adult ADHD using the CogFun protocol. Currently, I'm the only CogFun-certified occupational therapist for adults in the United States.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-4">What is CogFun?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                CogFun is a structured, evidence-based occupational therapy protocol developed by Adina Maeir at Hebrew University specifically for adults with ADHD. It addresses the practical, daily-life challenges that ADHD creates—task initiation, time management, emotional regulation, and the exhausting gap between what you're capable of and what you actually accomplish.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I trained in the CogFun protocol to bring this evidence-based approach to more adults in the United States. Unlike generic ADHD strategies or one-size-fits-all coaching, CogFun is specifically designed around how ADHD neurobiology actually works.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-4">Where I Practice</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm based in Hoboken, New Jersey, and provide telehealth occupational therapy across New Jersey and New York. All sessions are conducted via secure video, making therapy accessible and flexible for your schedule.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-4">My Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                My goal is to disseminate CogFun across the United States and expand access to evidence-based ADHD care. Too many adults with ADHD struggle without the right support—not because they lack willpower or intelligence, but because their brain works differently and they've never been offered an approach specifically designed for how they actually function.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                CogFun changes that. It's not about fixing you. It's about understanding how your ADHD actually works and building practical, sustainable strategies that fit your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-dark mb-6">
            Ready to work together?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Schedule a free 20-minute consultation to discuss your needs and explore whether CogFun is the right fit for you.
          </p>
          <Link
            href="#book-consultation"
            className="px-8 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-muted-blue transition-colors inline-block"
          >
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}
