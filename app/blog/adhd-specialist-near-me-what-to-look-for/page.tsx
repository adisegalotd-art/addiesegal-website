import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Searching for an ADHD Specialist Near You? Here's What to Actually Look For",
  description: 'Understanding different ADHD providers, what credentials matter, and why specialty training in ADHD makes a difference.',
  keywords: 'ADHD specialist near me, therapist for ADHD, therapists specializing in ADHD, ADHD therapist aid',
};

export default function BlogPost() {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          Searching for an ADHD Specialist Near You? Here's What to Actually Look For
        </h1>
        <p className="text-gray-600 mb-8">Published on Addie Segal's blog</p>

        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            When you start looking for ADHD help, the field feels confusing. There are psychiatrists, psychologists, therapists, coaches, occupational therapists—and they all claim to specialize in ADHD. What's the difference? Who actually should you work with?
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Different Types of ADHD Providers</h2>
          
          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Psychiatrist</h3>
          <p>
            Psychiatrists are medical doctors who specialize in mental health. They can diagnose ADHD and prescribe medication. If you need a diagnosis or are considering medication, you need to see a psychiatrist (or other medical doctor like a primary care physician). This is the only group legally able to prescribe ADHD medications.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Psychologist</h3>
          <p>
            Psychologists have doctoral degrees in psychology. They can conduct ADHD evaluations and testing, and they provide therapy. Many psychologists are trained in CBT or other evidence-based therapies. They cannot prescribe medication (except in a few states with prescribing authority).
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Therapist / Counselor</h3>
          <p>
            Therapists have various credentials (LMHC, LCSW, etc.) and can provide therapy for ADHD-related issues like anxiety or depression. However, not all therapists have specific training in ADHD or executive function.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">ADHD Coach</h3>
          <p>
            ADHD coaches aren't regulated or licensed in most places. They focus on accountability, motivation, goal-setting, and practical strategies. Coaching can be helpful, but it's not clinical treatment.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Occupational Therapist (OT)</h3>
          <p>
            Occupational therapists are licensed healthcare providers with specialized training in functional daily living. An OT specializing in ADHD (especially one trained in evidence-based protocols like CogFun) addresses the practical, functional challenges ADHD creates—task initiation, time management, organization, emotional regulation.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">What Actually Matters: Specialization</h2>
          <p>
            The most important factor isn't the credential—it's whether the provider has specific, ongoing training in adult ADHD. A therapist who specializes in ADHD is going to be more effective than a generalist psychologist. An occupational therapist trained in ADHD protocols like CogFun will address functional challenges that a general therapist might miss.
          </p>

          <p>
            Ask potential providers:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>How much of your practice is focused on adult ADHD?</li>
            <li>What training or certifications do you have in ADHD?</li>
            <li>What specific approach or protocol do you use?</li>
            <li>Have you worked with people like me (with my specific challenges)?</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">What You Actually Need (Usually)</h2>
          <p>
            Most adults with ADHD benefit from a team approach:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><strong>Psychiatrist or MD</strong> — If you're considering medication or need diagnosis</li>
            <li><strong>Therapist or psychologist</strong> — For emotional regulation, anxiety, depression, trauma</li>
            <li><strong>Occupational therapist or coach</strong> — For functional daily-life strategies and executive function</li>
          </ul>

          <p>
            One provider might fill multiple roles, but usually you need different expertise for different layers of ADHD.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Why Specialty Matters in Occupational Therapy</h2>
          <p>
            Not all occupational therapists specialize in adult ADHD. An OT trained in CogFun—an evidence-based protocol specifically designed for adults with ADHD—brings specialized expertise that a generalist OT doesn't have.
          </p>

          <p>
            If you're looking for functional support with daily-life challenges from ADHD, make sure your OT has specific ADHD training.
          </p>

          <div className="bg-warm-gray p-6 rounded-lg mt-8 border-l-4 border-sage">
            <p className="font-semibold text-text-dark mb-2">Looking for an ADHD specialist trained in evidence-based protocols?</p>
            <p className="text-gray-700 mb-4">
              I'm an occupational therapist trained in CogFun, the only evidence-based OT protocol developed specifically for adults with ADHD. Schedule a free consultation to discuss whether occupational therapy is right for you.
            </p>
            <Link
              href="/services"
              className="text-sage font-semibold hover:text-muted-blue"
            >
              Learn about specialized CogFun therapy →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
