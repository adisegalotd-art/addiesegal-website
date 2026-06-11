import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ADHD Symptoms in Adult Women: Why It Looks Different Than You Think',
  description: 'How ADHD presents differently in women, masking, late diagnosis, and emotional dysregulation.',
  keywords: 'symptoms of ADHD in adult women, ADHD symptoms women, untreated ADHD in female adults',
};

export default function BlogPost() {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          ADHD Symptoms in Adult Women: Why It Looks Different Than You Think
        </h1>
        <p className="text-gray-600 mb-8">Published on Addie Segal's blog</p>

        <div className="prose prose-invert max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            The ADHD stereotype is a hyperactive boy who can't sit still. It's noisy, obvious, disruptive. But if you're an adult woman with ADHD, you might not look like that at all. You might look anxious, disorganized, perfectionistic, or overly emotional. That's why so many women are diagnosed with ADHD late—or never.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">How ADHD Presents Differently in Women</h2>
          
          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Inattention Over Hyperactivity</h3>
          <p>
            While men with ADHD are often diagnosed for hyperactivity and impulsivity, women tend to have more inattentive presentations. This shows up as:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Difficulty focusing on boring tasks</li>
            <li>Daydreaming or zoning out</li>
            <li>Losing track of time</li>
            <li>Forgetting conversations or instructions</li>
          </ul>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Internal Hyperactivity</h3>
          <p>
            Women's hyperactivity is often internal, not external. A busy, racing mind, overthinking, perfectionism, and an inability to slow down or relax. This looks like anxiety, not ADHD.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Emotional Intensity</h3>
          <p>
            ADHD in women often shows up as emotional sensitivity, mood swings, and intense emotional reactions to situations. This gets labeled as being "too emotional" or having mood issues, not ADHD.
          </p>

          <h3 className="text-xl font-semibold text-text-dark mt-6 mb-3">Organization and Time Management Struggles</h3>
          <p>
            Women with ADHD often struggle significantly with organization, time management, and executive function. But this is sometimes attributed to perfectionism ("you're too hard on yourself") rather than ADHD.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Masking and Compensation</h2>
          <p>
            Girls are socialized to be quiet, organized, and compliant. So girls with ADHD learn to mask. They develop workarounds—lists, reminders, asking others for help, staying busy to manage anxiety. By adulthood, these compensations are so ingrained that the ADHD isn't visible.
          </p>

          <p>
            The problem? Masking is exhausting. And it doesn't actually address the underlying ADHD. You're functioning despite your ADHD, not with it managed.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Why This Matters</h2>
          <p>
            If your ADHD isn't recognized, you don't get treatment. You interpret your struggles as personal failures—you're not trying hard enough, you're disorganized, you're too sensitive. You feel broken.
          </p>

          <p>
            But you're not broken. Your brain is wired differently. And there is treatment—including evidence-based occupational therapy—that can help.
          </p>

          <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">Seeking Diagnosis</h2>
          <p>
            If you're a woman and think you might have ADHD, find a provider experienced with adult women with ADHD. Many general practitioners or therapists don't catch it. You need someone who:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Understands how ADHD looks different in women</li>
            <li>Asks about history of anxiety, perfectionism, and emotional regulation issues</li>
            <li>Explores organizational and time management struggles</li>
            <li>Recognizes that functioning doesn't mean you don't have ADHD</li>
          </ul>

          <div className="bg-warm-gray p-6 rounded-lg mt-8 border-l-4 border-sage">
            <p className="font-semibold text-text-dark mb-2">Thinking you might have ADHD but never been diagnosed?</p>
            <p className="text-gray-700 mb-4">
              Evidence-based occupational therapy can help address the functional daily-life challenges, regardless of whether you have a formal diagnosis. Schedule a free consultation to discuss your experience.
            </p>
            <Link
              href="/services"
              className="text-sage font-semibold hover:text-muted-blue"
            >
              Explore occupational therapy support →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
