import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Executive Function Support for Adults with ADHD | Addie Segal OTD | NJ & NY',
  description: 'CogFun occupational therapy helps adults with ADHD build reliable executive function skills for task initiation, time management, and follow-through in everyday life.',
  keywords: 'executive function coaching adults, adult executive function help, task initiation ADHD, time management ADHD, executive dysfunction adults',
  alternates: {
    canonical: 'https://addiesegal.com/executive-function-adults',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Executive Function Support for Adults with ADHD | Addie Segal OTD',
    description: 'CogFun occupational therapy helps adults with ADHD build reliable executive function skills for task initiation, time management, and follow-through.',
    url: 'https://addiesegal.com/executive-function-adults',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Executive Function Support for Adults with ADHD | Addie Segal OTD',
    description: 'CogFun occupational therapy helps adults with ADHD build reliable executive function skills for task initiation, time management, and follow-through.',
  },
};

export default function ExecutiveFunctionAdults() {
  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream pt-6 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-4">
            Executive Function Support for Adults with ADHD
          </h1>
          <p className="text-lg text-muted max-w-3xl">
            Most adults with ADHD understand their brain well. They have done the reading, heard the explanations, know what executive function means. The problem is that understanding and having a system that works reliably are two different things.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">What executive function actually means in daily life</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Executive function is not one thing. It is a cluster of mental processes that work together to turn an intention into an action: deciding to start a task, holding the steps in working memory, tracking time, switching between demands, and staying engaged long enough to finish.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            For adults with ADHD, these processes are inconsistent. The skill is there. The access to it is not reliable. That is why the same person can breeze through a high-stakes project at midnight and completely stall on a simple email for three days.
          </p>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-6">Where things tend to break</h2>
          <div className="space-y-6">
            <div className="bg-cream p-6 rounded-3xl shadow-soft">
              <h3 className="font-semibold text-forest mb-2 text-lg">Task initiation</h3>
              <p className="text-muted">Starting something, even something you want to do, requires a signal that ADHD brains do not always generate reliably. Without urgency, novelty, or strong personal relevance, the start never comes.</p>
            </div>
            <div className="bg-cream p-6 rounded-3xl shadow-soft">
              <h3 className="font-semibold text-forest mb-2 text-lg">Time perception</h3>
              <p className="text-muted">ADHD changes how the brain experiences time. Deadlines arrive as a surprise. Hours vanish without warning. This is not inattention to time. It is a difference in how time is felt.</p>
            </div>
            <div className="bg-cream p-6 rounded-3xl shadow-soft">
              <h3 className="font-semibold text-forest mb-2 text-lg">Follow-through</h3>
              <p className="text-muted">Starting is one problem. Staying with a task through the boring middle, picking it back up after an interruption, and actually finishing are separate challenges. Each requires a slightly different kind of executive support.</p>
            </div>
            <div className="bg-cream p-6 rounded-3xl shadow-soft">
              <h3 className="font-semibold text-forest mb-2 text-lg">Managing competing demands</h3>
              <p className="text-muted">When multiple things need attention, prioritizing and transitioning between them draws on executive resources that are already strained. This is often when things fall through the cracks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">Why awareness alone is not treatment</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            A lot of ADHD support stops at explanation. You learn what is happening in your brain, and that is genuinely useful. But awareness does not change the moment when you are sitting at your desk, knowing you need to start, and your brain will not cooperate.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Functional skill-building works differently. It looks at the actual situations where things break down, identifies what strategies already help even partially, and builds on those in a structured way. The goal is not more self-knowledge. It is more reliable daily function.
          </p>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-forest mb-4">How CogFun addresses executive function</h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            CogFun is a structured occupational therapy protocol of at least 25 sessions designed specifically for adults with ADHD. Rather than teaching generic productivity techniques, it starts with your real routines: where you get stuck, what you already do that helps, and what the environment around you makes easier or harder.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Sessions progress through four phases: building an accurate picture of your ADHD, identifying and refining strategies, expanding those strategies across different situations, and building a self-management plan that holds after the protocol ends.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            This is not coaching or motivation work. It is occupational therapy focused on function, and it is available via telehealth across New Jersey and New York. If medication is also part of your care, CogFun works alongside it to address the functional layer that medication alone often does not cover. You can also read more about <Link href="/adhd-medication-not-enough" className="text-forest hover:text-forest-dark underline">when medication might not be enough</Link> and what occupational therapy adds.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-forest mb-4">Ready to work on your daily functioning?</h2>
          <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
            Book a free 15-minute consultation to talk through what is getting in the way and whether CogFun occupational therapy is the right fit.
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
