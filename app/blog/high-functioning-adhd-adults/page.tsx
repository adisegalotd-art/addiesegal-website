import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "High-Functioning ADHD: When You Look Fine But Feel Like You're Falling Apart",
  description: 'Understanding high-functioning ADHD, why it goes undiagnosed, and the exhaustion behind successful-looking dysfunction.',
  keywords: 'high functioning ADHD, am I lazy or do I have ADHD, untreated ADHD in female adults',
};

export default function BlogPost() {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          High-Functioning ADHD: When You Look Fine But Feel Like You're Falling Apart
        </h1>
        <p className="text-gray-600 mb-8">Published on Addie Segal's blog</p>

        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            You have a job. You pay your bills. You show up on time (usually). People think you have it together. But behind closed doors, you're barely keeping it together. Your house is a disaster. You're not sleeping. You feel like you're failing at everything. And everyone thinks you're fine.
          </p>

          <p>
            This is high-functioning ADHD.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">What High-Functioning ADHD Actually Is</h2>
          <p>
            High-functioning ADHD doesn't mean you don't have ADHD. It means you've developed coping mechanisms, you're intelligent enough to compensate, or the right circumstances (accountability structure, interesting work) mask your ADHD. It means you function—but at great cost.
          </p>

          <p>
            You're working twice as hard as your peers to achieve the same result. You're exhausted. And you feel like a fraud because you're successful on the outside while drowning on the inside.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Why It Goes Undiagnosed</h2>
          
          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">The Diagnostic Criteria Look for Impairment</h3>
          <p>
            ADHD diagnostic criteria require that symptoms cause impairment in functioning. If you're functioning (even if it feels like barely), you might not meet the diagnostic threshold—especially if you haven't had a professional specifically looking for "high-functioning ADHD."
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">You've Learned to Hide It</h3>
          <p>
            By the time you're an adult, you've often developed sophisticated compensatory strategies. You don't show your struggle to the outside world. You appear fine. So when you finally see a professional, they don't see the ADHD—they see a functional, intelligent person.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Female Presentation Often Gets Missed</h3>
          <p>
            Women with ADHD often present differently than the stereotypical hyperactive male child. Your ADHD shows up as disorganization, difficulty with time management, emotional sensitivity, anxiety—not as bouncing off the walls. This is often attributed to anxiety or perfectionism, not ADHD.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">The Hidden Exhaustion</h2>
          <p>
            High-functioning ADHD is exhausting because you're using every ounce of willpower, intelligence, and compensation strategy just to function at the level everyone else reaches automatically. You're:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Using extreme urgency and panic to meet deadlines</li>
            <li>Hyperfocusing on high-stakes tasks while neglecting everything else</li>
            <li>Keeping detailed systems and lists to compensate for memory issues</li>
            <li>Over-explaining and over-apologizing for mistakes</li>
            <li>Feeling guilty about everything you're not doing perfectly</li>
          </ul>

          <p>
            This sustainability is limited. Eventually, burnout happens.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Treatment for High-Functioning ADHD</h2>
          <p>
            Recognizing that you have ADHD—even though you function—changes everything. It means your struggle isn't a personal failure. And it means you can get treatment specifically designed to reduce the exhaustion and build more sustainable systems.
          </p>

          <p>
            Medication can help if you choose that route. But occupational therapy focused on ADHD is crucial—not to make you more productive, but to help you function in a way that's sustainable and less exhausting.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">The Shift in Perspective</h2>
          <p>
            If you have high-functioning ADHD, you're not lazy or broken. You're intelligent and hardworking—so much so that you've managed to function while fighting your own neurobiology. That takes incredible effort.
          </p>

          <p>
            With the right support, you don't have to function that hard.
          </p>

          <div className="bg-warm-gray p-6 rounded-lg mt-8 border-l-4 border-sage">
            <p className="font-semibold text-text-dark mb-2">Exhausted from compensating for unaddressed ADHD?</p>
            <p className="text-gray-700 mb-4">
              Evidence-based occupational therapy can help you reduce the exhaustion and build sustainable systems. You don't have to white-knuckle your way through life. Schedule a free consultation.
            </p>
            <Link
              href="/services"
              className="text-sage font-semibold hover:text-muted-blue"
            >
              Explore sustainable ADHD strategies →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
