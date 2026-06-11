import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Does ADHD Get Worse With Age? What Adults Need to Know',
  description: 'Understanding how ADHD changes across adulthood, why it often feels harder over time, and what treatment helps.',
  keywords: 'does ADHD get worse with age, can ADHD get worse with age, untreated ADHD in adults',
};

export default function BlogPost() {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          Does ADHD Get Worse With Age? What Adults Need to Know
        </h1>
        <p className="text-gray-600 mb-8">Published on Addie Segal's blog</p>

        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            You've probably heard that ADHD is a childhood condition that kids outgrow. That's not true—but many adults experience ADHD symptoms that feel worse now than they did when they were younger. Why?
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">ADHD Doesn't Go Away—But Life Changes</h2>
          <p>
            ADHD is a neurodevelopmental condition. The brain wiring doesn't change. You don't "outgrow" ADHD. But the external structure that made ADHD manageable in your younger years often disappears.
          </p>

          <p>
            In school, there were schedules, deadlines, adults telling you what to do, consequences you could see immediately. That external structure compensated for ADHD challenges. As an adult, you have to create that structure yourself.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Why ADHD Often Feels Worse in Adulthood</h2>
          
          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Fewer External Structures</h3>
          <p>
            School gave you deadlines, schedules, and immediate feedback. Work might too—but there's much more self-direction expected. Home life? Entirely self-directed. This is harder for ADHD brains.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">More Demands, More Complex Tasks</h3>
          <p>
            Adult life requires sustained attention to boring, not-immediately-rewarding tasks: insurance paperwork, retirement planning, household maintenance, long-term projects. These are exactly the things ADHD brains struggle with most.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">The Cumulative Effect of Unmanaged ADHD</h3>
          <p>
            If you've been undiagnosed or untreated, years of ADHD can accumulate—unpaid bills, missed opportunities, relationship strain, chronic shame. The compound effect can feel worse than it ever did.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Sleep, Health, Stress Get Worse</h3>
          <p>
            ADHD affects sleep quality. Adult life is often more stressful. Both of these make executive function worse. You're not getting better; you're working with worse conditions.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">What Helps: Treatment Addresses Real Life</h2>
          <p>
            ADHD medication helps many people—it's like adding volume to that weak internal signal. Therapy helps with emotional regulation and trauma. But without functional strategies built for your actual adult life, you're still struggling.
          </p>

          <p>
            Occupational therapy focused on ADHD—especially evidence-based protocols like CogFun—addresses exactly this: building functional systems for the real demands of your adult life.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">The Good News</h2>
          <p>
            ADHD doesn't get worse neurobiologically with age. But it often becomes more apparent because life demands increase. The better news? Structured, evidence-based treatment can help. You're not stuck with the dysfunction you've been experiencing.
          </p>

          <div className="bg-warm-gray p-6 rounded-lg mt-8 border-l-4 border-sage">
            <p className="font-semibold text-text-dark mb-2">Ready to address ADHD symptoms that feel unmanageable?</p>
            <p className="text-gray-700 mb-4">
              Evidence-based occupational therapy can help you build functional systems for your adult life. Schedule a free consultation to explore your options.
            </p>
            <Link
              href="/services"
              className="text-sage font-semibold hover:text-muted-blue"
            >
              Learn about adult ADHD treatment →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
