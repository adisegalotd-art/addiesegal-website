import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Why You're Not Lazy: Understanding Task Initiation and ADHD",
  description: 'The neuroscience of task initiation, why willpower fails with ADHD, and how CogFun addresses this functionally.',
  keywords: 'task initiation ADHD, is procrastination a sign of ADHD, how to focus with ADHD',
};

export default function BlogPost() {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          Why You're Not Lazy: Understanding Task Initiation and ADHD
        </h1>
        <p className="text-gray-600 mb-8">Published on Addie Segal's blog</p>

        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            You're not lazy. You're not unmotivated. You're not lacking willpower. You have ADHD, and your brain genuinely struggles with task initiation.
          </p>

          <p>
            Task initiation—the ability to start a task—is one of the most common and most distressing symptoms of adult ADHD. You know exactly what you need to do. You want to do it. And yet, starting it feels like pushing through concrete.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">The Neuroscience of Task Initiation</h2>
          <p>
            When your brain has ADHD, the executive function system—the part responsible for planning, starting, organizing, and executing tasks—doesn't work the same way. Specifically, the brain's activation system, the dopaminergic system, requires more urgency or interest to get going.
          </p>

          <p>
            This isn't laziness. It's a literal neurological difference. It's like having a car that needs a running start instead of an ignition. The engine is fine. The car is fine. It just needs a different process to get started.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Why Willpower Fails</h2>
          <p>
            Willpower works by overriding impulses—telling yourself "no" to the thing you want to do and "yes" to the thing you should do. But task initiation isn't about impulse control. It's about activation.
          </p>

          <p>
            You can't willpower your way into activating your brain. You can't just decide harder to start. That's like trying to willpower your heart into beating faster. It's not an impulse problem. It's a neurological activation problem.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">What Actually Works: Functional Strategies</h2>
          <p>
            Instead of relying on willpower, functional strategies work with how your ADHD brain actually works. Some strategies that can help:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>External urgency (deadlines, accountability, someone waiting)</li>
            <li>Interest and novelty (making tasks more engaging or interesting)</li>
            <li>Environmental setup (removing friction to starting)</li>
            <li>Body-based activation (movement, cold water, stimulation)</li>
            <li>Time pressure or hyperfocus triggers</li>
          </ul>

          <p>
            But these aren't one-size-fits-all. What works for you depends on your specific ADHD profile, your life situation, and the task at hand.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">How CogFun Addresses Task Initiation</h2>
          <p>
            CogFun is specifically designed to address functional daily-life challenges like task initiation. Instead of generic tips, CogFun helps you:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>Understand your specific task initiation barriers</li>
            <li>Identify strategies that actually work for you</li>
            <li>Build systems that make starting easier</li>
            <li>Troubleshoot when things aren't working</li>
            <li>Develop sustainable approaches that fit your life</li>
          </ul>

          <p>
            The goal isn't to "fix" your task initiation. It's to understand how it works for you and build practical systems that work with your brain, not against it.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">The Bottom Line</h2>
          <p>
            Task initiation difficulty is a feature of ADHD, not a character flaw. If you struggle to start tasks, even things you want to do, that's not laziness. That's neurobiology.
          </p>

          <p>
            The good news? With the right approach—evidence-based occupational therapy focused on functional strategies—you can build systems that make starting easier.
          </p>

          <div className="bg-warm-gray p-6 rounded-lg mt-8 border-l-4 border-sage">
            <p className="font-semibold text-text-dark mb-2">Ready to address your task initiation challenges?</p>
            <p className="text-gray-700 mb-4">
              Schedule a free consultation to discuss how occupational therapy can help you build functional strategies that work for your ADHD.
            </p>
            <Link
              href="/services"
              className="text-sage font-semibold hover:text-muted-blue"
            >
              Explore CogFun therapy →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
