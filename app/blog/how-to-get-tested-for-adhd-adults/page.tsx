import Link from 'next/link';

export const metadata = {
  title: 'How to Get Tested for ADHD as an Adult: What You Need to Know',
  description: 'A complete guide to getting tested for ADHD as an adult, who can diagnose it, and what happens after diagnosis.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf8f5] to-white">
      <article className="max-w-2xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            How to Get Tested for ADHD as an Adult: What You Need to Know
          </h1>
          <p className="text-slate-600">Coming soon</p>
        </header>

        <div className="prose prose-slate max-w-none text-slate-700">
          <p>
            This article is coming soon. Check back shortly for a comprehensive guide to ADHD testing and diagnosis for adults.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn About ADHD Therapy
          </Link>
        </div>
      </article>
    </main>
  );
}
