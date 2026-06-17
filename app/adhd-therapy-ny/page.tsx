import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Adult ADHD Therapy in New York (Telehealth) | CogFun | Addie Segal OTD',
  description: 'CogFun occupational therapy for adult ADHD, available via telehealth across New York. Evidence-based strategies for daily functioning, built around your real routines.',
  keywords: 'adhd therapy ny, adult adhd new york, adhd telehealth ny, adhd occupational therapy new york, adhd treatment new york',
  alternates: {
    canonical: 'https://addiesegal.com/adhd-therapy-ny',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Adult ADHD Therapy in New York (Telehealth) | Addie Segal OTD',
    description: 'CogFun occupational therapy for adult ADHD, available via telehealth across New York. Evidence-based strategies for daily functioning, built around your real routines.',
    url: 'https://addiesegal.com/adhd-therapy-ny',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Adult ADHD Therapy in New York (Telehealth) | Addie Segal OTD',
    description: 'CogFun occupational therapy for adult ADHD, available via telehealth across New York. Evidence-based strategies for daily functioning, built around your real routines.',
  },
};

export default function AdhdTherapyNY() {
  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream pt-6 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-4">
            Adult ADHD Therapy in New York (Telehealth)
          </h1>
          <p className="text-lg text-muted max-w-3xl">
            Managing ADHD in New York often means managing ADHD under pressure: packed schedules, high expectations, and an environment that rewards speed and consistency in ways that ADHD brains find genuinely hard. CogFun occupational therapy meets you where that pressure actually lands.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">The New York ADHD context</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Adults with ADHD in New York are often high-achieving people who have learned to compensate in demanding environments. That compensation takes a toll. The energy required to mask disorganization, catch up after distraction, and hold things together across a busy week is exhausting in a way that does not always show up in a job title or salary.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            CogFun does not start from the assumption that you need to work harder. It starts from the assumption that you are already working hard, and that the strategies you are using deserve a closer look.
          </p>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">Who this is for in New York</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            CogFun telehealth is available to adults across New York state, including New York City, the Hudson Valley, Long Island, and beyond. Sessions are conducted via secure video, which means no commute, no waiting room, and no adding another appointment to an already full schedule.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-4">
            The work suits adults who have a diagnosis and want practical support, people who are managing medication but still finding that the daily functioning piece is not where they want it to be, and people who are high-functioning on the outside but running on empty underneath.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            If you are in New Jersey, see the <Link href="/adhd-therapy-nj" className="text-forest hover:text-forest-dark underline">adult ADHD therapy in New Jersey</Link> page for more specifics.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">What a CogFun engagement looks like</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            CogFun is a structured occupational therapy protocol of at least 25 sessions. The first phase builds a shared, accurate picture of how ADHD shows up in your specific life, without judgment and without generic explanations you have already heard.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-4">
            From there, the work moves through identifying what strategies you already use, refining and expanding the ones that actually help, and building a self-management plan that does not fall apart when the sessions end.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            The core focus is <Link href="/executive-function-adults" className="text-forest hover:text-forest-dark underline">executive function</Link>: task initiation, time awareness, follow-through, and the emotional regulation challenges that come with those. If medication is part of your picture, <Link href="/adhd-medication-not-enough" className="text-forest hover:text-forest-dark underline">CogFun works alongside it</Link> to address what medication alone does not cover.
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
          <h2 className="text-3xl font-serif text-forest mb-4">Ready to get started in New York?</h2>
          <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
            Book a free 15-minute consultation to talk through what you are dealing with and whether CogFun telehealth therapy is the right fit for you.
          </p>
          <Link
            href="/contact"
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
