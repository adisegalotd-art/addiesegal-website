import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Is CogFun? The Only Evidence-Based OT Protocol for Adult ADHD',
  description: 'Learn about CogFun, the only evidence-based occupational therapy protocol developed specifically for adults with ADHD, backed by peer-reviewed research.',
  keywords: 'occupational therapy ADHD, ADHD therapy, ADHD OT, CogFun protocol',
};

export default function BlogPost() {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          What Is CogFun? The Only Evidence-Based OT Protocol for Adult ADHD
        </h1>
        <p className="text-gray-600 mb-8">Published on Addie Segal's blog</p>

        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            If you've been searching for ADHD help, you've probably encountered a lot of options: coaching, therapy, medication, meditation apps, productivity systems. Most of these can be helpful—but there's one approach that's specifically designed for how ADHD actually works at the neurological level: occupational therapy using the CogFun protocol.
          </p>

          <p>
            CogFun is a structured, 25-session occupational therapy intervention developed by Adina Maeir at the Hebrew University of Jerusalem. It's one of the only protocols of its kind with published peer-reviewed research demonstrating its effectiveness for adults with ADHD.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">What Makes CogFun Different</h2>
          <p>
            Most ADHD interventions focus on either the neurological level (medication) or the emotional/thought level (therapy, coaching). CogFun works at a different layer entirely: the practical, functional, daily-life layer.
          </p>

          <p>
            It's the difference between knowing you should start your work, understanding why you struggle to start it, and actually developing a concrete system that makes starting easier for your specific brain.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">The Four Units of CogFun</h2>
          <p>
            CogFun is structured around four key units:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><strong>Shared learning</strong> — Understanding your personal ADHD profile and how it shows up across your life</li>
            <li><strong>Strategy acquisition</strong> — Identifying which strategies you're already using that actually work</li>
            <li><strong>General strategy development</strong> — Expanding strategies across situations and building sustainable systems</li>
            <li><strong>Integration and self-management</strong> — Making everything stick beyond the therapy</li>
          </ul>

          <p>
            Each unit is collaborative—built around your specific life, your patterns, and your needs.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">The Research Behind CogFun</h2>
          <p>
            CogFun isn't just theoretically sound—it's backed by published research in peer-reviewed journals:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>Kastner et al. (2022) in the American Journal of Occupational Therapy demonstrated the effectiveness of CogFun for adults with ADHD</li>
            <li>Budman, Maeir, et al. (2025) published follow-up research further validating the protocol</li>
          </ul>

          <p>
            This research matters. It means you're not just trying something that sounds good—you're using an intervention with scientific evidence behind it.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">How It Differs From Coaching and CBT</h2>
          <p>
            <strong>ADHD Coaching</strong> is focused on motivation, accountability, and goal-setting. It helps you decide what to do and stay motivated to do it. But it doesn't address the neurological barriers to task initiation or executive function.
          </p>

          <p>
            <strong>CBT (Cognitive Behavioral Therapy)</strong> is excellent for anxiety and depression, and it can help with some ADHD challenges. But it's not specifically designed for the functional, practical daily-life challenges that ADHD creates.
          </p>

          <p>
            <strong>Occupational therapy using CogFun</strong> is specifically designed around how ADHD neurobiology works. It addresses the concrete barriers to functioning—task initiation, time management, emotional dysregulation—and builds practical, personalized systems that actually work for your brain.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Why Occupational Therapy Is the Right Lens</h2>
          <p>
            Occupational therapy looks at functional daily life—work, home, self-care, relationships. That's exactly where ADHD creates the most friction. An occupational therapist trained in CogFun understands not just the diagnosis, but how to help you function better in your actual life.
          </p>

          <p>
            Whether you're newly diagnosed, long-diagnosed but struggling, on medication but still impaired, or in therapy that isn't addressing the practical piece—CogFun is designed for you.
          </p>

          <div className="bg-warm-gray p-6 rounded-lg mt-8 border-l-4 border-sage">
            <p className="font-semibold text-text-dark mb-2">Ready to explore evidence-based ADHD treatment?</p>
            <p className="text-gray-700 mb-4">
              Schedule a free 20-minute consultation to discuss whether CogFun occupational therapy is right for you.
            </p>
            <Link
              href="/services"
              className="text-sage font-semibold hover:text-muted-blue"
            >
              Learn about CogFun services →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
