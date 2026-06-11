import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "ADHD and Anxiety: What's the Difference and Can You Have Both?",
  description: 'Understanding the overlap between ADHD and anxiety, how to tell them apart, and how treatment helps when both are present.',
  keywords: 'does ADHD cause anxiety, do I have ADHD or anxiety, can you have both ADHD and anxiety',
};

export default function BlogPost() {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          ADHD and Anxiety: What's the Difference and Can You Have Both?
        </h1>
        <p className="text-gray-600 mb-8">Published on Addie Segal's blog</p>

        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            If you have ADHD, there's a good chance you also struggle with anxiety. And if you have anxiety, you might wonder if that's actually ADHD. They're different conditions, but they look similar and often co-occur.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">ADHD vs. Anxiety: What's the Difference</h2>
          
          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">ADHD</h3>
          <p>
            ADHD is about difficulty with executive function—starting tasks, organizing thoughts, maintaining attention, managing time, emotional regulation. It's about what you do and how you function. The core issue is activation and regulation, not fear or worry.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Anxiety</h3>
          <p>
            Anxiety is about worry, fear, and anticipation of future threats. You're thinking about what might go wrong and feeling afraid. The core issue is apprehension, not activation.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Why They Look Similar</h2>
          
          <p>
            <strong>Racing thoughts:</strong> ADHD causes distractibility and jumping between thoughts. Anxiety causes repetitive, worried thoughts. Both feel like a busy mind.
          </p>

          <p>
            <strong>Restlessness:</strong> ADHD causes physical restlessness (fidgeting, difficulty sitting still). Anxiety causes physical agitation and tension. Both feel uncomfortable.
          </p>

          <p>
            <strong>Difficulty sleeping:</strong> ADHD makes it hard to transition to sleep (mind won't settle). Anxiety makes it hard to fall asleep (worry keeps you awake). Both result in poor sleep.
          </p>

          <p>
            <strong>Difficulty focusing:</strong> ADHD causes distractibility. Anxiety causes worry-focused attention (you can't stop thinking about the worry). Both feel like you can't focus on what you want to focus on.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Can You Have Both?</h2>
          <p>
            Absolutely. Many people have both ADHD and anxiety. In fact, the rates of comorbidity are high. You might have had ADHD your whole life and developed anxiety because of it—years of struggling, failing to meet expectations, shame, and a sense that you can't do what others can do easily creates anxiety.
          </p>

          <p>
            Or you might have both as independent conditions that happen to occur together.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">How Treatment Differs</h2>
          
          <p>
            <strong>For anxiety:</strong> Therapy (especially CBT), sometimes medication, and anxiety-management strategies.
          </p>

          <p>
            <strong>For ADHD:</strong> Medication (sometimes), occupational therapy focused on functional strategies, structure, and external support.
          </p>

          <p>
            <strong>For both:</strong> You usually need treatment for both. Treating anxiety doesn't fix ADHD executive function. Treating ADHD doesn't reduce anxiety. A comprehensive approach addresses both layers.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">The Functional Approach</h2>
          <p>
            When you work with an occupational therapist on ADHD, even if you also have anxiety, the focus is on functional daily life: how to initiate tasks, manage time, regulate emotions. These strategies often reduce anxiety as a side effect—when you're functioning better and completing things, anxiety naturally decreases.
          </p>

          <div className="bg-warm-gray p-6 rounded-lg mt-8 border-l-4 border-sage">
            <p className="font-semibold text-text-dark mb-2">Struggling with both ADHD and anxiety?</p>
            <p className="text-gray-700 mb-4">
              Evidence-based occupational therapy can help you build functional strategies that address the ADHD piece, which often helps with anxiety as well. Schedule a free consultation to discuss your specific situation.
            </p>
            <Link
              href="/services"
              className="text-sage font-semibold hover:text-muted-blue"
            >
              Explore occupational therapy for ADHD →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
