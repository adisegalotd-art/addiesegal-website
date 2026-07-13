import type { MetadataRoute } from 'next';
import { blogPosts } from './blog/content';

const BASE_URL = 'https://addiesegal.com';

type StaticRoute = {
  path: string;
  lastModified: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
};

const staticRoutes: StaticRoute[] = [
  { path: '/', lastModified: '2026-06-10', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', lastModified: '2026-06-10', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', lastModified: '2026-06-10', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', lastModified: '2026-06-10', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/faq', lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/executive-function-adults', lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/adhd-medication-not-enough', lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/adhd-therapy-nj', lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/adhd-therapy-ny', lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Blog entries are derived from the post list so a new post can never be missed
  // the way adhd-diagnosed-40s-50s was in the hand-maintained sitemap.
  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.dateModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
