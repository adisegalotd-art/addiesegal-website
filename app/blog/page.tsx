import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from './content';

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

export default function BlogIndex() {
  return (
    <div className="pt-8">
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface to-cream py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-4">
            ADHD Resources and Insights
          </h1>
          <p className="text-lg text-muted">
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
                className="bg-surface p-6 rounded-3xl border-l-4 border-forest shadow-soft hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-forest mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-forest-dark transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-forest font-semibold hover:text-forest-dark transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-forest mb-6">
            Ready to dive deeper?
          </h2>
          <p className="text-muted mb-8">
            Explore how CogFun can help you with your specific ADHD challenges.
          </p>
          <Link
            href="/services"
            className="px-8 py-3 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors inline-block"
          >
            Learn About CogFun Services
          </Link>
        </div>
      </section>
    </div>
  );
}
