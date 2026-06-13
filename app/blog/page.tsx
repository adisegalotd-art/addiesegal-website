import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from './content';
import { fetchHeroImage } from './hero';

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

export default async function BlogIndex() {
  // Use local heroSrc when available, otherwise fetch from Pexels
  const postsWithImages = await Promise.all(
    blogPosts.map(async (post) => ({
      ...post,
      hero: post.heroSrc
        ? { src: post.heroSrc, alt: post.heroAlt }
        : await fetchHeroImage(post.heroQuery),
    }))
  );

  const featuredPost = postsWithImages[0];
  const otherPosts = postsWithImages.slice(1);

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative h-[340px] sm:h-[420px] overflow-hidden">
        <img
          src="/blog/blog_hero_sunset.jpg"
          alt="Warm sunset light over a calm landscape"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-2 drop-shadow">
            ADHD Resources and Insights
          </h1>
          <p className="text-lg text-white/90">
            Evidence-based articles on adult ADHD, occupational therapy, and the CogFun protocol.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-cream py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <article className="space-y-6">
                {featuredPost.hero ? (
                  <div className="overflow-hidden rounded-2xl shadow-soft">
                    <img
                      src={featuredPost.hero.src}
                      alt={featuredPost.heroAlt}
                      className="w-full h-[300px] sm:h-[400px] object-cover group-hover:opacity-90 transition-opacity"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-forest mb-4 group-hover:text-forest-dark transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-surface rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-shadow h-full flex flex-col">
                  {post.hero ? (
                    <div className="overflow-hidden h-[250px]">
                      <img
                        src={post.hero.src}
                        alt={post.heroAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : null}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-forest mb-3 leading-snug group-hover:text-forest-dark transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-forest font-semibold text-sm group-hover:text-forest-dark transition-colors">
                      Read more →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
