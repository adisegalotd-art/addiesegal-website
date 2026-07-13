import type { Metadata } from 'next';
import type { BlogPost } from '../content';
import { blogPosts, getBlogPost } from '../content';
import { fetchHeroImage } from '../hero';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const PERSON_ID = 'https://addiesegal.com/#person';
const BUSINESS_ID = 'https://addiesegal.com/#business';

const CREDENTIAL_LINE =
  'Dr. Addie Segal, OTD, OTR/L. Doctor of Occupational Therapy (Boston University). Licensed occupational therapist in New Jersey and New York. Nine years of clinical practice. Adjunct faculty at Kean University. Trained and mentored by the developer of the CogFun protocol, and leading its implementation for adults in the US.';

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function getOpenGraph(title: string, description: string, url: string) {
  return {
    title,
    description,
    url,
    type: 'article',
  };
}

function getArticleSchema(post: BlogPost, hero: { src: string; alt: string } | null) {
  const url = `https://addiesegal.com/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    ...(hero
      ? { image: hero.src.startsWith('http') ? hero.src : `https://addiesegal.com${hero.src}` }
      : {}),
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@id': PERSON_ID },
    publisher: { '@id': BUSINESS_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: {
      '@type': 'MedicalCondition',
      name: 'Attention deficit hyperactivity disorder',
    },
  };
}

function AuthorCard() {
  return (
    <div className="mt-12 bg-surface p-8 rounded-3xl shadow-soft">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src="/headshot.png"
          alt="Portrait of Dr. Addie Segal"
          className="w-24 h-24 rounded-2xl object-cover object-top flex-shrink-0"
          loading="lazy"
          decoding="async"
        />
        <div className="space-y-4">
          <div>
            <p className="text-lg font-serif text-forest">
              <Link href="/about" className="hover:text-forest-dark underline">
                Dr. Addie Segal, OTD, OTR/L
              </Link>
            </p>
            <p className="text-sm text-muted leading-relaxed mt-2">{CREDENTIAL_LINE}</p>
          </div>
          <Link
            href="https://calendar.app.google/HzfuieaR3hG5nWSX8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors inline-block text-sm"
          >
            Book a free 15-minute consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

function PostContent({ post, hero }: { post: BlogPost; hero: { src: string; alt: string } | null }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema(post, hero)) }}
      />

      <article className="pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            <header className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-serif text-forest leading-tight">{post.title}</h1>
              <p className="text-sm text-muted">
                By{' '}
                <Link href="/about" className="text-forest hover:text-forest-dark underline">
                  Dr. Addie Segal, OTD, OTR/L
                </Link>
                <span className="mx-2">·</span>
                <span>Published {formatDate(post.datePublished)}</span>
                {post.dateModified !== post.datePublished ? (
                  <>
                    <span className="mx-2">·</span>
                    <span>Updated {formatDate(post.dateModified)}</span>
                  </>
                ) : null}
              </p>
              <p className="text-muted text-lg">{post.excerpt}</p>
            </header>

            {hero ? (
              <div className="overflow-hidden rounded-3xl shadow-soft">
                <img src={hero.src} alt={post.heroAlt} className="w-full h-[420px] object-cover" />
              </div>
            ) : null}

            <div className="prose prose-slate max-w-none text-muted leading-relaxed">
              {post.content}
            </div>

            <AuthorCard />

            <p className="text-xs text-muted mt-10 pt-6 border-t border-surface-strong leading-relaxed">
              This post is for informational purposes and is not a substitute for individualized clinical assessment.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-4xl font-serif text-forest mb-4">Post not found</h1>
          <p className="text-muted mb-8">The article you requested does not exist yet.</p>
          <Link href="/blog" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const hero = post.heroSrc
    ? { src: post.heroSrc, alt: post.heroAlt }
    : await fetchHeroImage(post.heroQuery);

  return <PostContent post={post} hero={hero} />;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Blog post not found | Addie Segal OTD',
      description: 'The requested blog article could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://addiesegal.com/blog/${params.slug}`,
    },
    openGraph: getOpenGraph(post.title, post.description, `https://addiesegal.com/blog/${params.slug}`),
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.description,
    },
  };
}
