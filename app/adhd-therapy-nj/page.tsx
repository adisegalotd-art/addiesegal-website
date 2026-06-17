import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Adult ADHD Therapy in New Jersey (Telehealth) | CogFun | Addie Segal OTD',
  description: 'CogFun occupational therapy for adult ADHD, available via telehealth across New Jersey. Practical, evidence-based strategies for task initiation, follow-through, and daily functioning.',
  keywords: 'adhd therapy nj, adult adhd new jersey, adhd telehealth nj, adhd occupational therapy new jersey, adhd treatment new jersey',
  alternates: {
    canonical: 'https://addiesegal.com/adhd-therapy-nj',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Adult ADHD Therapy in New Jersey (Telehealth) | Addie Segal OTD',
    description: 'CogFun occupational therapy for adult ADHD, available via telehealth across New Jersey. Practical, evidence-based strategies for daily functioning.',
    url: 'https://addiesegal.com/adhd-therapy-nj',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Adult ADHD Therapy in New Jersey (Telehealth) | Addie Segal OTD',
    description: 'CogFun occupational therapy for adult ADHD, available via telehealth across New Jersey. Practical, evidence-based strategies for daily functioning.',
  },
};

export default function AdhdTherapyNJ() {
  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream pt-6 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-4">
            Adult ADHD Therapy in New Jersey (Telehealth)
          </h1>
          <p className="text-lg text-muted max-w-3xl">
            If you are an adult with ADHD in New Jersey looking for support that goes beyond a diagnosis and a prescription, telehealth occupational therapy with CogFun offers a structured, practical approach to daily functioning.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">Who this serves</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Adults with ADHD in New Jersey come to CogFun from a range of starting points. Some have a recent diagnosis and want to understand what it means for their daily life. Others have known about their ADHD for years but are still struggling with the same patterns. Many are managing work and family responsibilities while feeling like they are constantly behind.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            What they share is a gap between what they are capable of and what they can actually pull off consistently. That gap is the focus of the work.
          </p>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">Why telehealth works well for ADHD in NJ</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Telehealth removes the commute, the waiting room, and the logistical overhead that makes consistent appointments harder for people with ADHD. Sessions happen via secure video from wherever you are in New Jersey, including Hoboken, Jersey City, Newark, and across the state.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-4">
            There is also a practical benefit to working remotely: the strategies we build are connected to your actual environment, your real desk, your real routines, rather than a clinical setting that has nothing to do with where your ADHD actually shows up.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            If you are also looking at options in New York, see the <Link href="/adhd-therapy-ny" className="text-forest hover:text-forest-dark underline">adult ADHD therapy in New York</Link> page for what is available there.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">What the CogFun protocol involves</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            CogFun is a research-backed occupational therapy protocol of at least 25 sessions, structured in four phases. It starts with building an accurate picture of how ADHD shows up in your specific life, then moves through strategy identification, skill development, and a self-management plan you can carry forward independently.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-4">
            The focus is executive function: task initiation, time management, follow-through, and managing the frustration and overwhelm that come with those challenges. You can read more about <Link href="/executive-function-adults" className="text-forest hover:text-forest-dark underline">executive function support for adults with ADHD</Link> and what that work looks like.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            A current ADHD diagnosis from a licensed physician is required to begin. Medication is not required.
          </p>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">About the practice</h2>
          <p className="text-lg text-muted leading-relaxed">
            Dr. Addie Segal, OTD is an occupational therapist with a clinical doctorate from Boston University, based in Hoboken, NJ. She specializes in adult ADHD using the CogFun protocol and has 9 years of experience in neuro rehabilitation. She is licensed to provide telehealth occupational therapy across New Jersey and New York.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-forest mb-4">Ready to get started in New Jersey?</h2>
          <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
            Book a free 15-minute consultation to discuss your situation and find out whether CogFun telehealth therapy is the right fit.
          </p>
          <Link
            href="https://calendar.app.google/HzfuieaR3hG5nWSX8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-forest px-8 py-3 text-white font-semibold hover:bg-forest-dark transition-colors"
          >
            Book a free 15-minute consultation
          </Link>
          <p className="text-xs text-muted mt-8 leading-relaxed max-w-2xl mx-auto">
            This page is for informational purposes and is not a substitute for individualized clinical assessment.
          </p>
        </div>
      </section>
    </div>
  );
}
