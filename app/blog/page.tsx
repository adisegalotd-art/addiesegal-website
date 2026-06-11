import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ADHD Blog | Occupational Therapy for Adult ADHD | Addie Segal OTD',
  description: 'Evidence-based articles on adult ADHD, CogFun therapy, executive function, and occupational therapy from Dr. Addie Segal, OTD.',
  keywords: 'ADHD blog, adult ADHD, occupational therapy ADHD, executive function',
  openGraph: {
    title: 'ADHD Blog | Occupational Therapy for Adult ADHD | Addie Segal OTD',
    description: 'Evidence-based articles on adult ADHD, CogFun therapy, executive function, and occupational therapy from Dr. Addie Segal, OTD.',
    url: 'https://addiesegal.com/blog',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'what-is-cogfun-adhd-therapy',
    title: 'What Is CogFun? The Only Evidence-Based OT Protocol for Adult ADHD',
    excerpt: 'Learn what CogFun is, its research basis, and how it differs from other ADHD treatments.',
  },
  {
    slug: 'why-you-are-not-lazy-task-initiation-adhd',
    title: "Why You're Not Lazy: Understanding Task Initiation and ADHD",
    excerpt: 'Understanding the neuroscience behind task initiation difficulties and why willpower alone fails.',
  },
  {
    slug: 'adhd-specialist-near-me-what-to-look-for',
    title: 'Searching for an ADHD Specialist Near You? Here\'s What to Actually Look For',
    excerpt: 'How to find the right ADHD provider and understand different professional credentials.',
  },
  {
    slug: 'adhd-telehealth-therapy-nj-ny',
    title: 'ADHD Telehealth Therapy: What It Is and Why It Works for Adults',
    excerpt: 'The benefits of online ADHD therapy and what to expect in telehealth sessions.',
  },
  {
    slug: 'does-adhd-get-worse-with-age',
    title: 'Does ADHD Get Worse With Age? What Adults Need to Know',
    excerpt: 'How ADHD evolves across adulthood and why it often feels harder over time.',
  },
  {
    slug: 'adhd-and-anxiety-what-is-the-difference',
    title: "ADHD and Anxiety: What's the Difference and Can You Have Both?",
    excerpt: 'Understanding the overlap between ADHD and anxiety and how to tell them apart.',
  },
  {
    slug: 'high-functioning-adhd-adults',
    title: "High-Functioning ADHD: When You Look Fine But Feel Like You're Falling Apart",
    excerpt: 'Why high-functioning ADHD goes undiagnosed and the hidden exhaustion behind the mask.',
  },
  {
    slug: 'adhd-symptoms-women-adults',
    title: 'ADHD Symptoms in Adult Women: Why It Looks Different Than You Think',
    excerpt: 'How ADHD presents differently in women, masking, and why diagnosis often comes late.',
  },
  {
    slug: 'what-is-rsd-adhd',
    title: 'What Is RSD? Rejection Sensitive Dysphoria and ADHD Explained',
    excerpt: 'Understanding rejection sensitive dysphoria and its impact on relationships and work.',
  },
  {
    slug: 'how-to-focus-with-adhd-without-medication',
    title: 'How to Focus With ADHD Without Medication: What Actually Works',
    excerpt: 'Evidence-based non-medication strategies and what makes CogFun different.',
  },
  {
    slug: 'occupational-therapy-adhd-adults',
    title: "Why Occupational Therapy for ADHD Is Different From Everything Else You've Tried",
    excerpt: 'What occupational therapy is and why it\'s the right lens for adult ADHD.',
  },
  {
    slug: 'is-adhd-a-disability',
    title: 'Is ADHD a Disability? What It Means for Adults at Work and in Life',
    excerpt: 'Legal definitions, workplace accommodations, and functional treatment for ADHD.',
  },
  {
    slug: 'adhd-executive-function-daily-life',
    title: 'ADHD and Executive Function: Why Your Brain Struggles With Everyday Tasks',
    excerpt: 'What executive function is, how ADHD disrupts it, and how to rebuild it.',
  },
  {
    slug: 'adhd-mood-swings-emotional-dysregulation',
    title: 'ADHD and Mood Swings: Understanding Emotional Dysregulation',
    excerpt: 'Why ADHD causes emotional dysregulation and what actually helps.',
  },
  {
    slug: 'how-to-get-tested-for-adhd-adults',
    title: 'How to Get Tested for ADHD as an Adult: What You Need to Know',
    excerpt: 'The ADHD diagnostic process and what to do after diagnosis.',
  },
];

export default function BlogIndex() {
  return (
    <div className="pt-8">
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-gray to-cream py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-dark mb-4">
            ADHD Resources and Insights
          </h1>
          <p className="text-lg text-gray-700">
            Evidence-based articles on adult ADHD, occupational therapy, and the CogFun protocol.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-warm-gray p-6 rounded-lg border-l-4 border-sage hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-text-dark mb-3 leading-snug">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-sage transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-sage font-semibold hover:text-muted-blue transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-dark mb-6">
            Ready to dive deeper?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore how CogFun can help you with your specific ADHD challenges.
          </p>
          <Link
            href="/services"
            className="px-8 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-muted-blue transition-colors inline-block"
          >
            Learn About CogFun Services
          </Link>
        </div>
      </section>
    </div>
  );
}
