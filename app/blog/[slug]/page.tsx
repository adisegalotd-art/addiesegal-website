import type { Metadata } from 'next';
import type { BlogPost } from '../content';
import { blogPosts, getBlogPost } from '../content';
import { fetchHeroImage } from '../hero';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function getOpenGraph(title: string, description: string, url: string) {
  return {
    title,
    description,
    url,
    type: 'article',
  };
}

function PostContent({ post, hero }: { post: BlogPost; hero: { src: string; alt: string } | null }) {
  return (
    <article className="pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-serif text-forest leading-tight">{post.title}</h1>
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
          <p className="text-xs text-muted mt-10 pt-6 border-t border-surface-strong leading-relaxed">
            This post is for informational purposes and is not a substitute for individualized clinical assessment.
          </p>
        </div>
      </div>
    </article>
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
