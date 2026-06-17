import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'When ADHD Medication Might Not Be Enough | Occupational Therapy | Addie Segal OTD',
  description: 'Medication helps many adults with ADHD manage focus and impulsivity. CogFun occupational therapy addresses the daily functioning gap that medication alone may not cover.',
  keywords: 'adhd medication not working, adhd help besides medication, non-medication adhd support, adhd occupational therapy, adhd beyond medication',
  alternates: {
    canonical: 'https://addiesegal.com/adhd-medication-not-enough',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'When ADHD Medication Might Not Be Enough | Addie Segal OTD',
    description: 'Medication helps many adults with ADHD manage focus and impulsivity. CogFun occupational therapy addresses the daily functioning gap that medication alone may not cover.',
    url: 'https://addiesegal.com/adhd-medication-not-enough',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'When ADHD Medication Might Not Be Enough | Addie Segal OTD',
    description: 'Medication helps many adults with ADHD manage focus and impulsivity. CogFun occupational therapy addresses the daily functioning gap that medication alone may not cover.',
  },
};

export default function AdhdMedicationNotEnough() {
  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream pt-6 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-4">
            When ADHD Medication Might Not Be Enough
          </h1>
          <p className="text-lg text-muted max-w-3xl">
            Medication is a genuine tool for many adults with ADHD. It reduces noise, improves focus, and takes the edge off impulsivity. And for some people, a different kind of support is still needed alongside it.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">What medication does well</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Stimulant and non-stimulant medications for ADHD work by increasing the availability of dopamine and norepinephrine in the brain. For many adults, this translates to better sustained attention, reduced impulsivity, and a quieter internal environment.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            That is a meaningful difference. People on effective medication often describe being able to sit with a task longer, feel less reactive, and think more clearly under pressure. Medication is a legitimate and well-researched part of ADHD care.
          </p>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">The gap that often remains</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            What medication does not do is build skills. It does not teach you how to start a task you have been avoiding for two weeks. It does not create a system for remembering what to do next when your day falls apart. It does not help you make sense of why you can do some things easily and not others.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-4">
            The gap between knowing what you need to do and actually doing it consistently is a functional problem. It involves habits, routines, environment, and strategy, not just neurochemistry.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            This is why many adults who are well-medicated still feel like they are struggling to keep up. The medication is doing its job. There is just a separate layer of work that it was never designed to do.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-6">Where functional skill-building fits in</h2>
          <div className="space-y-6">
            <div className="bg-surface p-6 rounded-3xl shadow-soft">
              <h3 className="font-semibold text-forest mb-2 text-lg">Routines and structure</h3>
              <p className="text-muted">Medication can improve your capacity to follow a routine, but the routine still has to be built. That requires looking at your real life, your real schedule, and your real patterns, not a generic template.</p>
            </div>
            <div className="bg-surface p-6 rounded-3xl shadow-soft">
              <h3 className="font-semibold text-forest mb-2 text-lg">Task initiation</h3>
              <p className="text-muted">Even with medication, many adults with ADHD still struggle to start specific kinds of tasks, especially ones that feel uncertain, boring, or emotionally loaded. Occupational therapy works on the strategies that help in those exact moments. Learn more about <Link href="/executive-function-adults" className="text-forest hover:text-forest-dark underline">executive function support for adults</Link>.</p>
            </div>
            <div className="bg-surface p-6 rounded-3xl shadow-soft">
              <h3 className="font-semibold text-forest mb-2 text-lg">Transitions and follow-through</h3>
              <p className="text-muted">Getting from one thing to the next, picking something back up after an interruption, and finishing what you started all require a kind of bridging that medication helps with but does not fully supply on its own.</p>
            </div>
            <div className="bg-surface p-6 rounded-3xl shadow-soft">
              <h3 className="font-semibold text-forest mb-2 text-lg">Emotional regulation</h3>
              <p className="text-muted">Frustration, overwhelm, and the guilt that builds after a difficult day are part of the ADHD picture. Functional skill-building addresses these alongside the practical habits, rather than treating them separately.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">What CogFun adds</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            CogFun is a structured occupational therapy protocol of at least 25 sessions, developed specifically for adults with ADHD. It is designed to work alongside whatever else is part of your care, including medication.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-4">
            The focus is the daily functioning layer: the habits, strategies, and routines that make it possible to translate your intentions into consistent action. Sessions start with your actual life, not a generic framework, and build from there.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            CogFun is available via telehealth across New Jersey and New York. If you are already working with a prescriber or therapist, occupational therapy fits alongside that care rather than replacing it.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-forest mb-4">Want to talk through what is missing?</h2>
          <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
            Book a free 15-minute consultation to discuss your situation and whether CogFun occupational therapy could help fill the functional gap.
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
