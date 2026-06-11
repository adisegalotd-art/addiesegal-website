import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ADHD Telehealth Therapy: What It Is and Why It Works for Adults',
  description: 'How telehealth ADHD therapy works, the benefits for adults, and what to expect in online occupational therapy sessions.',
  keywords: 'ADHD telehealth, ADHD treatment online, telehealth ADHD therapy NJ, ADHD therapist NJ',
};

export default function BlogPost() {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          ADHD Telehealth Therapy: What It Is and Why It Works for Adults
        </h1>
        <p className="text-gray-600 mb-8">Published on Addie Segal's blog</p>

        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Finding ADHD treatment can be challenging enough without adding a commute to the equation. If you've been considering ADHD therapy, telehealth might be exactly what you need—and research shows it works just as well as in-person sessions.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">How Telehealth ADHD Therapy Works</h2>
          <p>
            Telehealth is simply clinical therapy delivered via secure video. You sit in a comfortable location, and your therapist or occupational therapist joins via video call. All the same clinical work happens—assessment, strategy development, troubleshooting—just through a screen instead of in an office.
          </p>

          <p>
            The logistics are straightforward: you need a device with a camera and internet connection. That's it. Many people find they actually prefer the comfort and control of their own environment.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Why Telehealth Works Particularly Well for ADHD</h2>
          
          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">No Commute = More Likely to Show Up</h3>
          <p>
            Executive dysfunction makes getting anywhere on time difficult. No commute means you're more likely to actually make it to your appointment. This matters more than you might think.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Flexible Scheduling</h3>
          <p>
            Many telehealth providers offer more flexible scheduling than in-person offices. Early mornings, evenings, or between meetings—whatever works for your life.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Reduced Friction</h3>
          <p>
            With ADHD, friction is the enemy. The easier it is to do something, the more likely you'll do it. Telehealth removes barriers.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Your Environment</h3>
          <p>
            You can do your session from a comfortable, familiar space. Many people actually find this helps them open up and be more real about their struggles.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">What the Research Says</h2>
          <p>
            Studies comparing telehealth to in-person therapy show equivalent outcomes across various conditions, including ADHD-related anxiety and depression. For adults with ADHD specifically, telehealth has the added benefit of removing executive function barriers—one less thing to organize and complete.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">What to Expect in Telehealth Sessions</h2>
          
          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">First Session</h3>
          <p>
            Your first session will be an intake—getting to know you, understanding your ADHD profile, your specific challenges, your goals. Come with as much information as you can (diagnosis date, medications, history) but don't stress about having everything perfect.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Ongoing Sessions</h3>
          <p>
            In occupational therapy focused on ADHD (like CogFun), you'll discuss real daily situations, identify barriers and strategies, troubleshoot what's not working, and build personalized systems. It's collaborative and practical.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Between Sessions</h3>
          <p>
            You'll try strategies and systems, then report back on what worked, what didn't, and why. It's an ongoing feedback loop based on your real life.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Who Offers Telehealth ADHD Therapy</h2>
          <p>
            Many providers offer telehealth, but make sure the provider has specific ADHD training. A therapist specializing in ADHD is better than a generalist. An occupational therapist trained in CogFun—an evidence-based protocol for adult ADHD—is ideal for functional daily-life challenges.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Getting Started</h2>
          <p>
            Start by reaching out to providers and asking:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Do you offer telehealth?</li>
            <li>What's your specific training in adult ADHD?</li>
            <li>Are you currently accepting new clients?</li>
            <li>Can I schedule a free consultation first?</li>
          </ul>

          <div className="bg-warm-gray p-6 rounded-lg mt-8 border-l-4 border-sage">
            <p className="font-semibold text-text-dark mb-2">Ready to try telehealth ADHD therapy?</p>
            <p className="text-gray-700 mb-4">
              I offer telehealth CogFun occupational therapy across New Jersey and New York. Schedule a free 20-minute consultation to see if it's the right fit.
            </p>
            <Link
              href="/services"
              className="text-sage font-semibold hover:text-muted-blue"
            >
              Book a free consultation →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
