import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Addie Segal OTD | ADHD Occupational Therapist NJ | CogFun',
  description: 'Dr. Addie Segal is an occupational therapist with a clinical doctorate from Boston University, specializing in adult ADHD using the CogFun protocol. Telehealth across New Jersey and New York.',
  keywords: 'Addie Segal OTD, occupational therapist, ADHD specialist NJ, CogFun therapist',
  alternates: {
    canonical: 'https://addiesegal.com/about',
  },
  openGraph: {
    title: 'About Addie Segal OTD | ADHD Occupational Therapist NJ | CogFun',
    description: 'Dr. Addie Segal is an occupational therapist with a clinical doctorate from Boston University, specializing in adult ADHD using the CogFun protocol. Telehealth across New Jersey and New York.',
    url: 'https://addiesegal.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Addie Segal OTD | ADHD Occupational Therapist NJ | CogFun',
    description: 'Dr. Addie Segal is an occupational therapist with a clinical doctorate from Boston University, specializing in adult ADHD using the CogFun protocol. Telehealth across New Jersey and New York.',
  },
};

export default function About() {
  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-6">About Addie Segal, OTD</h1>
              <p className="text-lg text-muted leading-relaxed">
                I am an occupational therapist with a clinical doctorate from Boston University, specializing in adult ADHD using the CogFun protocol, an evidence-based, practical approach. I have 9 years of experience in neuro rehabilitation, and I&apos;m currently adjunct faculty at Kean University.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-soft w-full max-w-sm lg:max-w-none aspect-[4/5]">
                <img
                  src="/headshot.png"
                  alt="Portrait of Dr. Addie Segal"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-surface p-8 rounded-3xl shadow-soft">
            <h2 className="text-3xl font-serif text-forest mb-4">What is CogFun?</h2>
            <p className="text-lg text-muted leading-relaxed mb-4">
              CogFun is a structured, evidence-based occupational therapy protocol developed for adults with ADHD. It addresses the practical challenges of daily life: task initiation, time management, emotional regulation, and the gap between what you are capable of and what you actually accomplish.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              CogFun is designed around how ADHD neurobiology actually works, rather than generic productivity strategies or coaching.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-3xl shadow-soft">
            <h2 className="text-3xl font-serif text-forest mb-4">Where I Practice</h2>
            <p className="text-lg text-muted leading-relaxed">
              I am based in Hoboken, New Jersey, and provide telehealth occupational therapy across New Jersey and New York. Sessions are conducted via secure video, making therapy accessible and flexible for your schedule.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-3xl shadow-soft">
            <h2 className="text-3xl font-serif text-forest mb-4">My Mission</h2>
            <p className="text-lg text-muted leading-relaxed mb-4">
              My goal is to expand access to evidence-based ADHD care for adults. Too many people struggle without the right support because their brain works differently and they have not been offered an approach built for how they actually function.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              CogFun helps you understand your ADHD and build practical, sustainable strategies that fit your life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-forest mb-6">Ready to work together?</h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Schedule a free 15-minute consultation to discuss your needs and explore whether CogFun is the right fit for you.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors inline-block"
          >
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}
